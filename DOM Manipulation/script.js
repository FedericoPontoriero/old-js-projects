const body = document.body;

body.append("Hello World"); // To append an element, including strings

document.createElement("div"); // To create an element
body.append(div);
div.textContent = "Hello World"; // Text including everything
div.innerText = "Hello World"; // Only text

div.innerHtml = "<strong>Hello World</strong>"; // To add HTML

const strong = document.createElement("strong");
strong.innerText = "Hello World";
div.append(strong);
body.append(div); // The same but more secure way of adding HTML

const spanbye = document.querySelector("#bye");
spanbye.remove(); // To remove

spanbye.dataset.newName = "hi"; // To manipulate a data- of an element

spanbye.classList.add("hi"); // For classes
spanbye.classList.remove("hi");
spanbye.classList.toggle("hi"); // It adds or removes depending if it exist or not

spanbye.style.color = "red"; // To modify styles