function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()};var animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){for(var n=0;n<animItems.length;n++){var t=animItems[n],e=t.offsetHeight,o=offset(t).top,l=window.innerHeight-e/4;e>window.innerHeight&&(l=window.innerHeight-window.innerHeight/4),scrollY>o-l&&scrollY<o+e?t.classList.add("active-animate"):t.classList.contains("_anim-no-hide")||t.classList.remove("active-animate")}}function offset(n){var t=n.getBoundingClientRect(),e=window.scrollX||document.documentElement.scrollLeft,o=window.scrollY||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+e}}window.addEventListener("scroll",animOnScroll)}
//# sourceMappingURL=index.1ff4372c.js.map
