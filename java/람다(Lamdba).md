# 람다(Lamdba)

<br>



### 람다식 (Lambda expression)

람다식의 도입으로 인해 자바는 **객체 지향 언어**인 동시에 **함수형 언어**가 되었다

<br>



#### 람다식

- 간단히 말해서 **메소드를 '하나의 식'으로 표현**한 것 

- 람다식은 함수로 간략하면서도 명확한 식으로 표현할 수 있게 해준다

- ##### 익명 함수 anonymous function

  - 메소드를 람다식으로 표현하면 메소드의 이름과 반환값이 없어지므로 쓰는 표현

    ```java
    int[] arr = new int[5];
    Arrays.setAll(arr, (i) -> (int)(Math.random()*5)+1);
    ```

- ##### 람다식 이전의 문제점

  - 모든 메소드는 클래스에 포함되어야 했다 
    -  클래스를 새로 만들어야 한다
    - 객체를 생성해야만 메소드를 호출할 수 있다

  > ###### 람다식은 이 모든 과정 없이 오직 람다식 자체만으로도 이 메소드의 역할을 대신할 수 있다

- **메소드의 매개변수로써 전달**되어 지는 것이 가능 
  - 다른 메소드 매개변수 자리에 람다 선언!
  - 메소드를 변수처럼 다룰 수 있게 되었다

<br>



#### 람다식 작성

###### before

```java
반환타입 메소드이름(매개변수) {
    실행 문장
}
```

###### after

```java
(매개변수) -> { 실행 문장 }
```

<br>

- 반환값이 있는 메소드의 경우, **return 대신 식으로 대체** 가능
- **식의 연산결과가 자동적으로 반환값**이 된다. 단 식의 끝에 `;` 금지!!
- 매개변수 타입은 추론이 가능한 경우 **타입 생략 가능**
- 매개변수가 하나인 경우 괄호 생략 가능, but 타입이 같이 있다면 생략 불가
- 하나밖에 없는 실행문이 return 문일 경우 `;` 금지

<br>



#### 함수형 인터페이스 (Functional Interface)

모든 메소드는 클래스 내에 포함되어야 하는데, 람다식은 어떤 클래스에 포함되어 있을까?

람다식은 메소드보단 **익명 클래스의 객체와 동등**하다 

```java
// 람다식
(int a, int b) -> a>b? a:b;

// 익명 클래스의 객체
new Object() {
    int max(int a, int b) {
        return a>b? a:b;
    }
}

// 두 식은 동등하다
```

:grey_question: 람다식으로 정의된 익명 객체의 메소드를 어떻게 호출할 수 있을까?

참조변수에 람다식을 저장해보자

```java
타입 f = (int a, int b) -> a>b? a:b;		// 참조변수의 타입은 클래스 or 인터페이스 
```

람다식과 동등한 메소드가 정의되어 있어서 참조변수로 익명 객체(람다식)의 메소드를 호출할 수 있다

```java
// 인터페이스 정의
interface MyFunction {
    public abstract int max(int a, int b);
}

// ... 

// 익명함수로 실행
public void main(String[] args) {
    MyFunction f = new Function() {
        public int max(int a, int b) {	// 익명 객체 생성
            return a>b a:b;
        }
    };
    int big = f.max(5, 3);		// 익명 객체의 메소드 호출
}

// 실행을 람다 식으로 대체
public void main(String[] args) {
    MyFunction f = (int a, int b) -> a>b a:b;	// 람다식 대체
    int big = f.max(5, 3);		// 익명 객체의 메소드 호출
}
```

- 이처럼 인터페이스를 구현한 익명 객체를 람다식으로 대체가 가능한 이유는 람다식도 실제로는 익명 객체이고, MyFunction 인터페이스를 구현한 익명 객체의 메소드 max()와 람다식의 매개변수의 타입, 개수, 반환값이 일치하기 때문

> - ###### :heavy_check_mark: 하나의 메소드가 선언된 인터페이스를 정의해서 람다식을 다루는 것은 기존의 자바 규칙들을 어기지 않으면서 자연스럽다 !
>
>   - ###### 인터페이스를 통해 람다식을 다루기로 결정
>
>   - ###### 람다식을 다루기 위한 인터페이스 -> 함수형 인터페이스 (functional interface)

##### 함수형 인터페이스

```java
@FunctionalInterface
interface MyFunction {
    public abstract int max(int a, int b);
}
```

- **제약** : 오직 **하나의 추상 메소드**만 정의되어 있어야한다
  - 람다식 : 인터페이스 == 1:1 연결을 위해
  - static or default 메소드의 개수는 제한이 없다

##### 람다식의 타입과 형변환

함수형 인터페이스로 람다식을 참조할 수 있을 뿐, 람다식의 타입이 함수형 인터페이스 타입과 일치하는 것은 아니다 

- [인터페이스 : 람다식]의 대입 연산자 타입을 일치시키기 위해서는 람다식 형변환 필요

- 람다식은 이름 없을 뿐, 객체임에도 불구하고, 객체로 형변환 X,  **함수형 인터페이스로만 형변환 O**

<br>



#### java.util.function 패키지

java.util.function 패키지는 자수 쓰이는 형식의 메소드를 함수형 인터페이스로 미리 정의해두었다

매번 새로운 함수형 인터페이스를 정의하는 것보다, 가능한 한 이 패키지의 인터페이스를 활용하는 것이 좋다

<img src="C:\Users\kbeey\Documents\workspace-git\today-i-learned\TIL\java\functional-interface.jpg" style="zoom: 33%;" />

- 조건식의 표현에 사용되는 Pre뉴dicate

  - Function의 변형으로, 반환타입이 boolean이라는 것만 다름
  - 조건식을 람다식으로 표현

- ##### 매개변수가 두 개인 함수형 인터페이스

  - 이름 앞에 접두사 'Bi'가 붇는다

  -  ex) BiConsumer\<T, U>, BiPredicate\<T, Y>, BiFunction\<T, U, R>

  - 만일 더 많은 매개변수가 필요하다면 직접 만들어서 사용

    ```java
    // example
    @FunctionalInterface
    interface TriFunction<T, U, V, R> {
        R apply(T t, U u, V v);
    }
    ```

- ##### UnaryOperator와 BinaryOperator

  - Function의 변형으로 **매개변수 타입과 반환 타입이 일치**한다
  - Unary -> 매개변수 1개
  - Binary -> 매개변수 2개

- ##### 기본형을 사용하는 함수형 인터페이스

  - 상단의 함수형 인터페이스는 매개변수와 반환값의 타입이 모두 제네릭 타입이었는데 **기본형 타입의 값을 처리할 때도 래퍼 클래스를 사용**했다 -> 비효율적!
  - 기본형을 사용하는 함수형 인터페이스들 제공
    - example
      - **Double**To**Int**Function : Double 입력, Int 반환 
      - **(X :: NoParam)**To**Int**Function\<T> : 입력 X, Int 반환 
      - **Int**Function\<R> : Int 입력, R 제네릭 타입 출력 
      - Obj**int**Comsumer\<T> : T 제네릭 타입과 Int 두 개 입력, 출력 X

<br>



### 메소드 참조 (method reference)

간결하게 표현 가능한 람다식을 더욱 간결하게 표현할 수 있는 방법

#### 메소드 참조로 람다식 간략화 할 수 있는 경우 

1. ##### 람다식이 하나의 메소드만 호출하는 경우에만 가능

   ###### example 1

   ```java
   // 람다식 표현
   Function<String, Integer> f = (String s) -> Integer.parseInt(s);
   
   // 메소드로 표현
   Integer wrapper(String s) {		// 메소드 이름은 의미 없다
       return Integer.parseInt(s);
   } // -> wrapper 메소드는 별로 하는 일이 없다. 그저 값을 받아서 실행문에 넘겨준다 
   
   // 메소드 참조
   Function<String, Integer> f = Integer::parseInt;
   // 좌 : 제네릭 타입으로부터 힌트   
   // 우 : parseInt 메소드의 선언부로부터 힌트
   ```

   ###### example 2

   ```java
   BiFunction<String, String, Boolean> f = (s1, s2) -> s1.equals(s2);
   // 얻을 수 있는 힌트
   // Bi -> 매개 변수 2개 -> String 2개
   
   // 람다식에서 매개변수들을 제거하고 메소드 참조로 변경할 수 있다
   BiFunction<String, String, Boolean> f = String::equals;		
   // equals 앞에 String을 명시한 이유 -> Boolean을 반환하는 equals 메소드가 다른 클래스에도 존재할 수 있기 때문에 반드시 포함 클래스 명시
   ```

2. ##### 이미 생성된 객체의 메소드를 람다식에서 사용한 경우

   ###### example

   ```java
   MyClass obj = new MyClass();
   Function<String, Boolean> f = (x) -> obj.equals(x);		// 람다식
   Function<String, Boolean> f2 = obj::equals;				// **?
   ```

> ###### 하나의 메소드만 호출하는 람다식은
>
> ###### 	'클래스이름::메소드이름' 또는 '참조변수::메소드이름'으로 바꿀 수 있다

<br>



#### 생성자의 메소드 참조

생성자를 호출하는 람다식도 메소드 참조로 변환할 수 있다

```java
Supplier<MyClass> s = () -> new MyClass();		// 람다식
Supplier<MyClass> s = MyClass::new; 			// 메소드 참조
```

매개변수가 있는 생성자라면, **매개변수의 개수**에 따라 알맞은 **함수형 인터페이스를 사용**하면 된다

```java
Function<Integer, MyClass> f = (i) -> new MyClass(i)	// 람다식
Function<Integer, MyClass> f2 = MyClass::new;			// 메소드 참조

BiFunction<Integer, String, MyClass> bf = (i, s) -> new MyClass(i, s);
BiFunction<Integer, String, MyClass> bf2 = MyClass::new;
```

배열 생성

```java
Function<Integer, int[]> f = x -> new int[x];		// 람다식
Function<Integer, int[]> f2 = int[]::new;			// 메소드 참조
```









