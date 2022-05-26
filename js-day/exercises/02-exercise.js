const input1 = {
  title: 'javascript course',
  description: 'basic javascript course',
  hours: 80,
  schedule: {
    module1: 'basic javascript',
    module2: 'javascript in the browser',
  },
};
const input2 = {
  title: '.NET course',
  description: 'basic .NET course',
  hours: 100,
  schedule: {
    module1: 'basic .NET',
    module2: '.NET in the browser',
  },
};
let result1 // undefined
// console.log(result1) -> undefined
const calculateHours = (course, extraHours) => {
  const courseHours = course.hours;
  return courseHours + extraHours;
};

result1 = calculateHours(input1, 100); // 180
const result2 = calculateHours(input2, 50);

console.log(result1); // 180
console.log(result2); // 150
