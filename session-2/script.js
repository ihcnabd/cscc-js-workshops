/*===================== js theory intro  =============*/

/** ================= RECAP OF LAST SESSION ================= */

/** ================= END OF  RECAP OF LAST SESSION ================= */
/**============== start of this session ============== */
/* ===================== ARRAYS ===================== */
// Examples
let student1 = "Ayoub";
let student2 = "Karim";
let student3 = "Omar";

// Using array instead
let students = ["Ayoub", 12, "Omar", true, null, undefined];

console.log("Students:", students);

// Accessing elements
console.log("First student:", students[0]);

// Length of array
console.log("Length:", students.length);

// Removing last element
students.pop();
console.log("After pop:", students);

// Adding new element
students.push("Sarah");
console.log("After push:", students);

/* ===================== END  ARRAYS ===================== */
/* ===================== FUNCTIONS ===================== */

// 1. Normal function
function greet(name) {
  console.log("SAHA FTORKOM " + name);
}

greet("DEVS");

// 2. Function with return
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("Addition result:", result);

// 3. (function without name assigned to variable)
const sub = function (a, b) {
  return a - b;
};
console.log("Subtraction result:", sub(10, 4));

const multiply = (a, b) => {
  return a * b;
};

console.log("Multiplication result:", multiply(3, 4));
const sahaFtorkom = () => {
  console.log("saha ftorkom");
};
sahaFtorkom();

/* ****** PASSING FUNCTION ****** */

// Function that takes another function as parameter
function showResult(func) {
  console.log("this coming from the showResult ");
  console.log(func(5, 3));
}

// Passing function
showResult(add);
showResult(sub);

/* ===================== end FUNCTIONS ===================== */
