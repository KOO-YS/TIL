# Archive 배포

<br>

##### [🤔 That's what I think](https://resian-programming.tistory.com/16)

<br>



#### JAR & WAR

- JAR : **J**ava **AR**chive
- WAR : **W**eb **A**pplication A**R**chive
- 둘 다 JAVA의 jar 툴을 이용하여 생성된 압축 -> 아카이브 파일 (즉, 같은 압축 형태)
- 자바 클래스 패키징 확장자

<br>



### 개별적인 특징

---

#### JAR

- Class와 같이 JAVA 리소스, 속성 파일, 라이브러리 등의 파일 포함

- 원하는 구조로 구성 가능

- JRE(JAVA Runtime Environment)만으로 실행 가능

  ```
  java -jar 프로젝트네임.jar
  ```

- path 등의 경로를 유지
  - 배포된 jar 파일을 사용하는 사용자들은 각 파일들에 대한 path 문제에서 벗어날 수 있다



<br>



#### WAR

- servlet / jsp 컨테이너에 배치 할 수 있는 웹 어플리케이션(Web Application) 압축 파일 포맷
  - JSP, SERVLET, JAR, CLASS, XML, HTML, JAVASCRIPT 등 Servlet Context 관련 파일들로 패키징
  - 위와 같이 웹 관련 자원을 포함
- WEB-INF 및 META-INF 디렉토리로 사전 정의 된 구조를 사용
- 별도의 웹서버나 웹 컨테이너(WAS) 필요
  - 배포에 대한 **메타 정보(웹 프로젝트에 대한 설정 정보)** 포함 -> web.xml
- JAR파일의 일종으로 웹 애플리케이션 전체를 패키징 하기 위한 JAR 파일



<br>



<br>



#### 참고 사이트

[Differences Between JAR and WAR Packaging](https://www.baeldung.com/java-jar-war-packaging)

[JAR vs WAR](https://goodgid.github.io/Jar-vs-War/)

[JAR vs WAR 차이점](https://programmer93.tistory.com/40)

[[Spring Boot] 배포 방법 비교 (JAR vs WAR)](https://hye0-log.tistory.com/27)

[[Java] JAR WAR 차이점 및 특징 ( + EAR )](https://ifuwanna.tistory.com/224)

[jar build, war build](https://binit.tistory.com/25)

