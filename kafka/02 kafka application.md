# Kafka application
<br>

##### Keyword
`fast`, `fault-tolerant`, `scalable`, `distributed messaging system`
producer(메시지를 생성하는 쪽)와 consumer(메시지를 받는 쪽) 사이의 커뮤니케이션
<br>

### Kafka의 기능
- 데이터의 publish & subscribe
- 생성된 순서로 데이터를 효과적으로 저장
- real-time(실시간) / on-the-fly processing(즉각 처리) 데이터
<br>

### Kafka의 주 사용방식
- **Messaging**
    - 다른 메시지큐에 비교해서 더 높은 처리량과 내장 파티션 용도, 복제, 결함 감내 등의 특징을 가지고 더 큰 스케일의 처리를 하는 메시징 시스템을 만들 수 있다
- **WebSite Activity Tracking**
    - 사용자 활동을 추적하고 실시간 모니터링과 분석
    - 활동 추적은 방대한 양의 데이터를 생성하고 데이터 손실 없이 원하는 장소에 이동되어야 한다
- **Log Aggregation**
    - 로그 수집 : 서로 다른 서버들로부터 로그 파일을 한 곳에 수집하고 합치는 과정

<br>

---
#### Referense
- https://www.educba.com/kafka-applications/