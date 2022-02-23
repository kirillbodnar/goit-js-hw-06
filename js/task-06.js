const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputValidator);

function inputValidator(event) {
  const dataLength = input.dataset.length;
  if (event.currentTarget.value.length === Number(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
