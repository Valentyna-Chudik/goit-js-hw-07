// Во всех функциях обработчиках значение должно браться из обьекта события. У тебя оно в параметре функции указано, но не использовано по назначению

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.target.value === '') {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = event.target.value;
  }
}
