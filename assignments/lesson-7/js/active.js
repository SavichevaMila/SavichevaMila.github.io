var header = document.getElementById("myDIV");
var bts = header.getElementsByClassName("bt");
for (var i = 0; i < bts.length; i++) {
  bts[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}