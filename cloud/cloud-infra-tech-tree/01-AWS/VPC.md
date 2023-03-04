# Amazon VPC (Virtual Private Cloud)

- VPC를 통해 사용자가 정의한 가상 네트워크로 AWS 리소스를 시작할 수 있다

## VPC 구성

- VPC
    - 자체 데이터 센터에서 운영하는 기존 네트워크와 유사한 가상 네트워크
    - VPC 생성 이후에 서브넷을 추가할 수 있다
- 서브넷
    - VPC의 IP 주소 범위
    - 서브넷은 단일 가용 영역에 상주해야 한다
    - 서브넷을 추가한 후에야 VPC에 AWS 리소스를 배포할 수 있다
- IP 주소 지정
    - VPC와 서브넷에 IPv4, IPv6 주소를 할당할 수 있다
    - 퍼블릭 IPv4, IPv6 GUA (Global Unicast Address) 주소를 AWS로 가져오고 VPC의 리소스(EC2 instance, NAT Gateway, Network Load Balancer)에 할당할 수 있다
- 라우팅
    - 라우팅 테이블을 사용하여 서브넷 또는 게이트웨이의 네트워크 트래픽이 전달되는 위치를 결정
- 게이트웨이 및 엔드포인트
    - 게이트웨이로 VPC를 다른 네트워크에 연결
        - 인터넷 게이트웨이(IGW) : VPC를 인터넷에 연결
        - VPC 엔드포인트 : IGW, NAT 장치를 사용하지 않고 AWS 서비스에 비공개 연결
- 피어링 연결
    - VPC 피어링 연결을 사용해 두 VPC의 리소스 간 트래픽을 라우팅
- 트래픽 미러링
    - 네트워크 인터페이스에서 네트워크 트래픽을 복사하고 심층 패킷 검사를 위해 보안 및 모니터링 어플라이언스로 전송
- Transit Gateway
    - 중앙 허브 역할을 하는 전송 게이트웨이를 사용하여 VPC, VPN 연결 및 AWS Direct Connect 연결 간에 트래픽을 라우팅
- VPC 흐름 로그
    - 흐름 로그는 VPC의 네트워크 인터페이스로 들어오고 나가는 IP 트래픽에 대한 정보를 캡처
- VPN 연결
    - AWS Virtual Private Network(VPN)을 사용하여 온프레미스 네트워크에 VPC 연결


[Amazon VPC란 무엇인가? - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/what-is-amazon-vpc.html)
