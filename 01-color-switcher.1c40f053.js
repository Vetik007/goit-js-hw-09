!function(){var t=document.querySelector("[data-start]"),e=null,a=document.querySelector("[data-stop]");function n(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){e=setInterval(n,1e3),t.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){clearInterval(e),t.disabled=!1,a.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.1c40f053.js.map
