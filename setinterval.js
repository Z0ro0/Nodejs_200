setInterval(() => console.log('hello'), 1000);//1초에 한번씩 'hello'출력

const printBye = () => console.log('bye');//2초에 한번씩 'bye' 출력
setInterval(printBye, 2000);