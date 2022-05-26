const courses = [
  {
    students: 40,
    module: 'python',
  },
  {
    students: 33,
    module: 'git',
  },
  {
    students: 20,
    module: 'js',
  },
  {
    students: 11,
    module: 'agile',
  },
];
let result;

result = courses.filter((course) => {
  const module = course.students % 2; // devuelve 0 o otro valor
  const isEven = module === 0; // cuando el valor es 0 es par
  return isEven;
});
// const result = courses.filter((course) => (
//   course.students % 2 === 0
// ));

// result value
// [
//   {
//     students: 40,
//     module: 'python',
//   },
//   {
//     students: 20,
//     module: 'js'
//   },
// ]
result = result.map((course) => {
  return {
    students: course.students,
    module: course.module.toUpperCase(),
  };
});
// result value
// [
//   {
//     students: 40,
//     module: 'PYTHON',
//   },
//   {
//     students: 20,
//     module: 'JS'
//   },
// ]
result = result.map((course) => {
  return course.module;
});
// result value
// ['PYTHON', 'JS']
result = result.join(' - ');
// Result
// "PYTHON - JS"
console.log(result);

