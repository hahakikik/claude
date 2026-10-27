// #src 안의 블록을 순서대로 2단 쪽에 채운다. 넘치면 다음 쪽으로 넘기고, 목록은 항목 단위로 나눈다.
(function(){
  const src=document.getElementById('src');
  const title=src.dataset.title, sub=src.dataset.sub||'', foot=src.dataset.foot||'';
  const pages=[];
  function newPage(){
    const pg=document.createElement('div');pg.className='page';
    const n=pages.length;
    pg.innerHTML=`<div class=head><h1>${title}${n?' (계속)':''}</h1><span>${sub}</span></div><div class=cols></div><div class=foot><span class=src></span><span class=pn></span></div>`;
    document.body.appendChild(pg);pages.push(pg);return pg.querySelector('.cols');
  }
  const over=c=>c.scrollWidth>c.clientWidth+1;
  const isHead=e=>e&&e.nodeType===1&&(e.classList.contains('bar')||e.classList.contains('sub'));
  let cols=newPage();
  // 섹션 단위가 아니라 섹션 안의 자식 단위로 흘려 보낸다
  const items=[];
  for(const sec of Array.from(src.children)){
    for(const ch of Array.from(sec.children)) items.push(ch);
  }
  function place(el){
    cols.appendChild(el);
    if(!over(cols)) return;
    // 목록이면 항목을 나눠서 넣는다
    if(el.tagName==='UL'||el.tagName==='OL'){
      const lis=Array.from(el.children);el.innerHTML='';
      let cur=el,moved=false;
      for(const li of lis){
        cur.appendChild(li);
        if(over(cols)){
          cur.removeChild(li);
          if(!cur.children.length) cols.removeChild(cur);
          carryHeads();
          cols=newPage();
          cur=el.cloneNode(false);cols.appendChild(cur);cur.appendChild(li);
        }
      }
      return;
    }
    cols.removeChild(el);
    carryHeads();
    cols=newPage();cols.appendChild(el);
  }
  // 단 맨 끝에 제목만 남지 않도록 다음 쪽으로 데려간다
  let pendingHeads=[];
  function carryHeads(){
    pendingHeads=[];
    while(isHead(cols.lastElementChild)){pendingHeads.unshift(cols.lastElementChild);cols.removeChild(cols.lastElementChild);}
  }
  const origNewPage=newPage;
  newPage=function(){const c=origNewPage();for(const h of pendingHeads)c.appendChild(h);pendingHeads=[];return c;};
  for(const it of items) place(it);
  src.remove();
  pages.forEach((p,i)=>{p.querySelector('.pn').textContent=`${i+1}/${pages.length}`;
    p.querySelector('.src').textContent=i===pages.length-1&&foot?foot:title.replace(/ \(.*\)$/,'');});
  document.body.dataset.ready='1';
})();
