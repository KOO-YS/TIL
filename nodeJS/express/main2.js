var express = require("express");

var ejs = require("ejs");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();
// 1. html 파일을 넣어놓을 폴더 지정
app.set("views",__dirname+"/views");
// 2. 렌더링 엔 진 모듈 지정
app.set("view engine", "ejs");
// 3. html일 경우 ejs 모듈 지정
app.engine("html", ejs.renderFile);

// 쿠키 사용 선언
app.use(cookieParser());
// 세션
app.use(session({
    secret : "qwerty",  // 이 문자열을 이용해 데이터 암호화
    resave : false,     // 세션 정보 재저장
    saveUninitialized:true  // 초기화 값을 저장하지않겠다
}));
// 정적 파일들이 저장된 폴더 경로 설정
app.use(express.static("public"));

// routing 용 객체
var controller = require("./router/controller")(app);

// listen : 서버 가동
var server = app.listen(8088, function(){
    console.log("Server On");
});
