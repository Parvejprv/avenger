const buttons = document.querySelectorAll(
  ".button, .button1, .med, .med-sm, .large, .medium, .spacebar"
);
const inputField = document.getElementById("inputField");

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.transform = "scale(1.1)";
    button.style.backgroundColor = "lightgray";
    if (button.innerHTML.trim() === "backspace") {
      inputField.value = inputField.value.slice(0, -1);
    } else if (button.innerHTML.trim() === "delete") {
      inputField.value = inputField.value.slice(1);
    } else {
      inputField.value += button.innerHTML.trim();
    }
  });

  button.addEventListener("mouseup", () => {
    button.style.transform = "scale(1)";
    on;
    button.style.backgroundColor = "whitesmoke";
  });

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "lightgray";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "whitesmoke";
  });
});
