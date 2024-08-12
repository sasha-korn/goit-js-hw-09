let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);
initForm();

function onInput(event) {
  const fieldEmail = document.querySelector('[name="email"]').value.trim();
  const fieldMsg = document.querySelector('[name="message"]').value.trim();

  formData.email = fieldEmail;
  formData.message = fieldMsg;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function initForm() {
  let storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storageData) {
    formData = storageData;
    if (formData.email) {
      form.elements.email.value = formData.email;
    }
    if (formData.message) {
      form.elements.message.value = formData.message;
    }
  }
}

function onSubmit(event) {
  event.preventDefault();
  const fieldEmail = document.querySelector('[name="email"]').value.trim();
  const fieldMsg = document.querySelector('[name="message"]').value.trim();

  if (fieldEmail == '' || fieldMsg == '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.clear();
  formData.email = '';
  formData.message = '';
  form.reset();
}
