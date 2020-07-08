var fs = require("fs");

// writeFile : 비동기식으로 파일에 데이터를 입력
//           : 파일이 없으면 새롭게 만들고, 
//           : 파일이 있으면 기존 데이터를 삭제하고 덮어씀
fs.writeFile("data1.txt", "hello node js ", function(error){
   console.log("비동기식 저장"); 
});

// appendFile : 비동기식으로 파일에 데이터 작성
//           : 파일이 없으면 새롭게 만들고, 
//           : 파일이 있으면 기존 데이터 뒤에 이어서 작성
fs.appendFile("data1.txt", "안녕 노드제이에스", function(error){
    console.log("비동기식 추가");
});

// readFile : 비동기식으로 파일의 데이터를 읽음
fs.readFile("data1.txt", function(error, data){
    console.log("data1 : ", data);
    console.log("data1 tostring : ", data.toString());
});

// writeFileSync : writeFile + 동기
fs.writeFileSync("data2.txt", "hello node js"); 
// 코드 수행후 대기하기 때문에 callback 함수 대신 다음 줄에 이어서 작성 
console.log("동기식 저장");

// appendFileSync : appendFile + 동기
fs.appendFileSync("data2.txt","\nadd clause");
console.log("글 추가")

var testdata = fs.readFileSync("data2.txt");
console.log("read sync : ",testdata.toString());