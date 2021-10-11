# Spring MVC

<br>



**index**

- Spring MVC
  - Spring MVC이란?
  - Model. View, Controller
- Spring MVC Architecture
- Spring MVC의 장점

<br>





# 🍃 Spring MVC

### Spring MVC란?

MVC (모델-뷰-컨트롤러)

데이터, 사용자 인터페이스, 논리 제어를 구현하는데 널리 사용되는 SW 디자인 패턴

Spring 프레임워크를 Model-View-Controller로 다루는 모듈

스프링의 MVC 패턴은 `DispatcherServlet`을 활용한 front controller pattern을 사용한다

간단히 말해서 `DispatcherServlet`이 의도된 목적지를 향해 요청을 보내는 역할을 한다

<br>



### Model. View, Controller

> **example** 
> 쇼핑 리스트 앱

**Model**

- 애플리케이션에 포함해야 할 데이터가 무엇인지를 정의
- 데이터의 상태가 변경된다면?
  - 뷰에 알리기 → 필요에 따라 화면 변경
  - 컨트롤러에 알리기 → 필요에 따라 다른 로직을 수행

> **example** 
> 쇼핑 리스트 앱에서 필요한 항목 - 품목, 가격 등

**View**

- 애플리케이션의 데이터를 사용자에게 보여주는 방식 정의
- 표시할 데이터를 Model로부터 받는다

> **example** 
> 사용자에게 보여질 쇼핑 리스트 페이지

**Controller**

- 애플리케이션 사용자의 입력에 대해 응답
- 모델 또는 뷰를 업데이트하는 로직을 포함

> **example** 
> 사용자가 특정 상품을 선택할 때 그 상품 데이터를 받아와서 뷰에 전달



<br>



<br>





# 🍃 Spring MVC Architecture





<br>



<br>





# 🍃 Spring MVC의 장점

👉 관심사 분리

- 각 오브젝트의 특성에 맞춘 역할이 정확하게 분리되어 있다

👉 경량

- 개발을 위한 컨테이너와 어플리케이션 배포가 경량적인 서블렛을 사용한다

👉 빠른 개발

- 빠르고 병렬적인 개발이 가능하다

👉 설정

- 어플리케이션과 프레임워크 클래스를 위한 설정이 쉽다

👉 비즈니스 코드

- 개발자가 비즈니스 코드를 재사용 가능하도록 도와준다

👉 테스트 유용

- 데이터를 주입한 Java Beans를 쉽게 사용할 수 있도록 도와준다

👉 매핑

- 페이지를 리다이렉트하는데 유연한 매핑을 제공한다

👉 의존성 주입

- 제어의 역전이나 의존성 주입을 사용해서, 개발자가 직접 의존성을 위한 환경을 만들 필요가 없다
