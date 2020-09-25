const incrBtnRef = document.querySelector('[data-action="increment"]');
const decrBtnRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("#value");

let counterValue = 0;

incrBtnRef.addEventListener("click", onIncrBtnClick);
decrBtnRef.addEventListener("click", onDecrBtnClick);

function onIncrBtnClick(event) {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function onDecrBtnClick(event) {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
