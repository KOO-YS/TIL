# Docker

<img src="http://image.kyobobook.co.kr/images/book/xlarge/447/x9791158391447.jpg" style="zoom:50%; float:left;" /> 

###  	도커/쿠버네티스를 활용한 컨테이너 개발 실전 입문

##### 		현장에서 바로 활용할 수 있는 컨테이너 개발 기법과 실전 기술

​		[book](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791158391447#N)

 	







---

<br>



# 키워드 중심 정리



#### #도커

- [컨테이너형 가상화 기술 구현을 위한 상주 애플리케이션]과 [애플리케이션을 조작하기 위한 명령행 도구]로 구성되는 프로덕트
- 애플리케이션 배포에 특화되어 있기 떄문에 애플리케이션 개발 및 운영을 컨테이너 중심으로 할 수 있다

#### #컨테이너

- 운영 체제 리소스를 격리해 만들어낸 가상 운영체제
- 컨테이너를 만들면서 발생하는 오버헤드는 다른 가상화 소프트웨어보다 적다

#### #도커의 장점

- 변화하지 않는 실행환경 -> 연산을 반복하더라도 결과가 달라지지 않는다
  - 환경 차이로 인한 문제를 방지한다
- 코드를 통해 실행 환경을 구축하고 애플리케이션을 구성할 수 있다
  - 코드 기반으로 인프라를 정의하고, 프로비저닝 도구로 서버를 구축한다
- **실행 환경과 애플리케이션의 일체화**
- 시스템을 구성하는 애플리케이션 및 미들웨어의 관리가 쉬움

> **Provisioning**
> - 어떤 종류의 서비스더라도 사용자의 요구에 맞게 시스템 자체를 제공하는 것
> - IT 인프라 자원을 사용자(or business)에게 service vender가 제공 

<br>

#### #호스트 운영체제 가상화 vs 컨테이너형 가상화

- **호스트 운영체제 가상화** : 운영체제 위에서 가상화 소프트웨어를 사용해 하드웨어를 에뮬레이션하는 방법으로 게스트 운영 체제를 만드는 방식

- **컨테이너형 가상화** : 가상화 소프트웨어 없이도 운영 체제의 리소스를 격리해 가상 운영체제를 만드는 방식

  > ###### Emulation
  >
  > - 하나의 시스템 안에서 다른 시스템을 흉내내도록 하는 것
  >
  > ###### Virtualization
  >
  > - 독립적인 SW 컨테이너로써 자체적으로 자원에 접근 가능하며 독립적 재부팅도 가능
  >
  > <br>
  >
  > 
  >
  > [에뮬레이션 vs 가상화](http://www.smallpc.co.kr/ab-5940-12)

#도커 vs LXC

#도커 이미지 빌드

#LinuxKit

#코드로 관리하는 인프라

#불변 인프라

#프로비저닝

#포트 포워딩

#도커 이미지 vs 도커 컨테이너

#### #도커 네트워크
- 여러 개의 컨테이너가 서로 통신이 가능하게 해주는 설정 정보 (도커는 격리된 환경에서 돌아가기 때문에 기본적으로는 다른 컨테이너와 통신이 불가능)
- 도커는 컨테이너에 내부 IP를 순차적으로 할당하며 고정적이지 않다.

- **도커 네트워크의 종류**
  - bridge : default 설정, 호스트 pc 내부의 컨테이너끼리 통신 가능
  - host : 호스트가 속한 네트워크 환경을 그대로 사용하여 통신 가능
  - none : 네트워크 없이 local 네트워크에서만 사용 가능. 즉 호스트를 포함한 모든 네트워크 통신 불가

> [도커 네트워크 참고](https://jonnung.dev/docker/2020/02/16/docker_network/) 


---


# Docker Summary

### 소프트웨어 운영 플랫폼의 흐름

> 하드웨어 가격은 내려가고 성능은 좋아진다. 
> 운영 서비스는 대용량이 되어간다.
 

1. 물리 서버 (Bare Metal) 
   - 하나의 물리 서버에 다양한 서비스를 함께 관리
   - 하나의 서버에 여러 서비스가 있어서 관리가 어려우며, 서로의 환경설정이 충돌할 가능성

2. 가상화 기술 (Hypervisor)
   - 하나의 서버에 가상 머신을 만들고 가상머신 안에 각 애플리케이션을 배포하고 운영
   - 서비스 운영 관리가 쉬워졌으나, 서비스 환경에서는 Scale-In & Scale-Out가 요구되기 시작

3. Container Engine
   - OS 위에 컨테이너 엔진을 올려 플랫폼 역할을 하며 컨테이너 서비스들을 관리
   - 컨테이너는 애플리케이션과 애플리케이션을 운영하기 위한 최소한의 환경만 포함되어 있기 때문에 용량이 적다
   - 따로 분리되어 있는 환경과 쉽게 확장할 수 있는 구조

### Linux와 관계
- 도커는 리눅스 커널의 기능으로 구성되어있다
- 도커가 활용한 리눅스 커널 기능
  - chroot : 독립된 공간 형성
  - namespace : 분리된 환경 지원
  - cgroup : 필요한 만큼의 HW 지원

### Docker 사용 이유
- 과거 일반 애플리케이션의 경우 개발 환경과 실제 운영 환경이 달라 어려움이 있었다
- 개발자가 개발한 그대로 운영환경에 배포할 수 있다
- 확장성 : 요구사항에 맞춰 서비스의 확장, 축소가 쉬워졌다

### 컨테이너와 컨테이너 이미지
- Docker Host : Docker Daemon이 실행되고 있는 linux 커널이 있는 환경
- container image(READ-ONLY) -> 실행 -> container (READ&WRITE) 
- 컨테이너 이미지 레이어 예시
    - base image
    - source code
    - execute command
- hub에서 컨테이너 이미지 검색 후 실행 프로세스
    ```shell
    docker search nginx
    docker pull nginx:lastet
    docker run -d --name web -p 80:80 nginx:latest
    ```

### Docker 저장소 용어
- Registry
    - 도커 이미지를 관리하는 공간
    - Docker Hub, Private Docker Hub, 회사 내부용 등
    - default registry : Docker Hub
- Repository
    - 레지스트리 내에 도커 이미지가 저장되는 공간
    - Github의 레파지토리와 비슷한 역할
- Tag
    - 같은 이미지 내 버전관리 용도


### Docker 설치
> https://docs.docker.com/engine/install/ubuntu/
1. 사전 유틸 패키지 설치
2. docker 공식 GPG 추가
3. docker repository를 패키지 관리자에 추가
4. docker 설치
    ```
      docker-ce  # docker daemon
      docker-ce-cli # docker client command
      containerd.io # docker runtime engine
    ```

### Docker 관리자 권한 부여
- 바로 docker를 사용하려고 하면 permission denied가 발생
- docker는 기본적으로 root 권한을 필요로 함
- 그러나 root 권한을 사용하는 것은 daemon, container runtime에 잠재적 취약점이 있다
- Docker Engine 19.03에 소개된 rootless mode을 사용해 non-root 방식으로 운영할 것을 권장

### Docker 기본 명령어

```shell
# 컨테이너 상태 확인
docker ps

# 이미지를 사용해 컨테이너 생성 & 실행 
docker run {image-name}

# 기존에 중지되어 있었던 컨테이너 실행
docker start {container-id} || {container-name}

# 원격 저장소에 있는 이미지 내려받기
docker pull {image-name}

# 로컬에 저장된 이미지 확인
docker image ls

# 컨테이너 중지
docker stop {container-id} || {container-name}

# 이미지 삭제
docker rmi {image-name}
```

### Dockerfile
[dockerfile 페이지 참고](https://github.com/KOO-YS/TIL/blob/master/container/Dockerfile.md)

#### Docker Layer 구분
- hub에서 docker 컨테이너 이미지 불러오기
    
    ```shell
    # 이미지 내려받기
    docker search nginx
    docker pull nginx
  
    # pull 받은 이미지는 다음 명령어로 확인 가능하다
    docker image ls
    ```
- 이미지는 여러 레이어로 구성되어 있다
    - root 계정의 `/var/lib/docker/overlay2`에 검색/불러오기 한 이미지의 레이어들이 저장되어 있다
    - 레이어의 개수는 search/pull 실행한 이미지의 레이어 개수와 일치한다



























[slide source](https://www.slideshare.net/pyrasis/docker-fordummies-44424016)

[curl 사용법](https://webisfree.com/2017-05-25/curl%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)