const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    window.alert("All fields must be filled");
    return;
  }

  console.log(`${email.name}: ${email.value}`);
  console.log(`${password.name}: ${password.value}`);

  event.currentTarget.reset();
}
