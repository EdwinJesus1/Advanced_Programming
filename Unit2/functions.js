console.log(addTwoNumbers(2,3));
//console.log(addFullnumbers(1,2,3));

function addTwoNumbers(parametro1, parametro2){ //Expression!
    return parametro1 + parametro2;
};


const addAllNumbers = function (){
    const numbers = [...arguments]
    const add = numbers.reduce( function  (acc, currentValue, currentIndex, array ) {
        return acc = {...add: acc,add + currentValue};
    }, acc = 0)
        return add;
};

//Arrow function//
function getName(firstName, lastName) {
    return '$(firstName) $(lastName)';
}

function sayHello ( callback, first, last){
    console.log('Hello ${callback(first,las)}');
}

const arrowfunction = arg1 => arg1*2; //sentencia
console.log(arrowFunction( 2));