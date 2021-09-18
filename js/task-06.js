// створюємо перемінні з потрібними елемантами
const inputDataLen = document.querySelector('[data-length]');
const inputlength = inputDataLen.dataset.length;
const inputValidation = document.querySelector('#validation-input');

// вішаємо слухача подій
inputValidation.addEventListener('change', chekInputLength);

//функція для зміни кольору інпута
function chekInputLength(event) {
if (event.target.value.length == inputlength){
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
} else {
    inputValidation.classList.remove('valid');
    inputValidation.classList.add('invalid');
}
}