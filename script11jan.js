//Math.floor()
//Math.ceil()
//Math.round()
//Math.random()

 console.log(Math.floor(7.5))
 console.log(Math.floor(-12.56)) 
 console.log(Math.floor(0.75)) 


 console.log(Math.ceil(45.9)) 
 console.log(Math.ceil(8.23)) 
 console.log(Math.ceil(-13.65))
 console.log(Math.round(8.45)) 
 console.log(Math.round(8.57)) 
 console.log(Math.round(56.98)) 


console.log(Math.random()) 

//1-5 => random
console.log(Math.random() * 5) 

console.log(Math.floor(Math.random() * 5))
 console.log(Math.floor(Math.random()*5)+1) 

//guessing game
//randomnumber => system
//userinput

//userinput==randomnumber => guess correct ///guess incorrect

 let randomNumber1 = Math.floor(Math.random() * 5) + 1
 console.log(randomNumber1)

 let userInput1 = (prompt("Please enter the number between 1-5"))
console.log(typeof userInput1)
 if (userInput1 == randomNumber1) {
         console.log('Guess is correct')
 }
 else {
    console.log('Guess is incorrect')
 }


//userInput

//prompt() => window() => browser => html


//====================================================

let randomNumber2 = Math.floor(Math.random() * 5) + 1
console.log(randomNumber2)

 let userInput = Number(prompt("Please enter the number between 1-5"))
 console.log(typeof userInput)
 if (userInput === randomNumber) {
     console.log('Guess is correct')
 }
 else {
     console.log('Guess is incorrect')
 }

//======================================================================

//allow user to guess number 3 time

let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber) 
for (let i = 1; i <= 3; i++) {
    let userInput = Number(prompt("Please enter the number between 1-5"))
    if (userInput === randomNumber) {
        console.log('Guess is correct')
    }
    else {
        console.log('Guess is incorrect')
    }

    console.log('good morning')
}

