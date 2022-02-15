interface Result {
  [object: number]: {};
}

/**
 * Turns an array of objects to an object of objects
 *
 * @param array An array of objects
 */
function arrayToObject(array: {}[]): {} {
  let result: Result = {};
  /**
   * Loops through the array param
   *
   * @param item An object
   * @param index The index of the object
   */
  array.forEach((item: {}, index: number) => {
    result[index] = item;
  });
  /**
   * Returns an object of objects
   */
  return result;
}

export default { arrayToObject };
