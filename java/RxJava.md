# RxJava

<br>



### Chapter 1 리액티브 프로그래밍

- 데이터 흐름과 전달에 관한 프로그래밍 패러다임

- 명령형(imperative) 프로그래밍과의 비교

  - **명령형 프로그래밍** : 주로 컴퓨터 하드웨어를 대상으로 프로그래머가 작성한 코드를 정해진 절차에 따라 순서대로 실행
  - **리액티브 프로그래밍** : 데이터 흐름을 먼저 정의하고 데이터가 변경되었을 때 연관되는 함수나 수식이 업데이트 되는 방식

- 리액티브 프로그래밍 예시 : **마이크로소프트 엑셀(스프레드 시트)**

  - 각 셀(cell)에 값을 넣거나 혹은 다른 셀을 조합해서 내가 원하는 값을 계산

  > 회사에서 올해 1월부터 12월까지 매출액의 합을 구한다.

  매월 매출액 → 리액티브 프로그래밍의 데이터 소스 연간 매출액 = 1월 매출 + 2월 매출 + 3월 매출 + ... + 12월 매출

  특정 월 매출에 변화가 생겼을 때, 엑셀의 반응은?

  ❌ 변경된 매출액을 다시 가져와 총합을 구한다 ⭕ 매월 매출액으로 지정해놓은 데이터 소스에 변경된 값을 전달

  **결론 전달된 개별 수정 값이 미리 지정해둔 수식을 통해 계산되며 매출액을 갱신**

  명령형 프로그래밍 방식이라면? → 변경이 발생했다는 통지를 받아서 연말 매출액을 새로 계산하는 pull 방식

  리액티브 프로그래밍 방식이라면? → 데이터 소스가 변경된 데이터를 밀어주는 push 방식

<br>



### 자바 언어와 리액티브 프로그래밍

자바 언어와 리액티브 프로그래밍의 관계 정리

- 기존 pull 방식의 프로그래밍 개념을 push 방식의 프로그래밍 개념으로 바꾼다
- 함수형 프로그래밍의 지원을 받는다

우리가 아는 콜백이나 옵저버 패턴을 넘어서 RxJava 기반의 리액티브 프로그래밍이 되려면 함수형 프로그래밍이 필요.

함수형 프로그래밍

- 함수형 프로그래밍 자체의 side effect는 없다. 다만 콜백, 옵저버 패턴이 스레드에 안전하지 않은 이유는 같은 자원에 여러 스레드가 경쟁 조건에 빠지게 되었을 때, 예측할 수 없는 잘못된 결과가 나오기 때문(부작용)
- 함수형 프로그래밍은 부작용 없는 순수 함수(pure function)를 지향 → 따라서 멀티 스레드 환경에서도 안전

### 리액티브 프로그래밍

- 데이터 흐름과 변화의 전달에 관한 프로그래밍 패러다임

- 주변의 환경과 끊임없이 상호작용을 하는 데 프로그램이 주도하는 것이 아니라 **환경이 변하면 이벤트를 받아 동작**

- 애플리케이션에서는 리액티브 프로그래밍을 하려면 누군가 리액티브 프로그래밍을 할 수 있는 기반 시설 제공 → 

  데이터 소스를 정의할 수 있고 그것의 변경 사항을 받아서 프로그램에 알려줄 존재 필요

  - .NET 환경에서는 이를 리액티브 확장( Reactive Extensions)이라 하고
  - JVM 위의 자바 언어로 구현해놓은 라이브러리가 RxJava이다

<br>



### RxJava 개발 이유

넷플릭스는 2013년 2월에 RxJava를 소개했고, 서비스 성능 개선 프로젝트를 진행 중이었다.

**넷플릭스가 RxJava를 만들게 된 핵심적인 이유**

- 동시성을 적극적으로 끌어안을 필요가 있다 (Embrace Concurrency)
- 자바 Future를 조합하기 어렵다는 점을 해결해야 한다 (Java Futures are Expensive to Compose)
- 콜백 방식의 문제점을 개선해야 한다(Callbacks Have Their Own Problems)

RxJava는

- 동시성 처리를 위해 클라이언트의 요청을 처리하는 서비스 계층에서 동시성을 적극적으로 반영
- 2013년도 당시엔 JAVA 8 버전이 릴리즈되기 전이라 JAVA 8 제공 CompletableFuture 같은 클래스가 제공되지 않았다 → 비동기 흐름을 조합할 방법이 거의 없었다
- RxJava에서는 이를 해결하려고 비동기 흐름을 조합할 수 있는 방법 제공
  - RxJava에서는 조합하는 실행 단위를 리액티브 연산자(Operators)라고 한다
- 콜백이 콜백을 부르는 콜백 지옥 상황이 코드의 가독성을 떨어뜨리고 문재 발생 시 디버깅을 어렵게 만들 수 있다 → 콜백을 사용하지 않는 방향으로 설계해 이를 해결

리액티브 프로그래밍은 비동기 연산을 필터링, 변환, 조합해 위 세 가지 핵심 이유를 해결할 수 있다

RxJava는 Observable과 같은 데이터 소스와 map(), filter(), reduce()와 같은 리액티브 연산자를 제공

example

```java
import io.reactivex.Observable;

public class Example {
    public static void main(String[] args) {
        Example demo = new Example();
        demo.emit();
    }

    public void emit() {
        Observable.just("Hello", "RxJava 2")
                .subscribe(System.out::println);
    }
}
```

- `io.reactivex` : RxJava 2의 기본 패키지 이름
- `Observable` 클래스 : 데이터의 변화가 발생하는 데이터 소스 . 리액티브 프로그래밍은 Observable에서 시작한다
- `just()` : 가장 단순한 Observable 선언 방식
- `subscribe()` : Observable을 구독. Observable은 `subscribe()`를 호출해야 비로소 변화한 데이터를 구독자에게 발행
- `emit()` : 직접 만든 메소드이지만, RxJava 개발 문서에서는 Observable이 subscribe() 함수를 호출한 구독자에게 데이터를 발행하는 것을 표현하는 용어로 자주 사용

<br>



### RxJava 접근 방법

자바는 전통적인 스레드 기반의 프로그래밍이다. 하지만 RxJava는 비동기 프로그래밍을 위한 라이브러리라서 개념과 접근 방식이 다르다.

------

전통적인 스레드 기반 프로그래밍은 다수의 스레드를 활용하는 경우 예상치 못한 문제가 발생하고 디버깅이 어려웠다

→

RxJava는 함수형 프로그래밍 기법을 도입하여 함수형 프로그래밍은 부수 효과가 없는 순수 함수를 지향하므로 스레드에 안전

자바는 함수형 언어가 아니므로 RxJava 라이브러리는 **순수 함수로 작성된 리액티브 연산자**를 제공

'함수형 프로그래밍' 방식으로 '스레드에 안전한 비동기 프로그램' 작성 가능

------

**권장 학습 순서**

- Observable 클래스를 명확하게 이해 → `Hot Observable & Cold Observable` 개념 중요
- `map()`, `filter()`, `reduce()`, `flatMap()` 함수의 사용법
- 생성 연산자, 결합 연산자, 변환 연산자 등 카테고리 별 주요 함수 공부
- 스케줄러의 의미 파악, `subscribeOn()`과 `observeOn()` 함수의 차이 구분
- 그 밖의 디버깅, 흐름 제어 함수 익히기

<br>



### 마블 다이어그램 보는 법

RxJava를 이해하는 핵심 도구

`map()`, `flatMap()` 함수 등의 수많은 리액티브 연산자들을 이해하는 데 큰 도움을 준다

------

<br>



<br>



### Chapter 2 Observable 처음 만들기

Observable :  데이터 흐름에 맞게 알림을 보내 구독자가 데이터를 처리할 수 있도록 한다

------

**RxJava 1.x**

- 데이터 소스를 Observable과 Single 클래스로 구성

**RxJava 2.x**

- 여전히 두 클래스가 존재하지만 Observable 클래스는 상황에 맞게 세분화해 각각 Observable, Maybe, Flowable 클래스로 구분해 사용
- Maybe 클래스 : reduce() 함수나 firstElement() 함수와 같이 데이터가 발행될 수 있거나 혹은 발행되지 않고도 완료되는 경우
- Flowable 클래스 : Observable에서 데이터가 발행되는 속도가 구독자가 처리하는 속도보다 현저하게 빠른 경우 발생하는 배압(back pressure) 이슈에 대응하는 기능을 추가로 제공
  - Observable에 포함되어 있었으나 분리

![](C:\Users\kbeey\Documents\workspace-git\today-i-learned\TIL\java\observable.jpg)

<br>



### Observable 클래스

Observable은 옵저버 패턴을 구현한다

**옵저버 패턴**

- 객체의 상태 편화를 관찰하는 관찰자 목록을 객체에 등록
- 상태 변화가 있을 때마다 메소드를 호출하여 객체가 직접 목록의 각 옵저버에게 변화를 알려준다
- 라이프 사이클은 존재하지 않으며 보통 단일 함수를 통해 변화만 알림

RxJava의 Observable은 세 가지의 **알림**을 구독자에게 전달

- **onNext** : Observable이 데이터의 발행을 알림. 기존의 옵저버 패턴과 동일
- **onComplete** : 모든 데이터의 발행을 완료했음을 알림. 단 한 번만 발생. 이벤트 발생 후에는 더이상 onNext 이벤트가 발생해선 안 된다
- **onError** : Observable에서 어떤 이유로 에러가 발생했음을 알림. 이벤트 발생 후 onNext, onComplete 이벤트가 발생해선 안된다

Observable 클래스에는 Observable을 생성하는 팩토리 함수, 중간 결과를 처리하는 함수, 디버그 및 예외 처리 함수가 모두 포함되어 있다.

Observable을 생성할 때는 직접 인스턴스를 만들지 않고 **정적 팩토리 함수**를 호출

[Observable의 팩토리 함수 구분](https://www.notion.so/08a5b61eba8e4bf89b329248075f4130)

------

<br>



### just() 함수

- 데이터를 발행하는 가장 쉬운 방법 → 기존의 자료구조 사용
- 인자로 넣은 데이터를 차례로 발행하려고 Observable 생성 (→ 실제 데이터 발행은 subscribe() 함수를 호출해야 시작)
- 한 개의 값을 넣을 수도 있고 인자로 최대 10개의 값까지 넣을 수 있다. **타입은 다 통일**

```java
public static <T> Observable<T> just(T item, ... /*최대 10개*/)
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5705bfc7-a864-4302-8ba1-e2e897746b89/Untitled.png)

```java
import io.reactivex.Observable;

public class Example {
    public static void main(String[] args) {
        Example demo = new Example();
        demo.emit();
    }

    public void emit() {
        Observable.just(1,2,3,4,5,6)
                .subscribe(System.out::println);
    }
}
```

result

```java
1
2
3
4
5
6
```

<br>



### subscribe() 함수와 Disposable 객체

- `suibcribe()` : 내가 동작시키기 원하는 것을 **사전에 정의**, ****실제 실행되는 시점을 조절 가능
- Observable은 just() 등의 팩토리 함수로 데이터 흐름을 정의한 후 subscribe() 함수를 호출해야 실제 데이터를 발행

```java
public interface Disposable {
    void dispose();
    boolean isDisposed();
}
```

> **Disposable 인터페이스의 함수**

dispose()는 Observable에게 더 이상 데이터를 발행하지 않도록 구독을 해지하는 함수

Observable 계약에 따르면 Observable이 **onComplete 알림을 보냈을 때 자동으로 dispose()를 호출**해 Observable과 구독자의 관계를 끊는다

따라서 onComplete 이벤트가 정상적으로 발생했다면 구독자가 별도로 dispose()를 호출할 필요가 없다. ➕ `isDisposed()` : Observable이 데이터를 발행하지 않는지(구독을 해지했는지) 확인하는 함수

```java
Observable<String> source = Observable.just("RED", "GREEN", "YELLOW");

Disposable d = source.subscribe(    // 각 이벤트에 맞춰 로그 출력
      v -> System.out.println("onNext() : value : "+v),
      err -> System.out.println("onError() : err : "+err.getMessage()),
      () -> System.out.println("onComplete()")
);

System.out.println("isDisposed() : "+d.isDisposed());
```

<br>

### create() 함수

데이터를 인자로 넣으면 자동으로 알림 이벤트가 발생하는 just()와 달리,

create() 함수는 onNext, onComplete, onError 같은 알림을 개발자가 직접 호출해야 한다

→ *라이브러리가 무언가를 해준다기보다 개발자가 무언가를 직접 하는 느낌이 강한 함수*

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/13f55b0f-2cf9-4e83-bfc3-3e3590a6f68b/Untitled.png)

- **구독자에게 데이터를 발행**하려면 **onNext() 함수를 호출**해야 하며, **모든 데이터를 발행한 후**에는 **반드시 onComplete() 함수를 호출**해야 한다

```java
Observable<Integer> source = Observable.create(
    (ObservableEmitter<Integer> emitter) -> {       // 개발자가 직접 호출
    emitter.onNext(100);
    emitter.onNext(200);
    emitter.onNext(300);
    emitter.onComplete();
});

source.subscribe(System.out::println);
```

<br>



### ➕ More

- Observable.create()만 호출하고 subscribe() 함수를 호출하지 않는다면?

  ```java
  Observable<Integer> source = Observable.create(
      (ObservableEmitter<Integer> emitter) -> {
      emitter.onNext(100);
      emitter.onNext(200);
      emitter.onNext(300);
      emitter.onComplete();
  });
  ```

  → 실행해보면 아무것도 출력되지 않는다. subscribe() 함수를 호출하지 않았기 때문

- subscribe() 함수를 변경

  ```java
  Observable<Integer> source = Observable.create(
      (ObservableEmitter<Integer> emitter) -> {
      emitter.onNext(100);
      emitter.onNext(200);
      emitter.onNext(300);
      emitter.onComplete();
  });
  
  // 람다식 사용
  source.subscribe(data -> System.out.println("Result : "+data));     // 데이터 발행
  ```

  > if `source.subscribe()` 괄호 안 인자를 **람다식**이 아닌 **익명 객체**로 표현했다면?

  ```java
  source.subscribe(new Consumer<Integer>() {
      @Override
      public void accept(Integer data) throws Exception {
          System.out.println("Result : "+data);
      }
  });   
  // subscribe의 원형을 확인하고 Consumer<T>를 확인해야 하며 
  // Consumer<T> 클래스의 메소드를 매번 입력 해주어야 하므로 번거롭다
  ```

  ### ⚠️ Observable.create() 주의사항

  RxJava의 javadoc에 따르면 create()는 RxJava에 익숙한 사용자만 활용하도록 권고

  사실 create()를 사용하지 않고 다른 팩토리 함수를 활용하면 같은 효과를 낼 수 있기 때문

  그럼에도 불구하고 사용해야 한다면? **아래 사항 확인**

  - Observable이 구독 해지(dispose)되었을 때 등록된 콜백을 모두 해제해야 한다
    - 그렇지 않으면 잠재적으로 메모리 누수(memory leak)가 발생
  - 구독자가 구독하는 동안에만 onNext와 onComplete 이벤트를 호출해야 합니다
  - 에러가 발생했을 때는 오직 onError 이벤트로만 에러를 전달해야 합니다
  - 배압(back pressure)을 직접 처리해야 합니다

<br>



### fromArray() 함수

just()나 create()는 단일 데이터만 다뤘다. 그렇다면 **단일 데이터가 아닐 때**는? → **fromXXX() 계열 함수 사용**

RxJava 1.x 버전에서는 from() & fromCallable() 함수로 모든 데이터를 처리하다가,

RxJava 2에서는 from() 함수를 세분화했다.

배열에 들어 있는 데이터를 처리할 때는 fromArray() 함수 활용

```java
Integer[] arr = {100, 200, 300};
Observable<Integer> source = Observable.fromArray(arr);
source.subscribe(System.out::println);
```

result

```java
100
200
300
```