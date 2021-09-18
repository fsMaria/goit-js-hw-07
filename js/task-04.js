const addListenerDecrementBtn = document.querySelector('[data-action="decrement"]');
const addListenerIncrementBtn = document.querySelector('[data-action="increment"]');
// свторюємо лічилник
let counterValue = 0;
const decrement = () => {
    counterValue -=1;
    document.getElementById('value').textContent = counterValue;
};
const increment = () => {
    counterValue +=1;
    document.getElementById('value').textContent = counterValue;
};
// вішаємо прослушку
addListenerDecrementBtn.addEventListener('click', decrement);
addListenerIncrementBtn.addEventListener('click', increment);