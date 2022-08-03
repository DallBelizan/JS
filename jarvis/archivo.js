
/*
let bienvenida = prompt("¿Cómo te llamas?")
if (true) {
    console.log("Hola " + bienvenida + "!")

}

let respuesta = parseInt(prompt("Cuenta regresiva en...(Del 3 hasta el 6 por favor)"))


while (respuesta >= 7) {
    alert("Ingresaste " + respuesta)
    alert("MENOS de 6 te dije!")
    respuesta = parseInt(prompt("UN NUMERO MENOR A 6"))
}

while (respuesta <= 2) {
    alert("Ingresaste "  respuesta,)
    alert("MAYOR a 3 te dije!")
    respuesta = parseInt(prompt("UN NUMERO MAYOR A 3"))
}


{
    for (respuesta; respuesta >= 1; respuesta--)

        alert(respuesta);
    while (respuesta != 0)
        break;
    alert(respuesta);

    console.warn("Ahora sí!");
}
*/





//let primerNro = 0;
//let segundoNro = 0;
//let resultado = 0;
/*
let interes3 = 1.15
let interes6 = 1.25
let interes12 =1.35
*/

/*
function sumar (num1, num2){
    return num1 + num2
}

let resultado = sumar (1, 2) 

console.log (resultado)
*/



//Calcular pagos en cuotas sobre un monto determinado.
//Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. 
//A partir de los ejemplos mostrados la primera clase, deberás:
//Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros ? ¿un simulador de créditos ? ¿un simulador personalizado ?

let precioContado = parseFloat(prompt("Ingrese el importe"));
let cuotas = parseFloat(prompt("Ingrese el numero de cuotas (1, 3, 6 o 12)"));
let precioTotal;
let resultado;

function calcular(atributoUno, atributoDos) {
    return atributoUno / atributoDos

}

function calcularInteres (importe, cuotita) {
    let interes;
     switch (cuotita) {
        case 1: //sin interes 
            interes = 1;
            break;    
        case 3: // interes 15% 
            interes = 1.15;
            break;
        case 6: // interes 25%
            interes = 1.25;
            break;
        case 12:// interes 40%
            interes = 1.40;
            break;
        default:
            interes = 1;
            break;
    }

    return importe * interes;
}


precioTotal = calcularInteres(precioContado, cuotas)

resultado = calcular(precioTotal, cuotas)
console.log("El precio total con el interés es:" + precioTotal + "Y el valor por cuota es de:" + resultado);



/*

function realizarCalculo(precio, cuotas) {
    



}


function mostrar(mensaje) {
    console.log("Da un total de:", resultado)
}

mostrar(Resultado);
*/