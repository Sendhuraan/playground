function filter(inputArr, cb) {
  let result = [];

  for(let i=0; i < inputArr.length; i++) {
      if(cb(inputArr[i])) {
          result.push(inputArr[i]);
      }
  }

  return result;
}

function reduce(inputArr, cb, initialVal) {
  let accumulator = initialVal === undefined ? inputArr[0] : initialVal;

  for(let i=0; i < inputArr.length; i++) {
      accumulator = cb(accumulator, inputArr[i])
  }

  return accumulator;
}


const myArr = [1,2,3];
console.log(filter(myArr, item => item > 1));
console.log(reduce(myArr, (acc, item) => acc + item, 0));