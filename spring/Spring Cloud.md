# Spring Cloud

<br>



스프링 클라우드, 스프링 부트, 스프링 배치, 스프링 시큐리티 이게 다 뭘까?

### Spring Project

> - https://blog.naver.com/PostView.nhn?isHttpsRedirect=true&blogId=dktmrorl&logNo=222131067633&categoryNo=48&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=section
> - https://dzone.com/articles/what-are-spring-projects

스프링 프레임워크 내에는 다양한 종류의 스프링 모듈이 존재하는 것과 달리,

> spring module -> http://dawoonjeong.com/spring-module/ (JDBC, AOP, Beans Context etc...)

스프링 프로젝트라고 불리는 다른 프레임워크들이 존재한다

이 프레임워크들은 엔터프라이즈 어플리케이션 측면의 여러 이슈에 대해 솔루션을 제공한다

- 프로젝트 별 스프링 프레임워크와 다른 버전을 가지고 있다
  - Spring Framework가 5.x 버전이 될 동안 Spring Boot는 2.x 인 것처럼



### Spring Project 종류

##### Spring Boot 

- 마이크로 서비스를 개발함에 있어서 가장 유명한 프레임워크 중 하나
- 애플리케이션 **개발 자체를 빠르고 간단하게 만들어준다**
- starter projects, auto-configuration, and actuator 등의 특징을 지님

##### Spring Cloud

- 클라우드 유행과 함께 

- **Spring Boot**로 마이크로서비스를 개발중에 있다면(전제), Spring Cloud를 이용해 클라우드를 이용할 수 있도록 해준다

##### Spring Data

- 일관성있는 **데이터 접근을 위한 매커니즘 제공**
- 몇 년 전까지만 해도 SQL 베이스의 관계형 데이터베이스만 애플리케이션에 연결할 수 있었지만, NoSQL을 포함해서 다양한 종류의 데이터베이스를 배치할 수 있다

##### Spring Batch

- 데이터 처리, 흐름 제어, 실패 재처리 등 배치 처리를 위한 프레임워크

##### etc ...

<br>



---

<br>



### Spring Cloud

> - https://spring.io/projects

마이크로 서비스의 개발, 빌드, 배포, 운영에 필요한 아키텍처를 쉽게 구성할 수 있게 도와주는 Spring Boot 기반 프레임워크

- JVM 기반의 애플리케이션을 쉽게 배포할 수 있는 기능들을 제공하는 오픈소스 라이브러리

<br>



###  Spring Cloud 특징

- 분산/버전 설정

  - 클라우드 환경에서 마이크로서비스를 지원하는 경우 환경 자체의 값들이 자유롭게 변경&처리되어야 한다
  - 중앙저장소에서 모든 설정값을 관리하고, 개별 서비스는 설정값을 해당 저장소에서 가져와야 한다 
  - 기본적으로 설정은 Key-Value 쌍으로 되어 있고 필요시 암호화 가능

- 서비스 등록 및 조회

  - 넷플릭스 Eureka : Naming Server

- 라우팅 

  - 특정 네트워크 내부에서 목적지를 찾아가는 과정

  - API 게이트웨이를 사용해서 라우팅 

    -> 다양한 네트워크를 사용하는 모듈 사이에서 중계와 필요한 변환 및 추가 처리 작업을 하는 모듈 의미

- 서비스 간 호출 -> 일대일, 일대다

- 써킷 브레이커

- ##### etc ...

  







---

<br>



> ####  스프링 클라우드 참고
>
> - https://www.baeldung.com/spring-cloud-bootstrapping
> - https://www.educba.com/what-is-spring-cloud/
> - https://www.samsungsds.com/kr/insights/spring_cloud.html
> - https://blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=qjawnswkd&logNo=222306782133



