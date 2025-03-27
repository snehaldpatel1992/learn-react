# Introduction to JavaScript

## Overview
JavaScript is a high-level, interpreted programming language that is one of the core technologies of the web. This module will introduce you to the fundamentals of JavaScript that will help you understand how to use it in web development.

## Learning Objectives
- Understand JavaScript syntax and basic programming concepts
- Learn about variables, data types, and operators
- Explore control flow, functions, and scope
- Work with objects and arrays
- Handle events and manipulate the DOM
- Understand modern JavaScript (ES6+) features

## Lessons

### 1. JavaScript Basics

#### Variables and Operators
```javascript
let name = "John";
const age = 30;
let isActive = true;
let user = null;
let profile;

let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3;

let greeting = "Hello, " + name + "!";
let modernGreeting = `Hello, ${name}!`;

console.log(greeting);
console.log(modernGreeting);
```

#### Equality and Type Conversion
```javascript
console.log(5 == "5");         
console.log(5 === "5");         

```

#### Primitive Types in JavaScript

- **Undefined:** A variable declared but not assigned a value.
```javascript
let x;
console.log(x);
```

- **String:** A sequence of characters.
```javascript
let name = "John";
console.log(name);
```

- **Number:** Includes both integers and floating-point numbers.
```javascript
let age = 25;
let height = 5.9;
console.log(age, height);
```

- **Boolean:** Represents true or false.
```javascript
let isStudent = true;
console.log(isStudent);
```

- **Null:** Represents an intentional absence of value.
```javascript
let emptyValue = null;
console.log(emptyValue);
```

### 2. Control Flow
```javascript
let hour = 15;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    default:
        console.log("Another day");
}

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}
```

### 3. Functions in JavaScript

#### Function Types

- **Named Function:**
```javascript
function greet() {
    console.log("Hello, World!");
}
greet();
```

- **Anonymous Function:**
```javascript
const greet = function() {
    console.log("Hello, World!");
};
greet();
```

- **Immediately Invoked Function Expression (IIFE):**
```javascript
(function() {
    console.log("I am executed immediately!");
})();
```

- **Arrow Functions:**
```javascript
const greet = () => console.log("Hello, World!");
greet();

const add = (a, b) => a + b;
console.log(add(5, 3));
```

#### Function Parameters

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Sarah"));

const multiply = (a, b) => a * b;
console.log(multiply(4, 2));

const greetUser = (name = "Guest") => `Hello, ${name}!`;
console.log(greetUser());
console.log(greetUser("Alice"));
```

### 4. Scope in JavaScript

- **Global Scope:** Variables declared outside any function; accessible anywhere in the code.
    
```javascript
let globalVar = "I am global";
function showGlobal() {
  console.log(globalVar); // Accessible here
}
showGlobal();
console.log(globalVar); // Accessible here too
```
    
- **Local Scope:** Variables declared within a function; accessible only within that function.
    
```javascript
function showLocal() {
  let localVar = "I am local";
  console.log(localVar); // Accessible here
}
showLocal();
// console.log(localVar); // Error: localVar is not defined
```

### 5. Non-Primitive Types in JavaScript

#### Object
```javascript
let person = { name: "John", age: 25 };
console.log(person.name);
```

#### Advanced Objects
```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
};

console.log(person.firstName);
console.log(person.greet());

const { firstName, age } = person;
console.log(firstName, age);
```

####  Arrays
```javascript
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);
console.log(fruits.length);

fruits.push("Mango");
fruits.unshift("Strawberry");
console.log(fruits);

const lastFruit = fruits.pop();
console.log(lastFruit);

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
```

#### Set
```javascript
// Creating a Set
let uniqueNumbers = new Set([1, 2, 2, 3]); // Duplicates are automatically removed
console.log(uniqueNumbers); // Set {1, 2, 3}

// Adding values
uniqueNumbers.add(4);
uniqueNumbers.add(1); // Already exists, so not added again
console.log(uniqueNumbers); // Set {1, 2, 3, 4}

// Checking if a value exists
console.log(uniqueNumbers.has(2)); // true
console.log(uniqueNumbers.has(5)); // false

// Getting the size
console.log(uniqueNumbers.size); // 4

// Deleting values
uniqueNumbers.delete(3);
console.log(uniqueNumbers); // Set {1, 2, 4}

// Iterating through a Set
uniqueNumbers.forEach(value => {
  console.log(value);
});

// Clearing all values
uniqueNumbers.clear();
console.log(uniqueNumbers.size); // 0
```

### 6. DOM Manipulation
```javascript
const heading = document.getElementById("main-heading");
const paragraphs = document.getElementsByTagName("p");
const buttons = document.querySelectorAll(".btn");

heading.textContent = "New Heading";
heading.innerHTML = "<span>Updated Heading</span>";

heading.style.color = "blue";
heading.style.fontSize = "24px";

heading.classList.add("highlight");
heading.classList.remove("old-class");
heading.classList.toggle("visible");

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);

const button = document.querySelector("#myButton");
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log(event);
});
```

### 7. Modern JavaScript (ES6+) 
```javascript
let variable = "can be reassigned";
const constant = "cannot be reassigned";

const name = "John";
const greeting = `Hello, ${name}!`;

const person = { name: "John", age: 30 };
const { name: personName, age } = person;

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

const add = (a, b) => a + b;

const user = { name: "John" }; // No address property
const street = user.address ? user.address.street : "Unknown";
// Modern way: Optional chaining 
const modernStreet = user.address?.street || "Unknown";
```

### 8. Error Handling

#### Using try...catch
```javascript
try {
  const result = someUndefinedVariable + 10;
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}
console.log('Program continues...');
```

#### Using finally
```javascript
try {
  console.log('Trying to access a file...');
  throw new Error('File not found');
} catch (error) {
  console.error('Error caught:', error.message);
} finally {
  // This always runs
  console.log('Cleanup operations...');
}
```

#### Throwing custom errors
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero!');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error('Error in division:', error.message);
}
```

### Asynchronous Nature of JavaScript

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 1000);

console.log("End");
```

Output:
```
Start
End
Timer callback (after 1 second)
```

JavaScript uses an event loop to handle asynchronous operations:
1. Code runs from top to bottom
2. Asynchronous tasks are put into a queue
3. When the main thread is free, tasks from the queue are executed

### Callback Hell and Solutions

#### Example of Callback Hell using `setTimeout`

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Step 4 - Done!");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);
```

#### Why is this bad?

- Code becomes **hard to read** and **difficult to maintain**.
- If you need to handle errors or modify logic, it gets messy.
- Harder to **debug** due to deep nesting.

#### How to Fix it? (Using Promises)

Refactor it using **Promises** to flatten the structure:

```javascript
const delay = (time, msg) =>
  new Promise(resolve => setTimeout(() => {
    console.log(msg);
    resolve();
  }, time));

console.log("Start");

delay(1000, "Step 1")
  .then(() => delay(1000, "Step 2"))
  .then(() => delay(1000, "Step 3"))
  .then(() => delay(1000, "Step 4 - Done!"));
```

#### Even better with async/await

```javascript
async function executeSteps() {
  console.log("Start");
  await delay(1000, "Step 1");
  await delay(1000, "Step 2");
  await delay(1000, "Step 3");
  await delay(1000, "Step 4 - Done!");
}

executeSteps();
```

#### Running Promises in Parallel with Promise.all()

Sometimes you need to run multiple promises at the same time (in parallel) rather than one after another (sequentially):

```javascript
// Sequential execution - each step waits for the previous one
console.log("Start - Sequential");
await delay(1000, "Step 1");
await delay(1000, "Step 2");
await delay(1000, "Step 3");
console.log("Done - Sequential"); // Takes ~3000ms (1000+1000+1000)

// Parallel execution - all steps start at the same time
console.log("Start - Parallel");
const promises = [
  delay(1000, "Step 1"),
  delay(1000, "Step 2"),
  delay(1000, "Step 3")
];

// Wait for all promises to complete
await Promise.all(promises);
console.log("Done - Parallel"); // Takes ~1000ms (all run simultaneously)
```

**Key points about Promise.all():**

- Takes an array of promises and returns a new promise
- The returned promise resolves when all input promises resolve
- Results are returned in the same order as the input promises
- If any promise rejects, the entire Promise.all() rejects immediately

```javascript
// Using Promise.all with our delay function
async function runInParallel() {
  console.log("Starting parallel operations");
  
  const results = await Promise.all([
    delay(1000, "Task 1"),
    delay(1000, "Task 2"),
    delay(1000, "Task 3")
  ]);
  
  console.log("All tasks completed in parallel");
}

runInParallel();
```

## Additional Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
