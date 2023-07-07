export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length < 1) {
    return '';
  }

  return [...set].filter((element) => {
    if (!element) {
      return '';
    }
    return element.startsWith(startString);
  }).map((element) => element.slice(startString.length)).join('-');
}
