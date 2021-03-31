function levelThree() {
  var setfeeling1 = document.getElementById("feeling1").value;
  localStorage.setItem("feeling1", setfeeling1);
  var setcontraptionM1 = document.getElementById("contraptionM1").value;
  localStorage.setItem("contraptionM1", setcontraptionM1);
  var setfeeling2 = document.getElementById("feeling2").value;
  localStorage.setItem("feeling2", setfeeling2);
  var setcontraptionM2 = document.getElementById("contraptionM2").value;
  localStorage.setItem("contraptionM2", setcontraptionM2);
  var setfeeling3 = document.getElementById("feeling3").value;
  localStorage.setItem("feeling3", setfeeling3);
  var setcontraptionM3 = document.getElementById("contraptionM3").value;
  localStorage.setItem("contraptionM3", setcontraptionM3);
}

var level1Output = document.getElementById("level3Play");
level1Output.addEventListener("click", levelThree);
