# Smallrye Mutiny

<br>



## Uni

- **[하나의 아이템 or 실패 이벤트]** 둘 중 하나만을 발생시키는 스트림

  - *아이템은 `null`이 될 수 있다.  이 경우를 위해 특정 메소드를 제공*

- uni 자체 인스턴스를 만들 일은 거의 없다. 대신에 `Unis`를 제공하는 Mutiny API을 공개하는 반응형 클라이언트를 사용 →?

- 일반적으로 HTTP 요청 등의 원격 프로시저 호출같이  비동기적인 액션을 수행하기 좋다

- 생성, 변환, Uni 시퀀스 조합 등 여러 연산을 제공한다

- EXAMPLE OF PIPELINE USING UNI

  ```java
  Uni.createFrom().item(1)
          .onItem().transform(i -> i+" *** ")
  				.onItem().delayIt().by(Duration.ofMillis(100))
          .subscribe().with(System.out::println);
  ```

<br>



https://smallrye.io/smallrye-mutiny/getting-started/creating-unis

```java
@Test
public void test() {
		 System.out.println("Example of pipeline using uni");
     Uni.createFrom().item(1)
              .onItem().transform(i -> i+" *** ")
//                .onItem().delayIt().by(Duration.ofMillis(100))
              .subscribe().with(System.out::println);

      System.out.println();

      System.out.println("Subscribing to a Uni");
      Uni<Integer> uni = Uni.createFrom().item(1);
      Cancellable cancellable = uni.subscribe().with(
                                      item -> System.out.println("item "+item),
                                      failure -> System.out.println("Failed with "+failure)
                                  );
      AtomicInteger count = new AtomicInteger();
      Uni<Integer> uni2 = Uni.createFrom().item(() -> count.getAndIncrement());
      uni2.onItem().transform(i -> "Next "+ i)
              .subscribe().with(System.out::println);

      System.out.println();
      System.out.println("Creating failing Unis");

      Uni<Integer> failed1 = Uni.createFrom().failure(new Exception("boom"));

      // 모든 subscriber들에게 supplier를 전달한다
      Uni<Integer> failed2 = Uni.createFrom().failure(() -> new Exception("boom"));

      System.out.println();
      System.out.println("Creating uni<void>");
      // 연산이 결과를 생산하지 않더라도 연산이 끝났음을 나타내는 방법이 필요하다
      Uni<Void> uni3 = Uni.createFrom().nullItem();

      System.out.println();
      System.out.println("Creating Unis using an emitter");
      // 콜백 베이스 API와 함께 사용할 때 유용
      Uni<String> uni4 = Uni.createFrom().emitter(em -> {
          String result = "test 결과";
          em.complete(result);
      });

      System.out.println();
      System.out.println("Creating Unis from a CompletionStage");
      CompletionStage stage = uni4.subscribe().asCompletionStage();
      Uni<String> uni5 = Uni.createFrom().completionStage(stage);

}
```

<br>

<br>





## Multi

- **[0개, 1개, n개 ~ 무한개의 아이템]**를 발생시키는 스트림

  - `0 ... n` 개의 아이템 이벤트
  - 실패 이벤트
    - 실패 이벤트는 더이상의 아이템 이벤트를 발생시킬 수 없다
  - 유한한 단위의 스트림을 위한 completion 이벤트

- Uni와 마찬가지로 인스턴스를 직접 생성할 일은 거의 없다

- 생성, 변환, Uni 시퀀스 조합 등 여러 연산을 제공한다]

- 기본적으로 **지연(lazy) 처리**가 되며, **연산 실행을 위해선** 반드시 **subscribe**를 해야 한다

- EXAMPLE OF PIPELINE USING MULTI

  ```java
  Multi.createFrom().items(1,2,3,4,5)
          .onItem().transform(i -> i*2)
          .select().first(3)
          .onFailure().recoverWithItem(0)
          .subscribe().with(item -> System.out.println("next : "+item));
  ```

<br>



https://smallrye.io/smallrye-mutiny/getting-started/creating-multis

```java
public void test() {
    Multi.createFrom().items(1,2,3,4,5)
            .onItem().transform(i -> i*2)
            .select().first(3)
            .onFailure().recoverWithItem(0)
            .subscribe().with(item -> System.out.println("next : "+item));

    System.out.println();
    /* WARNING
    * subscribe 하지 않으면,아무것도 발생하지 않는다는 것을 명심
    * Multi를 subscribing할 때, 발생하는 이벤트의 콜백을 받을 수 있다
    *
    * - 정상 실행 아이템만,
    * - 정상 실행 아이템과 실패 아이템,
    * - 등 아이템 개별 콜백을 받아 처리할 수 있다
    * */
    System.out.println("Creating Multi from items");
    Multi<Integer> multiFromItems = Multi.createFrom().items(1,2,3,4);
    Multi<Integer> multiFromIterable = Multi.createFrom().iterable(Arrays.asList(1,2,3,4,5));

    // AtomicInteger : 멀티스레드 환경에서 동시성을 보장 (CAScompare and swap)를 이용해서 동시성 보장
    AtomicInteger counter = new AtomicInteger();
    Multi<Integer> multi = Multi.createFrom().items(
            () -> IntStream.range(counter.getAndIncrement(), counter.get()*2).boxed()
    );

    System.out.println();
    System.out.println("Creating failing Multis");
    Multi<Integer> failed1 = Multi.createFrom().failure(new Exception("boom"));
    // Pass a supplier called for every subscriber
    Multi<Integer> failed2 = Multi.createFrom().failure(() -> new Exception("boom"));
    failed2.subscribe().with(
            item -> System.out.println("ITEM SUB"),
            failed -> System.out.println("FAIL : "+failed.getMessage()),
            () -> System.out.println("COMPLETED")
    );

    System.out.println();
    System.out.println("Creating empty Multis");
    // Uni와는 다르게 Multi 스트림은 null 아이템을 보내지 않는다
    Multi<String> multi2 = Multi.createFrom().empty();

    System.out.println();
    System.out.println("Creating Multis using an emitter");
    // callback API에
    Multi<Integer> multi3 = Multi.createFrom().emitter(em -> {
        em.emit(1);
        em.emit(2);
        em.emit(3);
        em.complete();
    });

    System.out.println("Creating Multis from ticks");
    Multi<Long> tick1 = Multi.createFrom().ticks().every(Duration.ofMillis(100))
            .onItem().transform(i -> i*1000);
    Multi<Long> tick2 = Multi.createFrom().ticks().every(Duration.ofMillis(50));

    Cancellable cancellable = Multi.createBy().merging().streams(tick1, tick2)
            .subscribe().with(i -> System.out.println("tok "+i));
}
```

