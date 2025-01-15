
const min = 1;
const max = 6;

let randomNumber = Math.ceil(Math.random() * (max - min)) + min;

if (randomNumber == 6) {
  console.log(`\nHurray! you got ${randomNumber}`);
  console.log(`Roll up again!\n`);
} else {
  console.log(`\nYou got ${randomNumber}`);
  console.log("Pass\n")
}


