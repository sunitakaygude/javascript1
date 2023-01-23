console.log('mayuri')
console.log(100)

//info store
//let 
//const

let fruit="apple"
console.log(fruit)

fruit="banana"
console.log(fruit)

const money=200
console.log(money)

//money=1500  //update 
//console.log(money)//error
let p = 10
let q = 5
 console.log(p + q)
 console.log(p - q)
 console.log(p * q)
 console.log(p / q)
 console.log(p % q)

 let c = 100
  let d = 2
 console.log(c + d)
 console.log(c - d)
 console.log(c * d)
 console.log(c / d)
 console.log(c % d)

//time save, retetation avoid

 function operation(a,b){
     console.log(a+b)
     console.log(a-b)
     console.log(a*b)
     console.log(a/b)
     console.log(a%b)
 }
// operation(50,5)

// operation(10,2)

// operation(30,5)

//1. function without parameter and without return type

 function sum() {
  console.log(10 + 20)
 }
 sum() 
 sum() 
sum()
// //output cannot be change
//we cannot reused output value

 function sub(){
     console.log(100-3)
}
 sub()
//2. Function with parameter and without return type

 function add(a, b) {
    console.log(a + b)
 }
 add(10, 20) //30
 add(50,7) //57
 add(100,2)
 add(80,6)

//we cannot reuse the output value

 function mul(x,y){
     console.log(x*y)
 }
 mul(20,5)


 function div(){
     console.log(20/3)
 }
 div()

//3. function with parameter and with return type

 function add(s, v) {
     return s + v
 }
 let result1 = add(20, 3)
console.log(result1)

//100 rs  show => no used
//100 rs give => used


 function sum(a, b) {
     return a + b
 }
 let result = sum(10, 20)
 console.log(result) 
 console.log(result + 30) 
console.log(result - 5) 

//function without para and without return type
function add() {
    console.log(5 + 20)
}
add() 
add()
add()
//output cannot be chnage , cant reuse the output value

//function with para and without return type

function add1(a, b) {
    console.log(a + b)
}
add1(20, 30) 
add1(100, 50) 
//output can be change , cant reused the output value

//function with para and with return tye
function add2(a, b) {
    return a + b
}
let aa = add2(10, 20)
console.log(aa) 
console.log(aa + 100)
console.log(aa * 3) 

let bb = add2(50, 5)
console.log(bb) 
console.log(bb + 10 ) 
//adv => output can be chnage and we can reused the output values


console.log(bb+10+20+80)

console.log(bb+(10/20)) 




