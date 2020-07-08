# Node.js 서버 프로그래밍 정리



### 기본 작성법

Node.js 파일은 하나의 파일에서 쭉 실행이 된다.

> node 실행법 
>
> 	1. `Ctrl` + `F5`
>
>  	2. `Ctrl`+` > node name.js

node.js는 JavaScript 문법과 모듈 사용법만 사용할 줄 알면 된다.

-> 어떤 모듈들이 있고, 어떤 기능들을 제공하는지 추가 학습



- 출력

```javascript
console.log("hello world");
```

- 모듈화

  - 내보내기

    ```javascript
    /* first.js */
    exports.test = function(){
    	console.log("test 함수 호출");
    }
    ```

  - 불러오기 : require 함수를 이용해 모듈 객체를 생성한다 

    ```javascript
    /* second.js */
    var getTest = require("./파일명.js");
    
    getTest.test(); // -> first.js 파일의 test 함수 호출
    ```



---



### Assert module

개발자가 작성한 코드가 동작하기 전에 데이터나 수식에 대한 검사를 할 수 있는 모듈

제공하는 함수를 이용해 검사할 때 위배가 될 경우 오류가 발생하고 프로그램 중지

[assert.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/assert.js)



---



### Buffer module

기억공간을 동적으로 만들 때 사용

JavaScript는 자료형이 따로 존재하지 않으며 브라우저에 의해 탄력적으로 관리된다

모듈 생성없이 바로 사용가능하며, 데이터를 1 바이트씩 분리해 저장

[buffer.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/buffer.js)



---



### Cluster module

병렬처리를 위해 제공되는 모듈. 작업 하나의 단위 :  `worker`

cluster 모듈 생성 후 fork 메서드를 호출하면 worker 하나가 생성되며 필요한 만큼 worker를 생성해 병렬처리하면 된다.

cpu 코어 개수만큼 worker 발생시켜 병렬처리 진행

[cluster.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/cluster.js)



---



### Crypto module

데이터 암호화 기능을 제공하는 모듈

현재 존재하는 대부분의 암호화 알고리즘을 지원

[crypto.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/crypto.js)



---



### dns module 

지정된 도메인의 dns 정보를 알아올 수 있는 모듈

지정된 도메인의 ip 주소 등의 정보를 파악

`lookup` : 지정된 도메인의 정보를 가져온다

[dns.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/dns.js)



---



### fs module

파일에 데이터를 쓰고 읽어 올 수 있는 기능을 제공

[fs.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/fs.js)



---



### global module

추가적인 모듈 생성없이 기본적으로 사용할 수 있는 기능들을 가지고 있는 모듈 객체

글로벌 모듈 객체는 프로그램 시작과 동시에 생성되며 어디서든 사용이 가능하다

  [global.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/global.js)



---



### os module

프로그램이 실행되고 있는 서버 컴퓨터와 관련된 정보를 제공

[os.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/os.js)



---



### path module

경로 관련 기능 제공

[path.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/path.js)



---



### hppt module

http 모듈은 웹 애플리케이션을 개발할 수 있도록 제공되는 모듈

일반적인 웹 서버와 동일하게 동작하는 웹서버 기능 모듈

[http.js 소스](https://github.com/KOO-YS/TIL/tree/master/nodeJS/src/http.js)

