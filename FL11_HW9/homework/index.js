// -----task 0-----
const getNumbers = str => {
  const arr = str.split('');
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = parseInt(arr[i]);

    if ( current || current === 0 ) {
      result.push(current);
    }
  }

  return result;
}

// -----task 1------
function findTypes() {
  let result = {};

  for (let i = 0; i < arguments.length; i++) {
    const prop = typeof arguments[i];

    if (result[prop]) {
      result[prop] += 1;
    } else {
      result[prop] = 1;
    }
  }

  return result;
}

// -----task 2------
const executeForEach = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
}

// -----task 3------
let mapArray = (arr, f) => {
  let result = [];

  executeForEach( arr, el => result.push(f(el)) );

  return result;
}

// -----task 4------
let filterArray = (arr, f) => {
  let result = [];

  executeForEach(arr, el => {
    if ( f(el) ) {
      result.push(el);
    }
  });

  return result;
}

// -----task 5------
const showFormattedDate = date => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `Date: ${month} ${day} ${year}`;
}

// -----task 6------
const canConvertToDate = date => !!Date.parse(date);

// -----task 7------
const daysBetween = (date1, date2) => {
  const oneDayMs = 86400000; // 24 * 60 * 60 * 1000
  const quantityDays = parseInt( (date2 - date1) / oneDayMs );

  return quantityDays;
}

// -----task 8------
const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

const getAmountOfAdultPeople = data => {
  const minAge = 18;
  let over18 = 0;
  const date18YearsAgo = new Date().setFullYear(new Date().getFullYear() - minAge);

  filterArray(data, el => {
    const datePersonBirthday = new Date(el[' birthday ']);

    if (daysBetween(datePersonBirthday, date18YearsAgo) > 0) {
      over18 += 1;
    }
  });

  return over18;
}

// -----task 9------
const keys = obj => {
  let arr = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }

  return arr;
}

// -----task 10------
const values = obj => {
  let arr = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }

  return arr;
}
