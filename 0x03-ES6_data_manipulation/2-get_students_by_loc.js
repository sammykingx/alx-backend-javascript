export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((items) => items.location === city);
  }
  return [];
}
