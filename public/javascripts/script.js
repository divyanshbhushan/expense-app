const formContainer = document.querySelector('#form_container');
const formModalTriggerBtn = document.querySelector('#formModalTriggerBtn');

formModalTriggerBtn.addEventListener("click", () =>{
    formContainer.classList.toggle('hidden')
})