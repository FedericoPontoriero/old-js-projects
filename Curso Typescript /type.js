// Variables
var age = 45;
var num = 100;
var first = 0x67cf;
var second = 301;
var third = 53;
var employeeName = "Johnson";
var isPresent = true;
var u = undefined;
var n = null;
var fruits = ["banana", "apple"];
var otherfruits = ["banana", "apple"];
function sum(x, y) {
    return x + y;
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
var employee = /** @class */ (function () {
    function employee(empId, name) {
        this.empId = empId;
        this.empName = name;
    }
    return employee;
}());
// Type assertion
var someValue = "this is a string";
var strLength = someValue.length;
var otherStrLength = someValue.length;
// Type generics: reusable components.
function identity(arg) {
    return arg;
}
// In operator: type narrowing
// function move(pet: Fish | Bird) {
//     if("swim" in pet) {
//         return pet.swim();
//     }
//     return pet.fly();
// }
// Index types
function pluck(o, propertyNames) {
    return propertyNames.map(function (n) { return o[n]; });
}
// Conditional types
// T extends U ? X : Y
// Assert signatures
