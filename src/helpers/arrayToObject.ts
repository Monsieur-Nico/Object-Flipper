interface Result {
  [object: number]: {};
}

function arrayToObject(array: {}[]) {
  let result: Result = {};
  array.forEach((item, index) => {
    result[index] = item;
  });
  return result;
}

module.exports = { arrayToObject };
