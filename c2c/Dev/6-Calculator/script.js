const input = document.querySelector(".calc-typed");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      input.value = "";
    } else if (button.textContent === "=") {
      input.value = eval(input.value);
    } else if (button.textContent === "&lt;") {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += button.textContent;
    }
  });
});
