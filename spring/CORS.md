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


요청 방식
### Cross-Origin
- 