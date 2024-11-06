// 1. Instantiate a new array with 5 numeric values
let myArray = [10, 20, 30, 40, 50];

// 2. Output the first and last values of the array
console.log(myArray[0]); 
console.log(myArray[myArray.length - 1]); 



// 3. Loop Though array values,add 5 more, then remove the last 3 values
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
myArray.push(60, 70, 80, 90, 100);
console.log(myArray); 
myArray.pop();
myArray.pop();
myArray.pop();
console.log(myArray); 

// 4. Declare a string variable and output its length
let myString = "Hi Its Me!";
console.log(myString.length); 