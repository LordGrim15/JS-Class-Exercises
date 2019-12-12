let currentYear = new Date().getFullYear();
let inputYear = prompt("Please enter your birth year: ");
let birthYear = parseInt(inputYear);

function calculateAge() {
  let result = currentYear - birthYear;
  return result;
}

console.log(`Current year: ${currentYear}`);
console.log(`Your age is: ${calculateAge()}`);

function calculateAge2(yearOfBirth) {
  let result = currentYear - yearOfBirth;
  return result;
}

console.log(calculateAge2(2001));
console.log(calculateAge2(2000));
console.log(calculateAge2(1998));
