# Rule Engine

- 비정형적인 복잡한 비즈니스 룰( 또는 프로세스)를 정형화시켜 기업의 의사결정에 활용할 수 있도록 자동화된 시스템, 기슬, 솔루션
- 머신러닝, NLP, 인공지능을 결합한 Decision Management Suite로 발전 중


### 등장 배경
- 기업의 빠른 의사결정을 위해서는 기업 내부에 존재하는 비즈니스 룰을 활용하는 것이 필요
- 비즈니스 룰은 정형화, 집중화된 시스템으로 구축되어 있지 않고 여러 업무를 혼재하거나 전문가의 지식 등 비정형으로 존재
- 데이터 양이 방대하고 업무 프로세스와 각종 규제가 복잡해짐에 따라 의사결정을 내리는 방식에 단순화가 요구됨
- 비정형 룰을 정형화하여 통합관리하고 추론을 통해 효과적인 의사결정을 내릴 수 있는 시스템의 필요성 대두

## Rule Engine 구성요소
- 데이터(fact)에 대한 룰(Rule)을 불러오고 조건(Condition)이 일치할 경우 그에 맞는 작업을 실행

| 요소 | 내용 |
| --- | --- |
| Fact | 데이터로 Rule을 확인할 수 있는 정보 |
| Rule | 주로 If-then 형태로 나타냄. Fact, Condition, Action을 그룹으로 묶어 구성 |
| Condition | Action을 언제 실행할지에 대한 조건 |
| Action | 수행하려는 작업/동작 |

- 추론 엔진 (Interface Engine)
    0. 이해한대로 정리...
    1. Match : 동일 조건 아래 둘 이상의 rule 이 충족될 수 있는 경우 생성
    2. Resolve : Rule의 순서를 관리하며, 하나의 rule을 선택
    3. Execute : 선택된 Rule에 따라 Action을 수행

    - 전방 추론 (Forward Chaining) : 이용 가능한 정보로부터 출발하여 적절한 결론을 찾는 방법
    - 후방 추론 (Backward Chaining) : 목표를 증명하는 증거를 역으로 찾아가는 방법 

<hr>

References
- https://sketchit.tistory.com/entry/Rule-Engine
- https://docs.drools.org/8.44.0.Final/drools-docs/drools/introduction/index.html