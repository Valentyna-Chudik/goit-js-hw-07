const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (inputRef.value === "") {
    outputRef.textContent = "незнакомец";
  } else {
    outputRef.textContent = inputRef.value;
  }
}
