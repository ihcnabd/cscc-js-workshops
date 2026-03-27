# JavaScript Session 2 — Arrays & Functions

## 📋 Session Overview

This session is part of an ongoing JavaScript course. It includes a **theory introduction**, a **recap of the previous session**, and dives into two major new concepts: **Arrays** and **Functions**.

---

## 🧠 Theory Part — JavaScript Introduction

Before the practical work, the session opened with a theoretical slide covering the fundamentals of JavaScript:

- **What is JavaScript?**
  - A high-level, interpreted programming language
  - Makes websites interactive and brings programming logic to the web

- **Common front-end uses:**
  - Handling button clicks
  - Validating user inputs
  - Dynamic UI interactions, and more

- **Where does JS run?**
  - **In the browser** — the default environment for JavaScript
  - **Outside the browser** — using **Node.js**, which takes the JS engine out of the browser and allows JS to run on servers and almost anywhere else

- **Why does this matter?**
  - Running JS outside the browser is what enabled the rise of libraries and frameworks like **React**, **Vue**, and others
  - It made JavaScript a full-stack language (front-end & back-end)

---

## 🔄 Recap of Previous Session

A recap was done at the beginning to review what was covered in the last session. The details and code from that session are available in the **previous session folder**. Key topics revisited:

- Different **data types**: strings, booleans, numbers, etc.
- Writing **conditions** and using the **ternary operator**
- Getting user input with `prompt()` _(noted as an old/educational approach — not recommended for modern use)_

---

## 📚 New Concepts Introduced

### 1. Arrays

**Why arrays?**  
When you have multiple related values (e.g., a list of students), storing them in separate variables becomes impractical. Arrays solve this by grouping related data together.

**Key points covered:**

- **Creating an array** with mixed data types (string, number, boolean, null, undefined):

  ```js
  let students = ["Ayoub", 12, "Omar", true, null, undefined];
  ```

- **JS flexibility note:** Arrays can hold different data types — this is a JavaScript flexibility (and sometimes a gotcha)

- **Accessing elements by index** — indexing starts at **0**, not 1:

  ```js
  students[0]; // "Ayoub"
  ```

- **Undefined gotcha:** Accessing an out-of-bounds index returns `undefined` — the same value as an actual `undefined` element in the array — so you can't always tell which situation you're in

- **Built-in array methods** (students encouraged to explore more on [W3Schools](https://www.w3schools.com)):
  - `students.length` — get the number of elements
  - `students.pop()` — remove the last element
  - `students.push("Sarah")` — add a new element at the end
  - No need to memorize all methods — knowing they exist and where to look them up is enough

---

### 2. Functions

Functions took up a significant part of the session. The core idea: **avoid repeating the same logic** by wrapping it in a reusable block.

**Why functions?**

- **Reusability** — write once, use many times
- **Maintainability** — if something needs to change, you change it in one place

#### Function types covered:

**a) Normal named function:**

```js
function greet(name) {
  console.log("SAHA FTORKOM " + name);
}
greet("DEVS");
```

**b) Function with a return value:**

```js
function add(a, b) {
  return a + b;
}
let result = add(5, 3);
```

- Difference between functions **with** and **without** `return` was explained

**c) Function assigned to a variable (anonymous function):**

```js
const sub = function (a, b) {
  return a - b;
};
```

**d) Arrow function:**

```js
const multiply = (a, b) => {
  return a * b;
};

const sahaFtorkom = () => {
  console.log("saha ftorkom");
};
```

#### Other function concepts:

- **Parameters vs Arguments:** Parameters are the placeholders in the function definition; arguments are the actual values passed when calling it
- **Calling a function:** Use parentheses `()` to execute it, e.g., `greet("DEVS")`
- **Storing the result:** `let result = add(5, 3);`
- **Passing a function as an argument:** Functions can be passed like variables — without `()` (which would call it immediately)

```js
function showResult(func) {
  console.log("this coming from the showResult");
  console.log(func(5, 3));
}

showResult(add); // passes the function, doesn't call it yet
showResult(sub);
```

> **Key distinction:** `showResult(add)` passes the function logic. `showResult(add())` would execute `add` immediately and pass the _result_ instead.

---

## 💡 Side Concepts Mentioned Along the Way

- **camelCase naming convention** — used for variable and function names in JS (e.g., `showResult`, `sahaFtorkom`)
- **Static vs Dynamic typing:**
  - In **C** (static typing): you must declare the type of a variable explicitly
  - In **JavaScript** (dynamic typing): the type is inferred automatically at runtime
- **Where to place the `<script>` tag:**
  - Placing it in the `<head>` can cause **render blocking** — the browser pauses HTML parsing to download and execute the JS, which delays the page from loading, especially with heavy scripts
  - The recommended practice is to place it at the **end of `<body>`**, so the HTML is fully parsed and visible to the user before JS runs

---
