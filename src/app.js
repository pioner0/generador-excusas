import "./style.css";
import "./assets/img/4geeks.ico";
import "./assets/img/rigo-baby.jpg";
let quien1 = [
  "El dinosaurio",
  "Mi tia",
  "Mi murcielago",
  "Mi cascarudo",
  "Mi hermano"
];
let que1 = ["se comió", "aplastó", "robó", "rompió", "ensució"];
let cuando1 = [
  "antes de ir a trabajar",
  "justo cuando salia a tomar el omnibus",
  "mientras merendaba",
  "cuando me estaba bañando"
];

function excuseGenerator(quien, que, cuando) {
  let numQuien = Math.floor(Math.random() * quien.length);
  let numQue = Math.floor(Math.random() * que.length);
  let numCuando = Math.floor(Math.random() * cuando.length);
  return (
    quien[numQuien] +
    " " +
    que[numQue] +
    " " +
    "mi tarea" +
    " " +
    cuando[numCuando]
  );
}
function onLoad() {
  var excusa = document.getElementById("excusa");
  excusa.innerHTML = excuseGenerator(quien1, que1, cuando1);
}
window.onload = onLoad;
