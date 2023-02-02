# Building a Native Executable

> reference
> https://quarkus.io/guides/building-native-image

<br>

 ## GraalVM
 native executable을 빌드하기 위해서는 GraalVM이 필요
 
 **GraalVM의 종류**
 - Oracle GraalVM Community Edition (CE)
 - Oracle GraalVM Enterprise Edition (EE)
 - Mandrel

Mandrel 
- Oracle GraalVM CE의 후속. Quarkus 서포트를 위해 특별하게 고안됨. Quarkus에 필요하지 않은 예외들을 불포함
- Linux 컨테이너 환경에 적합
- MacOS의 경우 Oracle GraalVM을 대신 사용하기를 권장


###  GraalVM 설정
- GraalVM을 설치할 수 없는 경우, multi-stage Docker 빌드를 사용할 수 있다.
    -  내장 GraalVM을 가진 도커 컨테이너 안에서 메이븐을 실행할 수 있다
- 설치 과정
    1. GraalVM을 다운로드
    2. 환경변수로써 GraalVM 설치 경로를 GRAALVM_HOME 변수로 설정
    (+) GraalVM CE/EE의 경우, `native-image` 툴 설치
    ```shell
    ${GRAALVM_HOME}/bin/gu install native-image
    ``` 

## Native executable 생성
- Native executable은 애플리케이션 코드, 요구되는 라이브러리, Java API, VM의 축약 버전이 담겨있다
- 더 작아진 VM 버전 덕분에 애플리케이션 부팅시간이 빨라지며 더 적은 디스크 공간을 사용한다
- Native executable 애플리케이션을 생성하기 위해서는 
    ```xml
    <profiles>
        <profile>
            <id>native</id>
            <properties>
                <quarkus.package.type>native</quarkus.package.type>
                <quarkus.native.additional-build-args> 필요한 
                옵션 (해당 부분 대신, application.properties에서도 설정 가능)</quarkus.native.additional-build-args> 
            </properties>
        </profile>
    </profiles>
    ```