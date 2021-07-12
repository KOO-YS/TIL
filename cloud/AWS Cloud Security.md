# AWS Cloud Security

<br>



### AWS shared responsibility model

- AWS shared responsibility model
  - AWS와 고객이 각자 책임을 져야할 부분을 구분
  - AWS responsibility : Security **on** the cloud
  - Customer responsibility : Security **in** the cloud

- Service characteristics and security responsibility
  - IaaS
  - SaaS
  - PaaS
    - 고객은 인프라에 대해 관리할 필요가 없다

---

<br>



### AWS Identity and Access Management (IAM)



- IAM
  - 사용자와 사용자 권한을 관리할 때 사용할 수 있는 서비스
  - 사용자, 보안 자격증명(ex. access key) 및 사용자가 액세스할 수 있는 AWS 리소스를 제어하는 권한을 중앙에서 관리 가능
  - Define fin-grained access rights
    - **Who** can access the resource
    - **Which** resources can be accessed and what can the user do to the resource
    - **How** resources can be accessed 

- 필수 구성 요소
  - IAM User
  - IAM Group
  - IAM Policy
  - IAM role

- IAM user 접근 타입 설정
  - Programmatic access
    - Access key ID, Secret access key
  - AWS Management Console access
    - 12-digit Account ID or alias
    - IAM user name, password
    - MFA 인증 코드 추가 가능

- IAM policies
  - document that defines permissions
  - JSON 기반으로 permission 정의
  - **permission 결정 순서**
    - 명시적으로 금지 했는지 확인
    - 명시적으로 허용 했는지 확인
    - 만약 둘다 명시되어있지않았다면 **"금지"**
- IAM roles
  - 필요하면 임시적으로 권한을 할당

---

<br>



### Securing a new AWS account

































