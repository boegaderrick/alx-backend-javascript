export default function getStudentsSum(array) {
  return array.reduce((accumulator, obj) => accumulator + obj.id, 0);
}
