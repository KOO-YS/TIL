# Java OOP

### OOP 이전의 프로그래밍 방식
**절차적 프로그래밍 방식**
- 입력을 받아 명시된 순서대로만 처리하고 결과 확인

**구조적 프로그래밍 방식**
- 절차적 프로그래밍 방식의 개선된 형태
- 함수 단위로 분리, 함수끼리 호출
- 큰 문제를 작은 단위로 나누어 해결
- Top-Down 방식

**객체 지향 프로그래밍 방식**
- 구조적 프로그래밍 방식의 개선된 형태
- 큰 문제를 작게 쪼개는 것이 아닌, 작은 문제들을 해결하는 "객체"를 만듦
- 객체들을 조합해 큰 문제를 해결하는 Bottom-Up 

---

### OOP의 장단점
#### 장점
- 코드 재사용성 증가
- 쉬운 유지보수
- 짧고 간결한 코드

#### 단점
- 처리 시간 증가
- 프로그램을 설계할 때 많은 시간과 노력 투자

---

### SOLID : OOP 5대 원칙
> Referenced by Book "Clean Code"

**S (Single Responsibility Principle)**
- 한 클래스는 하나의 책임"만" 가진다

**O (Open Closed Principle)**
- 확장에는 열려있으나, 변경에는 닫혀있어야 한다

**L (Liskov's Substitution Principle)**
- 프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다

**I (Interface Segregation Principle)**
- 특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 낫다

**D (Dependency Inversion Principle)**
- 추상화에 의존. 구체화에 의존하지 말라

---




---

> Reference 
> - https://velog.io/@ygh7687/OOP%EC%9D%98-5%EC%9B%90%EC%B9%99%EA%B3%BC-4%EA%B0%80%EC%A7%80-%ED%8A%B9%EC%84%B1