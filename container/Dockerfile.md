# Dockerfile

<br>



> 도커는 `Dockerfile` 안의 명령어를 읽는 것만으로 도커 이미지를 자동으로 빌드할 수 있다

<br>



#### 도커 사용법

빌드는 Docker daemon에 의해 실행된다

```shell
docker build .
# . -> 현재 디렉토리
```

##### :warning: 루트 디렉토리, `/`를 패스로 사용하지 말 것

- 빌드를 하면 하드 드라이브의 전체 내용을 도커 데몬으로 전송하기 때문

##### Build Options

- `-f /path/to/Dockerfile` : 해당 path에 있는 도커파일을 이용해 이미지 빌드
- `-t repository/tag` : 새 이미지를 저장할 레파지토리와 태그 지정

<br>



#### Dockerfile 명령어 정리

- Container 에는 { 개발한 애플리케이션의 실행 파일 + 운영 환경 } 조합이 들어가야 한다
- Dockerfile = container를 만들 수 있도록 도와주는 명령어 집합
- 컨테이너 이미지를 생성할 수 있는 고유의 지시어(instruction) 사용
- 대소문자를 구분하지는 않지만, 가독성을 위해 지시어를 대문자로 사용 권장

| Instruction                                                                         | Description                                                                                                                                                  |
|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`FROM`](https://docs.docker.com/reference/dockerfile/#from)                        | 운영 환경이 될 BASE IMAGE. 주로 가장 먼저 선언되는 지시어                                                                                                                       |
| [`ADD`](https://docs.docker.com/reference/dockerfile/#add)                          | 컨테이너 빌드 시 호스트 파일을 컨테이너로 복사. 압축 파일이나 url 접근을 통해 얻을 수있는 정보를 복사해서 추가해온다                                                                                         |
| [`ENV`](https://docs.docker.com/reference/dockerfile/#env)                          | 글로벌 환경 변수 설정. 컨테이너가 생성 된 후에도 유지된다. <br> `docker build` 실행 시 `--build-arg` 옵션으로 덮어쓰기 가능 <br> `docker run` 실행 시 `-e`, `--env` 옵션으로 **덮어쓰기 가능**                 |
| [`ARG`](https://docs.docker.com/reference/dockerfile/#arg)                          | 빌드 시점 환경 변수 설정. FROM 내부에서만 사용 가능.  <br> `docker build` 실행 시 `--build-arg` 옵션으로 덮어쓰기 가능 -> 만약 기본값X & 옵션 덮어쓰기X 는 오류 발생 <br> 빌드 이후 `docker run` 실행 시 **변경 불가능** |
| [`COPY`](https://docs.docker.com/reference/dockerfile/#copy)                        | 컨테이너 빌드 시 호스트 파일을 컨테이너로 복사                                                                                                                                   |
| [`RUN`](https://docs.docker.com/reference/dockerfile/#run)                          | BASE IMAGE 안에서 실행할 명령어. (ex) 라이브러리 설치                                                                                                                        |
| [`ENTRYPOINT`](https://docs.docker.com/reference/dockerfile/#entrypoint)            | 명령어 실행                                                                                                                                                       |
| [`CMD`](https://docs.docker.com/reference/dockerfile/#cmd)                          | 명령어 실행 (Arguments, Options 등의 변수 변경 가능)                                                                                                                      |
| [`WORKDIR`](https://docs.docker.com/reference/dockerfile/#workdir)                  | 디렉토리 설정. 명령어를 실행하기 전 위치 설정                                                                                                                                   |
| [`USER`](https://docs.docker.com/reference/dockerfile/#user)                        | 기본값 root 유저가 아닌 추가 유저로 switch 가능하며 권한 설정 가능. 보안을 위해 권장되는 기능                                                                                                  |
| [`VOLUME`](https://docs.docker.com/reference/dockerfile/#volume)                    | 파일 또는 디렉토리를 기준으로 컨테이너 저장소를 마운트                                                                                                                               |
| [`EXPOSE`](https://docs.docker.com/reference/dockerfile/#expose)                    | 컨테이너 외부에서 사용할 포트 지정                                                                                                                                          |
| [`LABEL`](https://docs.docker.com/reference/dockerfile/#label)                      | 이미지에 대한 메타 데이터                                                                                                                                               |
| [`HEALTHCHECK`](https://docs.docker.com/reference/dockerfile/#healthcheck)          | 컨테이너 내부 애플리케이션의 헬스 체크 지원.  <br> 지시어 정의는 주로 `HEALTHCHECK CMD curl {health-check-url}` 형식으로 작성 <br> `docker container inspect` 상세 확인 가능                        |
| [`ONBUILD`](https://docs.docker.com/reference/dockerfile/#onbuild)                  | Dockerfile 수행 결과물을 가지고 추가 도커 빌드를 하기위해 사용. <br> Dockerfile를 각각 원하는 목적으로 분리해서 빌드할 수 있다                                                                         |
| [`SHELL`](https://docs.docker.com/reference/dockerfile/#shell)                      | 쉘 형식으로 명령 실행 시, 쉘 설정                                                                                                                                         |
| [`STOPSIGNAL`](https://docs.docker.com/reference/dockerfile/#stopsignal)            | 컨테이너를 중지할 신호를 지정할 수 있다. 기본적으로 주로 SIGTERM을 사용                                                                                                                  |
| `#`                                                                                 | 주석 설명                                                                                                                                                        |