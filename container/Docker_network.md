# Docker Network

### Container Network 통신 구조
- docker host(docker가 설치되어 있는 linux)에서 docker daemon이 실행되면 docker0(docker network interface)가 생성된다
- **docker0**
  - bridge network 역할 : docker host가 실제로 가지고 있는 network와 컨테이너가 가지고 있는 ip 대역대를 연결
  - NAT(Network Address Translation)
  - Port Forwarding 역할
  - L2 통신 기반
  - 172.17.0.1 IP 주소를 가지고 Gateway 역할
    - 컨테이너가 실행될 때, 172.17.X.Y 로 IP 주소 할당
    - 컨테이너는 docker0를 지나 호스트 이더넷 eth0를 지나 외부 네트워크와 통신이 가능해진다

### Port Forwarding
- container port를 외부로 노출시켜 외부 연결 허용
- iptables rule을 통한 포트 노출
- 옵션 설정
```shell
-p hostPort:containerPort
-p containerPort
-P # random port
```
- 예시
  ```shell 
  docker run -d -p 80:80 nginx
  ```
  
### bridge network 추가 생성
- 컨테이너가 새로 생성되면 docker0 안에 순차적으로 IP가 할당된다
- docker0 에 속한 컨테이너의 IP는 고정할 수 없다
- IP를 고정하기 위해서는 docker0 이외의 다른 대역 network를 추가하고 IP를 고정해야 한다
- bridge network 생성
  ```shell
  docker network create --driver bridge \
      --subnet 192.168.100.0/24 \
      --gateway 192.168.100.254 \
      mynetwork 
  ```
  - bridge 주소가 192.168.100.254인 네트워크가 생성된다
- container에 고정 ip 할당
  ```shell
  docker run -d --name server \
      --net mynetwork \
      --ip 192.168.100.100 \
      -p 8080:8080
      nginx
  ```
  
### 컨테이너간의 통신
- 컨테이너끼리는 private ip를 기반으로 통신하는데, 컨테이너가 재실행되면 ip가 변경될 가능성이 있다
- docker network를 지정하면 컨테이너의 호스트 이름을 이용할 수 있다
