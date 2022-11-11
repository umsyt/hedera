// Yeah, you can try to find the answer from this, but try to do the level as intended
// I promise, you won't regret it :)

document.addEventListener("keydown", down);
document.addEventListener("keyup", up);

var cool = [77, 72, 83, 86, 80, 84, 82, 78, 79, 73, 65, 71, 89, 67, 70, 81, 74, 85, 69, 66, 68, 76, 75, 88, 90, 87]
var sook = [27, 12, 33, 37, 28, 32, 19, 31]

function down(k) {
  var jooch = cool.indexOf(k.keyCode);
  
  if (sook.includes(37-jooch)) {
    document.getElementById("three").src = "3yay.jpg";
  }
  else if (cool.includes(k.keyCode)) {
    document.getElementById("three").src = "3awman.jpg";
  }
}
    
function up(k) {
    document.getElementById("three").src = "3.jpg";
};

localStorage.buttonmasher = "7hAnKsb1";
