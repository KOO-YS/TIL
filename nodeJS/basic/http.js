var http = require("http");
var url = require("url");

// createServer : 웹 서버 개체 생성
var server = http.createServer(function(request, response){
    // 응답결과 브라우저에 전달
    // response.write("[response write]");   
    
    response.writeHead(200, {"content-type":"text/html"});  // 설정을 안하면 기본값으로 설정
    // response.writeHead(200, {"content-type":"audio/mp3"});
    
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head><meta charset='utf-8'/></head>");
    response.write("<body><h1>Node.js 웹 애플리케이션 개발</h1>");
    
    console.log(request.url);   // url 정보를 가져온다
    
    var q = url.parse(request.url, true);

    // switch(request.url){
    switch(q.pathname){     // parameter를 제외하고 구분 가능
        case "/":
            response.write("<h1> root page </h1>");
            // parameter를 가진 url 사용법 -> url 모듈 이용
            response.write("<a href='test1?data=111'>test1</a><br/>")
            response.write("<a href='test2?data=english'>test2</a><br/>")
            break;
        case "/test1":
            response.write("<h1>test1 page</h1>");
            // url module 의 parameter 정보 출력 방법
            response.write("data : "+q.query.data+"<br>");
            break;
        case "/test2":
            response.write("<h1>test2 page</h1>");
            response.write("data : "+q.query.data+"<br>");
            break;
    }

    response.write("</body>");
    response.write("</html>");
    response.end();
});

// listen : 웹 서버 동작
server.listen(8088);
console.log("Server On");

// 클라이언트가 전달하는 파라미터는 url 모듈을 이용해 코드로 받을 수 있다
