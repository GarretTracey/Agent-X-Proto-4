function agent() {
  var setName = document.getElementById("AgentX").value;
  localStorage.setItem("AgentX", setName);
}

var nameButton = document.getElementById("nameButton");
nameButton.addEventListener("click", agent);
