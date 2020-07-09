// express : express 모듈 제공 기능을 사용할 객체 반환
var express = require("express");
var app = express();
// routing 용 객체
var controller = require("./router/controller")(app);

// 라우팅을 아래와 같은 식으로 처리하면 유지보수 넘 힘듦 
// ------> 하단 코드를 controller.js 로 뺀다
// get : get 방식으로 요청이 발생했을 때 호출될 함수 등록
// app.get("/", function(req, res){
//     res.send("ROOT");   // 응답 결과 브라우저에 보내기
// });
// app.get("/test", function(req, res){
//     res.send("test");
// });     

// listen : 서버 가동
var server = app.listen(8088, function(){
    console.log("Server On");
});

// post : post 방식으로 요청이 발생했을 떄 호출될 함수 등록
