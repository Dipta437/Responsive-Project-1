window.onresize = screenSize;
window.onload = screenSize;

function screenSize () {
  myWidth = window.innerWidth;
  document.getElementById("size").innerHTML = "Width :" + myWidth + " px"
}
