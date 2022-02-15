/**
 * Turns an object of objects into an array of objects
 *
 * @param object An object of objects
 */
function objectToArray(object: {}): {}[] {
  return Object.values(object);
}

export default { objectToArray };
