
document.querySelectorAll('a[href^="#"]').forEach(el=>{
el.onclick=e=>{
e.preventDefault();
document.querySelector(el.getAttribute('href')).scrollIntoView({behavior:'smooth'});
};
});
document.getElementById('themeToggle').onclick=()=>{
document.body.classList.toggle('light');
};
