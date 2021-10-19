const myObj = {
    name: "Luis",
    age: 24,
    greeting: function(menssage) {
        console.log("this is equal: ${JSON.strinfy(this)}");
        console.log("${menssage} soy ${this.name} y tengo ${this.age}");
    }
};

const Carlos = Object.create(student);
Carlos.name = "Carlos Jose";
Carlos.age = 20;
Carlos.greeting("Hola mundo");

const Cesar = Object.create(student);
Cesar.name = "Cesar jesus";
Cesar.age = 20;
Cesar.greeting("Hello world");
Cesar.programming = function (problem) {
    //Logic and computing.
    console.log("Programming solution for", problem);
};
Cesar.programming("Create an amazing Web application.");

console.log(this);