// Iteration 1: Names and Input
var hacker1 = "John";
console.log("The driver's name is " + hacker1);
var hacker2 = "Jack";
console.log("The navigator's name is " + hacker2);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " +
      hacker1.length +
      " characters.",
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It is the navigator's name that is the longest, it has " +
      hacker2.length +
      " characters.",
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!",
  );
}

// Iteration 3: Loops
for (var i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i]);
}
for (var i = hacker1.length - 1; i >= 0; i--) {
  console.log(hacker1[i]);
}
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " +
      hacker1.length +
      " characters.",
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It is the navigator's name that is the longest, it has " +
      hacker2.length +
      " characters.",
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!",
  );
}
