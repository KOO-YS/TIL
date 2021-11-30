# Java Enum 

<br>

### Enum

- 관련 있는 상수의 컬렉션으로 이루어진 특별한 타입 클래스

- 값이 고정되어 있다 -> 상수(constant)

- 간단한 사용 방법

    ```java
    public enum 과일 {
        // , 로 구분하며 마지막 상수 선언 후 세미콜론을 붙인다
        사과(1, 1000), 포도(2, 1500), 바나나(3, 4000), 샤인머스켓(4, 10000);
    
        // 필드 -> 특정 데이터와 연결
        private final int 일련번호;
        private final int 가격;
    
        // 생성자
        과일(int 일련번호, int 가격) {
            this.일련번호 = 일련번호;
            this.가격 = 가격;
        }
    
        // .. 기타 메소드
    }
    ```

<br>



#### 열거 타입(Enum)의 특징

- 열거 타입 자체는 **클래스**이며, **"상수 하나당 자신의 인스턴스를 만들어"** public static final 필드로 공개한다 

- 열거 타입 상수 각각을 **특정 데이터와 연결지으려면** 생성자에서 데이터를 받아 인스턴스 **필드에 저장**하면 된다
- 열거 타입은 근본적으로 불변 -> 모든 필드는 final이어야 한다
  - 필드를 public으로 선언해도 되지만, private으로 두고 별도의 public 접근자(getter)를 두는 게 낫다
- 컴파일 타임 타입 안전성을 제공 
  - example : `과일` enum 타입을 매개변수로 받는 메소드가 있다면, 건네받는 참조는 `과일` 타입 중 하나임이 확실 -> 다른 값을 넣는다면 컴파일 에러 
- 이미 각 인스턴스만을 위한 **"이름 공간"**이 있기 때문에 name 필드를 추가할 필요가 없다

<br>



> #### :baby: 얻을 수 있는 장점
>
> - 코드가 단순해진다
> - 인스턴스 생성과 상속을 방지한다
> - 구현 의도가 분명해진다
> - 인스턴스 비교에  `==` 연산자를 사용할 수 있다



<br>



### Enum과 메모리 구조

- enum은 각각 내부적으로 `public static final`이다
  - static (정적 필드) : 각각의 상수는 클래스 로더가 클래스를 로딩해서 메소드 메모리 영역에 적재된다.  
    - 메모리에 한 번 할당되고 종료될 때 해제가 된다

<br>



### :heavy_check_mark: enum은 new 생성자를 사용해서 새 인스턴스를 만들어낼 수 없다

> ###### new 생성자를 사용하는 example :computer: 
>
> #### MyClass mine = new MyClass();
>
> [자료형] [참조값]  = [인스턴스 생성 & 메모리 할당] [생성자 호출]

- MyClass 라는 타입으로 mine 객체를 생성
- new를 선언해 해당 객체를 Heap 영역에 할당 

---

##### 참고

- https://stackoverflow.com/questions/443980/why-cant-enums-constructor-access-static-fields/35319703

- https://docs.oracle.com/javase/specs/jls/se7/html/jls-8.html#jls-8.9

<br>



### Enum API

##### values()

- Enum 클래스가 가지고 있는 모든 상수 값을 배열의 형태로 리턴
- String 배열 :x: 
- 인스턴스 배열 :o:

##### valueOf(str)

- String을 인자로 받아서 일치하는 이름을 가진  enum 인스턴스 반환
- String이 아닌 인스턴스 반환

##### ordinal()

- Enum 클래스 내부 인스턴스들의 index(from 0~) 반환  

<br>



---

### :heavy_plus_sign: more 

### -> [effective java item 34](https://github.com/KOO-YS/effective-java/wiki/item-34)

