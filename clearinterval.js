const playInterval = setInterval(()=>console.log('hello'), 1000);//1초에 한 번씩hello 출력

setTimeout(()=>{clearInterval(playInterval);}, 5000);//5초 후에 playInterval 실행 취소