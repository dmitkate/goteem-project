window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"};let e=document.querySelectorAll("._anim-items");if(e.length>0){function n(e){const n=e.getBoundingClientRect(),t=window.scrollX||document.documentElement.scrollLeft,o=window.scrollY||document.documentElement.scrollTop;return{top:n.top+o,left:n.left+t}}window.addEventListener("scroll",(function(){for(let t=0;t<e.length;t++){const o=e[t],l=o.offsetHeight,i=n(o).top,c=4;let d=window.innerHeight-l/c;l>window.innerHeight&&(d=window.innerHeight-window.innerHeight/c),scrollY>i-d&&scrollY<i+l?o.classList.add("active-animate"):o.classList.contains("_anim-no-hide")||o.classList.remove("active-animate")}}))}
//# sourceMappingURL=index.8df69b94.js.map
