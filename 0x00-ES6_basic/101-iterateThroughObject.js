export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  for (const worker of reportWithIterator) {
    if (string.length > 0) {
      string = `${string} | ${worker}`;
    } else {
      string = worker;
    }
  }
  return string;
}
