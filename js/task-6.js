const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener(`blur`, onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);

  const inputDataLength = Number(inputRef.getAttribute(`data-length`));
  const inputValueLength = inputRef.value.length;

  if (inputDataLength === inputValueLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
