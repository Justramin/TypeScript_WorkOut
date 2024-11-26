//  -----------------     TYPESCRIPT WORKOUTS     ------------------ 
//     1.
// let input_char:string = "Justin"
// console.log(input_char);
//  ---------------------------------------------------------------- 
//     2.
// let number1 : number = 12;
// let number2 : number =15;
// let sum : number =number1+number2
// console.log('Sum of number1 + number2 is :',sum);
//  ---------------------------------------------------------------- 
//     3.
// let Principle_amount : number =30_000;
// let Intrest_rate : number =10;
// let Number_of_year : number = 5;
// let Simple_intrest : number = ((Principle_amount*Intrest_rate*Number_of_year)/100);
// console.log('Simple Intrest is : ',Simple_intrest);
//  ---------------------------------------------------------------- 
//       4. 
// let mark:number =59;
// if(mark>=50&&mark<=100){
//     console.log("This Student Pass");
// }else if(mark>0&& mark <50){
//     console.log("This Student failed");
// }
//  ---------------------------------------------------------------- 
//      5.
// let mark:number = 69;
// switch(true){
//     case (mark > 90 && mark <= 100):{
//         console.log("Grade is A");
//         break;
//     }
//     case (mark > 80 && mark < 91):{
//         console.log("Grade is B");
//         break;
//     }
//     case (mark > 70 && mark < 81):{
//         console.log("Grade is C");
//         break;
//     }
//     case (mark > 60 && mark < 71):{
//         console.log("Grade is D");
//         break;
//     }
//     case (mark >=50 && mark <= 61):{
//         console.log("Grade is E");
//         break;
//     }
//     case (mark < 50):{
//         console.log("Failed");
//         break;
//     }
//     default:console.log("Invalid Mark Entered");
// }
//  ----------------------------------------------------------------
//     6.
// let day:number =4;
// switch (day) {
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//         console.log("Tuesday");
//         break;
//     }
//     case 4:{
//         console.log("Wednesday");
//         break;
//     }
//     case 5:{
//         console.log("Thursday");
//         break;
//     }
//     case 6:{
//         console.log("Friday");
//         break;
//     }
//     case 7:{
//         console.log("Saturday");
//         break;
//     }
//     default: console.log("Invald Number");   
// }
//  ----------------------------------------------------------------
//      7.
// let num : number =5;
// for(let i : number =1 ; i<11 ; i++){
//     console.log(1,'*',num,"=",num*1);
// }
//  ----------------------------------------------------------------
//     8.
// const limit : number =14;
// let sum : number = 0;
// for(let i:number =1 ; i<=limit ; i++){
//     if(i%2==1){
//         sum+=i;
//     }
// }
// console.log("Sum of odd number upto ",limit, "is :",sum );
//  ----------------------------------------------------------------
//     9.
// for (let i:number =1 ; i<=5 ; i++){
//     let str:string='';
//     for(let j:number =1 ; j<=i ; j++){
//         str = str+ ' '+ j;
//     }
//     console.log(str);
// }
//  ----------------------------------------------------------------
//     10.
// let array1 : number [] = [1,2,3,4,5];
// let array2 : number [] = [6,7,8,9,10];
// for(let i:number = 0 ; i<array1.length;i++){
//     let temp:number = array1[i];
//     array1[i] = array2[i];
//     array2[i] = temp;
// }
// console.log("array 1st is : ", array1);
// console.log("array 2nd is : ", array2);
//  ----------------------------------------------------------------
//     11.
// let array:number[] = [7,36,14,8,18];
// let count:number = 0;
// for (let i:number = 0; i < array.length; i++) {
//     if (array[i]%2==0) {
//         count+=1;
//     }
// }
// console.log("Total even number is : ",count);
//  ----------------------------------------------------------------
//      12.
// let array:number[] = [8,4,12,3,15];
// function bubbleSort (array:number[]):number[]{
//     let count:number = 1;
//     do{
//         count = 0;
//         for (let i:number = 1 ; i < array.length ; i++) {
//             if(array[i]<array[i-1]){
//                 let temp:number = array[i];
//                 array[i]=array[i-1];
//                 array[i-1]= temp;
//                 count=1;
//             }
//         }
//     }
//     while(count){
//         return array
//     }
// }
// console.log(bubbleSort(array));
//  ----------------------------------------------------------------
//      13.
// let names:string ='MALAYALAM';
// let left:number = 0;
// let right:number = names.length-1;
// function palindrome(names:string, left:number, right:number):string{
//     if(names[left]!==names[right]){
//         return 'Not Palindrom';
//     }
//     if(left>=right){
//         return 'Palindrom';
//     }
//     return palindrome(names,left+1,right-1);
// }
// console.log(palindrome(names,left,right));
//  ----------------------------------------------------------------
//      14.
// let limit:number = 3;
// let array1:number[][] = [[1,2,3],[4,5,6],[7,8,9]];
// let array2:number[][] = [[9,8,7],[6,5,4],[3,2,1]];
// let sum:number[][] = [];
// for (let i:number = 0; i < limit; i++) {
//     sum[i]=[];
//     for (let j:number = 0; j < limit; j++) {
//         sum[i][j]=array1[i][j]+array2[i][j];
//     }
// }
// console.log(sum);
//  ----------------------------------------------------------------
//      15.
// function getArray(): number[] {
//     const prompt = require('prompt-sync')();
//     const arraySize = parseInt(prompt("Enter array size: "), 10);
//     const array: number[] = [];
//     for (let i = 0; i < arraySize; i++) {
//         const element = parseInt(prompt(`Enter element ${i + 1}: `), 10);
//         array.push(element);
//     }
//     return array;
// }
// function displayArray(arr: number[]): void {
//     console.log("Array values are:");
//     arr.forEach((value, index) => {
//         console.log(`Element ${index + 1}: ${value}`);
//     });
// }
// function main(): void {
//     let myArray: number[];
//     myArray = getArray();
//     displayArray(myArray);
// }
// main();
//  ----------------------------------------------------------------
//      16.
// function isPrime(value: number): boolean {
//     if (value < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(value); i++) {
//         if (value % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const promptSync = require('prompt-sync')();
// const input = parseInt(promptSync("Enter a number: "), 10);
// if (isPrime(input)) {
//     console.log("Entered number is a Prime number");
// } else {
//     console.log("Entered number is not a Prime number");
// }
//  ----------------------------------------------------------------
// //       17.
// import * as promptSync from 'prompt-sync';
// const prompt = promptSync();
// class Calculator {
//     addition(a: number, b: number): number {
//         return a + b;
//     }
//     subtraction(a: number, b: number): number {
//         return a - b;
//     }
//     multiplication(a: number, b: number): number {
//         return a * b;
//     }
//     division(a: number, b: number): number {
//         if (b === 0) {
//             console.log("Division by zero is not allowed.");
//             return NaN;
//         }
//         return a / b;
//     }
// }
// function main(): void {
//     const calculator = new Calculator();
//     let continueProgram = true;
//     while (continueProgram) {
//         console.log("\n--- Basic Calculator ---");
//         console.log("1. Addition");
//         console.log("2. Subtraction");
//         console.log("3. Multiplication");
//         console.log("4. Division");
//         console.log("5. Exit");
//         const choice = parseInt(prompt("Enter your choice: "), 10);
//         if (choice >= 1 && choice <= 4) {
//             const num1 = parseFloat(prompt("Enter the first number: "));
//             const num2 = parseFloat(prompt("Enter the second number: "));
//             switch (choice) {
//                 case 1:
//                     console.log(`Result: ${calculator.addition(num1, num2)}`);
//                     break;
//                 case 2:
//                     console.log(`Result: ${calculator.subtraction(num1, num2)}`);
//                     break;
//                 case 3:
//                     console.log(`Result: ${calculator.multiplication(num1, num2)}`);
//                     break;
//                 case 4:
//                     console.log(`Result: ${calculator.division(num1, num2)}`);
//                     break;
//             }
//         } else if (choice === 5) {
//             console.log("Exiting the program. Goodbye!");
//             continueProgram = false;
//         } else {
//             console.log("Invalid choice. Please select a valid option.");
//         }
//     }
// }
// main();
//  ----------------------------------------------------------------------------------
//      18.
// import * as promptSync from 'prompt-sync';
// const prompt = promptSync();
// const test: number = parseFloat(prompt("Enter marks in written exam: ") || "0");
// const lab: number = parseFloat(prompt("Enter marks in lab exam: ") || "0");
// const assignment: number = parseFloat(prompt("Enter marks in assignment: ") || "0");
// const grade: number = (test * 70) / 100 + (lab * 20) / 100 + (assignment * 10) / 100;
// console.log(`Grade of the student is: ${grade.toFixed(1)}`);
//  ----------------------------------------------------------------------------------
//      19.
// import * as promptSync from 'prompt-sync';
// const prompt = promptSync();
// const income: number = parseFloat(prompt("Enter your annual income: ") || "0");
// let tax: number = 0;
// switch (true) {
//     case (income <= 250000): 
//         console.log("No tax");
//         break;
//     case (income > 250000 && income <= 500000): 
//         tax = (income - 250000) * 0.05;
//         console.log("Tax amount is: ", tax.toFixed(2));
//         break;
//     case (income > 500000 && income <= 1000000): 
//         tax = (250000 * 0.05) + ((income - 500000) * 0.20);
//         console.log("Tax amount is: ", tax.toFixed(2));
//         break;
//     case (income > 1000000): 
//         tax = (250000 * 0.05) + (500000 * 0.20) + ((income - 1000000) * 0.30);
//         console.log("Tax amount is: ", tax.toFixed(2));
//         break;
//     default:
//         console.log("Invalid input");
// }
//  ----------------------------------------------------------------------------------
//      20.
// let k: number = 1; 
// let str: string = "";
// for (let i: number = 1; i <= 4; i++) { 
//     for (let j: number = 1; j <= i; j++) { 
//         if (j <= i) { 
//             str += `${k} `; 
//             k++;
//         } else {
//             str += " "; 
//         }
//     }
//     str += "\n"; 
// }
// console.log(str);
//  ----------------------------------------------------------------------------------
//      21.
// const ps = require('prompt-sync')(); 
// const limit: number = parseInt(ps("Enter array limit: ") || "0");
// let array: number[] = [];
// let result: number[] = [];
// for (let i: number = 0; i < limit; i++) {
//     const value: number = parseInt(ps(`Enter array value ${i + 1}: `) || "0");
//     array.push(value);
// }
// for (let i: number = 1; i < limit; i++) {
//     result.push(array[i] * array[i - 1]);
// }
// console.log("Resultant array is: ", result);
//  ----------------------------------------------------------------------------------
// //      22.
// const userInput = require('prompt-sync')();
// function getArray(rows: number, cols: number): number[][] {
//     let array: number[][] = [];
//     for (let i = 0; i < rows; i++) {
//         let row: number[] = [];
//         for (let j = 0; j < cols; j++) {
//             const value = parseInt(userInput(`Enter value for array[${i + 1}][${j + 1}]: `) || "0");
//             row.push(value);
//         }
//         array.push(row);
//     }
//     return array;
// }
// function addArray(array1: number[][], array2: number[][], rows: number, cols: number): number[][] {
//     let resultArray: number[][] = [];
//     for (let i = 0; i < rows; i++) {
//         let row: number[] = [];
//         for (let j = 0; j < cols; j++) {
//             row.push(array1[i][j] + array2[i][j]);
//         }
//         resultArray.push(row);
//     }
//     return resultArray;
// }
// function displayArray(array: number[][]): void {
//     console.log("Resultant Array is:");
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].join("\t"));
//     }
// }
// function main(): void {
//     const rows = parseInt(userInput("Enter the number of rows: ") || "0");
//     const cols = parseInt(userInput("Enter the number of columns: ") || "0");
//     console.log("Enter values for Array 1:");
//     const array1 = getArray(rows, cols);
//     console.log("Enter values for Array 2:");
//     const array2 = getArray(rows, cols);
//     const resultArray = addArray(array1, array2, rows, cols);
//     displayArray(resultArray);
// }
// main();
//  ----------------------------------------------------------------------------------
//      23.
// class Array2D {
//     array: number[][];
//     constructor(rows: number, cols: number) {
//         this.array = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
//     }
//     getArray(): void {
//         const prompt = require('prompt-sync')();
//         for (let i = 0; i < this.array.length; i++) {
//             for (let j = 0; j < this.array[i].length; j++) {
//                 this.array[i][j] = parseInt(prompt(`Enter value for array[${i + 1}][${j + 1}]: `) || "0");
//             }
//         }
//     }
//     displayArray(): void {
//         console.log("Array elements are:");
//         for (let i = 0; i < this.array.length; i++) {
//             console.log(this.array[i].join("\t"));
//         }
//     }
// }
// function main(): void {
//     const prompt = require('prompt-sync')();
//     const rows = parseInt(prompt("Enter the number of rows: ") || "0");
//     const cols = parseInt(prompt("Enter the number of columns: ") || "0");
//     const array2D = new Array2D(rows, cols);
//     array2D.getArray();
//     array2D.displayArray();
// }
// main();
//  ----------------------------------------------------------------------------------
// //     24.
// class Area {
//     circle(radius: number): number {
//         return Math.PI * radius * radius;
//     }
//     square(side: number): number {
//         return side * side;
//     }
//     rectangle(length: number, width: number): number {
//         return length * width;
//     }
//     triangle(base: number, height: number): number {
//         return 0.5 * base * height;
//     }
// }
// class MyClass extends Area {
//     public static main(): void {
//         const prompt = require('prompt-sync')();
//         const myClass = new MyClass();
//         console.log("Menu:");
//         console.log("1. Circle");
//         console.log("2. Square");
//         console.log("3. Rectangle");
//         console.log("4. Triangle");
//         console.log("5. Exit");
//         const choice = parseInt(prompt("Enter your choice: ") || "0");
//         switch (choice) {
//             case 1:
//                 const radius = parseFloat(prompt("Enter the radius of the circle: ") || "0");
//                 console.log("Area of Circle: " + myClass.circle(radius));
//                 break;
//             case 2:
//                 const side = parseFloat(prompt("Enter the side of the square: ") || "0");
//                 console.log("Area of Square: " + myClass.square(side));
//                 break;
//             case 3:
//                 const length = parseFloat(prompt("Enter the length of the rectangle: ") || "0");
//                 const width = parseFloat(prompt("Enter the width of the rectangle: ") || "0");
//                 console.log("Area of Rectangle: " + myClass.rectangle(length, width));
//                 break;
//             case 4:
//                 const base = parseFloat(prompt("Enter the base of the triangle: ") || "0");
//                 const height = parseFloat(prompt("Enter the height of the triangle: ") || "0");
//                 console.log("Area of Triangle: " + myClass.triangle(base, height));
//                 break;
//             case 5:
//                 console.log("Exiting...");
//                 return;
//             default:
//                 console.log("Invalid choice. Please try again.");
//         }
//         MyClass.main();
//     }
// }
// MyClass.main();
//  ----------------------------------------------------------------------------------
//      25.
// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];
// for (var i = 0; i < library.length; i++) {
//     if (library[i].readingStatus) {
//         console.log("Already read '" + library[i].title + "' by " + library[i].author + ".");
//     } else {
//         console.log("You still need to read '" + library[i].title + "' by " + library[i].author + ".");
//     }
// }
//  ----------------------------------------------------------------------------------
//       26.
// let my_string = "1234";
// try {
//     my_string = my_string.split("").reverse().join("");
//     console.log(`Reversed string is : ${my_string}`);
// } catch (err) {
//     console.log(`Error : ${err.message}`);
// } finally {
//     console.log(`Type of my_string is : ${typeof my_string}`);
// }
//  ----------------------------------------------------------------------------------
//      27.
// let my_height: any = "seven";
// try {
//     if (isNaN(my_height)) {
//         throw new Error("notANumberError");
//     } else if (my_height > 72) {
//         throw new Error("HugeHeightError");
//     } else if (my_height < 1) {
//         throw new Error("TinyHeightError");
//     } else {
//         console.log(my_height);
//     }
// } catch (err) {
//     console.log(err.message);
// }
//  ----------------------------------------------------------------------------------
//       28.
// class Car {
//     name: string;
//     mileage: number;
//     max_speed: number;
//     constructor(name: string, mileage: number, max_speed: number) {
//         this.name = name;
//         this.mileage = mileage;
//         this.max_speed = max_speed;
//     }
// }
// const myCar = new Car('Polo', 16, 160);
// console.log(myCar.name);
// console.log(myCar.mileage);
// console.log(myCar.max_speed);
//  ----------------------------------------------------------------------------------
//       29.
function myFilter(myArray, callback) {
    var sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (callback(myArray[i])) {
            sum += myArray[i];
        }
    }
    return sum;
}
function callback(num) {
    return num % 2 === 0;
}
var myArray = [1, 2, 3, 4, 5];
var result = myFilter(myArray, callback);
console.log(result);
