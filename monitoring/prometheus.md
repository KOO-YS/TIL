# Prometheus

메트릭 수집, 시각화, 알림, 서비스 디스커버리 기능을 모두 제공하는 오픈소스 모니터링 시스템

> **metric**
> - 시스템 서비스 및 성능, 상태를 모니터링하는 지표
> - 시간에 따른 추이를 추적할 가치가 있는 데이터 (시계열 데이터)


### Prometheus의 주요 기능

- pull 방식으로 메트릭 수집
- PromQL을 활용하여 저장된 시계열을 쿼리 및 집계
- 서비스 디스커버리
    > **Service Discovery**
    > - MSA 분산환경의 서버 정보가 동적으로 변경되는 일이 잦아짐
    > - 수동으로 정보 하나하나 확인할 수 없기에 클라우드 환경에서는 서비스 클라이언트가 서비스를 호출할 때, 서비스의 위치를 알아낼 수 있는 기능이 바로 Service Discovery 
    > - 서비스를 등록하고 등록된 서비스의 목록 반환
    > - 등록된 서비스들의 헬스체크, 서비스 가능 목록 리턴, 서비스 간 부하 분산 비율 조정 등
    
- 데이터 시각화 with Grafana
- alertmanager를 통한 실시간 경고

### Prometheus flow
- Prometheus는 메트릭을 Pushgateway로부터 pulling 해온다
    - pushgateway
        - 애플리케이션의 메트릭을 전달받음
        - proxy forwarding을 통해 접근할 수 없는 곳에 데이터가 존재하는 경우 활용
- prometheus 메인서버에 메트릭 데이터를 수집, 저장
    - 내부 로직
        - Retrieval, TSDB(Time-series DB), HTTP Server






https://cumulus.tistory.com/86
https://gurumee92.tistory.com/220