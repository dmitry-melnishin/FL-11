function getMin() {
  let min = arguments[0];

  for (let i = 1; i <= arguments.length - 1; i++) {

    if ( min > arguments[i] ) {
      min = arguments[i];
    }

  }

  return min;
}

getMin(0, 3, -3, -8, -5, -7, 0, 3, -12);
