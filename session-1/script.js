// introduction JS

//__________________________________________________________________________________________
// let /  const  / var
// Primitives (string, number, boolean, null, undefined)
// typeof
// Operators: arithmetic, comparison
// Template literals
// props
// Converting inputs: Number(), parseInt, parseFloat
// String methods
// if else

//__________________________________________________________________________________________
// let  /  const  / var

// --- let ---

// Portée de bloc
// Ne peut pas être redéclaré dans la même portée
// Peut être réassigné

let x = 10;
console.log(x);
//let x = 30; // Erreur : Identifier 'x' has already been declared
x = 20;
console.log(x);

// --- const ---

// Portée de bloc
// Ne peut pas être redéclaré dans la même portée
// Ne peut pas être réassigné
const y = 30;
console.log(y);
//const y = 40; // Erreur : Identifier 'y' has already been declared
//y = 40; // Erreur : Assignment to constant variable

// --- var ---
// Portée de fonction
// Peut être redéclaré dans la même portée
// Peut être réassigné
var z = 50;
console.log(z);
var z = 60;

//__________________________________________________________________________________________
// Primitives (string, number,float, boolean, null, undefined)
let str = "Hello, World!";
let num = 42;
let float = 3.14;
let bool = true;
let nul = null;
let undef;
//__________________________________________________________________________________________
// typeof
console.log(typeof str);
console.log(typeof num);
console.log(typeof float);
console.log(typeof bool);
console.log(typeof nul);
console.log(typeof undef);

//__________________________________________________________________________________________
// Operators: arithmetic, comparison
let a = 14;
let b = 8;
// Arithmetic
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // 11 / 5 = 2 (quotient) + 1 (remainder)
// Comparison
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b); // = affectation, == comparaison de valeur, === comparaison de valeur et de type
console.log(a !== b);
// Logical // && (AND), || (OR), ! (NOT)
console.log(a > 18 && b < 10); // true && false => false
console.log(a > 15 || b < 10);
console.log(!(a > 5));
//Note
// the difference between == and === is that == performs type coercion, while === does not.
console.log(5 == "5"); // true "888" '000'
console.log(5 === "5"); // false

//___________________________________________________________________________________________
const name2 = "Imen";
const age2 = 21;
const moyenne = 14.75;

console.log(
  "Student Information\n" +
    "-------------------\n" +
    "Name : " +
    name2 +
    "\n" +
    "Age  : " +
    age2 +
    "\n" +
    "Moyenne : " +
    moyenne,
);
// Template Literals
// A way to embed expressions in strings using backticks (`) and ${}.
const price = 19;
const tax = 0.19;

console.log(`
        Total price
        ------------
        Price : ${price} DA
        Tax   : ${price * tax} DA
        Final : ${price + price * tax} DA
        `);
//___________________________________________________________________________________________
//props
let name = prompt("Enter your name:");
console.log(`Hello, ${name}! Welcome to JavaScript programming.`);
//___________________________________________________________________________________________
// Converting inputs: Number(), parseInt, parseFloat
let input = "42.5";
let num1 = Number(input);
console.log(num1);
console.log(typeof num1);

let num2 = parseInt(input);
console.log(num2);

let input2 = "3.14abc";
let num3 = parseFloat(input2);
console.log(num3);
//_____________________________________________________________________________________________________
// String methods
let text = "Hello,World!";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("World"));
console.log(text.indexOf("World"));
//________________________________________________________________________
let m = 3;
m += 5;
console.log(m);

m -= 2;
console.log(m);

m++;
console.log(m);

m--;
console.log(m);

//___________________________________________________________________________________________
// if else
let age = prompt("Enter your age:");
age = Number(age);
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}
// < 18 ,,, 18-64 ,,, >= 65
// // new if else (ternary operator)
let score = prompt("Enter your score:");
score = Number(score);
console.log(score >= 50 ? "Success " : "Failed ");
