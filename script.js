'use strict';

// burgerBar
let navBar = document.getElementById('navigation');
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function(){
    navBar.classList.toggle('toggleNav');
    toggleButton.classList.toggle('activeMenu');
}) 

document.getElementById('clickBody').addEventListener('click', function(event) {
    console.log(event);
})
document.getElementById('username').addEventListener('keydown', function(y) {
    y.target.classList.add('input-wraper');
})
document.getElementById("link").addEventListener("click", function (event) {
    event.preventDefault();
  });

// input value
let usernameField = document.getElementById("username");

usernameField.addEventListener("input", function (event) {
  event.target.value = event.target.value.toUpperCase();
});

let inputWraper = document.querySelector(".input-form");
let addButton = document.querySelector(".add-button");
let ul = document.querySelector(".ul-list");
let clearAllItems = document.querySelector(".clearlist");
let formElement = document.querySelector('.form-wraper');

formElement.addEventListener("submit", function (event) {
    event.preventDefault();

let inputisMnishvneloba = inputWraper.value;
  if (inputisMnishvneloba == " ") {
    return;
  }

  let li = document.createElement("li");

  let btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete This Item";
  btnDelete.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = inputisMnishvneloba;

  li.appendChild(btnDelete);
  ul.appendChild(li);

  inputWraper.value = " ";
});

clearAllItems.addEventListener("click", function () {
  ul.innerHTML = " ";
});
