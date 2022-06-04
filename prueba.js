// console.log("hola")

// let x= 45; //number
// let y= "algo"; //string
// let u= true;  // boolean

// console.log(x);

// let nombre= "karina";
// let apellido= "monetti";

// console.log(`Hola ${nombre} ${apellido}, ¿cómo estás?`); 


// var userSomething= prompt("Dime algo: ");
// console.log(userSomething);

// var userNumber= parseInt(prompt("Dime tu número de teléfono: "));
// console.log(userNumber);

// console.log(`Te enviaré un SMS al número ${userNumber}`)



////////////////////////////////////////////////
// alert("Esta es una calculadora que multiplica números");
// let firstNumber= parseInt(prompt("Dime un número: "));
// let secondNumber= parseInt(prompt("Dime otro número: "));
// // var result= firstNumber + secondNumber; 
// alert(`El resultado de la multiplicación entre ${firstNumber} y ${secondNumber} es: ${firstNumber* secondNumber}`)


//////////////////////////////////////////////////
// Operadores lógicos
// let number1= 56;
// let number2= 7;
// let something= "56";

// console.log(number1 > number2)
// console.log(number1 < number2)

// console.log(number1 === number2)

// console.log(`Con == ${number1 == something}`)
// console.log(`Con === ${number1 === something}`)

// console.log(`Con !== ${number1 !== something}`)
// console.log(`Con != ${number1 != something}`)

// console.log(16 <= 16);
// console.log(16 >= 16);

/////////////////////////////////////////////////////
// let firstNumber= parseInt(prompt("Dime un número:"));

// if(firstNumber > 5){
//     alert("El número es mayor que 5");
// } else if (firstNumber === 5){
//     alert("El número es 5");
// }else{
//     alert("El número es menor a 5");
// }

////////////////////////////////////////////

// Realizar un programa que;
//         1) Solicite un numero al usuiaro por PROMTP y luego lo convierta a valor numerico con Number.
//         2) Hacer la operacion del resto con 2 y el numero ingresado.
//         3) 
//         - Si el resto es igual a 0, infomrar que espar
//         - Si el resto es distinto de 0, infomrar que es impar
//         - Si el numero ingresado es 0, infomrar que no tiene paridad.


// let giveMeYourNumber= parseInt(prompt("Dime un número: "));
// let resto= giveMeYourNumber%2;
// if(giveMeYourNumber === 0){
//     alert("El número no tiene paridad porque es 0"); 
// } else if (resto === 0){s
//     alert("El número es par");
// } else{
//     alert("El número es impar");
// }

////////////////////////////////////////////
alert("Espacio retringido");
var firstnumber = prompt("Ingrese su codigo"); //parseint= new number. Convierte un string en numeros.
if (firstnumber.length>=4) {
    console.log("Acceso consedido");
} else{console.log("Acceso denegado");}
