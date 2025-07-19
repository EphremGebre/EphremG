// 1. Import the readline-sync module
const input = require('readline-sync');

// 2. Prompt the user for their name and greet them.
let userName = input.question("Hello! What's your name? ");
console.log(`\nWelcome, ${userName}! Let's test your knowledge on Values, Data Types, and Operations.\n`);

// 3. Ask 5 questions and store answers
// Question 1: Basic data type
let q1 = input.question("Question 1: What data type is the value 'Hello World'? (e.g., string, number, boolean) ");

// Question 2: Numeric data type
let q2 = input.question("Question 2: Is 'true' a boolean, string, or number? ");

// Question 3: Arithmetic operation
let q3 = input.question("Question 3: What is the result of '5' + 5? (e.g., 10, '55', NaN) ");

// Question 4: Prompt for a number (as required)
let q4 = input.question("Question 4: If you have 10 apples and eat 3, how many do you have left? (Enter a number) ");
// Convert to number for potential future use, though not explicitly required for this output
let q4Number = Number(q4); 

// Question 5: Variable declaration
let q5 = input.question("Question 5: Which keyword is used to declare a constant variable in JavaScript? (e.g., var, let, const) ");

// 5. Print the value of those answers back to the user.
console.log("\n--- Your Quiz Summary ---");
console.log(`Name: ${userName}`);
console.log(`Q1: What data type is 'Hello World'? You answered: ${q1}`);
console.log(`Q2: Is 'true' a boolean, string, or number? You answered: ${q2}`);
console.log(`Q3: What is the result of '5' + 5? You answered: ${q3}`);
console.log(`Q4: If you have 10 apples and eat 3, how many do you have left? You answered: ${q4} (as a number: ${q4Number})`);
console.log(`Q5: Which keyword is used to declare a constant variable? You answered: ${q5}`);
console.log("\nThanks for taking the quiz!");
