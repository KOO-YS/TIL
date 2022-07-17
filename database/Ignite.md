# Apache Ignite

- Durable memory architecture(지속적인 메모리 아키텍처)를 기반으로 하는 플랫폼
- 디스크와 메모리 상에서 전부 데이터를 보관하고 처리할 수 있다
- 클러스터의 RAM 자원을 사용해서 효과적으로 성능을 증가시킬 수 있다
- 메모리/디스크에 있는 데이터는 같은 이진 표현으로 이루어져 있다 → 데이터를 레이어로 전송 중에 변환할 필요가 없다는 뜻
- Durable memory architecture는 페이지라고 불리는 6개의 고정된 블럭으로 나뉘어져 있다
    - Pages
        - Java Heap 메모리 외부에 보관되며 RAM에 구성된다
        - FullRageId 라 불리는 구분자를 가지고 있다

<br>

### Memory Pages

- page의 상태값 종류
    - UnLoaded : 메모리에 로드된 페이지 버퍼가 없다
    - Clear : 디스크의 데이터와 동기화되어 있으며 로드된 페이지 버퍼
    - Durty : 디스크의 데이터와 다른 데이터를 보관하는 페이지 버퍼
    - Dirty in checkpoint :  첫 수정 사항이 디스크에 유지되기 전에 또 다른 수정 사항을 시작 → 체크 포인트 시작. 두 개의 메모리 버퍼를 유지

<br>

- Data Region → 메모리 segment (메모리 보호를 수행하는 가장 일반적인 방법 중 하나.  메모리를 여러 세그먼트로 나누어 각 세그먼트에서 다른 세그먼트로의 접근을 막는다)
- 내구성 메모리는 Data Region 메모리 세그먼트를 로컬에 할당
    - 기본적으로 클러스터 메모리의 20% 정도의 용량을 가지고 있다
    - 다양한 리전으로 설정 방법은 메모리의 데이터를 유용하게 관리
    - 리전의 최대 가용성이 메모리 세그먼트이며, 물리적인 메모리 또는 연속적인 바이트 배열로 되어 있다

- 메모리 단편화를 피하기 위해, 싱글 페이지는 여러개의 키-밸류 엔트리를 가지고 있다
    
    * **메모리 단편화 (memory fragmentation)**  → RAM 메모리의 공간이 작게 나뉘어 사용 가능한 메모리가 충분히 존재함에도 불구하고 할당이 불가능한 상태)

- 데이터 생성 : 모든 새 엔트리는 가장 최적화된 페이지에 더해지고 키-밸류 쌍 크기가 페이지의 최대 가용성에 비해 초과한다면, ignite는 한 페이지 이상에 데이터를 적재한다
- 데이터 업데이트 : 생성과 동일한 로직이 적용
- SQL 및 캐시 인덱스틑 B+ 트리 구조에 저장되며, 캐시는 키 값를 기준으로 정렬

<br>

### 수명주기

각 ignite 노드는 단일 JVM 인스턴스에서 실행되지만, 단일 JVM 프로세스에서 여러 Ignite 노드를 실행하도록 구성 가능

**수명 주기 이벤트 유형**

- BEFORE_NODE_START : Ignite 노드 시작 전 실행
- AFTER_NODE_START : Ignite 노드가 시작된 직후 실행
- BEFORE_NODE_STOP : Ignite 노드가 중지를 시작하기 전 실행
- AFTER_NODE_STOP : Ignite 노드가 중지된 후 실행

**Ignite 노드 시작 방식**

기본 실행

```java
// 기본 시작
Ignite ignite = Ignition.start();
```

구성 파일 적용

```java
// 설정 값 적용
Ignite ignite = Ignition.start("config/cache-config.xml");
```

초기화 프로세스 제어 → LifecycleBean

```java
public interface LifecycleBean {
		// 수명 주기 이벤트 유형을 사용해 노드 시작/중지 전후 작업 수행 가능
		public void onLifecycleEvent(LifecycleEventType lifecycleEventType) throws IgniteException;

// ...
}
```

초기화 프로세스 적용

```java
IgniteConfiguration configuration = new IgniteConfiguration();
configuration.setLifecycleBeans(new 초기화_프로세스_구현체());
Ignite ignite = Ignition.start(configuration);
```
