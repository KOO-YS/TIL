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
- Deployment(또는 ReplicaSet) 없이 생성한 Pod는 실패하거나 Node에서 제거되는 경우 다시 생성되지 않으므로 단독 생성 비추
  - Deployment 로 생성하는 것이 일반적인 방법
  - ReplicaSet의 기능을 가지면서 image 버전 업그레이드 시, Pod 역시 업그레이드를 해준다
    - 업그레이드 정책 지정 가능 (default : Rolling)


---

### Namespace
- dev, prod 등 환경을 분리하여 같은 이름의 리소스를 만들 수 있어서 유용하다
- Node와는 연관없는 개념

---

### ReplicaSet
- Pod의 개수가 항상 일정한지 관리하는 컨트롤러 역할
- ReplicationController의 개선 버전
- Pod Labeling에 유연하다
  - 기존에는 Equals 연산만 가능했다면, 개선 버전에는 In, Not In, Existed, DoesNotExist 등 연산을 사용할 수 있다
  - matchLabels에 더해 matchExpressions 사용

---

### Update
- Deployment 리소스가 나오기 이전 ReplicationController를 이용하여 Rolling Update 방식을 사용하였다
  ```
  # 이미지 버전 업그레이드
  kubectl rolling-update <app-v1> <app-v2> --image=nginx:v2
  ``` 
- Rolling Update 중 구분을 위한 자체 라벨링 
- 

### Deployment
 - ReplicaSet의 상위 호환
 - ReplicaSet와 다른점
   - 업데이트 전략 지정 가능
     - Rolling Update (default) : Pod를 순차적으로 지정된 수량만큼만 업데이트
     - Recreate : 기존 리소스를 한번에 삭제한 다음 새로운 Pod를 생성해서 순간적인 서비스 단절 가능성 
```shell
kubectl set image deployment nginx=nginx:v2
```

---

### DaemonSet
- ReplicaSet은 Pod를 배치시키지만 노드 사이에 균형을 갖춰서 배치시키지 않는다
- 모든 노드에 1개 이상으로 골고루 배치시키기 위해서는 DaemonSet을 이용해야 한다
- 로그, 모니터링에 사용

---

### Job
- 배치성 일괄작업
- Pod를 활용해서 일회성 또는 정기적인 작업 실행 -> 종료 후 실행 결과 공유
  - 실행시킨 작업이 끝났다는 것을 확인할 수 있는 COMPLETIONS 컬럼
    ```shell
    $ kubectl get job
    NAME        COMPLETIONS   DURATION  AGE
    batch-pod   1/1           8s        10s
    ```
- [참고](https://malwareanalysis.tistory.com/151)

### CronJob
- 나중에 실행해야 하는 작업, 반복 일정에 따라 만들어진 Job

---

### Service
- 내/외부 클라이언트 모두 일반적으로 Service를 통해 Pod에 연결
- Sticky Session 가능
- name 지정을 통해 port를 여러개 지정할 수 있다
- Cluster 외부에 Service 노출
  - NodePort : 클러스터 노드는 노드 자체의 포트를 열고 해당 포트에서 수신된 트래픽을 기본 서비스로 리다이렉션
  - LoadBalancer : Kubernetes가 실행중인 클라우드 인프라에서 프로비저닝된 전용 로드밸런서를 통해 서비스에 액세스할 수 있다
  - Ingress : 단일 IP 주소를 통해 여러 서비스를 노출하는 리소스. HTTP 수준(L7)에서 작동하므로 L4보다 더 많은 기능 제공 가능

---

### Volume
- volume 종류
  - emptyDir : 임시 데이터를 저장하는데 사용되는 빈 디렉토리 (저장되지 않는다)
    - gitRepo(deprecated) : Git 저장소의 내용을 체크아웃하여 초기화된 볼륨이지만 현재 emptyDir을 활용 중
  - hostPath : worker node의 파일시스템에서 Pod로 디렉토리를 마운트하는데 사용
    - Pod가 죽고 살아났을때 기존 node에 Pod가 다시 생성될 것이란 보장이 없다
  - Nfs : Network File System. pod에 마운트된 NFS share
  - cephfs, iscsi, rbd 등 : 다른 유형의 네트워크 스토리지를 마운트 하는데 사용
  - configMap, secret, downwardAPI : 특정 kubernetes 리소스 및 클러스터 정보를 Pod에 노출하는데 사용되는 특수 유형 볼륨
  - persistent Volume, persistentVolume Claim : 정적, 동적으로 프로비저닝 된 영구 저장소를 사용하는 방법

### Persistent Volume, Persistent Volume Claim
- Pod와 개념을 분리하여 클러스터에서 관리될 수 있는 영구 저장소 풀 관리
  - Pod에 볼륨을 직접 명시하지 않는 이유?
    - 어떤 저장소를 쓰더라도 Pod 템플릿이 추상화되어 공통적으로 사용되어야한다
    - Pod에는 저장소에 대한 Claim()만 지정하고, 저장소 관련 정보는 분리하여 관리한다
- 마운트 경로, 용량, 호스트에 마운트되는 방법 등을 정의
- 
---

### ConfigMap
- Kubernetes의 template에 'env'로 사용하던 환경변수들을 관리 체계화한 리소스
- key-value 쌍을 포함하는 map
- volume 리소스의 한 형태

### Secret
- 보안을 유지해야 하는 자격증명, 개인 암호화 키같은 민감한 구성정보
- base64 형식으로 저장
- Node에서 항상 메모리에 저장되며 물리적 스토리지에 기록되지 않는다

### downwardAPI
- Pod 생성 이후 만들어진 metadata 정보를 Pod 내부 Container로 전달
- Pod 이름, IP 주소, Namespace, 속한 Node, Service Account, CPU & Memory Request, Limit

---

### StatefulSet
- ReplicaSet의 Pod는 지정 이름이 없으며 언제든지 대체 가능
- Stateful의 Pod는 지정 이름이 있으며 같은 모양으로 대체해야 함
- 새 인스턴스는 교체할 인스턴스와 동일한 이름, 네트워크 ID 및 상태를 가져가야함
- 스케일을 확장하면 직렬로 하나씩 생성이된다
- Pod가 삭제되더라도 PV, PVC를 삭제하지 않고 유지하며, 다시 생성되면 같은 Pod를 찾아서 연동한다
- 

---

### ServiceAccount
- AWS Role 기능과 유사
- kubernetes 서비스 리소스의 권한을 설정
- 각 namespace에 대해 default 서비스어카운트가 자동 생성되어 모든 namespace에는 기본 sa가 존재
- pod는 하나의 sa와 연결되어야 한다 (n:1)
- pod는 동일 namespace의 sa만 사용 가능
- 

