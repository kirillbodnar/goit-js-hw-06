let counterValue = 0;
const refs = {
  plusValue: document.querySelector('[data-action="increment"]'),
  minusValue: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

refs.minusValue.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.plusValue.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
