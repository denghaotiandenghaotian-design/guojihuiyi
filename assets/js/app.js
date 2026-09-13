/* ============================================================
 * 国际学术会议英语与跨文化交流 · 学习系统主控制器
 * 功能：仪表盘 / 知识点学习 / 思维导图 / 艾宾浩斯复习 /
 *       20套模拟卷(自动判分+解析) / 网络真题 / 错题本
 * ============================================================ */
(function(){
  "use strict";
  const LS_KEY="iac_study_v1";
  const INTERVALS=[1,2,4,7,15,30]; // 艾宾浩斯间隔(天)
  const DAY=86400000;
  const AUTO_TYPES=["single","multiple","tf","fill"];

  /* ---------- 状态 ---------- */
  let state=loadState();
  function loadState(){
    try{const s=localStorage.getItem(LS_KEY);if(s)return JSON.parse(s);}catch(e){}
    return {units:{},wrong:{},examLog:[]};
  }
  function save(){try{localStorage.setItem(LS_KEY,JSON.stringify(state));}catch(e){}}
  function uid(id){return state.units[id]||(state.units[id]={learned:false,stage:0,nextDue:0});}

  /* ---------- 工具 ---------- */
  const $=s=>document.querySelector(s);
  const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};
  function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),1900);}
  function esc(s){return (s==null?"":String(s)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  function norm(s){return (s||"").toString().trim().toLowerCase().replace(/[.,;:!?。，；：！？]/g,"");}
  function fmtDate(ts){const d=new Date(ts);return `${d.getMonth()+1}/${d.getDate()}`;}
  function kpById(id){return KNOWLEDGE.find(k=>k.id===id);}
  function unitQuestions(id){return QUESTIONS.filter(q=>q.unit===id);}
  function allExercises(){const a=[];KNOWLEDGE.forEach(k=>{if(k.hasPage&&EXERCISES[k.id])EXERCISES[k.id].forEach(e=>a.push({unit:k,e}));});return a;}
  function renderBilingual(segs,parent){segs.forEach(s=>{const row=el("div","bi-row");const en=el("div","bi-en",'<span class="bi-tag">EN</span><div class="bi-t">'+s.en+'</div>');const zh=el("div","bi-zh",'<span class="bi-tag zh">译</span><div class="bi-t">'+s.zh+'</div>');row.appendChild(en);row.appendChild(zh);parent.appendChild(row);});}
  function autoQuestions(){return QUESTIONS.filter(q=>AUTO_TYPES.includes(q.type));}
  const TYPE_LABEL={single:"单选",multiple:"多选",tf:"判断",fill:"填空",short:"简答(自评)",writing:"写作(自评)"};

  /* ---------- 复习引擎（艾宾浩斯） ---------- */
  function markLearned(id){
    const u=uid(id);
    if(!u.learned){u.learned=true;u.stage=0;u.nextDue=Date.now()+INTERVALS[0]*DAY;save();toast("已加入复习计划 ✓");}
    else{toast("已在复习计划中");}
  }
  function isDue(id){const u=uid(id);return u.learned&&u.nextDue<=Date.now();}
  function markReviewed(id){
    const u=uid(id);if(!u.learned)return;
    u.stage=Math.min(u.stage+1,INTERVALS.length-1);
    u.nextDue=Date.now()+INTERVALS[u.stage]*DAY;save();toast("复习完成，下次安排已更新 ✓");
  }
  function dueUnits(){return KNOWLEDGE.filter(k=>k.hasPage&&isDue(k.id));}
  function learnedCount(){return KNOWLEDGE.filter(k=>k.hasPage&&state.units[k.id]&&state.units[k.id].learned).length;}
  function pageUnits(){return KNOWLEDGE.filter(k=>k.hasPage);}

  /* ---------- 题目渲染与判分 ---------- */
  function renderQuestion(q,idx,answers){
    const wrap=el("div","q");
    const meta=el("div","qmeta");
    meta.innerHTML=`<span>#${idx}</span><span class="chip">${TYPE_LABEL[q.type]}</span>`+
      `<span>难度 ${"★".repeat(q.difficulty||1)}</span>`+
      (q.source==="real"?`<span class="chip real">真题·${esc(q.tag||"网络")}</span>`:"");
    wrap.appendChild(meta);
    wrap.appendChild(el("div","qstem",esc(q.stem)));

    if(q.type==="fill"){
      const inp=el("input","fill-input");inp.placeholder="输入答案…";inp.dataset.qid=q.id;
      if(answers&&answers[q.id]!=null)inp.value=answers[q.id];
      wrap.appendChild(inp);
    } else if(q.type==="short"||q.type==="writing"){
      const ta=el("textarea","fill-input");ta.rows=4;ta.placeholder="在此作答（自评）…";ta.dataset.qid=q.id;
      if(answers&&answers[q.id]!=null)ta.value=answers[q.id];
      wrap.appendChild(ta);
      const btn=el("button","btn sm","显示参考答案");
      const ans=el("div","explain");ans.innerHTML=`<b>参考答案 / 评分要点：</b><br>${esc(q.explain)}`;
      btn.addEventListener("click",()=>{ans.classList.toggle("show");});
      wrap.appendChild(btn);wrap.appendChild(ans);
    } else {
      const multi=(q.type==="multiple");
      const isTF=(q.type==="tf");
      const opts=q.options.map((o,i)=>{
        const letter=isTF?o:String.fromCharCode(65+i);
        const row=el("div","opt");row.dataset.qid=q.id;row.dataset.val=letter;
        row.innerHTML=`<span class="mk">${isTF?"":letter}</span><span>${esc(o)}</span>`;
        return row;
      });
      opts.forEach(row=>wrap.appendChild(row));
      wrap._multi=multi;
    }
    return wrap;
  }

  function gradeQuestion(q,userVal){
    if(q.type==="multiple"){
      const a=(userVal||[]).slice().sort().join(",");
      const b=(q.answer||[]).slice().sort().join(",");
      return a===b;
    }
    if(q.type==="fill"){
      const ans=String(q.answer).split("|").map(norm);
      return ans.includes(norm(userVal));
    }
    return norm(userVal)===norm(q.answer);
  }
  function optText(q,letter){
    if(q.type==="tf")return letter;
    const idx=letter.charCodeAt(0)-65;
    return q.options[idx]!=null?q.options[idx]:letter;
  }
  function showExplain(qel,q,user,ok){
    let ex=qel.querySelector(".explain");if(!ex){ex=el("div","explain");qel.appendChild(ex);}
    const head=(ok?'<b style="color:#10a37f">✓ 正确</b>':(q.type==="short"||q.type==="writing"?'':'<b style="color:#e5484d">✗ 待加强</b>'));
    let ansText;
    if(Array.isArray(q.answer)) ansText=q.answer.map(l=>optText(q,l)).join(" / ");
    else if(q.type==="single"||q.type==="tf") ansText=optText(q,q.answer);
    else ansText=q.answer;
    ex.innerHTML=`${head}<br><span>参考答案：<b>${esc(ansText)}</b></span><br>${esc(q.explain)}`;
    ex.classList.add("show");
  }

  function attachChoiceBehavior(container,answers){
    container.addEventListener("click",e=>{
      const row=e.target.closest(".opt");if(!row)return;
      const qid=row.dataset.qid;const val=row.dataset.val;
      const multi=row.parentElement._multi;
      if(multi){
        row.classList.toggle("sel");
        const cur=(answers[qid]||[]);
        if(cur.includes(val))answers[qid]=cur.filter(v=>v!==val);
        else answers[qid]=(cur.concat(val));
      }else{
        row.parentElement.querySelectorAll(".opt").forEach(o=>o.classList.remove("sel"));
        row.classList.add("sel");answers[qid]=val;
      }
    });
  }

  /* ---------- 测验/考试引擎 ---------- */
  function startQuiz(qids,opts){
    const c=opts.container||$("#content");
    const answers={};
    c.innerHTML="";
    const head=el("div","kp-head");
    head.innerHTML=`<div class="tag">${esc(opts.title)}</div><h2>${esc(opts.subtitle||"")}</h2>`;
    c.appendChild(head);
    const list=el("div");c.appendChild(list);
    qids.forEach((qid,i)=>{
      const q=QUESTIONS.find(x=>x.id===qid);if(!q)return;
      list.appendChild(renderQuestion(q,i+1,answers));
    });
    attachChoiceBehavior(list,answers);

    if(opts.readOnly){
      const bar=el("div","btn-row");
      const back=el("button","btn","← 返回");back.addEventListener("click",opts.back||(()=>navigate("dashboard")));
      bar.appendChild(back);c.appendChild(bar);
      return;
    }

    if(opts.instant){
      // 单选/判断：点击即判
      list.addEventListener("click",e=>{
        const row=e.target.closest(".opt");if(!row)return;
        const qel=row.parentElement;if(qel._multi)return;
        const qid=qel.querySelector(".opt").dataset.qid;
        const q=QUESTIONS.find(x=>x.id===qid);const user=answers[qid];const ok=gradeQuestion(q,user);
        qel.querySelectorAll(".opt").forEach(o=>{
          const letter=o.dataset.val;
          if(letter===String(q.answer))o.classList.add("correct");
          else if(letter===user&&!ok)o.classList.add("wrong");
        });
        showExplain(qel,q,user,ok);
      });
      // 多选：每题加“检查”按钮
      list.querySelectorAll(".q").forEach(qel=>{
        if(!qel._multi)return;
        const btn=el("button","btn sm","检查此题");btn.style.marginTop="4px";
        btn.addEventListener("click",()=>{
          const qid=qel.querySelector(".opt").dataset.qid;
          const q=QUESTIONS.find(x=>x.id===qid);const user=answers[qid]||[];const ok=gradeQuestion(q,user);
          qel.querySelectorAll(".opt").forEach(o=>{
            const letter=o.dataset.val;
            if(q.answer.includes(letter))o.classList.add("correct");
            else if(user.includes(letter)&&!ok)o.classList.add("wrong");
          });
          showExplain(qel,q,user,ok);
        });
        qel.appendChild(btn);
      });
      // 填空：失焦即判
      list.querySelectorAll(".fill-input").forEach(inp=>{
        if(inp.tagName==="TEXTAREA")return;
        inp.addEventListener("blur",()=>{
          const qid=inp.dataset.qid;const q=QUESTIONS.find(x=>x.id===qid);
          const ok=gradeQuestion(q,inp.value);showExplain(qelOf(inp),q,inp.value,ok,true);
        });
      });
      const bar=el("div","btn-row");
      const back=el("button","btn","← 返回");back.addEventListener("click",opts.back);
      bar.appendChild(back);c.appendChild(bar);
      return;
    }

    // 考试模式：提交后统一判分
    const bar=el("div","btn-row");
    const submit=el("button","btn primary","提交并查看解析");
    const back=el("button","btn","← 返回");back.addEventListener("click",opts.back);
    bar.appendChild(submit);bar.appendChild(back);c.appendChild(bar);
    submit.addEventListener("click",()=>{
      let correct=0;let total=0;const wrongIds=[];
      const rows=list.children;
      for(let i=0;i<rows.length;i++){
        const qel=rows[i];const qid=qel.querySelector(".opt,.fill-input")?.dataset.qid;
        const q=QUESTIONS.find(x=>x.id===qid);if(!q)continue;
        if(q.type==="short"||q.type==="writing"){
          const ta=qel.querySelector("textarea");const v=ta?ta.value:"";
          if(opts.saveWrong&&(!v||!v.trim()))wrongIds.push(qid);
          continue;
        }
        total++;
        let user=qel.querySelector(".fill-input")?qel.querySelector(".fill-input").value:answers[qid];
        const ok=gradeQuestion(q,user);
        if(ok)correct++;else wrongIds.push(qid);
        qel.querySelectorAll(".opt").forEach(o=>{
          const letter=o.dataset.val;
          if(letter===String(q.answer))o.classList.add("correct");
          else if(letter===user&&!ok)o.classList.add("wrong");
        });
        showExplain(qel,q,user,ok);
      }
      const score=Math.round(correct/total*100);
      if(opts.saveWrong){
        wrongIds.forEach(qid=>{const w=state.wrong[qid]||(state.wrong[qid]={count:0,last:0});w.count++;w.last=Date.now();});
        state.examLog.push({title:opts.title,score,correct,total,date:Date.now(),wrong:wrongIds});
        save();
      }
      if(opts.reviewItems)opts.reviewItems.forEach(markReviewed);
      const sum=el("div","card");sum.style.marginBottom="16px";
      sum.innerHTML=`<div class="result-summary"><div class="score-big">${score}</div>`+
        `<div><div class="exam-meta">答对 <b>${correct}</b> / 共 ${total} 题</div>`+
        `<div class="exam-meta">错误 ${wrongIds.length} 题 · ${esc(opts.title)}</div></div></div>`;
      c.insertBefore(sum,head.nextSibling);
      toast(`得分 ${score} 分`);
      submit.disabled=true;submit.textContent="已提交";
      c.appendChild(el("div","",`<p class="exam-meta" style="margin-top:10px">提示：错题已自动归集至「错题本」。</p>`));
    });
  }
  function qelOf(node){return node.closest(".q");}

  /* ---------- 视图：仪表盘 ---------- */
  function viewDashboard(){
    const c=$("#content");c.innerHTML="";
    const total=pageUnits().length, learned=learnedCount(), due=dueUnits().length;
    const exams=state.examLog.length, wrongN=Object.keys(state.wrong).length;
    const hero=el("div","hero");
    hero.innerHTML=`<h2>国际学术会议英语与跨文化交流</h2>
      <p>基于骆洪《国际学术会议英语与跨文化交流》（云南大学出版社·研究生教学用书）构建的配套学习系统：覆盖 Part I 会议英语实务与 Part II 跨文化交际全部考点，配套思维导图、艾宾浩斯间隔复习与 20 套自动判分模拟卷。</p>`;
    const stats=el("div","stat-row");
    stats.innerHTML=`
      <div class="stat"><div class="n">${total}</div><div class="l">考点总数</div></div>
      <div class="stat"><div class="n">${learned}</div><div class="l">已加入复习</div></div>
      <div class="stat"><div class="n" style="color:${due?'#e0a106':'#10a37f'}">${due}</div><div class="l">今日待复习</div></div>
      <div class="stat"><div class="n">${exams}</div><div class="l">已完成模考</div></div>`;
    hero.appendChild(stats);c.appendChild(hero);

    const rt=el("div","section-title");rt.innerHTML=`<span class="bar"></span>今日复习计划`;c.appendChild(rt);
    if(due>0){
      const box=el("div","card");
      box.innerHTML=`<p>你有 <b>${due}</b> 个考点需要在今天复习（艾宾浩斯间隔复习）。<br>复习比学习新内容更能巩固长期记忆。</p>`;
      const b=el("button","btn primary","开始今日复习 →");b.addEventListener("click",startDailyReview);
      box.appendChild(b);c.appendChild(box);
    }else{
      const box=el("div","card");box.innerHTML=`<p class="empty" style="padding:18px">🎉 今天没有待复习的考点。去 <a href="#" id="goK">知识点</a> 学习新内容吧！</p>`;
      box.querySelector("#goK").addEventListener("click",e=>{e.preventDefault();navigate("knowledge");});
      c.appendChild(box);
    }

    const qt=el("div","section-title");qt.innerHTML=`<span class="bar"></span>快速入口`;c.appendChild(qt);
    const grid=el("div","grid cols-3");
    [["知识点学习","knowledge","📚"],["思维导图","mindmap","🧠"],["课本习题","exercises","📖"],["双语对照","bilingual","📜"],["主观题","subjective","✍️"],["记忆背诵","memory","🔑"],["全文阅读","fulltext","📄"],["模拟题库","mock","📝"],["网络真题","real","🌐"],["错题本","wrong","⚠️"],["复习计划","review","🔁"]].forEach(([t,v,ic])=>{
      const card=el("div","unit-card");card.style.cursor="pointer";
      card.innerHTML=`<div class="uc-top"><div class="uc-title">${ic} ${t}</div></div>`;
      card.addEventListener("click",()=>navigate(v));grid.appendChild(card);
    });
    c.appendChild(grid);

    if(exams>0){
      const et=el("div","section-title");et.innerHTML=`<span class="bar"></span>最近模考成绩`;c.appendChild(et);
      const box=el("div","card");
      const last=state.examLog.slice(-5).reverse();
      box.innerHTML=last.map(e=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee">
        <span>${esc(e.title)}</span><span style="color:#10a37f;font-weight:700">${e.score}分 · ${e.correct}/${e.total}</span></div>`).join("");
      c.appendChild(box);
    }
  }

  /* ---------- 视图：知识点列表 ---------- */
  function viewKnowledge(){
    const c=$("#content");c.innerHTML="";
    [["p1","Part I 国际学术会议英语"],["p2","Part II 跨文化交际与国际学术会议"]].forEach(([pid,pt])=>{
      const t=el("div","section-title");t.innerHTML=`<span class="bar"></span>${esc(pt)}`;c.appendChild(t);
      const grid=el("div","grid cols-3");
      KNOWLEDGE.filter(k=>k.parent===pid&&k.hasPage).forEach(k=>{
        const u=state.units[k.id];const done=u&&u.learned;
        const card=el("div","unit-card");card.style.cursor="pointer";
        card.innerHTML=`<div class="uc-top"><div class="uc-id">${esc((k.title.split(" ")[0]+" "+(k.title.split(" ")[1]||"")).trim())}</div>
          <span class="dot ${done?'done':'todo'}"></span></div>
          <div class="uc-title">${esc(k.cn)}</div>
          <div class="uc-sum">${esc(k.summary)}</div>
          <div style="margin-top:8px">${k.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div>`;
        card.addEventListener("click",()=>navigate("kp",k.id));grid.appendChild(card);
      });
      c.appendChild(grid);
    });
  }

  /* ---------- 视图：知识点学习页 ---------- */
  function viewKP(id){
    const k=kpById(id);if(!k){navigate("knowledge");return;}
    const c=$("#content");c.innerHTML="";
    const u=uid(id);
    const head=el("div","kp-head");
    head.innerHTML=`<div class="tag">${esc(k.title)}</div><h2>${esc(k.cn)}</h2>
      <div class="sub">${esc(k.summary)} · 考查方向：${k.tags.map(esc).join("、")}</div>`;
    c.appendChild(head);

    const bar=el("div","btn-row");
    const learnBtn=el("button","btn primary",u.learned?"✓ 已在复习计划（点击复习）":"标记为已学 / 加入复习");
    learnBtn.addEventListener("click",()=>{if(u.learned)markReviewed(id);else markLearned(id);viewKP(id);renderNav();});
    const mmBtn=el("button","btn","🧠 看思维导图");mmBtn.addEventListener("click",()=>navigate("mindmap"));
    bar.appendChild(learnBtn);bar.appendChild(mmBtn);c.appendChild(bar);

    const body=el("div","kp-content card");
    k.content.forEach(sec=>{body.appendChild(el("h4",null,esc(sec.h)));body.appendChild(el("div",null,sec.body));});
    /* 英文原文（教材配套英文 · 中英对照） */
    const enSec=EN_ORIGINALS&&EN_ORIGINALS[id];
    if(enSec&&enSec.length){
      body.appendChild(el("h4","en-head","英文原文 · 双语对照 (English ↔ 中文)"));
      const enNote=el("div","en-note");enNote.textContent="原文（英文）与译文（中文）逐段 / 逐条对齐、左右并列；窄屏自动上下堆叠，方便对照阅读。";
      body.appendChild(enNote);
      enSec.forEach(sec=>{
        if(sec.h) body.appendChild(el("h5","en-sub",esc(sec.h)));
        if(sec.segs&&sec.segs.length) renderBilingual(sec.segs,body);
        else if(sec.body) body.appendChild(el("div","en-orig",sec.body));
      });
    }

    /* 课文习题已独立为专门模块「课本习题」——与正文完全分离，此处仅保留入口 */
    const exSec=EXERCISES&&EXERCISES[id];
    if(exSec&&exSec.length){
      const exEntry=el("div","ex-entry");
      exEntry.innerHTML=`<span class="chip ex-type">课本习题</span><div class="ex-entry-t">本单元含 <b>${exSec.length}</b> 道教材式习题（问答 / 翻译 / 写作 / 讨论 / 改错），已独立为专门模块，与课文正文完全分离。</div>`;
      const exBtn=el("button","btn sm","前往课本习题模块 →");
      exBtn.addEventListener("click",()=>navigate("exercises",id));
      exEntry.appendChild(exBtn);body.appendChild(exEntry);
    }

    if(k.templates&&k.templates.length){
      body.appendChild(el("h4",null,"常用句型 / 模板"));
      k.templates.forEach(t=>{const b=el("div","tpl-box");b.innerHTML=`<div class="lab">${esc(t.label)}</div><div class="txt">${esc(t.text)}</div>`;body.appendChild(b);});
    }
    if(k.pitfalls&&k.pitfalls.length){
      body.appendChild(el("h4",null,"常见易错点"));
      k.pitfalls.forEach(p=>{const b=el("div","pitfall");b.innerHTML=`<b>注意：</b>${esc(p)}`;body.appendChild(b);});
    }
    c.appendChild(body);

    const qs=unitQuestions(id);
    if(qs.length){
      const et=el("div","section-title");et.innerHTML=`<span class="bar"></span>配套练习（${qs.length} 题·即时反馈）`;c.appendChild(et);
      const pcont=el("div");c.appendChild(pcont);
      startQuiz(qs.map(q=>q.id),{title:"考点练习 · "+k.cn,instant:true,subtitle:"完成后可返回上方复习要点",container:pcont,back:()=>viewKP(id)});
    }
  }

  /* ---------- 视图：思维导图 ---------- */
  function viewMindmap(){
    const c=$("#content");c.innerHTML="";
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">知识全景</div><h2>考点思维导图</h2>
      <div class="sub">点击任意节点可跳转至对应考点学习页；点击节点右侧 ± 可折叠/展开分支。</div>`;
    c.appendChild(t);
    const wrap=el("div","mm-wrap");
    const host=el("div");wrap.appendChild(host);c.appendChild(wrap);
    renderMindmap(host,(id)=>navigate("kp",id));
  }

  /* ---------- 视图：复习计划 ---------- */
  function viewReview(){
    const c=$("#content");c.innerHTML="";
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">艾宾浩斯遗忘曲线</div><h2>间隔复习计划</h2>
      <div class="sub">系统按 1→2→4→7→15→30 天的间隔为你安排复习。每完成一次复习，下一节点自动顺延。</div>`;
    c.appendChild(t);

    const due=dueUnits();
    const rt=el("div","section-title");rt.innerHTML=`<span class="bar"></span>今日待复习（${due.length}）`;c.appendChild(rt);
    if(due.length){
      due.forEach(k=>{
        const u=state.units[k.id];
        const card=el("div","due-card");
        card.innerHTML=`<div class="when">今天</div><div style="flex:1"><b>${esc(k.cn)}</b><div class="exam-meta">${esc(k.title)} · 第 ${u.stage+1} 次复习</div></div>`;
        const b=el("button","btn primary sm","复习");
        b.addEventListener("click",()=>{
          const qs=unitQuestions(k.id).map(q=>q.id);
          if(qs.length)startQuiz(qs,{title:"复习 · "+k.cn,instant:true,subtitle:"完成后自动更新复习节点",back:()=>viewReview(),reviewItems:[k.id]});
          else{markReviewed(k.id);viewReview();}
        });
        card.appendChild(b);c.appendChild(card);
      });
      const big=el("button","btn primary","开始今日全部复习 →");big.style.margin="12px 0";
      big.addEventListener("click",startDailyReview);c.appendChild(big);
    }else{
      c.appendChild(el("div","card",`<p class="empty" style="padding:18px">暂无待复习考点。学习并标记考点后，这里会出现复习提醒。</p>`));
    }

    const at=el("div","section-title");at.innerHTML=`<span class="bar"></span>全部考点复习状态`;c.appendChild(at);
    const box=el("div","card");
    pageUnits().forEach(k=>{
      const u=state.units[k.id];const learned=u&&u.learned;
      const row=el("div");row.style.cssText="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #f0f0f2";
      row.innerHTML=`<span><span class="dot ${learned?'done':'todo'}" style="margin-right:8px"></span>${esc(k.cn)}</span>
        <span class="exam-meta">${learned?('下次复习 '+fmtDate(u.nextDue)+' · 第'+(u.stage+1)+'次'):'未学习'}</span>`;
      box.appendChild(row);
    });
    c.appendChild(box);
  }
  function startDailyReview(){
    const due=dueUnits();
    if(!due.length){toast("今天没有待复习考点");return;}
    const qids=[];
    due.forEach(k=>{const qs=unitQuestions(k.id);for(let i=0;i<Math.min(3,qs.length);i++)qids.push(qs[i].id);});
    if(!qids.length){due.forEach(k=>markReviewed(k.id));viewReview();return;}
    startQuiz(qids,{title:"今日复习",instant:true,subtitle:`${due.length} 个考点 · 完成后更新复习节点`,back:()=>viewReview(),reviewItems:due.map(k=>k.id)});
  }

  /* ---------- 视图：模拟题库（20套） ---------- */
  function buildMockExam(n){
    let seed=n*1000+7;
    function rnd(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}
    const auto=autoQuestions();
    const byUnit={};auto.forEach(q=>{(byUnit[q.unit]=byUnit[q.unit]||[]).push(q);});
    const units=Object.keys(byUnit);
    const picked=[];const used=new Set();const N=30;
    for(let i=0;i<N;i++){
      const u=units[i%units.length];const pool=byUnit[u];
      let tries=0,q;do{q=pool[Math.floor(rnd()*pool.length)];tries++;}while(used.has(q.id)&&tries<20);
      if(used.has(q.id))continue;used.add(q.id);picked.push(q.id);
    }
    /* 主观题（简答 / 论述 / 分析 / 写作）：每套固定 5 道，跨单元轮转，聚焦重点且开放作答 */
    const subj=QUESTIONS.filter(q=>q.type==="short"||q.type==="writing");
    const subjByUnit={};subj.forEach(q=>{(subjByUnit[q.unit]=subjByUnit[q.unit]||[]).push(q);});
    const unitsS=Object.keys(subjByUnit);
    for(let j=0;j<5;j++){
      const u=unitsS[(n*5+j)%unitsS.length];const pool=subjByUnit[u];
      let q,p2=pool.filter(x=>!used.has(x.id)),tries=0;
      do{q=p2[Math.floor(rnd()*p2.length)];tries++;}while(!q&&tries<8);
      if(q){used.add(q.id);picked.push(q.id);}
    }
    return picked;
  }
  function viewMock(){
    const c=$("#content");c.innerHTML="";
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">20 套完整模拟试卷</div><h2>模拟题库</h2>
      <div class="sub">每套试卷由系统从题库按种子生成（稳定、彼此不同）：30 道客观题（单选/多选/判断/填空）+ 5 道主观题（简答/论述/分析/写作），提交后客观题自动判分并给出逐题解析，主观题可点开参考答案自评。</div>`;
    c.appendChild(t);
    const grid=el("div","grid cols-3");
    for(let i=1;i<=20;i++){
      const card=el("div","unit-card");card.style.cursor="pointer";
      const log=state.examLog.filter(e=>e.title==="模拟试卷 "+i).slice(-1)[0];
      card.innerHTML=`<div class="uc-top"><div class="uc-id">EXAM ${String(i).padStart(2,'0')}</div>
        ${log?`<span class="chip" style="background:#e9f8f0;color:#10a37f">${log.score}分</span>`:""}</div>
        <div class="uc-title">模拟试卷 ${i}</div>
        <div class="uc-sum">35 题 · 客观 30 + 主观 5（简答/论述/分析/写作）</div>`;
      card.addEventListener("click",()=>{
        const qids=buildMockExam(i);
        startQuiz(qids,{title:"模拟试卷 "+i,subtitle:"35 题（客观 30 + 主观 5）· 限时自测",back:()=>viewMock(),saveWrong:true});
      });
      grid.appendChild(card);
    }
    c.appendChild(grid);
  }

  /* ---------- 视图：网络真题 ---------- */
  function viewReal(){
    const c=$("#content");c.innerHTML="";
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">真题整合</div><h2>网络真题 / 练习</h2>
      <div class="sub">以下题目搜集自网络各论坛与文库渠道（夸克课后答案、百度文库高二练习、人人文库跨文化测试等），纳入本系统练习与模考体系，并标注来源。</div>`;
    c.appendChild(t);
    const reals=QUESTIONS.filter(q=>q.source==="real");
    const allBtn=el("button","btn primary","📝 全部真题练习（即时反馈）");allBtn.style.margin="0 0 14px";
    allBtn.addEventListener("click",()=>startQuiz(reals.map(q=>q.id),{title:"网络真题练习",instant:true,subtitle:reals.length+" 题",back:()=>viewReal()}));
    c.appendChild(allBtn);
    const byTag={};
    reals.forEach(q=>{const tg=q.tag||"其他";(byTag[tg]=byTag[tg]||[]).push(q);});
    Object.keys(byTag).forEach(tg=>{
      const sec=el("div","section-title");sec.innerHTML=`<span class="bar"></span>${esc(tg)}（${byTag[tg].length}）`;c.appendChild(sec);
      const box=el("div","card");
      box.innerHTML=byTag[tg].map(q=>`<div style="padding:6px 0;border-bottom:1px solid #f0f0f2"><span class="chip">${TYPE_LABEL[q.type]}</span> ${esc(q.stem.slice(0,48))}…</div>`).join("");
      const b=el("button","btn sm","练习本组");
      b.addEventListener("click",()=>startQuiz(byTag[tg].map(q=>q.id),{title:"真题 · "+tg,instant:true,subtitle:byTag[tg].length+" 题",back:()=>viewReal()}));
      box.appendChild(b);c.appendChild(box);
    });
    if(!reals.length)c.appendChild(el("div","card",`<p class="empty">暂未整合网络真题。</p>`));
  }

  /* ---------- 视图：错题本 ---------- */
  function viewWrong(){
    const c=$("#content");c.innerHTML="";
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">艾宾浩斯 + 模考沉淀</div><h2>我的错题本</h2>
      <div class="sub">模考与练习中答错的题目会自动归集于此，可一键重练。</div>`;
    c.appendChild(t);
    const ids=Object.keys(state.wrong);
    if(!ids.length){c.appendChild(el("div","card",`<p class="empty" style="padding:24px">还没有错题。完成一套模拟卷试试吧！</p>`));return;}
    const practice=el("button","btn primary","🔁 重练全部错题");practice.style.margin="0 0 14px";
    practice.addEventListener("click",()=>startQuiz(ids,{title:"错题重练",subtitle:ids.length+" 题",back:()=>viewWrong(),saveWrong:true}));
    c.appendChild(practice);
    const list=el("div");c.appendChild(list);
    ids.forEach((qid,i)=>{
      const q=QUESTIONS.find(x=>x.id===qid);if(!q)return;
      list.appendChild(renderQuestion(q,i+1,{}));
    });
  }

  /* ---------- 视图：双语对照（原文同步翻译） ---------- */
  function viewBilingual(param){
    const c=$("#content");c.innerHTML="";
    if(param&&EN_ORIGINALS[param]&&EN_ORIGINALS[param].length){
      const k=kpById(param);
      const t=el("div","kp-head");t.innerHTML=`<div class="tag">双语对照</div><h2>${esc(k?k.cn:param)}</h2>
        <div class="sub">原文（英文）与译文（中文）逐段 / 逐条对齐、左右并列。窄屏自动上下堆叠，方便对照阅读。</div>`;c.appendChild(t);
      const back=el("button","btn","← 返回双语总览");back.style.margin="0 0 14px";
      back.addEventListener("click",()=>viewBilingual());c.appendChild(back);
      EN_ORIGINALS[param].forEach(sec=>{
        const sh=el("div","section-sub");sh.textContent=sec.h||"";c.appendChild(sh);
        if(sec.segs&&sec.segs.length) renderBilingual(sec.segs,c);
        else if(sec.body) c.appendChild(el("div","en-orig",sec.body));
      });
      return;
    }
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">双语对照</div><h2>原文同步翻译 · 阅读模式</h2>
      <div class="sub">左侧为教材英文原文，右侧为对应中文译文，逐段 / 逐条 1:1 对齐、顺序一致、不遗漏任何段落。可点击单元单独阅读，或通读全部。</div>`;c.appendChild(t);
    const allBtn=el("button","btn primary","📖 通读全部（按单元顺序）");allBtn.style.margin="0 0 14px";
    allBtn.addEventListener("click",()=>{
      c.innerHTML="";const tt=el("div","kp-head");tt.innerHTML=`<div class="tag">双语对照</div><h2>通读全部原文</h2><div class="sub">按 Part I → Part II 单元顺序连续呈现，原文与译文逐段并列。</div>`;c.appendChild(tt);
      KNOWLEDGE.filter(k=>k.hasPage&&EN_ORIGINALS[k.id]).forEach(k=>{
        const sh=el("div","section-title");sh.innerHTML=`<span class="bar"></span>${esc(k.cn)}`;c.appendChild(sh);
        EN_ORIGINALS[k.id].forEach(sec=>{const ss=el("div","section-sub");ss.textContent=sec.h||"";c.appendChild(ss);if(sec.segs)renderBilingual(sec.segs,c);});
      });
    });
    c.appendChild(allBtn);
    [["p1","Part I 国际学术会议英语"],["p2","Part II 跨文化交际与国际学术会议"]].forEach(([pid,pt])=>{
      const sec=el("div","section-title");sec.innerHTML=`<span class="bar"></span>${esc(pt)}`;c.appendChild(sec);
      const grid=el("div","grid cols-3");
      KNOWLEDGE.filter(k=>k.parent===pid&&k.hasPage&&EN_ORIGINALS[k.id]&&EN_ORIGINALS[k.id].length).forEach(k=>{
        const card=el("div","unit-card");card.style.cursor="pointer";
        const n=EN_ORIGINALS[k.id].reduce((a,s)=>a+(s.segs?s.segs.length:1),0);
        card.innerHTML=`<div class="uc-top"><div class="uc-id">${esc((k.title.split(" ")[0]+" "+(k.title.split(" ")[1]||"")).trim())}</div><span class="chip">${n} 段对照</span></div><div class="uc-title">${esc(k.cn)}</div>`;
        card.addEventListener("click",()=>viewBilingual(k.id));grid.appendChild(card);
      });
      c.appendChild(grid);
    });
  }

  /* ---------- 视图：课本习题与解析（独立模块，与课文正文完全分离） ---------- */
  let exerciseViewMode="unit", exerciseTypeFilter="all";
  function viewExercises(param){
    const c=$("#content");c.innerHTML="";
    if(param&&EXERCISES[param]&&EXERCISES[param].length){
      const k=kpById(param);
      const t=el("div","kp-head");t.innerHTML=`<div class="tag">课本习题</div><h2>${esc(k?k.cn:param)}</h2>
        <div class="sub">教材式课后练习 / 思考题，逐题标准答案与关键解析。本模块与课文正文完全分离。</div>`;c.appendChild(t);
      const back=el("button","btn","← 返回习题总览");back.style.margin="0 0 14px";
      back.addEventListener("click",()=>viewExercises());c.appendChild(back);
      EXERCISES[param].forEach(e=>{
        const card=el("div","ex-card");card.style.marginBottom="12px";
        card.innerHTML=`<span class="chip ex-type">${esc(e.type)}</span><div class="ex-stem">${esc(e.stem)}</div>`;
        const btn=el("button","btn sm","显示答案与解析");
        const ans=el("div","ex-ans");
        ans.innerHTML=`<b>参考答案：</b>${esc(e.answer).replace(/\n/g,"<br>")}<br><b>关键解析：</b>${esc(e.analysis)}`;
        btn.addEventListener("click",()=>ans.classList.toggle("show"));
        card.appendChild(btn);card.appendChild(ans);c.appendChild(card);
      });
      return;
    }
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">课本习题与解析</div><h2>教材式练习总览</h2>
      <div class="sub">按单元复原教材典型习题（问答 / 翻译 / 写作 / 讨论 / 改错）。提供两种归类方式：<b>按章节</b> 浏览各单元习题；<b>按题型</b> 将全书题目按类型归类并可筛选。</div>`;
    c.appendChild(t);

    /* 归类方式切换：按章节 / 按题型 */
    const modeBar=el("div","ex-modebar");
    [["unit","📚 按章节归类"],["type","🏷️ 按题型归类"]].forEach(([val,label])=>{
      const b=el("button","btn sm"+(exerciseViewMode===val?" primary":""),label);
      b.addEventListener("click",()=>{exerciseViewMode=val;exerciseTypeFilter="all";viewExercises();});
      modeBar.appendChild(b);
    });
    c.appendChild(modeBar);

    if(exerciseViewMode==="type"){
      const allEx=allExercises();
      const types=["all",...[...new Set(allEx.map(x=>x.e.type))]];
      const typeBar=el("div","ex-modebar");
      types.forEach(tp=>{
        const b=el("button","btn sm"+(exerciseTypeFilter===tp?" primary":""),(tp==="all"?"全部题型":tp));
        b.addEventListener("click",()=>{exerciseTypeFilter=tp;viewExercises();});
        typeBar.appendChild(b);
      });
      c.appendChild(typeBar);
      const filtered=allEx.filter(x=>exerciseTypeFilter==="all"||x.e.type===exerciseTypeFilter);
      const cnt=el("div","en-note");cnt.textContent=`共筛选出 ${filtered.length} 道「${exerciseTypeFilter==="all"?"全部题型":exerciseTypeFilter}」习题，按下表所属单元分组列出。`;c.appendChild(cnt);
      [["p1","Part I 国际学术会议英语"],["p2","Part II 跨文化交际与国际学术会议"]].forEach(([pid,pt])=>{
        const unitsInPart=KNOWLEDGE.filter(k=>k.parent===pid&&k.hasPage&&EXERCISES[k.id]&&EXERCISES[k.id].length&&filtered.some(x=>x.unit.id===k.id));
        if(!unitsInPart.length)return;
        const sec=el("div","section-title");sec.innerHTML=`<span class="bar"></span>${esc(pt)}`;c.appendChild(sec);
        unitsInPart.forEach(k=>{
          const sub=el("div","section-sub");sub.textContent=`${k.cn}（${filtered.filter(x=>x.unit.id===k.id).length} 题）`;c.appendChild(sub);
          filtered.filter(x=>x.unit.id===k.id).forEach(x=>{
            const e=x.e;const card=el("div","ex-card");card.style.marginBottom="12px";
            card.innerHTML=`<span class="chip ex-type">${esc(e.type)}</span><div class="ex-stem">${esc(e.stem)}</div>`;
            const btn=el("button","btn sm","显示答案与解析");const ans=el("div","ex-ans");
            ans.innerHTML=`<b>参考答案：</b>${esc(e.answer).replace(/\n/g,"<br>")}<br><b>关键解析：</b>${esc(e.analysis)}`;
            btn.addEventListener("click",()=>ans.classList.toggle("show"));
            card.appendChild(btn);card.appendChild(ans);c.appendChild(card);
          });
        });
      });
      return;
    }

    /* 按章节归类（原有） */
    [["p1","Part I 国际学术会议英语"],["p2","Part II 跨文化交际与国际学术会议"]].forEach(([pid,pt])=>{
      const sec=el("div","section-title");sec.innerHTML=`<span class="bar"></span>${esc(pt)}`;c.appendChild(sec);
      const grid=el("div","grid cols-3");
      KNOWLEDGE.filter(k=>k.parent===pid&&k.hasPage&&EXERCISES[k.id]&&EXERCISES[k.id].length).forEach(k=>{
        const card=el("div","unit-card");card.style.cursor="pointer";
        card.innerHTML=`<div class="uc-top"><div class="uc-id">${esc((k.title.split(" ")[0]+" "+(k.title.split(" ")[1]||"")).trim())}</div>
          <span class="chip">${EXERCISES[k.id].length} 题</span></div>
          <div class="uc-title">${esc(k.cn)}</div>`;
        card.addEventListener("click",()=>viewExercises(k.id));grid.appendChild(card);
      });
      c.appendChild(grid);
    });
  }

  /* ---------- 视图：主观题 · 写作训练 ---------- */
  function viewSubjective(){
    const c=$("#content");c.innerHTML="";
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">主观题 · 写作训练</div><h2>简答 / 论述 / 作文</h2>
      <div class="sub">聚焦课程高阶主观题型（简答、论述、写作、翻译、对比分析），覆盖全书主要知识点；每题可点开参考答案/评分要点自评。</div>`;
    c.appendChild(t);
    const all=QUESTIONS.filter(q=>q.type==="short"||q.type==="writing");
    const allBtn=el("button","btn primary","📝 全部主观题（${all.length} 题·自评）".replace("${all.length}",all.length));allBtn.style.margin="0 0 14px";
    allBtn.addEventListener("click",()=>startQuiz(all.map(q=>q.id),{title:"全部主观题",readOnly:true,subtitle:all.length+" 题 · 点开参考答案自评",back:()=>viewSubjective()}));
    c.appendChild(allBtn);
    [["p1","Part I 国际学术会议英语"],["p2","Part II 跨文化交际与国际学术会议"]].forEach(([pid,pt])=>{
      const sec=el("div","section-title");sec.innerHTML=`<span class="bar"></span>${esc(pt)}`;c.appendChild(sec);
      const grid=el("div","grid cols-3");
      KNOWLEDGE.filter(k=>k.parent===pid&&k.hasPage).forEach(k=>{
        const qs=unitQuestions(k.id).filter(q=>q.type==="short"||q.type==="writing");
        if(!qs.length)return;
        const card=el("div","unit-card");card.style.cursor="pointer";
        card.innerHTML=`<div class="uc-top"><div class="uc-id">${esc((k.title.split(" ")[0]+" "+(k.title.split(" ")[1]||"")).trim())}</div>
          <span class="chip">${qs.length} 题</span></div>
          <div class="uc-title">${esc(k.cn)}</div>`;
        card.addEventListener("click",()=>startQuiz(qs.map(q=>q.id),{title:"主观题 · "+k.cn,readOnly:true,subtitle:qs.length+" 题 · 点开参考答案自评",back:()=>viewSubjective()}));
        grid.appendChild(card);
      });
      c.appendChild(grid);
    });
  }

  /* ---------- 视图：记忆背诵辅助 ---------- */
  let memLite=false;
  function viewMemory(){
    const c=$("#content");c.innerHTML="";
    const t=el("div","kp-head");t.innerHTML=`<div class="tag">记忆背诵辅助</div><h2>背诵要点 · 口诀 · 框架</h2>
      <div class="sub">提炼全书核心背诵要点、编写记忆口诀、梳理知识框架，帮助高效掌握并背诵关键内容。</div>`;
    c.appendChild(t);
    const toggle=el("label","mem-toggle");toggle.style.margin="0 0 14px;display:inline-flex;align-items:center;gap:6px;cursor:pointer";
    toggle.innerHTML=`<input type="checkbox" ${memLite?"checked":""}> 精简背诵模式（仅显示记忆口诀）`;
    toggle.querySelector("input").addEventListener("change",e=>{memLite=e.target.checked;viewMemory();});
    c.appendChild(toggle);

    function renderAid(id,title,en){
      const m=MEMORY_AIDS[id];if(!m)return;
      const card=el("div","mem-card");
      let html=`<div class="mem-title">${esc(title)}</div>`;
      if(!memLite){
        html+=`<div class="mem-sub">背诵要点</div><ul class="mem-points">`+
          m.points.map(p=>`<li>${esc(p)}</li>`).join("")+`</ul>`;
        html+=`<div class="mem-sub">知识框架</div><div class="mem-fw">${m.framework}</div>`;
      }
      html+=`<div class="mem-sub">记忆口诀</div><div class="mem-mn">${esc(m.mnemonic)}</div>`;
      if(en)html+=`<div class="mem-en">${esc(en)}</div>`;
      card.innerHTML=html;c.appendChild(card);
    }
    if(MEMORY_AIDS._global)renderAid("_global","全本总纲（全局背诵框架）");
    [["p1","Part I 国际学术会议英语"],["p2","Part II 跨文化交际与国际学术会议"]].forEach(([pid,pt])=>{
      const sec=el("div","section-title");sec.innerHTML=`<span class="bar"></span>${esc(pt)}`;c.appendChild(sec);
      KNOWLEDGE.filter(k=>k.parent===pid&&k.hasPage&&MEMORY_AIDS[k.id]).forEach(k=>{
        renderAid(k.id,k.cn,k.title);
      });
    });
  }

  /* ---------- 视图：全文阅读（扫描版逐页校录） ---------- */
  function ftBlocks(content){
    const blocks=[];
    content.split("\n").forEach(raw=>{
      const line=raw.replace(/\s+$/,"");
      if(!line)return;
      if(line.startsWith("##"))blocks.push({t:"h4",v:line.slice(2)});
      else if(line.startsWith("#"))blocks.push({t:"h3",v:line.slice(1)});
      else if(line.startsWith("@"))blocks.push({t:"center",v:line.slice(1)});
      else if(line.startsWith(">"))blocks.push({t:"note",v:line.slice(1)});
      else if(line.startsWith("- "))blocks.push({t:"li",v:line.slice(2)});
      else blocks.push({t:"p",v:line});
    });
    return blocks;
  }
  function renderFT(content,parent){
    let ul=null;
    ftBlocks(content).forEach(b=>{
      if(b.t==="li"){
        if(!ul){ul=el("ul","ft-ul");parent.appendChild(ul);}
        ul.appendChild(el("li",null,esc(b.v)));return;
      }
      ul=null;
      if(b.t==="h3")parent.appendChild(el("h3","ft-h3",esc(b.v)));
      else if(b.t==="h4")parent.appendChild(el("h4","ft-h4",esc(b.v)));
      else if(b.t==="center")parent.appendChild(el("div","ft-center",esc(b.v)));
      else if(b.t==="note")parent.appendChild(el("div","ft-note",esc(b.v)));
      else parent.appendChild(el("p","ft-p",esc(b.v)));
    });
  }
  let ftMode="verified", ftPage=1, ftShowText=true;
  function ftModeBar(){
    const bar=el("div","ex-modebar");bar.style.marginBottom="12px";
    [["verified","📖 精校文本"],["scan","🖼️ 全书原书影像"]].forEach(([v,label])=>{
      const b=el("button","btn sm"+(ftMode===v?" primary":""),label);
      b.addEventListener("click",()=>{ftMode=v;viewFulltext();});
      bar.appendChild(b);
    });
    return bar;
  }
  function ftGoPage(p){ftPage=Math.max(1,Math.min(FULLTEXT.meta.total_pages,p));ftMode="scan";viewFulltext();}
  function viewScanReader(c){
    const M=FULLTEXT.meta;
    const head=el("div","kp-head");
    head.innerHTML=`<div class="tag">全书原书影像 · ${M.total_pages} 页</div><h2>${esc(M.title_cn)}</h2>
      <div class="sub">扫描版原书逐页影像（原书原貌）+ 机器识别文本（供检索 / 复制，个别字符可能有误，以影像为准）。</div>`;
    c.appendChild(head);
    c.appendChild(ftModeBar());

    const bar=el("div","ft-scan-bar");
    const prev=el("button","btn sm","← 上一页");
    const next=el("button","btn sm","下一页 →");
    const jump=el("input","ft-jump");jump.type="number";jump.min=1;jump.max=M.total_pages;jump.value=ftPage;
    const go=el("button","btn sm primary","跳转");
    prev.addEventListener("click",()=>ftGoPage(ftPage-1));
    next.addEventListener("click",()=>ftGoPage(ftPage+1));
    go.addEventListener("click",()=>ftGoPage(parseInt(jump.value,10)||1));
    jump.addEventListener("keydown",e=>{if(e.key==="Enter")ftGoPage(parseInt(jump.value,10)||1);});
    const tg=el("label","ft-tg");
    tg.innerHTML=`<input type="checkbox" ${ftShowText?"checked":""}> 显示识别文本`;
    tg.querySelector("input").addEventListener("change",e=>{ftShowText=e.target.checked;viewFulltext();});
    const sel=el("select","ft-select");
    sel.innerHTML=`<option value="">跳转到单元…</option>`+
      FULLTEXT.contents.flatMap(part=>part.units.map(u=>`<option value="${Math.min(M.total_pages,u.print+8)}">${esc(part.part)} · ${esc(u.unit)} ${esc(u.title_cn)}（原书 p.${u.print}）</option>`)).join("");
    sel.addEventListener("change",()=>{if(sel.value)ftGoPage(parseInt(sel.value,10));});
    [prev,next,jump,go,sel,tg].forEach(n=>bar.appendChild(n));
    c.appendChild(bar);

    const range=el("input","ft-range");range.type="range";range.min=1;range.max=M.total_pages;range.value=ftPage;
    range.addEventListener("change",()=>ftGoPage(parseInt(range.value,10)));
    range.addEventListener("input",()=>{jump.value=range.value;});
    c.appendChild(range);
    c.appendChild(el("div","ft-pos",`第 <b>${ftPage}</b> / ${M.total_pages} 页`));

    const wrap=el("div","ft-scan");
    const img=el("img","ft-img");img.loading="lazy";img.alt="原书第 "+ftPage+" 页";
    img.src="assets/pages/page_"+String(ftPage).padStart(3,"0")+".jpg";
    wrap.appendChild(img);
    if(ftShowText){
      const ocr=(typeof FULLTEXT_OCR!=="undefined"&&FULLTEXT_OCR.pages.find(p=>p.p===ftPage));
      const box=el("div","ft-scan-text");
      box.appendChild(el("div","ft-pagemark","识别文本 · 第 "+ftPage+" 页（机器识别，仅供参考）"));
      box.appendChild(el("pre","ft-pre",esc(ocr?ocr.t:"（本页无识别文本）")));
      wrap.appendChild(box);
    }
    c.appendChild(wrap);

    const nav2=el("div","ft-scan-bar");
    const p2=el("button","btn sm","← 上一页");const n2=el("button","btn sm","下一页 →");
    p2.addEventListener("click",()=>ftGoPage(ftPage-1));n2.addEventListener("click",()=>ftGoPage(ftPage+1));
    nav2.appendChild(p2);nav2.appendChild(n2);c.appendChild(nav2);
  }
  function viewFulltext(param){
    const c=$("#content");c.innerHTML="";
    if(ftMode==="scan"){viewScanReader(c);return;}
    const M=FULLTEXT.meta;
    c.appendChild(ftModeBar());
    if(param){
      const sec=FULLTEXT.sections.find(s=>s.id===param);
      if(!sec){viewFulltext();return;}
      const head=el("div","kp-head");
      head.innerHTML=`<div class="tag">${esc(sec.part||"辅文")}　${esc(sec.unit||"")}</div>
        <h2>${esc(sec.title_en||sec.title_cn)}</h2>
        <div class="sub">${esc(sec.title_cn)}　·　共 ${sec.pages.length} 页（原书第 ${sec.pages[0].pdf}–${sec.pages[sec.pages.length-1].pdf} 页）</div>`;
      c.appendChild(head);
      const back=el("button","btn","← 返回全文目录");back.style.margin="0 0 14px";
      back.addEventListener("click",()=>viewFulltext());c.appendChild(back);
      const body=el("div","ft-doc");
      sec.pages.forEach(pg=>{
        const page=el("div","ft-page"+(pg.cover?" ft-cover":""));
        page.appendChild(el("div","ft-pagemark",(pg.print!=null?("p. "+pg.print+"　"):"")+"（PDF "+pg.pdf+"）"));
        renderFT(pg.content,page);
        body.appendChild(page);
      });
      c.appendChild(body);
      return;
    }
    const t=el("div","kp-head");
    t.innerHTML=`<div class="tag">全书录入 · ${M.total_pages} 页</div><h2>${esc(M.title_cn)}</h2>
      <div class="sub">${esc(M.title_en)}</div>
      <div class="sub">${esc(M.author)}　·　${esc(M.publisher)}　·　ISBN ${esc(M.isbn)}　·　${esc(M.edition)}</div>
      <div class="sub">原书为扫描版 PDF（无文字层，共 ${M.total_pages} 页），现已<b>全书录入</b>：封面 · 辅文 · 目录 · Unit 1–13（第一部分）· Part II 跨文化交际 · Part III 范文中文译文与练习答案 · 后记。</div>
      <div class="ft-proof"><span class="chip chip-v">人工校录 ${M.verified_pages} 页</span><span class="chip chip-m">机读整理 ${M.structured_pages} 页</span><br>第 1–60 页（辅文 · Unit 1–7）为逐字人工校录；第 61–278 页（Unit 8–13 · Part II · Part III · 后记）系扫描影像 OCR 识别后自动整理成文，个别字符（尤其音标、人名、网址）可能有误 —— <b>请以「🖼️ 全书原书影像」中的原书页面为准</b>。</div>`;
    c.appendChild(t);
    FULLTEXT.sections.forEach((sec,idx)=>{
      const hand=idx<=7;
      const card=el("div","unit-card");card.style.cursor="pointer";
      card.innerHTML=`<div class="uc-top"><div class="uc-id">${esc(sec.part||"辅文")}　${esc(sec.unit||"")}</div><span class="chip ${hand?"chip-v":"chip-m"}">${sec.pages.length} 页 · ${hand?"人工校录":"机读整理"}</span></div>
        <div class="uc-title">${esc(sec.title_en||sec.title_cn)}</div>
        <div class="uc-sum">${esc(sec.title_cn)}</div>`;
      card.addEventListener("click",()=>viewFulltext(sec.id));c.appendChild(card);
    });
    const wait=el("div","ft-wait");
    wait.innerHTML=`<b>使用说明：</b>全书 ${M.total_pages} 页已全部录入，可逐页对照阅读；任何一处文字与影像不一致时，一律以「🖼️ 全书原书影像」中的原书页面为准。`;
    c.appendChild(wait);
  }

  /* ---------- 导航 ---------- */
  const VIEWS={
    dashboard:{t:"仪表盘",c:"学习概览",fn:viewDashboard},
    knowledge:{t:"知识点",c:"全部考点",fn:viewKnowledge},
    kp:{t:"知识点",c:"考点学习",fn:null},
    mindmap:{t:"思维导图",c:"知识全景",fn:viewMindmap},
    review:{t:"复习计划",c:"艾宾浩斯间隔复习",fn:viewReview},
    mock:{t:"模拟题库",c:"20 套模拟试卷",fn:viewMock},
    exercises:{t:"课本习题",c:"课后练习与解析",fn:viewExercises},
    bilingual:{t:"双语对照",c:"原文同步翻译",fn:viewBilingual},
    subjective:{t:"主观题",c:"简答·论述·写作",fn:viewSubjective},
    memory:{t:"记忆背诵",c:"要点·口诀·框架",fn:viewMemory},
    fulltext:{t:"全文阅读",c:"扫描版逐页校录",fn:null},
    real:{t:"网络真题",c:"论坛/文库真题整合",fn:viewReal},
    wrong:{t:"错题本",c:"我的错题",fn:viewWrong}
  };
  let cur={view:"dashboard",param:null};
  function navigate(view,param){
    cur={view,param};
    const v=VIEWS[view]||VIEWS.dashboard;
    $("#viewTitle").textContent=v.t;$("#crumb").textContent=v.c;
    if(view==="kp")viewKP(param);
    else if(view==="exercises")viewExercises(param);
    else if(view==="bilingual")viewBilingual(param);
    else if(view==="fulltext")viewFulltext(param);
    else if(v.fn)v.fn();
    $("#sidebar").classList.remove("open");$("#scrim").classList.remove("show");
    window.scrollTo(0,0);
  }
  function renderNav(){
    const nav=$("#nav");nav.innerHTML="";
    [["dashboard","🏠","仪表盘"],["knowledge","📚","知识点"],["mindmap","🧠","思维导图"],
     ["exercises","📖","课本习题"],["bilingual","📜","双语对照"],["subjective","✍️","主观题"],["memory","🔑","记忆背诵"],
     ["fulltext","📄","全文阅读"],["review","🔁","复习计划"],["mock","📝","模拟题库"],["real","🌐","网络真题"],["wrong","⚠️","错题本"]].forEach(([v,ic,t])=>{
      const b=el("button","nav-item"+(cur.view===v?" active":""),"");
      b.innerHTML=`<span class="ic">${ic}</span>${t}`;
      b.addEventListener("click",()=>navigate(v));
      nav.appendChild(b);
    });
  }

  /* ---------- 启动 ---------- */
  function init(){
    renderNav();navigate("dashboard");
    $("#menuBtn").addEventListener("click",()=>{$("#sidebar").classList.toggle("open");$("#scrim").classList.toggle("show");});
    $("#scrim").addEventListener("click",()=>{$("#sidebar").classList.remove("open");$("#scrim").classList.remove("show");});
  }
  if(document.readyState!=="loading")init();else document.addEventListener("DOMContentLoaded",init);
})();
