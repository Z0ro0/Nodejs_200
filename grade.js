const students = [
    {name: 'hajin', age: 31, score: 78},
    {name: 'wonseo', age: 25, score: 95},
    {name: 'gaeul', age: 14, score: 90},
    {name: 'jayeon', age: 18, score: 60}
];

function getDegree(score){
    if(score>=90){
        return 'A';
    }else if(score>=80){
        return 'B';
    }else if(score>=70){
        return 'C';
    }else{
        return 'F';
    }
}

students.forEach((students) => {
    const result = `name: ${students.name}, score: ${getDegree(students.score)}`;
    console.log(result);
});