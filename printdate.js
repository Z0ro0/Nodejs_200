const date = new Date(2017, 8, 3, 18, 20, 30);

console.log('date: %s', date.toLocaleString());//연도 월 일 시 분 초
console.log('LocaleDateString: %s', date.toLocaleDateString());// 연도 월 일
console.log('LocaleTimeString: %s', date.toLocaleTimeString());//시 분 초

console.log('year: %s', date.getFullYear());
console.log('month: %s', date.getMonth()+1);//0부터 시작하니까 출력시에는 +1
console.log('date: %s', date.getDate());
console.log('hours: %s', date.getHours());
console.log('minutes: %s', date.getMinutes());
console.log('seconds: %s', date.getSeconds());