<br>



# Logging



#### Logging 이란?

- 정보를 제공하는 **일련의 기록**인 로그를 생성하도록 시스템을 작성하는 활동
- **로그의 장점**
  - 재현하기 힘든 버그 문제 파악에 대한 유용한 정보를 제공
  - 성능에 관한 통계와 정보 제공
  - 로그 이력을 문서화해서 남길 수 있다



#### Logging의 목적

서버를 운영하는 애플리케이션에 문제가 생기면, **문제의 원인을 파악**하기 위해 그 당시의 정보가 필요. 애플리케이션 내 **Exception**이 발생하거나 **중요 기능이 실행**되는 부분에서 적절한 로그(Log)를 남겨야 함 



> ##### \* 왜 System.out.println()을 찍지 않을까?
>
> 콘솔에 로그를 찍는 것이 왜 더 비효율적인지 검색해보았다
>
> -> **참고** :https://stackoverflow.com/questions/950026
>
> 결론은 OS마다 약간의 차이는 있지만, **\'콘솔 터미널\'에 텍스트를 출력하는 것**이 파일이나 소켓같은 다른 곳으로 리다이렉션하는 것보다 훨씬 많은 작업이 필요하다고 함! 



#### Log 레벨 종류

|   Level   | Description                                                  |
| :-------: | ------------------------------------------------------------ |
| **TRACE** | debug보다 좀 더 세분화된 정보. 경로 추적에 사용              |
| **DEBUG** | 디버깅하는데 유용한 세분화된 정보                            |
| **INFO**  | 진행 상황, 상태 변경같은 일반적인 정보                       |
| **WARN**  | 잠재적인 오류 원인이 될 수 있는 경고성 정보 (현재는 실행 문제가 없다) |
| **FATAL** | 아주 심각한 에러가 발생한 정보                               |
| **ERROR** | 요청을 처리하는 중 문제가 발생한 오류 정보                   |



---

#### slf4j <small>(Simple Logging Facade For Java)</small> 

java 진영 로깅에 대한 추상체(facade) -> `인터페이스`

로깅 구현체를 바꿔야하는 상황이더라도 간단하게 전환 가능



#### slf4j을 구현한 logging Library 

- <del>**log4j**</del> : 2015년에 개발 중단. 사용 지양
- **logback** : log4j보다 향상된 성능에 필터링, 자동 리로드 기능 추가 
- **log4j2** : logback과 동일하게 필터링, 자동 리로드 기능 제공하묘 **멀티스레드/비동기** 환경에서 성능이 훨씬 뛰어남 -> `이걸로 실습`

<img src="https://logging.apache.org/log4j/2.x/images/async-throughput-comparison.png" alt="compare" style="zoom:80%; float:left;" />



---



##### *log4j2 사용 결정*  `->`



#### Log 구성요소

1. **Logger** 
   - 실제 로그 기능 수행 (로깅 메시지를 Appender에게 전달)
   - 로깅이 일어나는 부분을 그룹화해 필요한 그룹의 로그만 출력
   - 로그 그룹의 우선순위를 부여해 출력 등 
2. **Appender**
   - 로그의 출력 위치 지정
   - 설정 가능 위치 : console, file, outputStream, java.io.writer, SMTP, network
3. **Layout**
   - 로그의 출력 포맷 지정
   - 참고 : https://logging.apache.org/log4j/2.x/manual/layouts.html



#### Appender 종류 



##### 1. Console Appender

- **Console 태그** 사용

- `target` : 출력 방식 [SYSTEM_OUT || SYSTEM_ERR]

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <Configuration>
      <Properties>
          <Property name="logging_name">museum-log</Property>
          <Property name="log_pattern">%d{yyyy/MM/dd HH:mm:ss} %highlight{%-5level}{FATAL=white, ERROR=red, WARN=blue, INFO=green, DEBUG=green, TRACE=blue}[%t] %C %m%n</Property>
      </Properties>
      <Appenders>
          <Console name="console_appender" target="SYSTEM_OUT">
              <PatternLayout pattern="${log_pattern}" disableAnsi="false"/>
          </Console>
      </Appenders>
      <Loggers>
          <Root level="info">
              <AppenderRef ref="console_appender"/>
          </Root>
      </Loggers>
  </Configuration>
  ```



##### 2. Rolling File Appender

- **RollingFile 태그** 사용

- 파일에 로그를 기록하되, <u>로그가 속성으로 지정한 **크기**와 **날짜** 이상이 되면 분류해서 저장한다</u> -> `rolling`

- `Policy`에서 **파일 분리를 위한 기준**을 정할 수 있다  

  - `TimeBasedTriggeringPolicy` : 해당 시간마다 기록을 분리
  - `SizeBasedTriggeringPolicy` : 해당 사이즈 초과시 기록을 분리
  - `DefaultRolloverStrategy` 
    - fileIndex : min일 때, 숫자가 작을수록 최신파일 | max일 때, 숫자가 클수록 최신파일 
    - min : 인덱스의 최소값 (default : 1)
    - max : 인덱스 최대값 (최대값까지 도달하면, 기존에 있는 파일을 덮어씀)

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <Configuration>
      <Properties>
          <Property name="logging_name">museum-log</Property>
          <Property name="log_pattern">%d{yyyy/MM/dd HH:mm:ss} %highlight{%-5level}{FATAL=white, ERROR=red, WARN=blue, INFO=green, DEBUG=green, TRACE=blue}[%t] %C %m%n</Property>
      </Properties>
      <Appenders>
          <RollingFile name="file_appender" fileName="logs/${logging_name}.log" filePattern="logs/${logging_name}_%d{yyyy-MM-dd}-%i.log">
              <PatternLayout pattern="${log_pattern}"/>
              <Policies>
                  <!--용량 초과시 다음 넘버 사용해 로그 파일 생성-->
                  <SizeBasedTriggeringPolicy size="100KB"/>
                  <!--1일마다 로그 파일 생성-->
                  <TimeBasedTriggeringPolicy interval="1"/>
              </Policies>
              <!--최대 10개까지 파일 생성-->
              <DefaultRolloverStrategy max="100" fileIndex="min"/>
          </RollingFile>
      </Appenders>
      <Loggers>
          <Root level="info">
              <AppenderRef ref="file_appender"/>
          </Root>
      </Loggers>
  </Configuration>
  ```

- 생성된 모습 예시

   <img src="img\rolling.jpg" style="zoom: 80%; float:left;" />





< -- Loggers & SMTP 메일 어팬더 추가 예정 -- >





---

#### *<u>Spring Boot 세팅 시, 주의할 점</u>*

SLF4J는 하나의 구현체만 가질 수 있으며 스프링 부트는 기본적으로 logback을 내장하고 있다.

-> logback을 제외해줘야함

```
SLF4J: Class path contains multiple SLF4J bindings.
```

error 수정 참고 : https://huisam.tistory.com/entry/log4j2



---

> #### 참고 사이트 
>
> [로깅의 기본 정의](https://www.edwith.org/boostcourse-web/lecture/16813/) 
>
> [로깅의 필요성 참고](https://blog.lulab.net/programmer/what-should-i-log-with-an-intention-method-and-level/)
>
> [로깅 라이브러리 비교 1](https://junshock5.tistory.com/124)
>
> [로깅 라이브러리 비교 2](https://madplay.github.io/post/log4j-logback-log4j2)
>
> [로깅 구성 컴포넌트 1](https://velog.io/@bread_dd/Log4j-2-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EA%B0%9C%EB%85%90)
>
> [로깅 구성 컴포넌트 2](https://pakss328.medium.com/log4j2-xml-%EC%84%A4%EC%A0%95-a3aa0d1bea2f)
>
> [실습 안 한 logback 설정 참고](https://goddaehee.tistory.com/206)