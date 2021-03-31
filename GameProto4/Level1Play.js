function levelOne() {
  var setVerb = document.getElementById("verb").value;
  localStorage.setItem("verb", setVerb);
  var setLocation = document.getElementById("location").value;
  localStorage.setItem("location", setLocation);
  var setTime = document.getElementById("time").value;
  localStorage.setItem("time", setTime);
}

var level1Output = document.getElementById("level1Output");
level1Output.addEventListener("click", levelOne);
