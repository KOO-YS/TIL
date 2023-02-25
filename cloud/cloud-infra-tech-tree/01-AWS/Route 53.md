# Amazon Route 53

- 가용성과 확장성이 뛰어난 DNS(Domain Name System) 웹 서비스
- Route 53을 사용해 아래 기능들을 조합하여 실행할 수 있음
    - 도메인 등록
    - DNS 라우팅
    - 상태 확인
    

## Route 53 사용 순서

### 1. 도메인 이름 등록

- 웹 사이트의 이름(도메인 리셀러로부터 따로 구매한 도메인 이름)을 Route 53에 등록
    - 도메인 이름이 사용 가능한지, 이미 등록이 된 도메인이 아닌지 확인
    - 도메인 소유자 정보를 Route 53에 도메인을 등록하면 수행되는 DNS 서비스
        - 도메인과 이름이 같은 hosted zone을 생성
            
            `ex` : example.com이 도메인이라면 그 전체 하위 도메인인 {www.example.com, retail,example.com,,,, etc }의 트래픽을 라우팅 하는 방법에 대해 정보를 포함하는 레코드의 컨테이너
            
        - 호스팅 영역에 4개의 이름 서버 세트를 할당하여, 이 이름 서버들이 하위 도메인으로 접속하면 웹 서버, S3 버킷 등 리소스의 위치를 찾아서 알려준다
        - 호스팅 영역에서 이름 서버를 얻어 도메인에 추가
    - 등록 프로세스가 끝나고 도메인 등록 기관(ICANN이 인증한 특정 최상위 도메인 등록을 처리하는 회사)에 사용자 정보를 전송
    - 등록 기관은 자체 데이터베이스에 사용자의 도메인에 관한 정보를 저장, 일부 정보는 퍼블릭 WHOIS 데이터베이스에도 저장

### 2. 인터넷 트래픽을 도메인의 리소스로 라우팅

- 사용자가 웹 브라우저를 열어 주소 표시줄에 도메인(또는 하위 도메인) 이름을 입력한 경우 Route 53은 브라우저를 웹 사이트 또는 웹 애플리케이션에 연결하도록 돕는다
- [웹 사이트 또는 웹 애플리케이션으로 인터넷 트래픽을 라우팅하는 방식](https://docs.aws.amazon.com/ko_kr/Route53/latest/DeveloperGuide/welcome-dns-service.html)

### 3. 리소스의 상태 확인

- 인터넷을 통해 웹 서버 같은 리소스로 자동화된 요청을 보내어 접근 및 사용을 가능하고 정상 작동 중인지 확인
- 리소스를 사용할 수 없게 될 때 알림을 수신 → Amazon CloudWatch 경보 구성
- 비정상 리소스가 아닌 다른 곳으로 인터넷 트래픽을 라우팅할 수 도 있다
- [Amazon Route 53이 리소스의 상태를 확인하는 방법](https://docs.aws.amazon.com/ko_kr/Route53/latest/DeveloperGuide/welcome-health-checks.html)

[Amazon Route 53은 무엇인가요? - Amazon Route 53](https://docs.aws.amazon.com/ko_kr/Route53/latest/DeveloperGuide/Welcome.html)