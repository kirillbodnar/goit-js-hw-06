const refs = {
  color: document.querySelector(".color"),
  btnColorChange: document.querySelector(".change-color"),
};

const randomColor = getRandomHexColor();

refs.btnColorChange.addEventListener("click", onBtnColorChange);

function onBtnColorChange() {
  document.body.style.backgroundColor = randomColor;
  refs.color.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
