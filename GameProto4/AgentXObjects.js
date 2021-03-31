function item() {
  var setAlpha = document.getElementById("Alpha").value;
  localStorage.setItem("Alpha", setAlpha);
  var setBeta = document.getElementById("Beta").value;
  localStorage.setItem("Beta", setBeta);
  var setGamma = document.getElementById("Gamma").value;
  localStorage.setItem("Gamma", setGamma);
}

var objectButton = document.getElementById("objectButton");
objectButton.addEventListener("click", item);
