!function(){var e={openModal3Btn:document.querySelector("[data-modal3-open]"),closeModal3Btn:document.querySelector("[data-modal3-close]"),modal3:document.querySelector("[data-modal3]")};function o(){e.modal3.classList.toggle("is-hidden"),!e.modal3.classList.contains("is-hidden")?(document.body.style.overflow="hidden",window.addEventListener("keydown",d)):(document.body.style.overflow="",window.removeEventListener("keydown",d))}function d(e){"Escape"===e.key&&o()}e.openModal3Btn.addEventListener("click",o),e.closeModal3Btn.addEventListener("click",o),e.modal3.addEventListener("keydown",(function(o){"ArrowUp"!==o.key&&"ArrowDown"!==o.key||(o.preventDefault(),"ArrowUp"===o.key?e.modal3.scrollTop-=50:e.modal3.scrollTop+=50)}))}();
//# sourceMappingURL=index.519183c9.js.map