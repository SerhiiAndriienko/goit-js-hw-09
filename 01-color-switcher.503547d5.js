!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=null;function a(d){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled","disabled");var a="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)));document.body.style.backgroundColor=a}t.addEventListener("click",(function(){d=setInterval(a,1e3)})),e.addEventListener("click",(function(e){this.setAttribute("disabled","disabled"),clearInterval(d),t.removeAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.503547d5.js.map