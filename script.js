// Select elements
const container = document.querySelector("#container");
const display = document.querySelector(".display");
const controls = document.querySelector(".controls");

// Modify content
display.textContent = "Hello, I am the Display area!";
controls.textContent = "I am the Controls section.";

// Add new element inside container
const newDiv = document.createElement("div");
newDiv.textContent = "New child added dynamically!";
newDiv.style.backgroundColor = "lightgreen";
newDiv.style.padding = "10px";
container.appendChild(newDiv);

// Change styles of existing elements
display.style.backgroundColor = "lightblue";
controls.style.backgroundColor = "lightgray";
