/* let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let angulo = document.getElementById("angulo");
let mostrarResultado = document.getElementById("mostrarResultado");
let reset = document.getElementById("reset");

angulo.addEventListener("click", () => {
  let num1Value = parseInt(num1.value);
  let num2Value = parseInt(num2.value);
  obtenerAngulo(num1Value, num2Value);
});

reset.addEventListener("click", () => {
  resetear();
});

export function obtenerAngulo(number1, number2) {
  let sumaAngulos = number1 + number2;
  let anguloRestante = 180 - sumaAngulos;
  mostrarResultado.innerHTML =
    "El angulo restante tiene " + anguloRestante + " grados";
}

function resetear() {
  num1.value = "";
  num2.value = "";
  mostrarResultado.innerHTML = "";
}
 */

export function thirdAngle(firstAngle, secondAngle) {
  return 180 - (firstAngle + secondAngle);
}
