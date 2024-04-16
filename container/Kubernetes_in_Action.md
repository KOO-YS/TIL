# Kubernetes in Action

## Overview 

### Monolithic vs MicroService
- 하나의 서버에서 구동되고 있었던 서비스들이 독립적으로 쪼개진 형태
- 동일한 호스트에서 실행되는 여러 응용 프로그램들에는 종속성(라이브러리) 충돌 가능성
    - 충돌 회피 방법
      - namespace -> runtime에 대해 격리환경을 제공하는 vm과 container 환경
      - 기존 vm 환경에서는 [Hypervisor -> 별도의 kernel들 -> kernel 안에 다수 앱 실행] 체계였지만,
        container 환경에서는 [단독 kernel -> 다수 container -> container 안에 단독 앱 실행] 체계
      
### Linux Container 환경의 근간이 되는 개념 : Namespace
- Mount
- Process ID
- Network 
- Inter Process Communication
- UTS (Hostname and Domain Name)
- User ID

---

-> **이 개념들로 Container 환경으로 충분히 애플리케이션을 runtime에서 분리시킬 수 있었지만, Docker의 등장으로 한층 견고해짐**

-> 여러 개의 애플리케이션 컨테이너를 구동할 때, 코디네이션 기능을 쉽게 지원하기 위해 Docker Swarm, **Kubernetes가 도입되기 시작되었다**

**Orchestration**
- 원하는 컨테이너가 원하는 장소에 원하는 갯수만큼 배치할 수 있도록

---

### Kubernetes Architecture
- Control Plane(Master) 1개 : Worker Node N개 
- Control Plane
  - Api Server : Kubernetes 내부의 모든 API 통신을 처리, etcd 저장소에 접근할 수 있는 유일한 컴포넌트
  - Scheduler : Pod가 Worker Node에 위치할 수 있도록 관리하는 역할
  - Controller Manager : component 복제, worker node 추적, 장애 처리 등 cluster level 기능 수행
- Worker Node
  - Kubelet : Master의 Api Server와 통신
  - Container Runtime : Docker의 Containerd ,CRI-O,, 
  - kube-proxy : 외부에 서비스와 네트워크 트래픽 부하를 분산하는 프록시 역할

### Kubernetes Profit
- 애플리케이션 배포 단순화 (Infra 추상화)
- 하드웨어 활용도 향상 (하나의 서버에 여러 컨테이너)
- Health checking & Self-Healing
- Auto-Scaling
- 애플리케이션 개발 단순화


---

### Pod 
- 최소 배포 단위
- 하나의 Pod에 두 개 이상의 Container를 포함시킬 수 있다 (비추천)
- 하나의 Pod는 하나의 Node에서만 실행될 수 있다
- Pod의 Network
  - 같은 Pod 내부 Container 사이 : localhost로 통신 가능
  - 다른 Container의 Pod 끼리 :
    - Kube-Proxy : NAT 기술을 사용해 통신

---

### Namespace
- dev, prod 등 환경을 분리하여 같은 이름의 리소스를 만들 수 있어서 유용하다

---

### ReplicaSet
- Pod의 개수가 항상 일정한지 관리하는 컨트롤러 역할
- ReplicationController의 개선 버전
- Pod Labeling에 유연하다
  - 기존에는 Equals 연산만 가능했다면, 개선 버전에는 In, Not In, Existed, DoesNotExist 등 연산을 사용할 수 있다
  - matchLabels에 더해 matchExpressions 사용

---

### DaemonSet
- ReplicaSet은 Pod를 배치시키지만 노드 사이에 균형을 갖춰서 배치시키지 않는다
- 모든 노드에 1개 이상으로 골고루 배치시키기 위해서는 DaemonSet을 이용해야 한다
- 로그, 모니터링에 사용