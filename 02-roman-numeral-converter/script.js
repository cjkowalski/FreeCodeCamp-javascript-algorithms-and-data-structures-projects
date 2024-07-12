// JavaScript

const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", convertNumber);

function convertNumber() {

  // to only bring output box up when convertBtn is pressed
  const outputBlock = document.getElementById("output");
  outputBlock.style.display = "block";

  if (number.value === "") {
    output.innerHTML = "Please enter a valid number"
  } else if (number.value < 0) {
    output.innerHTML = "Please enter a number greater than or equal to 1"
  } else if (number.value > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999"
  } else {
    
    const appendHere = []
    let numberValue = number.value;

    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    for (let i = 0; i < romanNumerals.length; i++) {
      while (numberValue - romanNumerals[i].value >= 0) {
        appendHere.push(romanNumerals[i].numeral);
        numberValue -= romanNumerals[i].value;
      }
    }

    output.innerHTML = appendHere.join("");
  }
}




// Here was my original attempt: too many while loops!
 
// // JavaScript

// const number = document.getElementById("number");
// const convertButton = document.getElementById("convert-btn");
// const output = document.getElementById("output");

// convertButton.addEventListener("click", convertNumber);

// function convertNumber() {
//   if (number.value === "") {
//     output.innerHTML = "Please enter a valid number"
//   } else if (number.value < 0) {
//     output.innerHTML = "Please enter a number greater than or equal to 1"
//   } else if (number.value > 4000) {
//     output.innerHTML = "Please enter a number less than or equal to 3999"
//   } else {
    
//     const appendHere = []
//     let numberValue = number.value;

//     while (numberValue - 1000 >= 0) {
//       appendHere.push('M');
//       numberValue -= 1000;
//     }

//     while (numberValue -900 >= 0) {
//       appendHere.push('CM');
//       numberValue -= 900;
//     }

//     while (numberValue -500 >= 0) {
//       appendHere.push('D');
//       numberValue -= 500;
//     }

//     while (numberValue -400 >= 0) {
//       appendHere.push('CD');
//       numberValue -= 400;
//     }

//     while (numberValue -100 >= 0) {
//       appendHere.push('C');
//       numberValue -= 100;
//     }

//     while (numberValue -90 >= 0) {
//       appendHere.push('XC');
//       numberValue -= 90;
//     }

//     while (numberValue -50 >= 0) {
//       appendHere.push('L');
//       numberValue -= 50;
//     }

//     while (numberValue -40 >= 0) {
//       appendHere.push('XL');
//       numberValue -= 40;
//     }

//     while (numberValue -10 >= 0) {
//       appendHere.push('X');
//       numberValue -= 10;
//     }

//     while (numberValue -9 >= 0) {
//       appendHere.push('IX');
//       numberValue -= 9;
//     }

//     while (numberValue -5 >= 0) {
//       appendHere.push('V');
//       numberValue -= 5;
//     }

//     while (numberValue -4 >= 0) {
//       appendHere.push('IV');
//       numberValue -= 4;
//     }

//     while (numberValue -1 >= 0) {
//       appendHere.push('I');
//       numberValue -= 1;
//     }

//     console.log(appendHere)
//   }
// } 