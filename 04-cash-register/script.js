// JavaScript
// script.js

let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
let labels = [
  'Pennies',
  'Nickels',
  'Dimes',
  'Quarters',
  'Ones',
  'Fives',
  'Tens',
  'Twenties', 
  'Hundreds'
]

const cash = document.getElementById("cash");
const purchaseButton = document.getElementById("purchase-btn");
const output = document.getElementById("change-due");
const drawerContents = document.getElementById("drawer")

purchaseButton.addEventListener("click", function() {
  // some declarations:
  let cidSum = 0;
  for (let i = 0; i < cid.length; i++) {
    cidSum += cid[i][1];
  }
  parseFloat(cidSum = cidSum.toFixed(2)) + 0.02
  
  // rest for each time function is used
  drawerContents.innerHTML = "";
  let cashProvided = parseFloat(cash.value)
  let changeDue = Math.abs(price - cashProvided).toFixed(2)  

  // Conditions to check for unique cases:
  if (price > cashProvided) {
    output.innerHTML = "Not enough";
    alert("Customer does not have enough money to purchase the item")
  } else if (price === cashProvided) {
    output.innerHTML = "No change due - customer paid with exact cash";
  } else if (Number((Math.abs(price - cashProvided)).toFixed(2)) > cidSum) {
    output.innerHTML = "Status: INSUFFICIENT_FUNDS";
    return;
  } else if (Number(cidSum) < changeDue) {
    output.innerHTML = "Status: INSUFFICIENT_FUNDS 2";
    return;
  } else if (Number((Math.abs(price - cashProvided)).toFixed(2)) === Number(cidSum)) {
    output.innerHTML = "Status: CLOSED"
  } else {
    output.innerHTML = "Status: OPEN"
  }

  // main function body
  let j = cid.length - 1;
  let k = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let l = [0, 0, 0, 0, 0, 0, 0, 0, 0]; 

  for (let i = 0; i < cid.length; i++) {

      if (changeDue / cid[j][1] > 0) {
        let times = Math.floor(changeDue / k[i]);

        let cuantos = cid[j][1] / k[i];

        if (cuantos < times) {
          times = cuantos;
        }

        l[i] += k[i] * times;
        changeDue -= k[i] * times
        cid[j][1] -= k[i] * times
        changeDue = Number(changeDue.toFixed(2));
        cid[j][1] = Number(cid[j][1].toFixed(2));
        
        if (l[i] > 0) {
          output.innerHTML += ` ${cid[j][0]}: $${l[i]}`
        }
      }
      j--;
  }

  for (let i = 0; i < cid.length; i++) {
    let j = 1;
    drawerContents.innerHTML += `${labels[i]} ${cid[i][j]} <br>`;
  }

  // if not enough change to give customer (last unique case to fix):
  if (changeDue > 0) {
    output.innerHTML = "Status: INSUFFICIENT_FUNDS"
  }
});



// First attempt at the main loop body -> had to repeat like 50 times:

  // for (let i = 0; i < cid.length; i++) {
    // console.log(j, i)
    // console.log(`change due BEFORE LOOP: ${changeDue}`);

  //   while (changeDue >= k[i]) {
  //     if (cid[j][1] - k[i] >= 0) {
  //       l[i] += k[i];
  //       changeDue -= k[i]; 
  //       cid[j][1] -= k[i];
  //       changeDue = Number(changeDue.toFixed(2));
  //       cid[j][1] = Number(cid[j][1].toFixed(2));
  // // console.log(`change due IN LOOP: ${changeDue}`);
  //     } 
  //   }
  //   if (l[i] > 0) {
  //     output.innerHTML += ` ${cid[j][0]}: $${l[i]} `
  //     //  console.log(`change due AFTER LOOP: ${changeDue}`);
  //   }
  //   j--;
  // }
  // updateDrawer();