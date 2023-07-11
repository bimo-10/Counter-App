"use strict";

const numberText = document.querySelector("#number");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.querySelector("#increase-btn");

let number = 0;
numberText.innerText = number;

decreaseBtn.addEventListener("click", function () {
  if (number > 0) {
    number--;
  }
  let decreaseNumber = (numberText.innerText = number);
  console.log(decreaseNumber);
});

resetBtn.addEventListener("click", function () {
  number = 0;
  numberText.innerText = 0;
});

increaseBtn.addEventListener("click", function () {
  number++;
  let increaseNumber = (numberText.innerText = number);
  console.log(increaseNumber);
});
