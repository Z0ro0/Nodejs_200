const today = new Date();//초까지 나옴
const date1 = new Date(2017, 9-1, 2);//9월
const date2 = new Date(2017, 8, 3);
const date3 = new Date(2017, 8, 3, 18);
const date4 = new Date(2017, 8, 3, 18, 20);
const date5 = new Date(2017, 8, 3, 18, 20, 30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());