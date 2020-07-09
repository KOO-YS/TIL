### 외부 모듈 설치 방법

cmd에서 모듈을 사용할 폴더까지 이동 후

```
cd 사용할 경로

# 경로 이동 후 

npm install 모듈이름
```



사용할 모듈은 http://www.npmjs.com 에 검색

---



### 다량의 외부 모듈 설치 방법 - package.json

package.json 파일을 사용하여 node.js 프로그램 개발시 사용하는 외부 모듈들을 기록하고 한번에 설치할 수 있도록 관리



##### Visual Studio Code에서 package.json 설치

```shell
# 해당 경로에서 입력
npm init
```

안내

```shell
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.

# 여기서부터 원하는 것만 입력/ 원하지 않는 부분은 enter
package name:
```



##### package.json 생성

```json
{
  "name": "external",   -> name과 version은 자유롭게 입력
  "version": "0.0.0",
  "private" : true,		-> 개인적으로 사용
  "dependencies": {		-> 추가할 모듈들
      "arraylist" : "*",-> 모듈이름 : 버전( * : 최신버전을 뜻함)
	  "express": "4.17.1"
  }
}
```



##### 모듈 다운로드 

```
npm install
```



##### 설치 후 해당 폴더 안 `node_modules` 폴더에 다운로드된 모듈들을 확인할 수 있다.



----



### express module

웹 애플리케이션을 개발할 때 가장 많이 사용되고 있는 외부 모듈

http 모듈에 비해 많은 기능을 갖추어 보다 손 쉽게 웹 애플리케이션을 개발 가능

jade, ejs 등과 같은 동적 웹 페이지 파일을 지원하고 있어 손쉽게 애플리케이션 개발 가능



----



### Routing - 라우팅

사용자 요청(get/post)에 따라 응답 결과를 달리 전달하는 것 

라우팅 처리를 하나의 파일에 다 작성하다보면 유지보수가 어렵다

js 파일을 만들어 작성해 파일을 분리해 관리한다



---



### html 렌더링 

`res.send()` 함수로 html 파일을 보내는데에는 한계가 있다

**렌더링** : 외부 파일의 데이터를 읽어와 html 코드로 만든다음 클라이언트에게 전달하는 기능 제공. 다른 모듈을 사용해야 한다 -> <u>ejs 모듈 사용 실습</u>



---



### 동적 웹페이지 

express에서 랜더링 모듈을 사용하여 동적 웹페이지를 만든다

렌더링 모듈 : jade, ejs(jsp와 흡사) 등 <u>-> ejs 모듈 사용 실습</u>

 

---



### 파라미터

```javascript
var bodyParser =require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended : false});
module.exports = function(app){

	// parameter 1. GET method
    app.get("/param", function(req, res){
        var render_data = {
            data1 : req.query.data1,		// query 사용
            data2 : req.query.data2
        };
        res.render("parameter.ejs", render_data);
    });
    // parameter 1. POST
    app.post("/paramP", urlencodedParser, function(req, res){
        var render_data = {
            data1 : req.body.data1,			// body 사용
            data2 : req.body.data2
        };
        res.render("parameter.ejs", render_data);
    });
};

```

post method 파라미터 받기 : `body-parser` module



### 쿠키

클라이언트 측에 저장되는 데이터, 클라이언트가 서버에 요청할 때 쿠키 정보를 전부 전달하게 되고 서버에서 사용자 컴퓨터에 저장된 쿠키 정보를 사용할 수 있다.

사용자 컴퓨터에 저장되므로 브라우저를 닫아도 데이터가 유지된다

쿠키 관리 : `cookie-parser` module



### 세션 

서버 메모리에 데이터를 저장하는 방식으로 브라우저 하나당 하나의 공간이 할당

브라우저를 닫으면 세션을 삭제된다

세션 관리 :  `express-session` module