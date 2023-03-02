# Amazon Relational Database Service

- AWS 클라우드에서 관계형 데이터베이스를 더 쉽게 설치, 운영 및 확장할 수 있는 웹서비스

## DB 인스턴스

- AWS 클라우드에 있는 격리된 데이터베이스 환경
- RDS의 기본 빌딩 블록은 DB 인스턴스 이다
- DB 인스턴스에 사용자가 만든 데이터베이스가 하나 이상 포함될 수 있다
- 독립 실행형 데이터베이스 인스턴스와 함께 사용하는 것과 동일한 도구 및 애플리케이션을 사용하여 DB 인스턴스에 액세스 가능
- AWS CLI(Command Line Interface), AWS RDS API, AWS Management Console을 사용해 생성과 수정 가능

## DB 엔진

- DB 인스턴스에서 실행되는 특정 관계형 데이터베이스 소프트웨어
- RDS에서 지원하는 엔진
    - MariaDB
    - Microsoft SQL Server
    - MySQL
    - Oracle
    - PostgreSQL
- 각 엔진마다 지원되는 고유 기능이 있으며, 버전따라 달라질 수도 있음

## DB 인스턴스 클래스

- DB 인스턴스의 컴퓨팅 및 메모리 용량을 결정
- DB 인스턴스 클래스는 DB 인스턴스 유형과 크기로 구성
    - 유형 별로 컴퓨팅, 메모리, 스토리지 기능을 제공

## DB 인스턴스 스토리지

- Amazon EBS(내구성이 있는 블록 수준 스토리지 볼륨을 제공)을 실행 중인 인스턴스에 연결하는 것이 가능
- DB 인스턴스 스토리지 유형
    - 범용 (SSD)
    - 프로비저닝된 IOPS (PIOPS)
    - Magnetic
- DB 인스턴스는 각각 스토리지 유형과 지원하는 데이터베이스 엔진에 따라 스토리지 요구사항이 존재
- 충분한 스토리지를 보유하여 데이터베이스를 확장할 수 있는 여유를 확보하는 것이 중요

[Amazon Relational Database Service(Amazon RDS)란 무엇입니까? - Amazon Relational Database Service](https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/Welcome.html)