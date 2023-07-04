import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';


const form = document.querySelector('.feedback-form');
// console.log(form);

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(storageKey)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(event) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(storageKey, JSON.stringify(dataForm));
}

function reloadPage() {
    if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
}
}

function onFormSubmit(event) {
event.preventDefault();
console.log({ email: email.value, message: message.value });

if (email.value === '' || message.value === '') {
    return alert(`Усі обов'язкові поля мають бути заповнені.`);
}

localStorage.removeItem(storageKey);
event.currentTarget.reset();
dataForm = {};
}
