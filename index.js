console.log(10 + "5");

let x = 10;
x += 5;
console.log(x);

console.log(10 - null);

x = 10;
x *= 2;
console.log(x);

console.log(10 / "2");

console.log(10 % 3);

x = 10;
x = x ** 2;
console.log(x);

console.log(10 > 5 && 5 < 10);

console.log(10 === "10");

console.log(null ?? "default");

console.log(10 || "default");

console.log(!true);

console.log(10 & 5);

console.log("14. 10 | 5 =", 10 | 5);

console.log("15. 10 ^ 5 =", 10 ^ 5);

let x1 = 10;
let y1 = ++x1;
console.log("x1 =", x1, ", y1 =", y1);

let x2 = 10;
let y2 = x2++;
console.log("x2 =", x2, ", y2 =", y2);

let x3 = 10;
console.log("++x3 =", ++x3);

let x4 = 10;
console.log("x4++ =", x4++);
console.log("x4 after increment =", x4);

let x5 = 10;
let y5 = --x5;
console.log("x5 =", x5, ", y5 =", y5);

let x6 = 10;
let y6 = x6--;
console.log("x6 =", x6, ", y6 =", y6);

let x7 = 10;
let y7 = x7 > 5 ? "yes" : "no";
console.log("y7 =", y7);

let x8 = 10;
let y8 = x8 > 5 ? (x8 > 3 ? "maybe" : "no") : "no";
console.log("y8 =", y8);

const obj1 = { a: { b: "c" } };
console.log("1. obj?.a?.b =", obj1?.a?.b);

const obj2 = { a: { b: "c" } };
console.log("2. obj?.a?.c =", obj2?.a?.c);

const obj3 = { a: { b: "c" } };
console.log("3. obj?.b?.c =", obj3?.b?.c);
