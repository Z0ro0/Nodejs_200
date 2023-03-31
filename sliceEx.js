const studentList = [
    {name: 'seoyoung', age: 31, math: 85, english: 87},
    {name: 'gaeul', age: 28, math: 87, english: 57},
    {name: 'wonseo', age: 48, math: 95, english: 70},
    {name: 'doyeon', age: 18, math: 42, english: 80},
    {name: 'jaeyeon', age: 23, math: 87, english: 40},
    {name: 'hajin', age: 38, math: 96, english: 68},
];

const sorted = studentList.sort((now, next)=>now.math-next.math);
console.log(sorted);
const reversed = sorted.reverse();
console.log(reversed);
const sliced = reversed.slice(0,3);
console.log(sliced);