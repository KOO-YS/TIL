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

- Data Region : 메모리 segment를 로컬에 할당