import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form");a.addEventListener("input",i);a.addEventListener("submit",s);o();function i(t){const l=document.querySelector('[name="email"]').value.trim(),m=document.querySelector('[name="message"]').value.trim();e.email=l,e.message=m,localStorage.setItem("feedback-form-state",JSON.stringify(e))}function o(){let t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e=t,e.email&&(a.elements.email.value=e.email),e.message&&(a.elements.message.value=e.message))}function s(t){t.preventDefault();const l=document.querySelector('[name="email"]').value.trim(),m=document.querySelector('[name="message"]').value.trim();if(l==""||m==""){alert("Fill please all fields");return}console.log(e),localStorage.clear(),e.email="",e.message="",a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
