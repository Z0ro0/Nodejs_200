const studentList= [
    {name:'kyeongrok', age: 31, math: 85, english: 87},
    {name:'jihyun', age: 31, math: 95, english: 97},
    {name:'minsup', age: 35, math: 76, english: 84},
    {name:'dasom', age: 35, math: 84, english: 73},
    {name:'yuna', age: 26, math: 54, english: 67},
    {name:'mattheue', age: 29, math: 34, english: 100}
];

studentList.sort((now, next)=>now.math-next.math);//수학 점수 기준으로 정렬
console.log(studentList);

const compare = (now, next) => {//0번째부터 인덱스가 1개씩 증가하면서 현재 인덱스의 값과 다음 index의 값을 넘겨줌
    console.log('---------------');
    console.log(now);
    console.log(next);
}

studentList.sort(compare);