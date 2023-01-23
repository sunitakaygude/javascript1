//actual diff for loop /while loop

//1-5 random

//guessing game

 //let randomNumber = Math.floor(Math.random() * 5) + 1 
 //console.log(randomNumber)

 //let userInput = Number(prompt('Enter any number between 1-5')) 

 //if (userInput === randomNumber) {
   //  console.log('Guess correct')
 //}
 //else {
   //  console.log('Guess incorrect')
 //}

//ternary operator
//userInput === randomNumber ? console.log('Guess correct') : console.log('Guess incorrect')

//===========================

//loop => for loop
//duration  => 3 chance

 let randomNumber4 = Math.floor(Math.random() * 5) + 1 
 console.log(randomNumber4)

 for (let i = 1; i <= 3; i++) {
     let userInput = Number(prompt('Enter any number between 1-5')) 

     if (userInput === randomNumber4) {
         console.log('Guess correct')
     }
     else {
         console.log('Guess incorrect')
     }
 }

//=============================================================================

//for loop with break

 let randomNumber3 = Math.floor(Math.random() * 5) + 1 
 console.log(randomNumber3)

 for (let i = 1; i <= 3; i++) {
     let userInput = Number(prompt('Enter any number between 1-5'))

     if (userInput === randomNumber3) {
         console.log('Guess correct')
         break;
     }
     else {
         console.log('Guess incorrect')
     }
 }

//=================================================================================

//u dont know duration => while loop


 let randomNumber5 = Math.floor(Math.random() * 5) + 1 
 console.log(randomNumber5) 
     userInput = Number(prompt('Enter any number between 1-5')) 
     if (userInput === randomNumber5) {
         console.log('Guess correct')
     }
     else {
     }
 


  let randomNumber = Math.floor(Math.random() * 5) + 1 
 console.log(randomNumber) 


 
// let userInput //undefined
 while (userInput != randomNumber) {
    // userInput = Number(prompt('Enter any number between 1-5')) 
     if (userInput === randomNumber) {
         console.log('Guess correct')
         break;
     }
     else {
         console.log('Guess incorrect')
     }
 }
