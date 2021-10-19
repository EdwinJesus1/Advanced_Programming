var myInt = 24;
var myFloat = 3.1416;
var  myString = "Luis";
var myNull = null;

//TypeCasting: imp---exp
console.log(typeof myFloat);
myFloat = String(myFloat);
console.log(typeof myString);

myString = Number(myString);
console.log(myString);

//False Values//
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(myNull));
console.log(Boolean(false));

//True Valeu//
console.log(Boolean("Luis"));
console.log(Boolean(5));
console.log(Boolean({key:"5"}));
console.log(Boolean( [] ));

console.log(typeof myNull);

console.log( isNaN( Number("5x") ) );

// TypeCasting Expli Methods

console.log( Number.parseInt(myString) );
console.log( Number.parseFloat(myString) );

// TypeCasting coersion implicit:

var result= "hola" + "mundo";
var resultNumbersStringAdd = 2 + "22";
var resultNumbersStringRenaider = 2 - "22";
console.log( resultNumbersStringRenaider);
