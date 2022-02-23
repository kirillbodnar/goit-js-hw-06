const refs = {
  boxes: document.querySelector("#boxes"),
  inputAmount: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

refs.createBtn.addEventListener("click", onButtonClick);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function onButtonClick() {
  createBoxes(refs.inputAmount.value);
}

function createBoxes(amount) {
  const elements = [];
  let elementSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const size = `${elementSize}px`;
    const bgColor = getRandomHexColor();
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="
    width:${size};
     height:${size};
     background-color:${bgColor};"
     class="box";>`
    );

    // elements.push(element);
    // element.classList.add("box");
    // element.style.width = size;
    // element.style.height = size;
    // element.style.backgroundColor = color;

    elementSize += 10;
  }
  refs.boxes.append(...elements);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
