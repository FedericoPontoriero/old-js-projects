const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", (e) => {
	console.log(e);
});

parent.addEventListener(
	"click",
	(e) => {
		e.stopPropagation(); // Stops bubbling and capturing
		console.log(e);
	},
	{ capture: true }
); // By default is false, is the opposite of bubbling. It will move from highest hierarchy to lowest and then the bubbling happens

child.addEventListener(
	"click",
	(e) => {
		// Clicking on child is also clicking on parent and grandparent. This is bubbling
		console.log(e);
	},
	{ once: true }
); // It only happens once

function printHi() {
	console.log("Hi");
}

setTimeout(() => {
	parent.removeEventListener("click", printHi);
}, 2000); // It removes the EventListener after 2 seconds It needs a function

const divs = document.querySelectorAll("div");
divs.forEach((div) => {
	div.addEventListener("click", () => {
		console.log("Hi");
	});
});

const newDiv = document.createElement("div"); // Creates a div
newDiv.style.backgroundColor = "purple";
newDiv.style.width = "200px";
newDiv.style.height = "200px"; // Sets styles
document.body.append(newDiv); // Adds it to the body. This one does not have the EventListener because it was created after

document.addEventListener("click", (e) => {
	if (e.target.matches("div")) {
		console.log("Hi"); // Event delegation. Validates if it matches with div and then executes the function
	}
});

function addGlobalEventListener(type, selector, callback) {
	document.addEventListener("click", type, (e) => {
		if (e.target.matches(selector)) callback(e);
	}); // This is a function that does the same thing as the above but it's scalable
}
addGlobalEventListener("click", "div", (e) => {
	console.log("Hi");
});
