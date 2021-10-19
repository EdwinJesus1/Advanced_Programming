var arrayNombres  = new Array();
var arrayApellido = new Array();
var arrayCarrer   = new Array();
var arrayAge = new Array();
var arrayQuarter = new Array();

arrayNombres[0] = "Edwin";
arrayNombres[1] = "Alfonso";
arrayNombres[2] = "Pedro";

arrayApellido[0] = "Jesus";
arrayApellido[1] = "Lopez";
arrayApellido[2] = "Gutierez";

arrayAge[0] = 20;
arrayAge[1] = 19;
arrayAge[2] = 25;

arrayCarrer[0] = "EmbeddedSystems";
arrayCarrer[1] = "Data";
arrayCarrer[2] = "Robotics";

arrayQuarter[0] = 3;
arrayQuarter[1] = 6;
arrayQuarter[2] = 9;

var datos  = [];
var objeto = {};

for(var i= 0; i < arrayNombres.length; i++) {

    var nombre = arrayNombres[i];

   datos.push({ 
        "nombre"    : arrayNombres[i],
        "apellido"  : arrayApellido[i],
        "años"    : arrayAge[i],
        "Carrera" : arrayAge[i],
        "Cuatri" : arrayQuarter
    });
}

objeto.datos = datos;
console.log(JSON.stringify(objeto));
