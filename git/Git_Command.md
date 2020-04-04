# Git Command 정리

- [사용자 정보](#사용자 정보 (전역))

- [폴더 위치](#폴더 위치)

- [클론](#클론)



---

#### 사용자 정보 (전역)

- *특정 저장소에선 다른 이름을 쓰고 싶다면 **--global**을 뺀다*

- 사용자 이름 설정

  ```
  git config --global user.name "이름"
  ```

- 사용자 이메일 설정 (주의 : github 이메일과 일치해야한다 -> **잔디 안깔림 주의**)

  ```
  git config --global user.email "이메일"
  ```

- 사용자 설정 확인

  ``` 
  git config --global --list
  ```



#### 폴더 위치

- git bash를 켰을때 기본 위치 

  ```
  C:/User/사용자이름  -> ~ 로 표시된다
  ```

- 폴더 위치 이동

  ```
  cd Documents		(문서[현위치의 하위폴더]로 이동)
  ```

- 새 폴더 생성(현 위치에서)

  ```
  mkdir TIL			(make directory)
  ```



#### 클론

- 깃허브 repository 클론

  ```
  git clone https://github.com/KOO-YS/TIL.git
  ```

  - 에러 발생

    ```
    fatal : protocol 'https' is not supported
    ```

  - 해결 방안 :  복사한 텍스트를 붙여오는 대신, 직접 주소를 입력하니 해결



#### 변경 내역 저장 Commit

- 파일 변경 상태 확인

  ```
  git status
  ```

- 커밋 스테이지에 올리기

  ```
  git add 파일명
  ```

  ```
  git add add . 		(Untracked 파일을 모두 스테이지에 올림)
  ```

- 커밋 스테이지에서 내리기 ??

  ```
  git rm 파일명
  ```























