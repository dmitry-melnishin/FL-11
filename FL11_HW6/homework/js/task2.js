const a = +prompt('Enter the length of first side of the triangle', '');
const b = +prompt('Enter the length of second side of the triangle', '');
const c = +prompt('Enter the length of third side of the triangle', '');

let isValid = true;

if ( isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 ) {
  isValid = false;
}

const isTriangle = isValid && a + b > c && b + c > a && a + c > b;

if (!isTriangle) {
  console.log('Triangle doesn’t exist');
} else if ( a === b && a === c) {
  console.log('Equivalent triangle');
} else if ( a === b || a === c || b === c ) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}
