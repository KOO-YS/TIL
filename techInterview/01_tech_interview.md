# 기술 면접 준비



## 운영체제

- PCB 와 Process의 5가지 상태. context switching이 무엇인가?
- 페이지 교체 알고리즘 중  FIFO가 무엇이며 FIFO이외에 본인이 가장 효율적이라고 생각하는 교체방식은 무엇인가?





## 네트워크

- HTTP Protocol 의 요청 응답 메시지 구조는 어떠한 방식으로 구성되어 있는가?



## 웹

- #### Servlet과 jsp의 차이

  [참고블로그]: https://gmlwjd9405.github.io/2018/11/04/servlet-vs-jsp.html

  하는 일이 동일하다. 기능의 차이 없이 역할의 차이만 있다.

  > Servlet

  - 웹 기반의 요청에 대한 동적인 처리가 가능한 서버 사이드에서 돌아가는 자바 프로그램
  - JAVA 안에 HTML (하나의 클래스)
  - 웹 개발을 위해 만든 표준

  **Servlet 특징**

  data processing(Controller)에 좋다

  - DB 통신으로 데이터 작업, Business Logic 호출에 유용

  Servlet이 수정된 경우 Java 코드를 컴파일(.class 파일 생성)한 후 동적 페이지 처리하기 때문에 다시 컴파일한 후 재배포하는 작업 필요하다 

  - 개발 생산성 저하

  > JSP

  - 자바 언어를 기반으로 하는 서버 사이드 스크립트 언어
  - HTML 안에 JAVA
  - Servlet을 보완하고 기술을 확장한 스크립트 방식 표준

  **JSP 특징**

  요청 결과를 나타내는 HTML을 작성할 때 유용

  JSP 수정된 경우 컴파일에 따른 재배포가 필요없다. WAS가 자동 처리해준다

  - 배포가 쉽다

---

- #### jsp의 el과 jstl에 대한 설명

  [참고 블로그]: https://gmlwjd9405.github.io/2018/11/03/jsp.html
  [참고 블로그]: https://doitnow-man.tistory.com/90

  > EL (Expression Language)

  ```jsp
  <%=variable%>
  ${variable} 		variable -> 변수 or 수식
  ```

  - JSP에서 변수 값을 표현하는데 사용되는 스크립트 언어
  - JSP에서의 기본 문법을 보완하는 역할
  - 자바 클래스 메소드로 가져와야 하는 값을 간편하게 호출할 수 있다
  - el의 기본 객체를 제공한다 ex) pageContext, pageScope, param...

  

  > JSTL (JSP Standard Tag Library)

  ```jsp
  <c:if test="${variable}"></c:if>
  ```

  **jsp Scriptlet 태그 <% %>** : 복잡한 것을 수행하는 임의의 Java Code를 삽입

  [문제점] html, java가 섞여 코드가 복잡해진다. 코드의 간결화를 위해 나온 JSTL

  - 많은 JSP 애플리케이션의 공통적인 핵심기능을 캡슐화하는 유용한 JSP 태그 라이브러리
  - jsp 개발을 단순화하기 위한 태그 라이브러리
  - jsp 페이지의 조건문, 반복문 처리를 html 태그 형태로 작성할 수 있다
  - 추가적인 jar 파일이 필요





## 데이터베이스

- self Join이란 무엇이며 어떤 경우에 사용하는가

- 오라클과 MySQL의 차이에 대해 설명하세요

  ---

  #### DataBase

  많은 데이터를 세분화하고 알기쉽게 정리하여 데이터베이스에 접속하는 누구나 쉽고 빠르게 검색하고 공유가 가능하게 만든 것.

  - 데이터를 빠르게 검색하고 공유하는 효율성 높임

    

  



## 아키텍쳐

- REST란 무엇인지, Restful 하게 API를 디자인한다는 것이 무엇인가





## 깃

- #### Git이 무엇인가

  [깃 공식 메뉴얼]: https://git-scm.com/book/ko/v2
  [참고 블로그]: https://goddaehee.tistory.com/91
  [버전관리 시스템의 차이 참고 : 중앙집중식 vs 분산]: https://ux.stories.pe.kr/78

  - 버전관리시스템 / 형상관리도구(Configuration Management Tool)
    - 파일 변화를 시간에 따라 기록하고 나중에 특정 시점 버전을 다시 꺼내올 수 있는 시스템

  > SVN vs Git

  **SVN** : 중앙집중식 버전 관리 시스템. 온전히 **서버**에서만 버전관리 진행

  **Git** : 분산 버전 관리 시스템. **서버**와 **로컬저장소** 양쪽에서 버전관리가 가능하다

  ex) SVN의 경우 `commit` 명령어를 통해 서버에 로컬 최종본을 저장하지만, Git의 경우 로컬에서 `commit`을 통해 버전관리를 하고  서버에 `push`한다. (Git은 서버와 로컬 저장소에 독립적 commit history를 쌓을 수 있다)

  [SVN과 Git의 차이]: https://goddaehee.tistory.com/158

  > Git

  소스코드를 주고받을 필요 없이 같은 파일을 여러명이 동시에 작업할 수 있다(병렬 개발)

  소스코드가 변경된 이력을 쉽게 확인할 수 있으며 특정시점에서 저장된 버전과 비교하거나 특정 시점으로 되돌아갈 수 있다.

  로컬 저장소에 저장이 되어 인터넷이 없는 환경에서도 가능하며 속도가 빠르다



---

- #### Github에서 주로 무엇을 할 수 있는지, 프로젝트에서 깃허브를 사용했을때 어떤 식으로 기여를 했는지 설명하시오

  > Github

  git 웹호스팅 서비스. git 저장소 서버를 대신 유지 및 관리해주는 서비스

  

## 프레임워크

- 프레임워크의 특징과, 프레임워크와 라이브러리의 차이점은 무엇인가
- Spring AOP가 무엇인지. OOP와 AOP를 비교하여 설명하시오
- 
- 