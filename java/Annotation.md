# Java Annotation

소스코드에 메타데이터 정보를 추가하는 메커니즘

- XML descriptor와 marker 인터페이스를 대체할 수 있다
- package, class, interface, method, field에 붙일 수 있으며, 프로그램 실행에 아무런 영향이 없다
- annotation의 활용
    - 경고나 오류에 대해 컴파일러에게 알림
    - 컴파일 시점에 소스 코드 조작
    - 런타임 시점에 동작 수정 또는 검사

## Java 내장 어노테이션
- `@Override` : 메소드가 상속한 부모 메소드의 동작을 재정의, 대체 
- `@SuppressWarnings` : 코드의 일부에서 특정 경고를 무시
- `@Deprecated` : 더 이상 사용하지 않음
- `@SafeVarargs` : 가변인자에 대한 경고 유형에 작용
- `@FunctionalInterface`
- `@Native`
이러한 주석들로 컴파일러 경고 & 오류를 생성하거나 억제 가능

### @FunctionalInterface
- 함수형 인터페이스는 추상 메소드가 오직 하나인 인터페이스를 의미
- 이 어노테이션을 통해 해당 인터페이스가 함수형 인터페이스 조건에 맞는지 검사
- 이 어노테이션 없이도 함수형 인터페이스로 사용하는데 지장없지만 인터페이스 검증과 유지보수를 위해 유용

---

## Reference
- https://www.baeldung.com/java-custom-annotation