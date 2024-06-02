"use strict";

function showMain() {
  var userInput = document.getElementById('login').value;

  if (userInput.trim() === '') {
    alert("Поле ввода пустое!");
  } else {
    var mainDiv = document.querySelector('.main');
    mainDiv.style.display = 'block';
    var mainDiv2 = document.querySelector('.login');
    mainDiv2.style.display = 'none';
    document.getElementById('NameUser').textContent = "Привет, " + userInput;
  }
}