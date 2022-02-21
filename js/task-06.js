const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputValidator);

function inputValidator(event) {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
