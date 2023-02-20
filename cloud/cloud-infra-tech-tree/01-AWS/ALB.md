# Application Load Balancer

- 웹 서비스에 걸리는 부하를 분산해주는 로드밸런서
    - 서비스의 안정성과 가용성을 높인다
- 서비스 확장 및 여러 요인으로 인한 웹 애플리케이션 접속이 기하급수적으로 늘어났다
- 갑작스러운 트래픽 증가는 웹 서비스의 속도 저하와 에러 발생의 원인이 된다

## ALB의 장점

- 고가용성 지원
- 사용자 인증 등 보안 향상
- 다양한 레벨 부하에 대한 유연한 응답
- 애플리케이션 밀착 모니터링 및 검수

## ALB의 특징

- 과거 ELB는 OSI Transfer Layer(Layer 4),  Application Layer (Layer 7)에서 로드밸런서 역할을 해왔다
    - Layer 4 : 네트워크 패킷 내용을 조사하지 않고 부하 분산
    - Layer 7 : 패킷 내의 HTTP, HTTPS 같은 정보에 접근함으로써 효과적으로 부하 분산
- ALB는 오직 Layer 7에서만 로드밸런서 역할을 한다
- 애플리케이션 계층에 특화
- WebSocket과 HTTP/2 프로토콜 등을 지원하며 사용자의 선택 범위를 넓힐 수 있다
- 각 표준 프로토콜을 지원함으로써, 네트워크 트래픽을 줄이고 접속을 효율적으로 할 수 있다
- Target Group 라우팅 가능
    - Target Group ? 다른 서버 그룹에 있는 인스턴스들
    - ALB는 타겟그룹으로 묶어서 라우팅을 설정할 수 있다
    - 독립적으로 서비스를 실행시킬 수 있고, 여러 라우팅 룰 규칙을 정의할 수 있다

[Difference between ALB and ELB | WafCharm](https://www.wafcharm.com/en/blog/difference-between-alb-and-elb/)