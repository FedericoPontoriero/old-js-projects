// npx tsc nombreArchivo.ts -w para que vaya compilando a medida que se guarda
// Types

let myString: string = "Hello World";

let myNumber: number = 22;

let myBoolean: boolean = true;

let myVar: any = "any";
myVar = 23;

// Strings

document.write(myNumber.toString());

// Arrays

let stringArray: string[] = [];
let numberArray: number[] = [];
let booleanArray: boolean[] = [];
let anyArray: any[] = [];

// Tuples

let strNumTuple: [string, number] = ["Hola", 23];

// void, undefined, null

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

// Functions

function sum(num1: number, num2: number): number {
	return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
	// : indica el type del return de la función.
	// Formatea el input convirtiendo los strings a números
	if (typeof num1 === "string") {
		num1 = parseInt(num1);
	}
	if (typeof num2 === "string") {
		num2 = parseInt(num2);
	}
	return num1 + num2;
};

function getName(firstName: string, lastName?: string): string {
	// el ? indica que es opcional
	if (lastName == undefined) {
		return firstName;
	}
	return `${firstName} ${lastName}`;
}

function myVoidFunction(): void {
	return;
}

// Interfaces
interface IToDo {
	title: string;
	text: string;
}

function showToDo(toDo: IToDo) {
	console.log(`${toDo.title} - ${toDo.text}`);
}

let myToDo: IToDo = {
	title: "Eat Dinner",
	text: "lorem",
};

showToDo(myToDo);

// Clases

class User {
	name: string;
	email: string;
	age: number;

	constructor(name: string, email: string, age: number) {
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
	public ageInYears() {
		return this.age + " years";
	}
	payInVoice() {
		console.log(`${this.name} paided invoice`);
	}
}

let juan = new User("juan", "juan@mail.com", 28);

console.log(juan.ageInYears());

class Members extends User {
	id!: number;
	constructor(id: number, name: string, email: string, age: number) {
		super(name, email, age);
	}
	payInVoice(): void {
		super.payInVoice();
	}
}

let miguel = new Members(1, "miguel", "miguel@mail.com", 24);
miguel.payInVoice;

// Enums

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

// Function types

let functionType: (a: number, b: number) => number;
