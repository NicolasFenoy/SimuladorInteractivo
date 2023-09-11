alert ("Bienvenido al Simulador Interactivo de Nicolás. Este es un simulador interactivo en el que usted tiene un hermano menor y le regalara una cantidad especifica de juguetes.");

let nombreMenor = prompt ("Como se llama tu hermano, puedes elegir entre estos 5 nombres = MARTIN, JUAN, ALEXIS, ALEJO, LEO").toUpperCase();

while (nombreMenor !== "MARTIN" &&   nombreMenor !== "JUAN"  &&  nombreMenor !== "ALEXIS"  && nombreMenor !== "ALEJO" &&  nombreMenor !== "LEO"  ) {
    alert ("Datos incorrectos, apriete aceptar para continuar");
    nombreMenor = prompt ("Ingrese los datos nuevamente").toUpperCase();
}

alert (" El nombre de tu hermano es " + nombreMenor);

let Uno = prompt ("Ingrese el número de juguetes que quiere tu hermano, en un rango de 1 a 10 juguetes ");

while (Uno < 1 || Uno > 10 ){
    alert ("Datos incorrectos, apriete aceptar para continuar");
    Uno = prompt ("Ingrese los datos nuevamente");
}

let Dinero = prompt (" El número de juguetes que quiere " + nombreMenor + " es/son " + Uno + " . " + " Vas a comprar los juguetes a una tienda. Elíge la cantidad de dinero que posees, entre 3500 y 9750 pesos ");
while (parseInt (Dinero < 3500 || Dinero > 9750)){
    alert ("Rango de dinero inexacto");
    Dinero = prompt ("Ingrese los datos nuevamente");
}
alert (" Tienes " + Dinero + " pesos ");

let elegir = Number (prompt ("Los precios disponibles de los juguetes de la primera tienda son entre 500 pesos y 800 pesos, elíge el que más te beneficie"));
while (elegir < 500 || elegir > 800 ) {
    alert (" Vendedor = Lo siento señor/a, no tenemos juguetes con esos precios ");
    elegir = prompt (" Ingrese los datos nuevamente");
}
let operacion = +Uno * elegir;

function operacionJuguetes (){
    alert (operacion + " pesos ");
}
alert (" Ves el precio total de lo que te saldría comprar el/los juguete/s = ");

operacionJuguetes();


let cuantoMeQueda = Dinero - operacion;
alert (" Te quedan " + cuantoMeQueda + " pesos ");

if (cuantoMeQueda < 0) {
    alert ("Le debes dinero a el vendedor" + cuantoMeQueda);
}

alert (" Si quieres volver a utilizar el simulador interactivo, apreta la equis que esta en la esquina superior izquieda, al apretarla pasará a ser una flecha circular, volvela a apretar y el simulador comenzara de nuevo. ");










