/*-First we will create 3 variables that generate the 3 numbers in the lock combination
    -each number should be created through different forms of mathematical calculations being +-/*
  -After we have  the 3  variables created, we will create 2 strings
    -one will tell the user that they have been chosen to open an important vault
    -another will be displaying the code for said vault
*/


let var1 = 2 * 5;
let var2 = 4 + 36;
let var3 = 78 / 2;
let combination = `${var1} - ${var2} - ${var3}`
let message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: `
alert(`${message}${combination}`);