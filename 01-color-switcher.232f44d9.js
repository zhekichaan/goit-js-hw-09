const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStop.setAttribute("disabled","disabled");let e=null;t.btnStart.addEventListener("click",(function(n){e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.toggleAttribute("disabled"),t.btnStop.toggleAttribute("disabled")})),t.btnStop.addEventListener("click",(function(n){clearInterval(e),t.btnStart.toggleAttribute("disabled"),t.btnStop.toggleAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.232f44d9.js.map