# 스트림(Stream)

<br>



#### 기존의 데이터 처리 방식

- 컬렉션이나 배열에 데이터를 담고 원하는 결과 반환

  - `for`, `Iterator`

- 데이터 소스마다 다른 방식으로 다룸

  ```java
  // List sorted
  Collections.sort();
  
  // array sorted
  Arrays.sort();
  ```

<br>



#### 기존문제점들을 해결 -> 스트림

- 데이터 소스를 추상화
  - 데이터 소스가 **무엇이든 같은 방식으로 다룰 수 있다**
  - 코드의 재사용성이 높아진다
- 데이터를 다루는데 자주 사용되는 메소드들 정의

<br>



#### 기존 vs 스트림 비교

##### 기존

```java
String[] strArr = {"aaa", "bbb", "ccc"};

List<String> strList = Arrays.asList(strArr);
```

##### 스트림 생성

```java
Stream<String> strStream1 = strList.stream();		

Stream<String> strStream2 = Arrays.stream(strArr);		
```

> 스트림을 이용하면 배열이나 컬렉션뿐만 아니라 파일에 저장된 데이터도 모두 같은 방식으로 다룰 수 있다



##### example

데이터를 읽고 정렬해 출력 ( \* 데이터 자체가 정렬되는 것은 아님)

`before`

```java
Arrays.sort(strArr);
Collections.sort(strList);

for (String str : strArr) {
    System.out.println(str);
}
for (String str : strList) {
    System.out.println(str);
}
```

`after`

```
strStream1.sorted().forEach(System.out::println);
strStream2.sorted().forEach(System.out::println);
```

> 간결하고 이해하기 쉽우며 재사용성도 높다

<br>



#### 스트림의 특징

- 데이터 소스를 변경하지 않는다 **read-only**

  - 데이터를 읽기만 할 뿐.만약 필요하다면 정렬된 결과를 컬렉션 or 배열에 담아 반환 가능

    ```java
    // List = 정렬된 결과 반환
    List<String> sortedList = strStream2.sorted().collect(Collectors.toList());
    ```

- 일회용이다

  - 한번 사용하면 닫혀서 다시 사용할 수 없다. 필요하다면 재생성

    ```java
    strStream1.sorted().forEach(System.out::println);
    int numOfStr = strStream1.count();	// ERROR. stream closed
    ```

- 작업을 **내부 반복**으로 처리한다
  - **내부 반복** : 반복문을 메소드의 내부에 숨길 수 있다는 것을 의미
  - `forEach()` : 스트림에 정의된 메소드 중의 하나로 매개변수에 대입된 람다식을 데이터 소스 모든 요소에 적용

<br>



#### 스트림의 연산

- **중간 연산** : **연산결과를 스트림으로 반환**하기 때문에 중간 연산을 연속해서 연결할 수 있다
  - 대표 연산 : `map()`, `flatMap()`
- **최종 연산** : 스트림의 요소를 소모하면서 연산을 수행 (연산 결과가 스트림 X). **단 한번만 연산 가능**
  - 대표 연산 : `reduce()`, `collect()`

<br>



#### 지연된 연산 :heavy_check_mark:

최종 연산이 수행되기 전까지는 중간 연산이 즉각적으로 수행되지 않는다

중간 연산을 호출하는 것은 단지 어떤 작업이 수행되어야하는지를 지정해주는 것일 뿐, 최종 연산이 수행되어야 비로소 스트림의 요소들이 중간 연산을 거쳐 최종 연산에서 소모된다

<br>



#### Stream\<T>

요소의 타입이 T인 스트림. 기본적으로 Stream<T>

오토박싱&언박싱으로 인한 비효율을 줄이기 위해 데이터 소스의 요소를 기본형으로 다루는 스트림 제공

IntStream, LongStream, DoubleStream 제공

<br>



#### 병렬 스트림

- 병렬 처리가 쉽다 -> 스트림으로 데이터를 다룰 때의 장점

- 병렬 스트림 : 내부적으로 이 프레임워크를 이용해서 자동적으로 연산을 병렬로 수행
- 병렬 스트림에 `parallel()` 메소드 호출해서 병렬로 연산을 수행하도록 지시
- 병렬로 처리되지 않게 하려면 `sequential()` 호출
  - \* 모든 스트림은 기본적으로 병렬 스트림이 아니므로 호출할 필요 X. `parallel()`을 호출하는 것을 취소할 때만 사용

<br>



### 스트림 생성

스트림의 소스가 될 수 있는 대상은 배열, 컬렉션, 임의의 수 등 다양하며 ,이 소스들로부터 스트림을 생성 가능

#### 1. 컬렉션

##### in api

```java
Stream<T> Collection.stream()
```

컬렉션 최고 조상인 Collectiondp `stream()` 메소드 정의

##### apply

```java
List<Integer> list = Arrays.asList(1,2,3,4,5);	// 가변인자
Stream<Integer> intStream = list.stream();		// list를 소스로 하는 컬렉션 생성

intStream.forEach(System.out::println);			// 스트림의 모든 요소 출력 (요소 소모)
intStream.forEach(System.out::println);			// 이미 요소가 다 소모되었다 -> 소스를 다시 받자
```

<br>



#### 2. 배열

##### in api

```java
Stream<T> Stream.of(T ... values)
Stream<T> Stream.of(T[])
Stream<T> Arrays.stream(T[])
Stream<T> Arrays.stream(T[] array, int startInclusive, int endExclusive)
    
IntStream IntStream.of(int... values)
```

Stream과 Arrays에 static 메소드로 정의

```java
Stream<String> strStream = Stream.of("a","b","c");		// 가변인자
Stream<String> strStream = Stream.of(new String[]{"a", "b", "c"});
```

<br>



#### 3. 특정 범위의 정수

##### in api

```java
IntStream IntStream.range(int begin, int end)			// end 포함 X
IntStream IntStream.rangeClosed(int begin, int end)		// end 포함 O
```

<br>



#### 4. 임의의 수

##### in api

```java
IntStream ints()
LongStream longs()
DoubleStream doubles()
```

Ramdom 클래스에 포함되는 인스턴스 메소드. 해당 타입의 난수들로 이루어진 스트림을 반환

이 메소드들이 반환하는 스트림은 크기가 정해지지 않은 **'무한 스트림(infinite stream)'**

`limit()`을 같이 사용해서 스트림의 크기를 제한해 주어야 한다

##### apply 1

```java
IntStream intStream = new Random().ints();		// 무한 스트림
intStream.limit(5).forEach(System.out::println);	// 5 limit
```

##### 범위

- ints() : `Integer.MIN_VALUE` ~ `Integer.MAX_VALUE`
- longs() : `Long.MIN_VALUE` ~ `Long.MAX_VALUE`
- doubles() : `0.0` ~ `1.0`

##### apply 2

```java
IntStream ints(int begin, int end)
LongStream longs(long begin, long end)
DoubleStream doubles(double begin, double end)
    
IntStream ints(long streamSize, int begin, int end)
LongStream longs(long streamSize, long begin, long end)
DoubleStream doubles(long streamSize, double begin, double end)
```

지정된 범위(begin, end)의 난수를 발생시키는 스트림을 얻는다. 단, **end는 범위에 포함하지 않는다**

<br>



#### 5. 람다식 - iterate(), generate()

##### in api

```java
static <T> Stream<T> iterate(T seed, UnaryOperator<T> f)
static <T> Stream<T> (Supplier<T> s)
```

- iterate() : 씨앗값(seed)으로 지정된 값부터 시작해서, 람다식 f에 의해 계산된 결과를 다시 seed값으로 계산 (recursive 구조)
- generate() : Supplier\<T> -> 매개변수 없는 람다식 사용

##### :warning:  iterate(), generate()로 인해 생성된 스트림을 기본형 스트림 타입의 참조변수로 다룰 수 없다

```java
// 기본형 스트림 타입
IntStream evenStream = Stream.iterate(0, n->n+2);		// ERROR : 기본형 스프팀 타입 참조변수로 다룰 수 없다
DoubleStream randomStream = Stream.generate(Math::random);		// ERROR
```

##### 굳이 필요하다면 mapToInt() 메소드로 변환

```java
IntStream evenStream = Stream.iterate(0, n->n+2).mapToInt(Integer::valueOf);
Stream<Integer> stream = evenStream.boxed();	// OK. 기본형 스트림 타입으로 변환 성공
```

 iterate(), generate()와 달리 IntStream 타입의 스트림을 Stream\<Integer> 타입으로 변환하려면, boxed()를 사용하면 된다

<br>



#### 6. 파일

`java.nio.file.Files`는 파일을 다루는데 필요한 유용한 메소드들을 제공하는데, list()는 지정된 디렉토리(dir)에 있는 파일의 목록을 소스로 하는 스트림을 생성해서 반환

##### in api

```java
Stream<Path> Files.list(Path dir)
```

<br>



#### 7. 빈 스트림

요소가 하나도 없는 비어있는 스트림을 생성할 수도 있다. 

:rescue_worker_helmet: **스트림에 연산을 수행한 결과가 하나도 없을 때**는 null보다 빈 스트림을 반환하는 것이 낫다

```java
Stream emptyStream = Stream.empty();		// empty()는 빈 스트림을 생성해서 반환
long count = emptyStream.count();			// count의 값(스트림 요소의 갯수)은 0
```

<br>



#### 8. 두 스트림의 연결

Stream의 static 메소드인 concat()을 사용하면, 두 스트림을 하나로 연결할 수 있다.

단, 연결하려는 두 스트림의 요소는 같은 타입이어야 한다.

```java
String[] str1 = {"123", "456", "789"};
String[] str2 = {"ABC", "abc", "DEF"};

Stream<String> strs1 = Stream.of(str1);
Stream<String> strs2 = Stream.of(str2);

// 두 스트림을 하나로 연결
Stream<String> strs3 = Stream.concat(strs1, strs2);
```

<br>



### 스트림의 중간연산

#### 스트림 자르기 - skip(), limit()

스트림의 일부를 잘라낼 때 사용

```java
Stream<T> skip(long n)
Stream<T> limit(long maxSize)
```

\* 기본형 스트림(ex. IntStream) 같은 경우에도 skip(), limit()이 정의되어 있는데, **반환 타입이 기본형 스트림**이라는 점이 다르다

#### 스트림의 요소 걸러내기 - filter(), distinct()

distinct() : 스트림에서 중복된 요소 제거

```java
IntStream intStream = IntStream.of(1,2,2,3,4);
intStream.distinct().forEach(System.out::print);
```

filter() : 주어진 조건 -> 매개변수 Predicate에 맞지 않는 요소를 걸러낸다

```java
IntStream intStream = IntStream.rangeClosed(1, 10);
// filter(Predicate p)
intStream.filter(i -> i%2==0).filter(i -> 1%3==0).forEach(System.out::print);	// filter를 다른 조건과 여러 번 사용할 수 있다
```

#### 정렬 - sorted()

스트림을 정렬

```java
Stream<T> sorted()
Stream<T> sorted(Comparator<? super T> comparator)		// 지정된 Comparator로 스트림을 정렬
```

지정된 Comparator로 스트림을 정렬하거나, Comparator 대신 int값을 반환하는 람다식을 사용하는 것도 가능

\* JDK1.8부터 Comparator 인터페이스에 static 메소드와 디폴트 메소드가 많이 추가되어 정렬이 한결 더 쉬워진다

\<< 메소드 종류 생략 >>

example

```java
// 학생 스트림을 반, 성적, 이름 순으로 정렬하여 출력
studentStream.sorted(Comparator.comparing(Student::getBan)
                    .thenComparing(Student::getTotalScore)
                    .thenComparing(Student::getName)
                    .forEach(System.out::println);
```

#### 변환 - map()

스트림의 요소에 저장된 값 중에서 원하는 필드만 뽑아내거나 특정 형태로 변환해야 할 때가 있다

```java
// 매개변수 T 타입을 R 타입으로 변환하여 반환
Stream<R> map(Function<? super T, ? extends R> mapper)
```

p.827

 

























































