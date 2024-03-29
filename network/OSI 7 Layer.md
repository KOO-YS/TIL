# OSI 7 Layer

<br>



#### OSI 7 Layer가 생겨난 이유? 

통신 중에 발생하는 문제를 단계별로 파악할 수 있고, 특정 계층만 독립적으로 트러블슈팅하기 쉽다 



### Application 계층

- 응용 프로세스를 직접 사용하여 직접적인 서비스를 수행하는 계층
- HTTP, FTP, SMTP, Telnet와 같은 프로토콜들이 속한 계층

<br>



### Presentation 계층

- 데이터의 변환, 데이터의 압축, 데이터의 암호화가 이루어지는 계층
- 서로 다른 통신 기기간에 다른 인코딩 방식을 사용할 수도 있기에 이 계층에서 변환

<br>



### Session 계층

- 세션을 열고 닫고를 제공하는 메커니즘의 계층
- 세션 복구 역시 지원 (체크포인트를 통해 동기화를 시켜줌)

<br>



### Transport 계층

- 서로 다른 두 네트워크 간의 전송을 담당하는 계층
- 세그멘테이션, 흐름제어, 오류제어 제공
- 세그멘테이션 : 상위의 계층 데이터를 받아서 세그먼트라는 단위로 나눈다
  - 작은 단위로 나누게 되면 전송량을 높이고 손실률을 더 줄일 수 있다

<br>



### Network 계층

- IP, 라우터 장비가 속한 계층
- 데이터의 전송을 담당
- 호스트 IP에서 도착지 IP까지 최적의 경로를 찾아주는 방법 제공 -> 라우팅

<br>



### Data Link 계층

- 동일한 네트워크 내에서 전송을 담당
- 오류제어, 흐름제어 
  - Transport 계층과 Data Link 계층의 제어 기능 차이점
    - Transport 계층의 경우 데이터가 누락된다면 누락된 데이터를 재요청하지만, Data Link 계층의 경우 frame 데이터 단위가 누락되더라도 복구하지 않는다

<br>



### Physical 계층

- 비트 단위 데이터를 전기신호로 변환해주고 전송 담당

