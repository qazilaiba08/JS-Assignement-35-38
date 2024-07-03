
// chp 34        set by yourself
let d = new Date()
d.setFullYear(2022)
console.log(d);
//  in this date and time will be same 
d.setMonth (1)
d.setHours(4)
d.setMilliseconds(324)
d.setSeconds()
console.log(d);


// chp 35. function is also a block of code whenever perform specific task . only call  through function to pass the value
function myFunction(){
    console.log("hellow world");
    console.log("I love javascript");
}
myFunction()
// jitni baar function ko call krwayengy wo baar baar repeat hojaaygi e.g // we use function bcz of repeatedness
myFunction()
myFunction()

//  parameter is jo parnthesis k andr hoga 
function myFunction(a,b){ // in bracket is called parameter 
    console.log(a + b);
}

myFunction( 4 , 7)
myFunction(12 , 45)  //value pass kr rhy hain issy argument kehty hain


function sum(x, y){ // local variables or block scope
    s = x + y
    return s // jo bh value add hogi wo wapis hojaygi . return statement is last statement. it is called modern js. only one value return krta h
    
}
let value = sum(67 ,89)
console.log(value);

function tellTime() {
var now = new Date();
var theDay = now.getDate()
var theHr = now.getHours();
var theMin = now.getMinutes(); 
alert("time: " + theHr + ":" + theMin+":" + theDay);
}
tellTime()


function multiplication(p1 ,p2){
    return p1 * p2
}
console.log(multiplication(5 , 8));

// convert farenheit to celcius
function farenheiTocelcius(farenheit){
    return (5/9) * (farenheit - 32)
}
console.log(farenheiTocelcius(77));


// square
function square(a){
    return a * a
}
console.log(square(6));
console.log(square(4));

//  factorial is denoted by !
function factorial (n){
    if (n === 0 || n === 1){
        return 1;
    }else {
        return n * factorial(n-1)
    }
} 
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));

// arrow function  . we use in small code mostly use in calculation 
const additionOfnum = (a ,b) =>{
    return a+b
}
console.log(additionOfnum(3,6));



// const hello = () =  => {
//   return " i love js"
// }
// console.log();

// q #1

// function currentDateTime (){
//     var d = new Date ();
//     document.write(d)

// }
// currentDateTime()

// q 2 

// let firstName = prompt("Enter first name")
// let lastName = prompt("Enter last name")

// function greets (firstName, lastName){
//  document.write ("Welcome  " + firstName +" "+ lastName)
// }
// greets(firstName,lastName)

// Q 3 Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


// let a = +prompt("Enter a number")
// let b = +prompt("Enter a number")

// function sum (a,b){
//  return  a + b;
// }
// console.log(sum(a,b));

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

let num1 = +prompt("Enter a number")
let num2 = +prompt("Enter a number")
let operator = prompt("Enter A OPRETOR")
function Calculator(num1,num2,operator){
    if(operator === "+"){
        document.write(num1 + " " + operator + " " + num2 + " = " + (num1 + num2));
    }
    else if(operator === "-"){
        document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 - num2));

    }  else if(operator === "*"){
        document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 * num2));
    }  else if(operator === "/"){
        document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 / num2));
    }  else if(operator === "%"){
        document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 % num2));
    } 
    else{
        document.write("Write some input");
    }
}
Calculator(num1,num2,operator);

// Q 5

function square(a){
    return a * a
}
console.log(square(8));

//9 

function areaOfrectangle(width,height){
    return "Area of Rectangle is : "+ width * height;
}
console.log(areaOfrectangle(6,8));
console.log(areaOfrectangle(4,7));

//14 
let radius = 2
function calcCricumferece (radius ){
    return "The Cricumference cricle is :" + 2* 3.14*radius
}
console.log(calcCricumferece(6,4));


function area (radius ){
    return "The area Cricle is :" + 3.14*radius*radius
}
console.log(area(6));

// Q 7 

let start_number = +prompt("Enter a start number");
let end_number = +prompt("Enter a end number");
function count(start_number, end_number){
    if(start_number > end_number){
        for(let i = start_number; i>end_number; i--)
            document.write(i + "<br>")
        
    }
    else if(start_number <= end_number){
        for(let i = start_number; i<=end_number; i++)
            document.write(i + "<br>")
    }
    else if(start_number === end_number){
        document.write("both are equal")
    }
}
count(start_number,end_number);