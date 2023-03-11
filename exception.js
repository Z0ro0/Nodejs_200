try{
    printMessage('hello');//함수가 없는 상태로 호출했기 때문에 오류 발생
}catch(e){
    console.log('error: ', e);//오류 출력
}

console.log('program finished');//프로그램 정상적으로 종료