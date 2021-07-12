# AWS Global Infrastructure Overview

<br>



### AWS Global Infrastructure 

- AWS Global Infrastructure
  - 지역적인 영역
    - Data replication : 리전을 넘어서 데이터를 분산 복제하는 것은 사용자가 직접 해야한다
    - Communication : 리전같의 통신은 AWS 백본 네트워크 인프라를 통해 가능하다 
  - 리전이 멀리 있으면 그만큼 속도가 느려질 수 밖에 없다
  - [AWS 리전 확인](https://aws.amazon.com/ko/about-aws/global-infrastructure/regions_az/)
  - 리전 내에 가용 영역은 보통 2개 이상으로 구성된다
- Selecting a Region
  - Data governance, legal requirements
    - 나라마다 데이터 법 규제 주의!
  - Proximity to customers (Latency)
    - 가까울수록 빠르다
  - Services available within the Region
    - 리전마다 쓸 수 있는 서비스가 다르다
  - Costs (vary by Region)
    - 나라마다 물가, 인프라셋, 여러가지를 고려한 가격 구성
- Availability Zones
  - 가용 영역 사이에 피해가 전달되지 않도록 고립되어 있다
  - 가용영역 안에 데이터 센터가 분산되어 있다
  - **AWS recommends replicating data and resources across Availability Zones for resiliency.**
- AWS Data Centers
  - 비밀리에 구성되어 있다
  - 데이터 센터 하나에 대략 50,000 ~ 80,000의 물리적 서버가 존재한다
- Points of Presence
  - Used with Amazon CloudFront 
  - A global Content Delivery Network(CDN), that delivers content to end users with reduced latency

- AWS infrastructure features
  - Elasticity and scalability
  - Fault tolerance
  - High availability

---

<br>



### AWS service and service category overview



- Storage service
- Compute service
- Database service
- Networking and content delivery service
- Security, identity, and compliance service
- AWS cost management service
- Management and governance service
