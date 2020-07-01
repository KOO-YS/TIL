# Node.js 서버 프로그래밍 정리 1



### 기본 작성법

Node.js 파일은 하나의 파일에서 쭉 실행이 된다.

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

```javascript
var assert = require('assert');
// import assert from "assert";
```



- assert() :  매개변수 수식 값이 0이거나 false인 경우 오류 발생

  ```javascript
  assert(v1 < v3);
  ```

- equal() : 주어진 두 변수나 수식의 결과값이 다를 때 오류 발생

  ```javascript
  assert.equal(v1, v2);
  ```

- strictEqual() : equal() 에서 값의 타입도 검사한다

- notEqual() : 

