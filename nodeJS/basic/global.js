
// Buffer : 메모리를 동적할당할 수 있는 모듈

/* _ 두개 ! 주의 */
// __dirname : 현재 실행중인 파일의 경로를 가짐
console.log("__dirname ", __dirname);

// __filename : 현재 실행중인 파일의 경로와 파일명을 가짐
console.log("__filename : ",__filename);

// setImmediate : 하나의 사건처리가 끝나면 동작할 코드를 등록
var afterAll = setImmediate(function(){
    console.log("모든 작업이 끝나고 immediate 함수 start");
});

// immediate 순서가 상관없다
console.log("node js code (an event)"); 
console.log("전체 작업 완료");

// clearImmediate : 등록된 Immediate 제거
clearImmediate(afterAll);

// setInterval : 주어진 함수를 주어진시간마다 끊임없이 호출
// clearInterval : 등록된 Interval 제거
var count = 0;
var interval = setInterval(function(){
    console.log("1초간격 인터벌 동작");
    count ++;
    if(count>=5) clearInterval(interval);
},1000);

// setTimeout : 주어진 함수를 주어진 시간 후 호출
var clock = setTimeout(function(){
    console.log("timeout 동작");
},1000);
// clearTimeout : 등록된 timeout 제거
clearTimeout(clock);        // 바로 삭제했기 때문에 위의 함수 자체가 실행안된다

// console : 화면 출력 객체
// exports : 개발자가 모듈 제작
// require : 모듈 객체를 가져와 만드는 함수