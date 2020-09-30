// Во всех функциях обработчиках значение должно браться из обьекта события. У тебя оно в параметре функции указано, но не использовано по назначению
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.addEventListener('input', onInputFontSize);

inputRef.value = '0';
textRef.style.fontSize = `${inputRef.value}px`;

function onInputFontSize(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}
