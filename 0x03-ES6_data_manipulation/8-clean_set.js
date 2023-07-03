export default function cleanSet(set, startString) {
  if (startString.length < 1) {
    return '';
  }
  return [...set].filter((element) => element.startsWith(startString)).join('-').split(startString).join('');
}
