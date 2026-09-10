const nav = document.getElementById('nav');
const content = document.getElementById('content');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const lessonCount = document.getElementById('lessonCount');
const search = document.getElementById('search');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const topModule = document.getElementById('topModule');
const completeBtn = document.getElementById('complete');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const resetBtn = document.getElementById('resetBtn');
let current = Number(localStorage.getItem('ada-current') || 0);
let completed = JSON.parse(localStorage.getItem('ada-completed') || '[]');

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function buildNav(filter=''){
  nav.innerHTML=''; let last='';
  COURSE.forEach((m,i)=>{
    if(filter && !`${m.title} ${m.phase} ${m.outcome}`.toLowerCase().includes(filter.toLowerCase())) return;
    if(m.phase!==last){ const h=document.createElement('div'); h.className='nav-title'; h.textContent=m.phase; nav.appendChild(h); last=m.phase; }
    const b=document.createElement('button'); b.className='nav-item'+(i===current?' active':''); b.dataset.index=i;
    b.innerHTML=`<span class="nav-num">${String(i).padStart(2,'0')}</span><span>${esc(m.title)}</span>${completed.includes(i)?'<i>✓</i>':''}`;
    nav.appendChild(b);
  });
}
function updateProgress(){
  const pct=Math.round((completed.length/COURSE.length)*100); progressBar.style.width=pct+'%'; progressText.textContent=pct+'%'; lessonCount.textContent=`${completed.length} / ${COURSE.length}`;
  completeBtn.textContent=completed.includes(current)?'✓ Module completed':'Mark module complete'; completeBtn.classList.toggle('done',completed.includes(current));
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',Number(x.dataset.index)===current));
}
function render(i,scroll=true){
  current=Math.max(0,Math.min(i,COURSE.length-1)); const m=COURSE[current];
  topModule.textContent=`${String(current).padStart(2,'0')} · ${m.title}`;
  content.innerHTML=`<article class="lesson"><div class="lesson-head"><span class="tag">${esc(m.phase)} · MODULE ${String(current).padStart(2,'0')}</span><h1>${esc(m.title)}</h1><p class="subtitle">${esc(m.outcome)}</p><div class="lesson-meta"><span>⏱ ${esc(m.time)}</span><span>•</span><span>Guided build</span><span>•</span><span>Checkpoint</span></div></div><div class="module-body">${m.body}</div><div class="completion"><span>${completed.includes(current)?'Checkpoint complete. You can continue.':'Finish the practical checkpoint before moving on.'}</span><button class="complete" id="complete">${completed.includes(current)?'✓ Module completed':'Mark module complete'}</button></div><div class="pager"><button id="prev" ${current===0?'disabled':''}>← ${current===0?'Start':'Previous'}</button><button id="next" class="next">${current===COURSE.length-1?'Finish course':'Next module →'}</button></div></article>`;
  bindModuleEvents(); updateProgress(); localStorage.setItem('ada-current',current); if(scroll) window.scrollTo({top:0,behavior:'smooth'});
}
function bindModuleEvents(){
  document.querySelectorAll('.copy').forEach(btn=>btn.addEventListener('click',()=>{const text=btn.closest('.ai-prompt').querySelector('pre').innerText;navigator.clipboard?.writeText(text).then(()=>{const old=btn.textContent;btn.textContent='Copied';setTimeout(()=>btn.textContent=old,1000);});}));
  document.querySelectorAll('.library-copy').forEach(btn=>btn.addEventListener('click',()=>{navigator.clipboard?.writeText(btn.dataset.prompt).then(()=>{const old=btn.textContent;btn.textContent='Copied ✓';setTimeout(()=>btn.textContent=old,1000);});}));
  const c=document.getElementById('complete'); c?.addEventListener('click',()=>{if(!completed.includes(current)) completed.push(current);localStorage.setItem('ada-completed',JSON.stringify(completed));buildNav(search.value);render(current,false);});
  document.getElementById('prev')?.addEventListener('click',()=>render(current-1));
  document.getElementById('next')?.addEventListener('click',()=>render(current+1));
  document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>render(Number(b.dataset.next))));
}
nav.addEventListener('click',e=>{const b=e.target.closest('.nav-item');if(b){render(Number(b.dataset.index));sidebar.classList.remove('open');overlay.classList.remove('show');}});
search.addEventListener('input',()=>buildNav(search.value));
document.getElementById('menuBtn')?.addEventListener('click',()=>{sidebar.classList.toggle('open');overlay.classList.toggle('show');});
overlay.addEventListener('click',()=>{sidebar.classList.remove('open');overlay.classList.remove('show');});
resetBtn.addEventListener('click',()=>{if(confirm('Reset your course progress?')){completed=[];current=0;localStorage.removeItem('ada-completed');localStorage.removeItem('ada-current');buildNav();render(0);}});
buildNav(); render(current,false);
