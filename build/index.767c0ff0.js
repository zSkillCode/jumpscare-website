const e=document.querySelector(".redirect--counter"),t=document.querySelector(".redirect--link"),r=document.querySelector(".redirect-wrapper"),n=document.querySelector(".spinner-wrapper"),d=document.querySelector(".video-wrapper"),l=document.querySelector(".shield"),c=document.querySelector(".video"),o=()=>r.classList.add("hidden"),i=()=>n.classList.remove("hidden"),s=()=>n.classList.add("hidden"),u=()=>l.classList.remove("hidden"),a=()=>{d.classList.remove("hidden"),u(),c.controls=!1,c.volume=1,c.play()},m=()=>{let{documentElement:e}=document;e.requestFullscreen?.(),e.mozRequestFullScreen?.(),e.webkitRequestFullscreen?.(),e.msRequestFullscreen?.()};// DISPLAY REDIRECT SCREEN ON PAGE LOAD
window.addEventListener("load",()=>{let t=["in 4","in 3","in 2","in 1","now"],r=setInterval(()=>{if(0===t.length){clearInterval(r);return}e.innerHTML=t.shift()},1e3)}),// HANDLE LINK CLICK
t.addEventListener("click",e=>{e.preventDefault(),o(),i(),setTimeout(()=>{s(),a(),m()},2500)}),// GO FULLSCREEN ON VIDEO CLICK
c.addEventListener("click",m),// DON'T ALLOW TO LEAVE :D
window.onbeforeunload=()=>"";//# sourceMappingURL=index.767c0ff0.js.map

//# sourceMappingURL=index.767c0ff0.js.map
