const studentList = [
    {name: 'gaeul', age: 20, math: 80, science: 90},
    {name: 'hajin', age: 21, math: 87, science: 98},
    {name: 'jayeon', age: 18, math: 90, science: 91},
    {name: 'wonseo', age: 19, math: 88, science: 70},
];

const plus = (a, b) => a+b;
studentList.forEach(student => console.log(`${student.name} total: ${plus(student.math, student.science)}`));

console.log('--------------------');

studentList.forEach((student) => {
    console.log(`${student.name} total: ${plus(student.math, student.science)}`);
});