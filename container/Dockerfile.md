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



#### Dockerfile 형식