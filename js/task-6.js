// Во всех функциях обработчиках значение должно браться из обьекта события.У тебя оно в параметре функции указано, но не использовано по назначению

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener(`blur`, onInputChange);

function onInputChange(event) {
  const inputDataLength = Number(inputRef.getAttribute(`data-length`));
  // console.log(typeof inputDataLength);
  const inputValueLength = event.target.value.length;

  if (inputDataLength === inputValueLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
