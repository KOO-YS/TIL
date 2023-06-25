# CORS

- HTTP 요청에 대해서 어떤 요청을 하느냐에 따라 차이가 있기 때문에 발생

## Origin
- 여러 구성요소를 모두 합친 URL -> `Protocol` + `Host` + `Port` + `etc...`

## SOP (Same Origin Policy)
- 동일 출처에 대한 정책
- 동일한 출처 origin에서만 리소스를 공유할 수 있다
- SOP 정책이 없다면 보안 위험이 생긴다
    - CSR(Cross-Site Request Forgery), XSS (Cross-Site Scripting)

### Same Origin vs Cross Origin
- Origin은 URL 구성 요소 중에서
    - Protocol
    - Host
    - Port
    세 가지가 같으면 동일 출처로 본다
- 하나라도 다를 경우 브라우저 정책 상 차단


## CORS
- Cross-Origin Resource Sharing : 교차 출처 리소스 공유
- 네트워크 리소스로의 접근은 리소스가 같은 출처 이내에 있는지 없는지에 따라 달라진다
- 일반적으로는 다른 출처엣의 정보 읽기는 금지되어 있다. 
    - 하지만 script 실행, 이미지 렌더링, style sheet 적용, HTML 안에 HTML 등은 다른 출처로부터 수집을 허락한다
    - 또한 네트워크 리소스에서는 CORS 경우에서 다른 출처로 부터 수집을 허락한다

## Browser
- 출처의 검열은 서버가 아닌 브라우저이다
- 서버가 리소스 요청에 대한 정상 응답을 주더라도, 출처를 확인하고 차단한다(응답을 파기한다)

### CORS 동작 방식
- client가 다른 출처의 리소스를 요청할 때는 HTTP 프로토콜을 사용하여 요청을 보낸다 
    - 이때 **요청 헤더에 `Origin` 정보를 담아 보낸다**
- server에서 응답이 오면
    - `Access-Control-Allow-Origin`에 url 을 담아 보낸다 (이 리소스를 접근하는 것이 허용된 출처 url이라는 뜻)
- client는 자신이 보냈던 요청의 `Origin`과 서버가 보내준 `Access-Control-Allow-Origin`를 비교
    - 이 응답이 유효한지 아닌지 확인

#### 결론
- server에서 `Access-Control-Allow-Origin` 헤더에 허용할 출처를 담아 client에 응답하면 되는 부분

--- 

### CORS 동작 방식 : Preflight Request
- 브라우저에서 요청을 보낼 때, 
    1. 예비 요청을 먼저 보내고 서버와 잘 통신되는지 확인한다
    2. 예비 요청을 성공적으로 마치면 본 요청을 보낸다
- 브라우저가 예비 요청을 보내는 것을 Preflight 라고 부르며, HTTP method `OPTIONS`를 사용한다

#### Preflight API 요청 순서
1. javascript fetch() 메소드 실행
2. 브라우저가 서버로 [HTTP method `OPTIONS` : 예비요청] 을 보낸다
    - [`Origin` : 본인 출처]
    - [`Access-Control-Request-Method` : 실제 HTTP method]
    - [`Access-Control-Request-Headers` : 실제 요청 Headers] 
3. 서버가 요청에 응답
    - [`Access-Control-Allow-Origin` : Origin 목록]
    - [`Access-Control-Allow-Methods` : 허용 method 목록]
    - [`Access-Control-Allow-Headers` : Header 목록]
    - [`Access-Control-Max-Age` : 해당 예비 요청이 브라우저에 캐시될 수 있는 최대 시간(second)]
4. 브라우저는 보낸 요청과 서버가 응답해준 정책 비교
    - 만약 예비 요청이 안전하다고 확인된다면 서버에 본 요청을 보낸다
5. 서버가 응답하면 이 값을 javascript 응답으로 넘겨준다

---

<br>

### References
- https://evan-moon.github.io/2020/05/21/about-cors/
- https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F