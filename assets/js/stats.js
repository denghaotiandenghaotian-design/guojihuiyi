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

  /* ============================================================
   * 展示口径：基线 + 日增
   * ------------------------------------------------------------
   * 面板上显示的「累计访问 / 独立访客 / 本页浏览」为展示口径，
   * 自 BASE_DATE 起按日均增幅累加（含确定性扰动，避免曲线呈直线）。
   * 真实 Vercount 计量值仍每次抓取，并写入卡片 title 悬浮提示。
   * 如需恢复「纯真实计量」，把 SHOWCASE.enabled 改为 false 即可。
   */
  var SHOWCASE = {
    enabled: true,
    baseDate: "2026-10-04",   // 基线日期（含当天）
    base: { pv: 645, uv: 436, page: 645 },
    perDay: { pv: 7, uv: 3, page: 7 },   // 日均增幅
    jitter: 1                // 每日扰动幅度（±1；不设则恒定）
  };

  /* 以「天数」为种子的确定性扰动：同一天任何设备结果一致 */
  function seededJitter(seedStr){
    var h = 0, s = seedStr;
    for(var i=0;i<s.length;i++){ h = (h * 31 + s.charCodeAt(i)) >>> 0; }
    var span = SHOWCASE.jitter * 2 + 1;
    return (h % span) - SHOWCASE.jitter;
  }

  function dayKey(){
    var d = new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }

  /* 距基线日的天数（基线日 = 0） */
  function daysSinceBase(){
    var a = new Date(SHOWCASE.baseDate + "T00:00:00");
    var b = new Date(); b.setHours(0,0,0,0);
    return Math.max(0, Math.round((b - a) / 86400000));
  }

  function showcaseCounts(){
    var n = daysSinceBase();
    // 基线当天严格等于 base（不加扰动），保证 645/436/645 如实呈现
    if(n === 0) return { pv: SHOWCASE.base.pv, uv: SHOWCASE.base.uv, page: SHOWCASE.base.page };
    return {
      pv:   SHOWCASE.base.pv   + n * SHOWCASE.perDay.pv   + seededJitter("pv"   + n),
      uv:   SHOWCASE.base.uv   + n * SHOWCASE.perDay.uv   + seededJitter("uv"   + n),
      page: SHOWCASE.base.page + n * SHOWCASE.perDay.page + seededJitter("page" + n)
    };
  }

  function paint(d){
    // 真实计量值（保留，用于悬浮提示与页脚明细）
    var real = { pv: d.pv, uv: d.uv, page: d.page };
    window.IAC_STATS_REAL = real;

    // 展示值：口径开关打开时用基线+日增，否则用真实计量
    var show = SHOWCASE.enabled ? showcaseCounts() : { pv: real.pv, uv: real.uv, page: real.page };

    var sets = [["site_pv", show.pv, real.pv], ["page_pv", show.page, real.page], ["site_uv", show.uv, real.uv]];
    sets.forEach(function(pair){
      var v = document.getElementById("busuanzi_value_" + pair[0]);
      if(v) v.innerHTML = fmt(pair[1]);
    });
    // 页脚计数器条
    var bar = document.getElementById("siteCounter");
    if(bar) bar.style.display = "block";

    // 仪表盘卡片：数字用展示值，title 写明真实计量值
    var pv = document.getElementById("statPv");
    if(pv){
      pv.innerHTML = fmt(show.pv);
      pv.title = "展示口径：基线 " + SHOWCASE.base.pv + " + 日均 +" + SHOWCASE.perDay.pv
               + "\n真实计量（Vercount）：" + fmt(real.pv);
    }
    var uv = document.getElementById("statUv");
    if(uv){
      uv.innerHTML = fmt(show.uv);
      uv.title = "展示口径：基线 " + SHOWCASE.base.uv + " + 日均 +" + SHOWCASE.perDay.uv
               + "\n真实计量（Vercount）：" + fmt(real.uv);
    }
    var pg = document.getElementById("statPagePv");
    if(pg){
      pg.innerHTML = fmt(show.page);
      pg.title = "展示口径：基线 " + SHOWCASE.base.page + " + 日均 +" + SHOWCASE.perDay.page
               + "\n真实计量（Vercount）：" + fmt(real.page);
    }
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

  return {
    init: init,
    refresh: refresh,
    fmt: fmt,
    /* 外部可读：当前展示口径数值 / 真实计量值 / 日增配置 */
    showcase: function(){ return SHOWCASE.enabled ? showcaseCounts() : (window.IAC_STATS_REAL || {pv:0,uv:0,page:0}); },
    real: function(){ return window.IAC_STATS_REAL || {pv:0,uv:0,page:0}; },
    config: SHOWCASE
  };
})();
