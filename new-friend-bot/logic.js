let input = document.getElementById("main-input");

function sayHello(name) {
  input.value = "";
  let display = document.getElementById("display");
  display.textContent = "Hey " + String(name) + ". Nice to meet you!";
  setTimeout(() => {
    display.textContent = "How old are you?";
    input.onchange = e => getAge(e.target.value);
  }, 2000);
}

function getAge(age) {
  input.value = "";
  let display = document.getElementById("display");
  display.textContent =
    "Wow, " + String(age) + " years old. What a great age!";
  setTimeout(() => {
    display.textContent = "Okay. This is what I've got so far...";
    let table = document.getElementById("table");
    table.style.display = "block";
  }, 3000);
}

input.onchange = e => sayHello(e.target.value);