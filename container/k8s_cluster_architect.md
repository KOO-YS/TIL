# K8S Cluster Architect

- 컨테이너 형식으로 애플리케이션들을 호스팅 하기 위함
- 쉽게 애플리케이션을 배포할 수 있는 방식

<br>

## k8s 구성 - Nodes
### Worker nodes 
- 컨테이너로 애플리케이션 호스팅
### Master node
- 노드들을 관리, 계획, 스케줄, 모니터링

<br>

### Master Node의 구성 요소
- etcd cluster : key-value 형식의 데이터 저장 방식. 시간, 위치 등의 값을 담음
- kube scheduler : 적절한 리소스 요구사항에 맞춰서 설치하기 적합한 노드를 찾아냄
- node controller : 노드 영역 관리, 클러스터에 새 노드를 온보딩, 삭제가 결정된 노드를 삭제
- replication controller : 운영 가능한 컨테이너의 개수를 조절
- kube apiserver : k8s가 관리할 수 있는 모든 명령 api 관리
- container runtime engine : 도커와 같은 컨테이너를 실행

<br>

### Worker Node의 구성 요소
