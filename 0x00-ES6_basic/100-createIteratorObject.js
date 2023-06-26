export default function createIteratorObject(report) {
  let workers = [];
  for (const dep of Object.entries(report.allEmployees)) {
    workers = [...workers, ...Object.values(dep[1])];
  }
  return workers;
}
