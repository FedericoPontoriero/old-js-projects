// npx tsc nombreArchivo.ts -w para que vaya compilando a medida que se guarda
// Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString = "Hello World";
var myNumber = 22;
var myBoolean = true;
var myVar = 'cualquiera';
myVar = 23;
// Strings
document.write(myNumber.toString());
// Arrays
var stringArray = [];
var numberArray = [];
var booleanArray = [];
var anyArray = [];
// Tuples
var strNumTuple = ['Hola', 23];
// void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
// Functions
function sum(num1, num2) {
    return num1 + num2;
}
;
var mySum = function (num1, num2) {
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
    return "".concat(firstName, " ").concat(lastName);
}
;
function myVoidFunction() {
    return;
}
function showToDo(toDo) {
    console.log("".concat(toDo.title, " - ").concat(toDo.text));
}
var myToDo = {
    title: 'Eat Dinner',
    text: 'lorem'
};
showToDo(myToDo);
// Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered"));
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInVoice = function () {
        console.log("".concat(this.name, " paided invoice"));
    };
    return User;
}());
;
var juan = new User('juan', 'juan@mail.com', 28);
console.log(juan.ageInYears());
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(id, name, email, age) {
        return _super.call(this, name, email, age) || this;
    }
    Members.prototype.payInVoice = function () {
        _super.prototype.payInVoice.call(this);
    };
    return Members;
}(User));
var miguel = new Members(1, 'miguel', 'miguel@mail.com', 24);
miguel.payInVoice;
