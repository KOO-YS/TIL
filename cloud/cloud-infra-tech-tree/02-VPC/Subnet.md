Subnet은 VPC의 IP 주소 범위이며, VPC로 AWS 리소스를 시작할 수 있다

## 서브넷 기본 사항

- VPC의 IP 주소 범위
- EC2 인스턴스와 같은 AWS 리소스를 특정 서브넷으로 시작할 수 있다
- 서브넷 생성 시, 해당 서브넷에 대한 IPv4 CIDR 블록 지정
- 각 서브넷은 단일 가용 영역 내에서만 존재 가능하며, 다중 영역으로 확장 불가능
    - 서로 구분되어 있는 가용 영역에서 인스턴스를 실행함으로써 단일 영역에서 장애가 발생할 경우 애플리케이션 보호

## 서브넷 유형

서브넷의 라우팅 구성 방법에 따라 유형이 달라진다

- 퍼블릭 서브넷
    - 서브넷이 직접 인터넷 게이트웨이에 연결되는 경로가 존재
    - 퍼블릭 서브넷의 리소스는 퍼블릭 인터넷에 액세스할 수 있다
- 프라이빗 서브넷
    - 인터넷 게이트웨이에 직접 연결되는 경로가 없기 때문에, 프라이빗 서브넷 내부 리소스들에게는 퍼블릭 인터넷에 액세스하기 위해 NAT 디바이스가 필요
- VPN 전용 서브넷
    - 서브넷은 가상 프라이빗 게이트웨이를 통해 사이트 간 VPN 연결로 라우팅된다
    - 서브넷에는 인터넷 게이트웨이에 대한 경로가 없음

### 서브넷 생성 시, VPC 구성별 IP 주소 지정 방법

- IPv4 전용
    - 서브넷에 IPv4 CIDR 블록이 있지만, *IPv6 CIDR 블록은 없다*
        - IPv4 전용 서브넷의 리소스는 IPv4를 통해 통신해야 한다
- 듀얼 스택
    - 서브넷과 VPC 모두 IPv4 CIDR 블록 & IPv6 CIDR 블록이 둘 다 있어야 한다
    - 듀얼 스택 서브넷의 리소스는 IPv4 alc IPv6을 통해 통신할 수 있다
- IPv6 전용
    - 서브넷에 IPv6 CIDR 블록이 있지만, *IPv4 CIDR 블록은 없다*
        - IPv6 전용 서브넷의 리소스는 IPv6를 통해 통신해야 한다
- 서브넷의 유형과 관계없이 서브넷의 내부 IPv4 주소 범위는 항상 프라이빗이다
    - 인터넷에 주소 블록을 알리지 말 것
    

## 서브넷 설정
- 모든 서브넷은 해당 서브넷에서 생성된 네트워크 인터페이스에 퍼블릭 IPv4 주소가 할당될 것인지 결정하는 속성을 가진다 (수정 가능)
- 서브넷에서 인스턴스를 시작할 때, 인스턴스에 대해 생성된 메인 네트워크 인터페이스(eth0)가 포함
- 서브넷 속성 상관없이, 특정 인스턴스를 시작하는 동안 해당 인스턴스에 서브넷을 설정할 수 있다

### 수정 가능한 서브넷 설정

- IP 설정 자동 할당
    - 서브넷의 새 네트워크 인터페이스에 대한 퍼블릭 IPv4 또는 IPv6 주소를 자동으로 요청하도록 자동 할당 IP 설정을 구성할 수 있음
- 리소스 기반 이름(RBN) 설정
    - 서브넷에서 EC2 인스턴스에 대한 호스트 이름 유형을 지정하고, DNS A 및 AAAA 레코드 쿼리가 처리되는 방법을 구성할 수 있다
    - [EC2 인스턴스 호스트 이름 유형](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html)

## 서브넷 라우팅

각 서브넷은 서브넷 외부로 나가는 아웃바운드 트래픽에 대해 허용된 경로를 지정하는 라우팅 테이블이 연결되어 있어야 한다

생성된 각 서브넷은 자동으로 VPC의 기본 라우팅 테이블에 연결

## 서브넷 보안

AWS 리소스를 보호하려면 프라이빗 서브넷을 사용하는 것이 좋다

Bastion 호스트 또는 NAT 디바이스를 사용하여 프라이빗 서브넷에 있는 EC2 인스턴스와 같은 리소스에 대한 인터넷 액세스를 제공

AWS는 VPC에서 리소스에 대한 보안을 강화하기 위해 사용할 수 있는 기능을 제공

- 보안 그룹 : EC2 인스턴스와 같은 관련 리소스에 대한 인바운드 및 아웃바운드 트래픽을 허용
- 네트워크 ACL : 서브넷 수준에서 인바운드 및 아웃바운드 트래픽을 허용하거나 제어

대부분의 경우 보안 그룹으로 사용자의 요구사항을 충족할 수 있다. 단,  추가 보안 계층을 원하는 경우 네트워크 ACL을 사용할 수 있다

[VPC의 서브넷 - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/configure-subnets.html)