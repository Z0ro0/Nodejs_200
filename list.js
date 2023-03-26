const studentList = [
    {name:'gaeul', age: 22, score: 90},
    {name:'jaeyeon', age: 26, score: 88},
    {name:'wonseo', age: 24, score: 95},
];

console.log(studentList[0]);

const student1 = {name:'hajin', age: 28, score: 89};
studentList.push(student1);

console.log(studentList);

studentList.pop();//맨 마지막에 넣은 학생 리스트에서 제거
console.log(studentList);