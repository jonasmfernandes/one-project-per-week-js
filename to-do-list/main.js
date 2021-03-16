const addToButton = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");

addToButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");

  paragraph.innerText = inputField.value;
  paragraph.classList.add("paragraph-styling");
  toDoContainer.appendChild(paragraph);

  inputField.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
