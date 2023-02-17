console.log("hello world");


//no hace falta declarar variables pero es recomendable para que no se pisen
var a;
a = 1;

console.log(a);


//Es un lenguaje no tipado pero salvo excepciones no cambiar el tipo de las variables
var myInteger = 1;
var myDouble = 2.1;
var myString = "Bruno";
var myDouble = true;


// se difnen dos tipos de igualdades == y ===

var a = 1, b = "1";
if(a == 1){
    console.log("tienen el mismo valor pero no implica el mismo tipo");
}else if(a === b){
    console.log("tienen todo igual");
}else{
    console.log("son distintos");
}

//todo en javascipt es un objeto