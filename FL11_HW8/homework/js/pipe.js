let addOne = (x) => x + 1;

function pipe(initialValue, ...rest) {
  let result = initialValue;

  for(let i = 0; i < rest.length; i++) {
    result = rest[i](result);
  }

  return result;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
pipe(1, addOne, addOne, addOne);
