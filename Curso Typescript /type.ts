// Setup
// tsc --init => config file
// tsc -w => watch mode

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

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("the coordinate is " + pt.x);
    console.log("the coordinate is " + pt.y);
}

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

// Objects
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
    console.log(`Hello, ${name}`);
    if (isPaid) console.log("You are a premium user");
    console.log("Want to become a premium user?");
}

createUser({ name: "fede", isPaid: false });

function createCourse(): { name: string; price: number } {
    return { name: "react", price: 599 };
}

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number;
};

function anotherCreateUser(user: User): User {
    return { _id: "", name: "", email: "", isActive: true };
}

anotherCreateUser({
    _id: "",
    name: "fede",
    email: "fede@gmail.com",
    isActive: true,
});

type cardNumber = {
    cardnumber: string;
};

type cardDate = {
    cardDate: string;
};

// Combination of types
type cardDetails = cardNumber &
    cardDate & {
        cvv: number;
    };

// Arrays
const superHeros: string[] = [];
const heroPower: Array<number> = [];

superHeros.push("spiderman");
heroPower.push(29);

const data: (string | number)[] = ["1", "2", 3];

const tuple: [string, number, boolean] = ["", 2, true];

// Enums
enum SeatChoice {
    aisle,
    middle,
    window,
}

const mySeat = SeatChoice.window;

// Interfaces
interface Users {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string;
    startTrail(): string;
    getCoupon(couponName: string): number;
}

interface Users {
    githubToken: string;
}

interface Admins extends Users {
    role: "admin" | "ta" | "learner";
}

const fede: Admins = {
    role: "admin",
    githubToken: "github",
    dbId: 2314,
    email: "fede@gmail.com",
    userId: 1345,
    startTrail: () => {
        return "Trail started";
    },
    getCoupon: (name: "fede") => {
        return 10;
    },
};

// Interfaces for objects, types for functions

// Classes
// class UserClass {
//     email: string;
//     name: string;
//     private city: string = "";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

class UserClass {
    protected _courseCount = 1;

    readonly city: string = "CABA";
    constructor(
        public email: string,
        public name: string // private userId: string
    ) { }

    private deleteToken() {
        console.log("token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNumb) {
        // No return type
        if (courseNumb <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumb;
    }
}

class SubUser extends UserClass {
    // It cannot access private properties and methods
    isFamily: boolean = true;
    // Protected can access
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const user = new UserClass("user@gmail.com", "user");
// user.city = "CABA"; can't access it

// Interfaces
interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): string;
}

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) { }
// }

// class Youtube implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ) { }

//     createStory(): string {
//         return "story created";
//     }
// }

// Abstract classes
abstract class TakePhoto {
    // Cannot be instantiated
    constructor(public cameraMode: string, public filter: string) { }

    abstract getSepia(): void;
    getReelTime(): number {
        return 8;
    }
}

class Snapchat extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("sepia");
    }
}
// If extendeded can be instantiated
const hl = new Snapchat("camera", "filter", 9);

// Generics
// function identity(arg: number):number{
//     // Without generics
//     return arg;
// }

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree("");

//Same as three
function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 2;
    return products[myIndex];
};

interface Database {
    connection: string;
    username: string;
    password: string;
}

function someFunction<T, U extends Database>(valOne: T, valTwo: U) {
    return {
        valOne,
        valTwo,
    };
}

someFunction(3, { connection: "hold", username: "ohl", password: "str" });

interface Usuario {
    name: string;
    email: string;
}

interface Administrador {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: Usuario | Administrador) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    } else {
        pet;
        return "bird food";
    }
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectangle;

// function getTrueShape(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2;
//     }
//     return shape.side * shape.side;
// }

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.side * shape.side;

        case "rectangle":
            return shape.length * shape.width;

        default:
            const _defaultForShape: never = shape;
            return _defaultForShape;
    }
}

export { };
