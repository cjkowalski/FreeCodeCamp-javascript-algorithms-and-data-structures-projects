// JavaScript

const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");

checkButton.addEventListener("click", function() {
  const inputValue = textInput.value;
  const cleanedValue = inputValue.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  if (inputValue === "") {
    alert("Please input a value");
  } 

  let reversedString = cleanedValue.split('').reverse().join('');
  let result = "";
  
  if (cleanedValue === reversedString) {
    result = (`${inputValue} is a palindrome`);
  } else {
    result = (`${inputValue} is not a palindrome`);
  }

  function updateResults(result) {
    document.getElementById("result-paragraph").textContent = result;
  }

  updateResults(result);
});
