const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const changeInputColor = (refs.input == '') ? 
       refs.nameLabel = 'незнакомец' : refs.nameLabel.textContent = event.currentTarget.value;  
    };