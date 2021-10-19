const myObj = {
    name: "Luis",
    age: 24,
    greeting: function(menssage) {
        console.log("this is equal: ${JSON.strinfy(this)}");
        console.log("${menssage} soy ${this.name} y tengo ${this.age}");
    }
};

const cpyStudent = {...student};
cpyStudent.name = "Fernando";
console.log(student);
console.log(cpyStudent);