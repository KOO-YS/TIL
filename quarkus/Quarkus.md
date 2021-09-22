# Qaurkus



## CREATING YOUR FIRST APPLICATION

#### Using injection

Quarkus의 의존성 주입은 ArC에 기반이 있다.

- ArC : 퀄쿼스 구조에 맞춘 CDI 기반 의존성 주입 솔루션
- CDI : IoC 법칙을 적용한 빈
  - https://quarkus.io/guides/cdi

in GreetingService

```java
import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class GreetingService {
    public String greeting(String name) {
        return "hello " + name;
    }
}
```

in GreetingResource → GreetingService를 주입하고 새로운 엔드포인트를 생성하는 곳

```java
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.jboss.resteasy.annotations.jaxrs.PathParam;

@Path("/hello")
public class GreetingResource {

    @Inject
    GreetingService service;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/greeting/{name}")
    public String greeting(@PathParam String name) {
        return service.greeting(name);
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "hello";
    }
}
```

#### Development Mode

`quarkus:dev` : 퀄쿼스를 개발 모드로 실행. hot deploy 가능

- hot deploy : 서버의 재시작 없이 응용프로그램의 동적 변경을 바로 적용

#### Testing

- 디펜던시 사용

  - quarkus-junit5
  - - RestAssured : https://beenlife.tistory.com/34

- 퀄쿼스는 Junit 5 테스트를 지원하고, 이 버전 때문에 반드시 `surefire maven plugin`이 설정되어 있어야 한다

  ```xml
  <plugin>
      <artifactId>maven-surefire-plugin</artifactId>
      <version>${surefire-plugin.version}</version>
      <configuration>
         <systemPropertyVariables>
            <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
            <maven.home>${maven.home}</maven.home>
         </systemPropertyVariables>
      </configuration>
  </plugin>
  ```

- `@QuarkusTest` 러너를 사용해 Junit을 시작할 수 있다

#### Packaging and run the application

- `./mvnw package` 사용

- 결과물은 

  ```
  /target
  ```

   에 생산한다

  - 하위 `quarkus-app` 디렉토리에는 `quarkus-run.jar` 를 포함하고 있고 executable jar가 된다.

  - ```
    quarkus-app/lib
    ```

     디렉토리 안에 디팬던시들이 복사되고, uber jar로 생성되는 것이 아니니 조심

    - uber jar (uber in German is over, above) : 디펜던시를 다 가지고 있는 jar : https://stackoverflow.com/questions/11947037/what-is-an-uber-jar

- 실행 명령어 : `java -jar target/quarkus-app/quarkus-run.jar`

------

<br>



<br>





## GETTING STARTED WITH REACTIVE

Reactive : 강력하고 효율적이며 동시에 애플리케이션 및 시스템을 구축하는 일련의 원칙

Reactive는 메모리를 다룰 때 전통적인 접근법보다 훨씬 효율적이다

Quarkus 구조에서 가장 중요한 개념

#### Imperative vs Reactive

명령형과 반응형의 차이

리액티브 실행 모델의 장점에 대해서 이해하고 싶으면, 명령형과 반응형 실행 모델에 대해서 먼저 알아볼 필요가 있다

**전통적인 방법**

- 프레임워크는 한 요청을 한 스레드가 다룰 수 있게 할당
  - 요청 전체 프로세스를 한 실행 스레드 안에서 처리
- 여러 동시적인 요청을 처리하려면 여러 스레드가 필요
  - 애플리케이션 동시성은 결국 스레드의 수에 따라 결정
  - 이런 스레드들은 원격 서비스와의 코드 상호작용 도중 즉시 차단된다
- 자원 사용에 비효율적이며 더 많은 스레드가 필요하고 각 스레드조차 CPU나 memory를 더 필요로 함

**리액티브 방법**

- non-blocking IO → 동시적 IO에 효율
- 요청 프로세스가 한 스레드에게 담당되는 것이 아니라 다른 IO 스레드를 사용한다
- 요청이 IO 스레드를 사용해서 진행되고, IO 스레드는 동시에 여러 요청을 처리할 수 있다
- 요청이 HTTP, DB 처럼 외부 서비스와 연결을 요구한다면, 응답을 기다리는 동안 실행을 막지 않는다
  - IO 연산 스케줄을 잡아두고 추가 지속 처리를 붙인다
  - 지속성을 콜백으로서 전달받거나 리액티브 프로그래밍, co-routine 등 더 진보된 구조를 사용
  - 어떤 방식으로 지속 처리가 진행되던, 핵심은 **IO 스레드가 양도되고, 결과적으로 또 다른 요청을 위해 사용된다는 점이다**
  - 스케줄된 IO가 끝나면 연속적으로 대기중인 요청을 처리한다

Quarkus에서 제안하는 연속 처리를 위한 방식

- Mutiny :  직관적이고 이벤트 반응 방식의 리액티브 프로그래밍 라이브러리 (✅ guide pick)
- Kotlin co-routine : 순차적 방식의 비동기 코드 작성 방식

------

<br>



<br>





## BUILDING A NATIVE EXECUTABLE

#### GraalVM

native executable로 빌드하기 위해서는 GraalVM이 요구된다

#### Producing a native executable

어플리케이션을 위한 native executable 은 어플리케이션 코드와 요구 라이브러리, java API들,  VM 축소 버전이 들어있다.

- VM 축소버전을 만드는 이유

  - 실행 시간 단축과 disk footprint를 최소화하기 위해
  - disk footprint : 실행되지 않지만 보조 미디어에 저장되거나 네트워크 연결을 통해 다운로드 될 때 크기 정보

- command 라인에서 `Dquarkus.package.type=native` 를 추가할 수 있지만, 네이티브 이미지의 테스트까지 허용하기 위해서는 profile을 이용하는 것이 더 좋다

  ```xml
   <profiles>
      <profile>
          <id>native</id>
          <properties>
              <quarkus.package.type>native</quarkus.package.type>
          </properties>
      </profile>
  </profiles>
  ```

Native executable 생성은 몇 가지 문제를 끌어올 수 있기 때문에, 실행중인 native 파일에 대해 몇가지 테스트를 해보길 추천!

------

<br>



<br>





## CONFIGURING YOUR APPLICATION

#### 메이븐 프로젝트 생성

```
mvn io.quarkus.platform:quarkus-maven-plugin:2.2.2.Final:create \\
    -DprojectGroupId=org.acme \\
    -DprojectArtifactId=config-quickstart \\
    -DclassName="org.acme.config.GreetingResource" \\
    -Dpath="/greeting"
```

#### RestEasy

[Getting started with REST Services using RESTEasy - Mastertheboss](http://www.mastertheboss.com/jboss-frameworks/resteasy/resteasy-tutorial/)
