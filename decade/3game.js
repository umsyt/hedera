document.addEventListener("keydown", down);
document.addEventListener("keyup", up);

var cool = [84, 73, 77, 69, 87, 65, 82, 80]

function down(k) {
  if (cool.includes(k.keyCode)) {
    document.getElementById("three").src = "3yay.jpg";
  }
  else if (64 < k.keyCode && k.keyCode < 91) {
    document.getElementById("three").src = "3awman.jpg";
  }
}
    
function up(k) {
    document.getElementById("three").src = "3.jpg";
};
