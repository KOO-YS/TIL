# AWS Network

### Regions

- 지역적으로 묶여있는 가용영역의 집합

가용영역 (AZs: Avaliablity Zones)

- 하나 이상의 데이터센터의 물리적인 묶음
- 여러 개의 데이터센터가 모여 하나의 논리적인 가용영역을 만듦
- 물리적으로 떨어져 있기 때문에 하나의 가용영역이 피해를 입더라도 다른 가용영역이 피해를 입지 않는다

### VPC (Virtual Private Cloud)

- 사용자가 정의한 가상의 네트워크 공간
- 완전한 네트워크 제어 가능
    - IP 범위
    - 퍼블릭/프라이빗 서브넷 → IP 범위를 여러 개의 그룹으로 지정
    - 라우팅 테이블 → 네트워크 내 패킷 전달 경로를 결정
    - Network ACL, 보안 그룹
    - 다양한 게이트웨이 → 패킷 플로우를 제어하고 네트워크를 제어
- VPC 내 모든 EC2 인스턴스들은 사설 IP가 부여됨
- 개별 인스턴스에 공인 IP 할당 가능
    - Public IP : 유동 IP
    - Elastic IP : 고정 IP

### IP 주소 범위

- CIDR 블록 설정
- RFC 1918에 정의된 사설 IP 대역 사용 권고
- VPC CIDR은 생성 후 변경 불가능
- VPC의 네트워크 범위는 /16 ~ /28까지 가능
- 향후 직접 연결할 가능성이 있는 네트워크와 주소가 중복되지 않도록 할당 권고

### 서브넷

- VPC CIDR 블록 범위에서 리전 별 세부 서브넷 정의
    - 서브넷 범위는 보통 /24 (256) 이상을 권고
    - 5개의 주소는 예약된 주소로 사용 불가
        - 0 : 네트워크의 주소
        - 1 : 라우터의 주소
        - 2 : 도메인 네임 서버
        - 3 : aws에 의해 예약된 주소
        - Last : 브로드캐스트
- 서브넷 종류
    - 퍼블릿 서브넷 : 인터넷과 연결
    - 프라이빗 서브넷 : 외부와 차단
- 서브넷 생성 후, 주소 범위 변경 불가능

<br>

---

`ex-1`  VPC `10.10.10.0/24` 에서 2개의 Subnet이 필요하다면?

- `10.10.10.0/25` , `10.10.10.128/25` 로 분리할 수 있다
    - `10.10.10.0000 0000/25`
    - `10.10.10.1000 0000/25`

---

`ex-`2  VPC `10.0.0.0/16` 에서 4개의 Subnet이 필요하다면?

- `10.0.0.0/18` , `10.0.0.64/18` , `10.0.0.128/18` , `10.0.0.192/18`로 분리할 수 있다
    - `10.0.0.0000 0000/18`
    - `10.0.0.0100 0000/18`
    - `10.0.0.1000 0000/18`
    - `10.0.0.1100 0000/18`

---

<br>

### 트래픽 흐름 결정 (라우팅 테이블)

- 라우팅 테이블
    - 서브넷 단위로 설정
    - 네트워크 트래픽이 향하는 방향을 결정해주는 규칙 세트
    - Destination과 Target 명시
- VPC 내에 생성된 모든 서브넷은 기본적으로 로컬 라우터를 통해 상호 통신
- 그 외의 경우, 추가적인 라우팅 규칙 설정 필요
- 서브넷에 별도 라우팅 테이블을 지정하지 않으면, 주 라우팅 테이블 할당


### 트래픽 제어

- Network ACL
    - 서브넷 단위로 동작
    - Allow / Deny 규칙
    - 요청/응답 트래픽 모두 명시적 정의(검사)
        - Stateless 방식 (Session 정보를 추적하지 않는다)
- 보안 그룹
    - 인스턴스 단위로 동작
    - Allow 규칙
    - 요청 트래픽만 명시적 정의(검사)
    - 세션 기반 응답 트래픽 자동 허용
        - Stateful 방식 - 세션 정보를 추적
            - 외부에서 먼저 연결 요청 시, Inbound Rule만 정의
            - 내부에서 외부에 먼저 연결 요청 시, Outbound Rule만 정의

### 인터넷 게이트웨이

- 라우팅 테이블을 보았을 때, VPC 대역에서 접근한 트래픽은 local 라우터가 처리
- 그 이외는 모두 인터넷 게이트웨이가 처리

- Private Subnet
    - public IP를 가지고 있지 않기 때문에 인터넷 게이트웨이 x
    - 외부에서 접근은 할 수 없지만 외부와 통신이 필요한 경우, NAT 게이트웨이 사용
- Public Subnet
    - public IP, private IP 둘 다 가지고 있기 때문에, 로컬 라우터와 인터넷 게이트웨이 두가지를 가지고 있음
    

### ENI (Elastic Network Interface)

- VPC에서 가장 네트워크 카드에 해당되는 개념
- Subnet 안에 생성되며 보안 그룹의 대상
- VPC 안의 private IP 범위에 속하는 IP 주소 한 개 이상을 가질 수 있음
- Elastic IP를 할당시켜 public IP를 가질 수 있음
- 고유의 MAC Address를 가짐
- 트래픽 출발/도착 검사 & 해제 가능 (→ 포워딩 할 경우 해제 필요)

#### ENI 활용 방법

- ENI 스위칭 : ENI를 다른 인스턴스로 옮길 수 있다
    - 장비를 업그레이드할 때 활용 가능
- 네트워크, 보안 장비 구현 사용
    - 2개의 서브넷의 트래픽을 검사하고 싶을 때 하나의 인스턴스에 각자 따로 위치한 ENI 2를 모두 부착
- 내부, 외부 네트워크 모두에 연결되는 인스턴스 생성
- MAC 기반 라이센스 유지

### VPC 간 연결 방법

- 인터넷 게이트웨이 이용
    - 퍼블릭 서브넷을 활용할 필요가 생길지 모름
- VPC Peering
    - 동일 리전, 다른 리전, 다른 계정 간에도 라우팅 가능
    - 1:1 연결만 가능
- Transit Gateway
    - 클라우드 상의 라우터
    - Network 확장에 유용
    - VPC, VPN, Direct Connect를 모두 중앙에서 관리 가능
- VPC Endpoint
    - `example`
        1. S3 저장소에 접근하고자 한다면 S3 endpoint의 IP주소가 필요
        2. domain name 질의를 동해 S3의 public IP를 얻을 수 있다
        3. 즉, S3와 통신하기 위해서는 인터넷 게이트웨이를 통할 수 밖에 없다
            - private subnet의 경우 NAT 게이트웨이를 통해야 한다
        4. NAT 게이트웨이를 통하고 싶지 않은 경우 Gateway VPC Endpoint를 사용할 수 있다
        5. Gateway VPC Endpoint를 생성한 후, Routing 테이블에 S3로 향하는 패킷을 Gateway VPC Endpoint로 타겟을 설정해 주면 된다
        6. 이렇게 private subnet도 S3로 향하는 패킷을 내부망을 통해 전달 가능
    - Gateway VPC Endpoint로 사용할 수 있는 서비스
        - Amazon S3
        - DynamoDB
        
        ❌ 그밖에 다른 서비스들은 Private Link라 불리는 Interface Endpoint를 사용
        
- Interface Endpoint
    - Interface Endpoint를 생성하면 ENI가 각 서브넷에 생성
    - 서비스가 VPC 내의 Subnet에 private하게 위치하는 것처럼 이용 가능
    - 도메인 네임을 질의하면 로컬 서브넷을 반환
- Site to Site VPN - 온프레미스
    - 온프레미스와 VPC를 연결하는 방법
    - VPN 이용 시, 손쉽게 연결 가능
    - 온프레미스에 Customer Gateway (VPN 장비 또는 소프트웨어)
    - VPN Connection은 이중화를 위해 2개의 채널 제공하는 경우가 많음
- Site to Site VPN - Transit Gateway 모델
    - 여러 개의 VPC를 연결하는 경우 Transit Gateway를 사용할 수 있음
- AWS Direct Connect - VPC 연결
    - 인터넷 망 대신 전용망으로 안전한 커넥션을 원할 경우
    - AWS에 직접 연결된 Router의 Direct Connect Location을 연결 (데이터 센터 연결이 X, 연결된 Router만!)
    - 물리적인 연결이 완료되었다면, Direct Connect Gateway와 Priavate Virtual Interface로 각각의 VPC를 연결할 수 있다
    