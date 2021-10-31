# Redis

<br>



### Redis  

( **RE**mote **DI**ctionary **S**erver )

- 공통으로 사용되는 데이터는 레디스를 이용하여 캐시로 저장해 두면서 리소스를 효율적으로 이용할 수 있다
  - **캐시** : 한 번 읽어온 데이터를 임의의 공간에 저장하여 다음에 읽을 때는 빠르게 결과 값을 받을 수 있도록 도와주는 공간
- In-Memory 데이터베이스 -> 모든 데이터를 메모리에 저장하고 조회
  - 메모리 접근이 디스크 접근보다 빠르기 때문에, 기존의 RDBMS보다 훨씬 빠르다
- 다양한 자료구조를 지원하며 Key-Value 형태로 저장한다
  - String, Bitmaop, Hash, List, Set, Sorted Set에 더해 Stream 등의 자료형도 지원한다
  - 다양하게 제공하여 개발의 편의성을 높혀준다
- 트랜잭션 문제에도 유용
  - 싱글 스레드로 동작하는 서버의 모든 자료 구조가 원자성을 띄고 있기 때문에 데이터의 정합성을 보장하기 쉽다

외부의 Collections을 잘 이용하는 것만으로 개발 시간 단축이 가능하고, 생각하지 못한 여러가지 문제를 줄여줄 수 있다 -> 비즈니스 로직에만 집중 가능

<br>



### Redis의 Collection


> ##### 레디스 접속
>
>
> ```
> /data # 
> /data # redis-cli -p 6432
> 127.0.0.1:6432>
> ```

##### String

```
# 간단한 예시
127.0.0.1:6432> set hello world
OK
127.0.0.1:6432> get hello
"world"
127.0.0.1:6432>
```

- 단순한 키-값 매핑 구조

- 모든 종류의 문자열을 저장

- JPEG, HTML fragment 캐시 용도로 자주 사용

- 저장 가능한 최대 사이즈 : 512MB

- 다양한 기능 제공

  ```
  127.0.0.1:6432> set counter 100 # 정수로 파싱
  OK
  127.0.0.1:6432> incr counter  # 증가
  (integer) 101
  127.0.0.1:6432>
  ```

  ```
  127.0.0.1:6432> GETSET mycounter "0"
  "1"
  127.0.0.1:6432> GETSET mycounter "1"
  "0"
  127.0.0.1:6432> get mycounter
  "1"
  127.0.0.1:6432> get mycounter
  "1"
  127.0.0.1:6432> set mycounter "5"
  OK
  127.0.0.1:6432> get mycounter
  "5"
  127.0.0.1:6432> getset mycounter "05"
  "5"
  127.0.0.1:6432> get mycounter
  "05"

#### List

- Array 형식의 데이터 구조
- 처음과 끝에 데이터를 넣고 빼는 것은 속도가 빠르지만 중간에 데이터를 삽입할 때는 어려움이 있다

#### Set

- 순서가 없는 String 데이터 집합. 중복 X (중복된다면 하나로 처리)

#### Sorted Set

- 순서가 있는 String 데이터 집합

#### Hash

- 키-값의 구조를 여러 개 가진 Object 타입을 저장하기 좋은 구조

<br>



### Redis의 특징

- Single Thread
- NoSQL & Cache 솔루션이며 메모리 기반으로 구성
  - 인메모리 캐시 : 캐시 방식을 통해 DB Read 부하를 감소
- 메모리의 파편화가 발생하기 쉽다





<br>



> ##### 참고 사이트
>
> - https://redis.com/
> - https://meetup.toast.com/posts/224
> - https://brunch.co.kr/@jehovah/20











