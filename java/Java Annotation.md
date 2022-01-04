# Java Annotation

<br>



#### Annotation

- JAVA 5부터 추가된 기능
- 프로그램의 소스코드 안에 다른 프로그램을 위한 정보를 미리 약속된 형식으로 포함시킨 것
- 주석처럼 프로그래밍 언어에 영향을 미치지 않으면서도 다른 프로그램에게 유용한 정보를 제공할 수 있다

> 자바 개발자들은 
> 소스코드에 대한 문서를 별도로 두기보다는,
> **소스코드와 문서를 하나의 파일로 관리하는 것**을 선호
>
> <br>
>
> ##### HOW?
>
> - 소스코드 주석 `/** ~ */` 
>   - 소스코드에 대한 정보를 저장, 소스코드의 주석으로부터 HTML 문서를 생성해내는 프로그램(javadoc)을 만들어서 사용
>
> - 소스 코드
>
> (ex) Annotation 인터페이스의 소스코드의 일부
>
> ```java
> package java.lang.annotation;
> 
> /**
>  * The common interface extended by all annotation types.  Note that an
>  * interface that manually extends this one does <i>not</i> define
>  * an annotation type.  Also note that this interface does not itself
>  * define an annotation type.
>  *
>  * More information about annotation types can be found in section 9.6 of
>  * <cite>The Java&trade; Language Specification</cite>.
>  *
>  * The {@link java.lang.reflect.AnnotatedElement} interface discusses
>  * compatibility concerns when evolving an annotation type from being
>  * non-repeatable to being repeatable.
>  *
>  * @author  Josh Bloch
>  * @since   1.5
>  */
> public interface Annotation {
> 	...
> }
> ```
>
> 주석 안에 `@`이 붙은 태그를 javadoc.exe 프로그램을 이용해 문서 작성을 하는데, 
>
> 이 기능을 응용하여 만든 것이 바로 **Annotation**

<br>



### annotation의 종류

- 표준 어노테이션
  - ex : `@Override`, `@Deprecated`, ...
  - ex : [ `@Target`, `@Documented`, `@Retention`, ...] -> 메타 어노테이션

- ##### 메타 어노테이션 :tiger: 

  - 어노테이션을 위한 어노테이션
  - 어노테이션을 정의할 때 어노테이션의 적용대상(target)이나 유지기간(retention) 등을 지정하는데 사용

---

#### 메타 어노테이션 (Meta Annotation)의 종류

- ##### @Target

  - 어노테이션이 적용가능한 **대상**을 지정

  - 적용 대상 종류

    |    대상 타입    |                 의미                  |
    | :-------------: | :-----------------------------------: |
    | ANNOTATION_TYPE |              어노테이션               |
    |   CONSTRUCTOR   |                생성자                 |
    |      FIELD      |  필드 (멤버변수, 기본형, enum 상수)   |
    | LOCAL_VARIABLE  |               지역변수                |
    |     METHOD      |                메소드                 |
    |     PACKAGE     |                패키지                 |
    |    PARAMETER    |               매개 변수               |
    |      TYPE       |    타입 (클래스, 인터페이스, enum)    |
    | TYPE_PARAMETER  |             타입 매개변수             |
    |    TYPE_USE     | 타입이 사용되는 모든 곳 (참조형 변수) |
    
  - 예시

    ```java
    @Target({FIELD, TYPE, TYPE_USE})
    public @interface MyAnnotation { ... }
    
    @MyAnnotation	// 적용대상 : TYPE
    class MyClass {
        
        @MyAnnotation	// 적용대상 : FIELD
        int i;
        
        @MyAnnotation	// 적용대상 : TYPE_USE
        MyClass myClass;
    }
    ```
  
    
  
- ##### @Retetion

  - 어노테이션이 유지되는 기간을 지정

  - 어노테이션의 유지 정책 (retention policy)

    | 유지 정책 |                       의미                        |
    | :-------: | :-----------------------------------------------: |
    |  SOURCE   | 소스 파일에만 존재. 클래스 파일에는 존재하지 않음 |
    |   CLASS   |  클래스 파일에 존재. 실행시에 사용 불가. 기본값   |
    |  RUNTIME  |      클래스 파일에 존재. 실행시에 사용 가능       |

    



