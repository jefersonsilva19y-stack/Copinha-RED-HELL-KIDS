document.addEventListener('DOMContentLoaded',()=>{
 const menuToggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.nav');
 if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});}
 document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{if(nav)nav.classList.remove('open');if(menuToggle){menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}}));
 const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
 const signup=document.querySelector('.hero-actions .btn-primary');
 if(signup){ const go=()=>{window.location.assign('./inscricao.html');}; signup.addEventListener('click',e=>{e.preventDefault();go();}); signup.addEventListener('touchend',e=>{e.preventDefault();go();},{passive:false}); }
 const info=document.querySelector('.hero-actions .btn-ghost');
 if(info){ const go=()=>document.getElementById('evento')?.scrollIntoView({behavior:'smooth',block:'start'}); info.addEventListener('click',e=>{e.preventDefault();go();}); info.addEventListener('touchend',e=>{e.preventDefault();go();},{passive:false}); }
});
