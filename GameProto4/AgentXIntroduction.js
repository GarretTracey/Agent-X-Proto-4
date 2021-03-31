function reset() {
  localStorage.clear();
}

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", reset);
