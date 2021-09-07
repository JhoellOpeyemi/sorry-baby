const button = document.querySelector("button");
const container = document.querySelector(".container");

let num = 0;

button.addEventListener("click", () => {
  num++;
  if (num % 2 == 1) {
    container.classList.add("open");
    button.style.animation = `button 8s ease-in forwards`;
    button.textContent = "Replay";
  } else {
    container.classList.remove("open");
    button.textContent = "Click me! I'm sorry";
  }
});
