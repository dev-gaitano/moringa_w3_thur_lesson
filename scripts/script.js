// Equality checks
let equal = 2 == '2'

console.log(equal) // true;

equal = 2 === '2'

console.log(equal) // false;

equal = 2 === 2

console.log(equal) // true;

// Functions
function sayHello() {
  console.log('Hello World!')
}

sayHello();

// Arrow functions
const greet = () => {
    console.log('=> Hello World!')
}

greet();

// Event listeners
const cancelButton = document.getElementById('cancel');
console.log(cancelButton);

cancelButton.addEventListener('click', () => {
  console.log('Button clicked');
});

