# NAT Gateway
NAT(네트워크 주소 변환) 서비스

프라이빗 서브넷의 인스턴스가 VPC 외부의 서비스에 연결할 수 있지만, 외부 서비스에서 이러한 인스턴스와 연결을 시작할 수 없도록 NAT Gateway를 사용할 수 있다

NAT Gateway의 연결 유형

- 퍼블릭(default)
 - 퍼블릭(default)
    - 프라이빗 서브넷의 인스턴스는 퍼블릭 NAT 게이트웨이를 통해 인터넷에 연결할 수 있지만 인터넷에서 원치 않는 인바운드 연결을 수신할 수 없다
    - 퍼블릭 서브넷에서 퍼블릭 NAT 게이트웨이를 생성하고, 생성 시 탄력적 IP 주소를 NAT 게이트웨이와 연결해야 한다
    - 트래픽을 NAT 게이트웨이에서 VPC용 인터넷 게이트웨이로 라우팅
    - 또는 퍼블릭 NAT 게이트웨이를 사용하여 다른 VPC 또는 온프레미스 네트워크에 연결할 수 있다 → NAT 게이트웨이에서 Transit Gateway 또는 가상 프라이빗 게이트웨이를 통해 트래픽을 라우팅
- 프라이빗
    - 프라이빗 서브넷의 인스턴스는 프라이빗 NAT 게이트웨이를 통해 다른 VPC 또는 온프레미스 네트워크에 연결할 수 있다
    - 트래픽을 NAT 게이트웨이에서 Transit Gateway 또는 가상 프라이빗 게이트웨이를 통해 트래픽을 라우팅할 수 있다
    - 탄력적 IP 주소를 프라이빗 NAT 게이트웨이에 연결할 수는 없다
    - 프라이빗 NAT 게이트웨이를 사용하여 VPC에 인터넷 게이트웨이를 연결할 수는 있지만, 프라이빗 NAT 게이트웨이에서 인터넷 게이트웨이로 트래픽을 라우팅하는 경우 인터넷 게이트웨이가 트래픽을 삭제
- NAT 게이트웨이는 인스턴스 소스 IP 주소를 NAT 게이트웨이의 IP 주소로 바꾼다
    - 퍼블릭 NAT 게이트웨이의 경우 → NAT 게이트웨이의 탄력적 IP 주소
    - 프라이빗 NAT 게이트웨이의 경우 → NAT 게이트웨이의 프라이빗 IP 주소
    

[NAT 게이트웨이 - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-nat-gateway.html)

[NAT 게이트웨이 - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-nat-gateway.html)