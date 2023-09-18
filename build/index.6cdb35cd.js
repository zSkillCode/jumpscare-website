const e=document.querySelector(".redirect--counter"),t=document.querySelector(".redirect--link"),n=document.querySelector(".redirect-wrapper"),r=document.querySelector(".spinner-wrapper"),d=document.querySelector(".video-wrapper"),c=document.querySelector(".video"),l=()=>n.classList.add("hidden"),i=()=>r.classList.remove("hidden"),o=()=>r.classList.add("hidden"),s=()=>{d.classList.remove("hidden"),c.controls=!1,c.play()},u=()=>{let{documentElement:e}=document;e.requestFullscreen?.(),e.mozRequestFullScreen?.(),e.webkitRequestFullscreen?.(),e.msRequestFullscreen?.()};// DISPLAY REDIRECT SCREEN ON PAGE LOAD
window.addEventListener("load",()=>{let t=["in 4","in 3","in 2","in 1","now"],n=setInterval(()=>{if(0===t.length){clearInterval(n);return}e.innerHTML=t.shift()},1e3)}),// HANDLE LINK CLICK
t.addEventListener("click",e=>{e.preventDefault(),l(),i(),setTimeout(()=>{o(),s(),u()},2500)}),// GO FULLSCREEN ON VIDEO CLICK
c.addEventListener("click",u),// DON'T ALLOW TO LEAVE :D
window.onbeforeunload=()=>"";//# sourceMappingURL=index.6cdb35cd.js.map

//# sourceMappingURL=index.6cdb35cd.js.map
