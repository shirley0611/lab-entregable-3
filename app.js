let num1 = parseInt(prompt("primr numero"));
let num2 = parseInt(prompt("segundo numero"));
let operacion = "";
function realizarOperacion(num1, num2, operacion) {
    if (operacion == "suma") {
       alert("la resta es: " + (num1 + num2))
    } else if(operacion == "resta") {
        alert("la resta es: " + (num1 -num2));
    } else if(operacion == "division") {
        if (num2 == 0){
            alert("no es posible dividir por cero");
        } else {
            alert("la divison es: " + (num1 / num2));
        }
    } else if (operacion == "multiplicacion"){
    alert("la multiplicacion es: " + (num1 * num2));
    } else{
    alert("operacion invalida");
    }


   
}

while(operacion != "salir"){
    operacion = prompt("elige operacion:suma, resta. division multiplicacion");
    realizarOperacion(num1, num2, operacion);
}



