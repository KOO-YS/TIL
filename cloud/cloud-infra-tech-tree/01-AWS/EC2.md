# Amazon Elastic Compute Cloud (EC2)

- AWS 클라우드에서 확장 기능 컴퓨팅 용량을 제공
- EC2를 사용하면 하드웨어에 선투자할 필요가 없어 더 빠르게 애플리케이션을 개발하고 배포할 수 있습니다
- 원하는 수의 가상 서버를 구축하고 보안 및 네트워킹을 구성하여 스토리지를 관리할 수 있다

## EC2의 기능

- 인스턴스
    - 가상 컴퓨팅 환경
- Amazon Machine Image (AMI)
    - 서버에 필요한 운영체제와 여러 소프트웨어들이 적절히 **구성된 상태로 제공되는 템플릿**으로 인스턴스를 쉽게 만들 수 있다
- 인스턴스 유형
    - 인스턴스를 위한 CPU, 메모리, 스토리지, 네트워킹 용량의 여러 가지 구성 제공
- 키페어를 사용해 인스턴스 로그인 정보 보호
    - AWS는 퍼블릭 키를 저장하고 사용자는 개인 키를 안전한 장소에 보관하는 방식
- 인스턴스 스토어 볼륨
    - 임시 데이터를 저장하는 스토리지 볼륨으로 인스턴스 중단, 최대 절전 모드로 전환 또는 종료 시 삭제
- Amazon Elastic Block Store (Amazon EBS) 볼륨을 사용해 영구 스토리지 볼륨에 데이터 저장
- 인스턴스와 EBS 볼륨 등 리소스를 다른 물리적 장소에서 액세스할 수 있는 리전 및 가용 영역
- 보안 그룹을 사용
    - 인스턴스에 연결할 수 있는 프로토콜, 포트, 소스 IP 범위를 지정하는 방화벽 기능
- 탄력적 IP 주소
    - 동적 클라우드 컴퓨팅을 위한 고정 IPv4 주소
- Virtual Private Clouds (VPC)
    - 논리적으로 격리되어 있지만 원할 때마다 고객의 네트워크와 간편히 연결할 수 있는 가상의 네트워크

[Amazon EC2이란 무엇입니까? - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/concepts.html)


---

## + add

# EC2 Auto Scaling

- Auto Scailing을 사용하면 애플리케이션의 로드를 처리할 수 있는 정확한 수의 Amazon EC2 인스턴스를 유지할 수 있다
- 오토 스케일링 EC2 인스턴스 모음을 생성
    - 각 오토 스케일링의 최소/최대 인스턴스 수를 지정할 수 있으며, 그룹의 크기가 이 값 밖으로 벗어나지 않는다

### Auto Scaling 구성 요소

- 그룹
    - EC2 인스턴스는 그룹 단위로 정리되어 조정 및 관리 목적의 논리적 단위로 처리할 수 있다
    - 그룹 생성 시, EC2 인스턴스의 최소 및 최대 인스턴스 수와 원하는 인스턴스 수 지정
- 구성 템플릿
    - 인스턴스인 AMI ID, 인스턴스 유형, 키 페어, 보안 그룹, 블록 디바이스 매핑 등의 정보를 지정할 수 있다
    - [시작 템플릿](https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/launch-templates.html) 또는 ~~시작 구성~~ 으로 구성 템플릿 적용
- 조정 옵션
    - [다양한 옵션 확인](https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/scale-your-group.html#scaling-options)