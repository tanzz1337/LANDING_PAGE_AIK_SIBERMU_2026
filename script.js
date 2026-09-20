const header=document.getElementById('header'), nav=document.getElementById('nav'), menu=document.getElementById('menu');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
addEventListener('scroll',()=>header.style.background=scrollY>30?'rgba(11,29,59,.94)':'transparent');
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;if(!f.checkValidity()){f.reportValidity();return}document.getElementById('status').textContent='Terima kasih. Pesan Anda siap diteruskan ke pengelola.';f.reset()});
