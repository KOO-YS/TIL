# what is Kafka
<br>

```
LinkedIn에서 실시간 데이터를 관리하기 위해 개발한 오픈소스 데이터 스트리밍 플랫폼
```
<br>

## Kafka
 - 데이터 스트림의 publish & subscribe
 - Fault tolerant system로써 사용 
    > Fault tolerant system(결함 감내 시스템) : 시스템을 구성하는 부품의 일부에서 결함(fault) 또는 고장(failure)이 발생하여도 정상적 혹은 부분적으로 기능을 수행할 수 있는 시스템
- 여러 다른 서버들의 로그 파티션이 카프카에 복제
- 스트리임 데이터를 저장, 읽기, 분석
- 메시징, 웹사이트 활동 트래킹, 로그 추적 등에 이용
- 카프카도 데이터베이스로 사용될 수 있지만, 데이터 모델이나 인덱스를 가지고 있진 않다
---
실시간 데이터 스트림, 빅데이터 수집, 실시간 분석을 위해 사용된다.
내구성을 제공하기 위해 인메모리 마이크로서비스와 함께 사용된다. 
<br>

## Kafka의 장점 
- 높은 처리량 : 빠른 속도로 생겨나는 수많은 데이터를 이례적으로 쉽게 관리할 수 있다
- 낮은 지연 : 고용량 데이터 생성을 다룰 수 있는 낮은 지연
- 결함 감내 : 클러스터에 구축된 노드에 의해 제한된 자체 기능이 있다
- 내구성 : 내구성이 좋아 메시지 손실을 최소화한다
<br>

---
#### Referense
- https://www.redhat.com/ko/topics/integration/what-is-apache-kafka
- https://www.educba.com/what-is-kafka/