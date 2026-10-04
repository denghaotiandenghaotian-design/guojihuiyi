/* ============================================================
 * 访问统计模块 · iac-stats
 * 数据源：Vercount（events.vercount.one/api/v2/log，JSONP-free POST）
 * 说明：不蒜子官方主域已 502 不可用，改用其平替 Vercount，
 *      DOM id 保持不蒜子同名规范（busuanzi_value_site_pv 等），
 *      失败时静默降级为「—」，不影响站内任何功能。
 * ========================================================== */
var IAC_STATS = (function(){
  var API = "https://events.vercount.one/api/v2/log";
  var CACHE = "iac_stats_cache_v1";
  var COOKIE_PREFIX = "vercount_uv_";
  var WEEK = 31536000;

  /* ---- 访客 cookie：24h 内只计一次 UV ---- */
  function hostKey(){
    var h = location.host || "unknown-host";
    return COOKIE_PREFIX + h.replace(/[^a-zA-Z0-9_-]/g, "_");
  }
  function readCookie(k){
    var parts = document.cookie ? document.cookie.split("; ") : [];
    for(var i=0;i<parts.length;i++){
      if(parts[i].indexOf(k + "=") === 0) return parts[i].substring(k.length+1);
    }
    return null;
  }
  function isNewUv(){ return readCookie(hostKey()) !== "1"; }
  function markUv(){
    try{ document.cookie = hostKey() + "=1; path=/; max-age=" + WEEK + "; samesite=lax"; }catch(e){}
  }

  /* ---- 数值格式化：1234 -> 1,234 ---- */
  function fmt(n){
    if(n === null || n === undefined || isNaN(n)) return "—";
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function pick(raw){
    if(!raw) return null;
    if(raw.status === "success" && raw.data) raw = raw.data;
    else if(raw.status === "error" && raw.data) raw = raw.data;
    return {
      site_pv: Number(raw.site_pv) || 0,
      page_pv: Number(raw.page_pv) || 0,
      site_uv: Number(raw.site_uv) || 0
    };
  }

  function cache(data){
    try{ localStorage.setItem(CACHE, JSON.stringify({d:data, t:Date.now()})); }catch(e){}
  }
  function readCache(){
    try{
      var s = JSON.parse(localStorage.getItem(CACHE) || "null");
      return s && s.d ? s.d : null;
    }catch(e){ return null; }
  }

  /* ---- 拉取并渲染；所有 span 缺省不显示，拿到数据再显示 ---- */
  function refresh(force){
    var cached = readCache();
    // 30 分钟内的缓存直接用，避免每次切页都打接口
    if(!force && cached && cached.pv && Date.now() - cached.t < 30*60*1000){
      paint(cached);
      return;
    }
    var isNew = isNewUv();
    var body = JSON.stringify({ url: location.href, isNewUv: isNew });
    var ctrl = ("AbortController" in window) ? new AbortController() : null;
    var timer = setTimeout(function(){ if(ctrl) ctrl.abort(); }, 8000);

    fetch(API, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: body,
      signal: ctrl ? ctrl.signal : undefined
    }).then(function(r){
      if(!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    }).then(function(raw){
      clearTimeout(timer);
      var d = pick(raw);
      if(d){
        if(isNew) markUv();
        cache({pv:d.site_pv, page:d.page_pv, uv:d.site_uv});
        paint({pv:d.site_pv, page:d.page_pv, uv:d.site_uv});
      }
    })["catch"](function(){
      clearTimeout(timer);
      var c = readCache();
      if(c) paint(c);
    });
  }

  function paint(d){
    var sets = [["site_pv", d.pv], ["page_pv", d.page], ["site_uv", d.uv]];
    sets.forEach(function(pair){
      var v = document.getElementById("busuanzi_value_" + pair[0]);
      if(v) v.innerHTML = fmt(pair[1]);
    });
    // 页脚计数器条
    var bar = document.getElementById("siteCounter");
    if(bar) bar.style.display = "block";
    // 仪表盘卡片
    var pv = document.getElementById("statPv");
    if(pv) pv.innerHTML = fmt(d.pv);
    var uv = document.getElementById("statUv");
    if(uv) uv.innerHTML = fmt(d.uv);
    var pg = document.getElementById("statPagePv");
    if(pg) pg.innerHTML = fmt(d.page);
    var host = document.getElementById("statUpdated");
    if(host) host.textContent = "更新于 " + new Date().toLocaleTimeString("zh-CN", {hour:"2-digit", minute:"2-digit"});
  }

  function init(){
    // 页脚计数器或仪表盘卡片任一存在即启动
    if(!document.getElementById("busuanzi_value_site_pv") && !document.getElementById("statPv")) return;
    refresh(false);
    // SPA 路由切换时刷新，保证回访实时
    document.addEventListener("click", function(e){
      var a = e.target && e.target.closest ? e.target.closest("a") : null;
      if(a) setTimeout(function(){ refresh(true); }, 400);
    });
  }

  return { init: init, refresh: refresh, fmt: fmt };
})();

/* Cloudflare Web Analytics：把 token 填在下方即可生效（留空则不加载） */
var IAC_CF_TOKEN = "";   // 例："cfa-xxxxxxxxxxxx"
if(IAC_CF_TOKEN){
  (function(){
    var s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", JSON.stringify({ token: IAC_CF_TOKEN }));
    document.head.appendChild(s);
  })();
}
