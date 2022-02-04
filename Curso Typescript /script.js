"use strict";
// npx tsc nombreArchivo.ts -w para que vaya compilando a medida que se guarda
// Types
let myString = "Hello World";
let myNumber = 22;
let myBoolean = true;
let myVar = 'cualquiera';
myVar = 23;
// Strings
document.write(myNumber.toString());
// Arrays
let stringArray = [];
let numberArray = [];
let booleanArray = [];
let anyArray = [];
// Tuples
let strNumTuple = ['Hola', 23];
// void, undefined, null
let myVoid = undefined;
let myNull = null;
let myUndefined = undefined;
// Functions
function sum(num1, num2) {
    return num1 + num2;
}
;
let mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return `${firstName} ${lastName}`;
}
;
function myVoidFunction() {
    return;
}
function showToDo(toDo) {
    console.log(`${toDo.title} - ${toDo.text}`);
}
let myToDo = {
    title: 'Eat Dinner',
    text: 'lorem'
};
showToDo(myToDo);
// Clases
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    register() {
        console.log(`${this.name} is registered`);
    }
    showMeAge() {
        return this.age;
    }
    ageInYears() {
        return this.age + ' years';
    }
    payInVoice() {
        console.log(`${this.name} paided invoice`);
    }
}
;
let juan = new User('juan', 'juan@mail.com', 28);
console.log(juan.ageInYears());
class Members extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
    }
    payInVoice() {
        super.payInVoice();
    }
}
let miguel = new Members(1, 'miguel', 'miguel@mail.com', 24);
miguel.payInVoice;
// Enums
var Rolo;
(function (Rolo) {
    Rolo[Rolo["ADMIN"] = 0] = "ADMIN";
    Rolo[Rolo["READ_ONLY"] = 1] = "READ_ONLY";
    Rolo[Rolo["AUTHOR"] = 2] = "AUTHOR";
})(Rolo || (Rolo = {}));
;
