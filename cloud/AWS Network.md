# AWS Network

Regions

- 지역적으로 묶여있는 가용영역의 집합

가용영역 (AZs: Avaliablity Zones)

- 하나 이상의 데이터센터의 물리적인 묶음
- 여러 개의 데이터센터가 모여 하나의 논리적인 가용영역을 만듦
- 물리적으로 떨어져 있기 때문에 하나의 가용영역이 피해를 입더라도 다른 가용영역이 피해를 입지 않는다

VPC (Virtual Private Cloud)

- 사용자가 정의한 가상의 네트워크 공간
- 완전한 네트워크 제어 가능
    - IP 범위
    - 퍼블릭/프라이빗 서브넷
    - 라우팅 테이블
    - Network ACL, 보안 그룹
    - 다양한 게이트웨이
- VPC 내 모든 EC2 인스턴스들은 사설 IP가 부여됨
- 개별 인스턴스에 공인 IP 할당 가능
    - Public IP : 유동 IP
    - Elastic IP : 고정 IP