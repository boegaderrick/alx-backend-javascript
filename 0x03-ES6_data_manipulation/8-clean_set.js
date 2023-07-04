export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length < 1) {
    return '';
  }
  return [...set].filter((element) => element.startsWith(startString)).join('-').split(startString).join('');
}
