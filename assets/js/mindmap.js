/* ============================================================
 * 思维导图渲染器（SVG，左→右树状，可折叠、可点击跳转）
 * 全局函数：renderMindmap(container, onNodeClick)
 * ============================================================ */
(function(){
  const SVGNS="http://www.w3.org/2000/svg";
  const X_GAP=210, Y_GAP=54, MARGIN={x:24,y:24}, NODE_W=188, NODE_H=46;
  const COLORS={
    0:{fill:"#10a37f",text:"#fff"},
    1:{fill:"#6a5acd",text:"#fff"},
    2:{fill:"#eef0fb",text:"#3a3470"},
    3:{fill:"#f1f3f6",text:"#444"}
  };
  function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  function trunc(s,n){s=s||"";return s.length>n?s.slice(0,n-1)+"…":s;}

  function buildTree(){
    const byId={}, children={};
    KNOWLEDGE.forEach(n=>{byId[n.id]=n;children[n.id]=[];});
    KNOWLEDGE.forEach(n=>{ if(n.parent&&byId[n.parent]) children[n.parent].push(n.id); });
    // 排序：保持数组顺序
    return {byId,children,roots:KNOWLEDGE.filter(n=>!n.parent).map(n=>n.id)};
  }

  function renderMindmap(container, onNodeClick){
    const {byId,children,roots}=buildTree();
    const collapsed=new Set();
    // 折叠切换
    function toggle(id){ if(collapsed.has(id))collapsed.delete(id); else collapsed.add(id); draw(); }
    // 点击节点
    function clickNode(n){
      if(n.hasPage) onNodeClick(n.id);
      else if(n.parent&&byId[n.parent].hasPage) onNodeClick(n.parent);
      else if(n.parent) clickNode(byId[n.parent]);
    }

    let leafY=0;
    function layout(id,depth){
      const node=byId[id];
      const x=MARGIN.x+depth*X_GAP;
      const kids=collapsed.has(id)?[]:children[id];
      let y;
      if(kids.length===0){ y=MARGIN.y+leafY*Y_GAP; leafY++; }
      else{
        const ys=kids.map(k=>layout(k,depth+1));
        y=(ys[0]+ys[ys.length-1])/2;
      }
      node._x=x; node._y=y; node._depth=depth;
      return y;
    }

    function draw(){
      leafY=0;
      roots.forEach(r=>layout(r,0));
      const maxX=MARGIN.x+(Math.max(...KNOWLEDGE.map(n=>n._depth||0))+1)*X_GAP;
      const maxY=MARGIN.y+(leafY)*Y_GAP;
      const svg=document.createElementNS(SVGNS,"svg");
      svg.setAttribute("class","mm-svg");
      svg.setAttribute("width",maxX);
      svg.setAttribute("height",maxY);
      svg.setAttribute("viewBox",`0 0 ${maxX} ${maxY}`);

      // 连接线（父→子）
      KNOWLEDGE.forEach(n=>{
        if(collapsed.has(n.id))return;
        (children[n.id]||[]).forEach(cid=>{
          const c=byId[cid];
          const x1=n._x+NODE_W, y1=n._y+NODE_H/2;
          const x2=c._x, y2=c._y+NODE_H/2;
          const mx=(x1+x2)/2;
          const path=document.createElementNS(SVGNS,"path");
          path.setAttribute("d",`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`);
          path.setAttribute("fill","none");
          path.setAttribute("stroke","#cfd2da");
          path.setAttribute("stroke-width","1.6");
          svg.appendChild(path);
        });
      });

      // 节点
      KNOWLEDGE.forEach(n=>{
        const g=document.createElementNS(SVGNS,"g");
        g.setAttribute("class","mm-node"+(n.hasPage?" clickable":""));
        const col=COLORS[n._depth]||COLORS[3];
        const rect=document.createElementNS(SVGNS,"rect");
        rect.setAttribute("x",n._x);rect.setAttribute("y",n._y);
        rect.setAttribute("width",NODE_W);rect.setAttribute("height",NODE_H);
        rect.setAttribute("rx","10");
        rect.setAttribute("fill",col.fill);
        rect.setAttribute("stroke","#dfe1e8");rect.setAttribute("stroke-width","1");
        g.appendChild(rect);
        // 文本
        const t1=document.createElementNS(SVGNS,"text");
        t1.setAttribute("x",n._x+10);t1.setAttribute("y",n._y+19);
        t1.setAttribute("class","mm-label");
        t1.setAttribute("fill",col.text);
        t1.textContent=trunc(n.title.replace(/^(Unit \d+ |Part [IIS]+ |[0-9.]+\s*)/,""),26);
        // 中文
        const t2=document.createElementNS(SVGNS,"text");
        t2.setAttribute("x",n._x+10);t2.setAttribute("y",n._y+35);
        t2.setAttribute("class","mm-label cn");
        t2.setAttribute("fill",col.text==="#fff"?"rgba(255,255,255,.8)":"#8a8c93");
        t2.textContent=trunc(n.cn,12);
        g.appendChild(t1);g.appendChild(t2);
        // 折叠按钮（仅当存在子节点）
        if(children[n.id].length>0){
          const tg=document.createElementNS(SVGNS,"g");
          tg.setAttribute("class","mm-toggle");
          const cxc=n._x+NODE_W-12, cyc=n._y+NODE_H/2;
          const circ=document.createElementNS(SVGNS,"circle");
          circ.setAttribute("cx",cxc);circ.setAttribute("cy",cyc);circ.setAttribute("r","8");
          circ.setAttribute("fill","#fff");circ.setAttribute("stroke",col.fill);circ.setAttribute("stroke-width","1.5");
          const sign=document.createElementNS(SVGNS,"text");
          sign.setAttribute("x",cxc);sign.setAttribute("y",cyc+4);
          sign.setAttribute("text-anchor","middle");sign.setAttribute("font-size","12");
          sign.setAttribute("fill",col.fill);sign.textContent=collapsed.has(n.id)?"+":"−";
          tg.appendChild(circ);tg.appendChild(sign);
          tg.addEventListener("click",(e)=>{e.stopPropagation();toggle(n.id);});
          g.appendChild(tg);
        }
        g.addEventListener("click",()=>clickNode(n));
        svg.appendChild(g);
      });

      container.innerHTML="";
      container.appendChild(svg);
    }
    draw();
  }
  window.renderMindmap=renderMindmap;
})();
