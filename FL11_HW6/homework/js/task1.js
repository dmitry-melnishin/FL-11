const a1 = +prompt('Enter the a1 coordinate of point A','');
const a2 = +prompt('Enter the a2 coordinate of point A','');
const b1 = +prompt('Enter the b1 coordinate of point B','');
const b2 = +prompt('Enter the b2 coordinate of point B','');
const c1 = +prompt('Enter the c1 coordinate of point C','');
const c2 = +prompt('Enter the c2 coordinate of point C','');

const divider = 2;
const c1Mid = ( a1 + b1 ) / divider;
const c2Mid = ( a2 + b2 ) / divider;

const isNumber = !( isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2) );
const isNotOnePoint = !(a1 === b1 && a1 === c1 && b1 === c1) || !(a2 === b2 && a2 === c2 && b2 === c2);
const isMidPoint = c1Mid === c1 && c2Mid === c2;

if ( isNumber && isNotOnePoint && isMidPoint ) {
	console.log(true);
} else {
	console.log(false);
}
