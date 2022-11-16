// Variables
let age: number = 45;

const num: number = 100;

let first: number = 0x67cf;
let second: number = 0o455;
let third: number = 0b110101;

let employeeName: string = "Johnson";

let isPresent: boolean = true;

let u: undefined = undefined;
let n: null = null;

let fruits: string[] = ["banana", "apple"];

let otherfruits: Array<string> = ["banana", "apple"];

function sum(x: number, y: number): number {
    return x + y;
}

function handleError(errMsg: string): never {
    throw new Error(errMsg);
}

class employee {
    empId: number;
    empName: string;

    constructor(empId: number, name: string) {
        this.empId = empId;
        this.empName = name;
    }
}

// Type assertion
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
let otherStrLength: number = (<string>someValue).length;

// Type aliases: doesn't create a new type, it gives that type a new name.
type Container<T> = { value: T };

// Type generics: reusable components.
function identity(arg: string): string {
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
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map((n) => o[n]);
}

// Index signatures: string or number
interface Dictionary<T> {
    [key: string]: T;
}

// Mapped types: new types based on old types
type Keys = "option1" | "option2";
type Flags = { [K in Keys]: boolean };

// Conditional types
// T extends U ? X : Y

// Assert signatures
