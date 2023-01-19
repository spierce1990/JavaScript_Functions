console.log("Hello World!\n==========\n");
console.log("EXERCISE 1:\n==========\n");
// Exercise 1 Section
function printOdds(count) {
    for (let x = 0; x <= count; x++  ) {
      if (count % 2 == 0)
    console.log();
    else console.log(`Input is Odd`);
}   
    }

    printOdds(5);

   // 1. Declare a function named `checkAge` using declaration notation (`function <name>(){...}`)
   // 2. The function should take in two-parameters named userName & age
   // 3. The function body should:
   //    - declare and initialize an aboveSixteen local variable with string value: "Congrats ${userName}, you can drive!",
   //    - declare and initialize an belowSixteen local variable with string value: "Sorry ${userName}, but you need to wait until you're 16.",
   //    - an `if/else` statement that determines if the `age` value is below 16,
   //    - and then `console.log()` the correct message to the console.
   // 4. BONUS: Remember that paramaters are optional, and no `name` or `age` value could be passed in. Correctly account for no parameter being passed in.
    

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let aboveSixteen =  16;
let belowSixteen = 15;

function checkAge(userName, age) {
if ( age >= aboveSixteen )  {
    console.log(`Congrats ${userName}, you can drive!`);
}
    else 
    
console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    
}

checkAge("Melga", 32);

console.log("EXERCISE 3:\n==========\n");
//Write a function that receives two parameters, x and y coordinates in
//the Cartesian plane, and prints out a message indicating if the point (x, y) lies on either the x or y axis,
// or what quadrant the point lies in.

function coordinatesFunction(x,y) {


    if (x > 0 && y > 0)
        console.log("Quadrant 1");
  
    else if (x < 0 && y > 0)
         console.log("Quadrant 2");
  
    else if (x < 0 && y < 0)
        console.log("Quadrant 3");
  
    else if (x > 0 && y < 0)
    console.log("Quadrant 4");
  
    else if (x == 0 && y > 0)
    console.log("Lies on positive"
            + " Imaginary axis");
  
    else if (x == 0 && y < 0)
    console.log("Lies on negative"
            + " Imaginary axis");
  
    else if (y == 0 && x < 0)
    console.log("Lies on negative"
            + " X-axis");
  
    else if (y == 0 && x > 0)
    console.log("Lies on positive"
            + " X-axis");
  
    else
    console.log("Lies on the Origin");
}
  



 coordinatesFunction(0, 2);
coordinatesFunction(1, 2);
coordinatesFunction(-6, 18);

 console.log("EXERCISE 4:\n==========\n");

 function triangleCheck(x,y,z){
  
     // Check for equilateral triangle
     if (x == y && y == z )
         console.log("Equilateral Triangle");
  
     // Check for isosceles triangle
     else if (x == y || y == z || z == x )
     console.log("Isosceles Triangle");
  
     // Otherwise scalene triangle
     else
     console.log("Scalene Triangle");
 }
    
     // Function call
     triangleCheck(7,8,9)
 
 console.log("EXERCISE 5:\n==========\n");

 function dateUsage(planLimit, day,usage){
    let aVgUse = planLimit / 30;
    let daysRemaining = 30 - day;
    let dailyUsage = usage / day;
    let remainUsage = (planLimit - usage) / daysRemaining;
    let overUse = Math.abs(planLimit - (dailyUsage * 30));
    let num = dailyUsage * 30;

    console.log(`Should be 111.9 ${num}`);
    console.log(`${day} day used, ${daysRemaining} days remaining`);
    console.log(`Average daily use : ${aVgUse} GB/day`);
    if (dailyUsage < aVgUse)
    {
        console.log(`You are under your daily usage of ${dailyUsage}`);
    
    }

    if (dailyUsage == aVgUse)
    {
        console.log(`You are right on your average daily data usage of ${dailyUsage}`)
    }
    if (dailyUsage > aVgUse)
    {
        console.log(`You are exceeding you average daily use of ${dailyUsage}`)
    }

}

dateUsage(100,15,56);