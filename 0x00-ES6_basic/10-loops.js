export default function appendToEachArrayValue(array, appendString) {
  const arr = [];

  for (const value of array) {
    const idx = array.indexOf(value);
    arr[idx] = appendString + value;
  }

  return arr;
}
