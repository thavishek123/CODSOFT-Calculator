let input = document.getElementById("input");

function appendToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = "";
}

function calculate() {
  input.value = eval(input.value);
}