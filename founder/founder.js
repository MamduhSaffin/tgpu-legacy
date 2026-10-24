/* TGPU Founder interactive portfolio — no external dependencies, tracking, APIs or cookies. */
(()=>{'use strict';
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const compact=matchMedia('(max-width: 850px)');
const root=document.documentElement;
const year=document.getElementById('year');
if(year)year.textContent=String(new Date().getFullYear());
const nav=document.getElementById('main-nav');
const toggle=document.getElementById('nav-toggle');
function setMenu(open){
 if(!toggle||!nav)return;
 const active=Boolean(open)&&compact.matches;
 toggle.setAttribute('aria-expanded',String(active));
 nav.classList.toggle('open',active);
 toggle.setAttribute('aria-label',active?'Close navigation':'Toggle navigation');
}
toggle?.addEventListener('click',()=>setMenu(toggle?.getAttribute('aria-expanded')!=='true'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
window.addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false)});
compact.addEventListener?.('change',()=>setMenu(false));
const progress=document.getElementById('progress');
let scrollQueued=false;
function updateScroll(){
 scrollQueued=false;
 if(!progress)return;
 const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
 progress.style.width=(Math.min(1,Math.max(0,scrollY/max))*100).toFixed(2)+'%';
}
window.addEventListener('scroll',()=>{
 if(scrollQueued)return;scrollQueued=true;requestAnimationFrame(updateScroll);
},{passive:true});
window.addEventListener('resize',updateScroll,{passive:true});
updateScroll();
// A content-first layout: reveal is activated only if IntersectionObserver works.
// Reduced-motion and no-JS users always receive readable, visible content.
const els=Array.from(document.querySelectorAll('[data-reveal]'));
if(!reduce.matches&&'IntersectionObserver' in window){
 root.classList.add('js-ready');
 const observer=new IntersectionObserver(entries=>{
  for(const e of entries){if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}}
 },{rootMargin:'0px 0px -32px 0px',threshold:.06});
 els.forEach(el=>{if(el.getBoundingClientRect().top<innerHeight*.93)el.classList.add('revealed');else observer.observe(el)});
} else els.forEach(el=>el.classList.add('revealed'));
const buttons=Array.from(document.querySelectorAll('[data-filter]'));
const cards=Array.from(document.querySelectorAll('[data-category]'));
function filter(category){
 const value=['digital','gulf'].includes(category)?category:'all';
 for(const button of buttons){
  const current=button.dataset.filter===value;
  button.classList.toggle('active',current);
  button.setAttribute('aria-pressed',String(current));
 }
 for(const card of cards)card.hidden=value!=='all'&&card.dataset.category!==value;
}
buttons.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));
filter('all');
const scene=document.getElementById('orbit-scene');
const cards3d=Array.from(document.querySelectorAll('[data-tilt]'));
if(!reduce.matches&&matchMedia('(hover: hover) and (pointer: fine)').matches){
 if(scene){
  let queued=false,tx=0,ty=0;
  scene.addEventListener('pointermove',event=>{
   const r=scene.getBoundingClientRect();
   tx=((event.clientX-r.left)/r.width-.5)*8;
   ty=((event.clientY-r.top)/r.height-.5)*-8;
   if(queued)return;queued=true;
   requestAnimationFrame(()=>{queued=false;scene.style.transform='rotateY('+tx.toFixed(2)+'deg) rotateX('+ty.toFixed(2)+'deg)'});
  },{passive:true});
  scene.addEventListener('pointerleave',()=>{tx=0;ty=0;scene.style.transform='rotateY(0deg) rotateX(0deg)'},{passive:true});
 }
 for(const card of cards3d){
  let raf=false;
  card.addEventListener('pointermove',event=>{
   const box=card.getBoundingClientRect();
   const px=((event.clientX-box.left)/box.width-.5)*5;
   const py=((event.clientY-box.top)/box.height-.5)*-5;
   if(raf)return;raf=true;
   requestAnimationFrame(()=>{raf=false;card.style.transform='perspective(1100px) rotateX('+py.toFixed(2)+'deg) rotateY('+px.toFixed(2)+'deg) translateY(-3px)'});
  },{passive:true});
  card.addEventListener('pointerleave',()=>{card.style.transform=''},{passive:true});
 }
}
// Responsive twinkling constellation. Deliberately low particle count and capped DPR;
// stops when scrolled out of sight or the tab is hidden. Static fallback on reduced motion.
const canvas=document.getElementById('stars');
if(canvas&&canvas.getContext){
 const context=canvas.getContext('2d',{alpha:true});
 if(context){
  let points=[],width=0,height=0,rafId=0,visible=true;
  const dpr=()=>Math.min(devicePixelRatio||1,1.8);
  function size(){
   const bounds=canvas.getBoundingClientRect();
   if(bounds.width<1||bounds.height<1)return;
   width=bounds.width;height=bounds.height;
   canvas.width=Math.round(width*dpr());canvas.height=Math.round(height*dpr());
   context.setTransform(dpr(),0,0,dpr(),0,0);
   const count=Math.max(25,Math.min(86,Math.round(width*height/18000)));
   points=Array.from({length:count},(_,i)=>({
    x:((i*97.31+23)%997)/997*width,
    y:((i*223.7+41)%991)/991*height,
    radius:.5+(i%5)*.2,
    phase:i*1.433,
    color:i%5===0?'224,185,122':'126,192,149'
   }));
  }
  function render(now){
   rafId=0;
   context.clearRect(0,0,width,height);
   const t=now*.0004;
   points.forEach((p,i)=>{
    const a=reduce.matches?.45:(.31+.29*Math.sin(t*3+p.phase));
    context.fillStyle='rgba('+p.color+','+Math.max(.1,a).toFixed(3)+')';
    context.beginPath();context.arc(p.x,p.y,p.radius,0,Math.PI*2);context.fill();
    if(i%7===0){
     const q=points[(i+11)%points.length];
     const distance=Math.hypot(q.x-p.x,q.y-p.y);
     if(distance<230){
      context.strokeStyle='rgba(128,189,149,'+(Math.max(0,1-distance/230)*.09).toFixed(3)+')';
      context.lineWidth=.7;context.beginPath();context.moveTo(p.x,p.y);context.lineTo(q.x,q.y);context.stroke();
     }
    }
   });
   if(!reduce.matches&&visible&&!document.hidden)rafId=requestAnimationFrame(render);
  }
  function start(){if(rafId||reduce.matches||!visible||document.hidden)return;rafId=requestAnimationFrame(render)}
  function stop(){if(rafId)cancelAnimationFrame(rafId);rafId=0}
  size();render(0);
  if('ResizeObserver' in window)new ResizeObserver(()=>{size();if(reduce.matches)render(0)}).observe(canvas);
  else window.addEventListener('resize',()=>{size();if(reduce.matches)render(0)},{passive:true});
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;if(visible)start();else stop()}).observe(canvas);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start()});
  reduce.addEventListener?.('change',()=>{stop();size();render(0);if(!reduce.matches)start()});
 }
}
})();