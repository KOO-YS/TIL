# Git Command 정리

- [사용자정보](#사용자정보)
  - 전역 사용자 정보 설정
- [폴더위치](#폴더위치)
  - 폴더 위치 이동 및 생성
- [Clone](#Clone)
  - 원격 저장소 복제
- [Commit](#Commit)
  - 파일 변경 상태 저장
- [Push](#Push)
  - 원격저장소에 로컬 커밋사항 연동
- [Pull](#Pull)
  - 원격저장소의 변경사항 로컬에 연동
- [gitignore](#gitignore)
  - 원격저장소에 변경사항을 저장하지 않고 무시할 파일 표시
- [Remove](#Remove)
  - 원격저장소와의 연결 끊기 및 .git 파일 
---



## 사용자정보

전역 사용자 정보 설정

- *특정 저장소에선 다른 이름을 쓰고 싶다면 **--global**을 뺀다*

- 사용자 이름 설정

  ```
  git config --global user.name 이름
  ```

- 사용자 이메일 설정 (주의 : github 이메일과 일치해야한다 -> **잔디 안깔림 주의**)

  ```
  git config --global user.email 이메일
  ```

- 사용자 설정 확인

  ``` 
  git config --global --list
  ```





## 폴더위치

- git bash를 켰을때 기본 위치 [홈 디렉토리]

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





## Clone

원격 저장소 복제

- 깃허브 repository 클론

  ```
  git clone https://github.com/KOO-YS/TIL.git
  ```

  - 에러 발생

    ```
    fatal : protocol 'https' is not supported
    ```

  - 해결 방안 :  복사한 텍스트를 붙여오는 대신, 직접 주소를 입력하니 해결





##  Commit

파일 변경 상태 저장

- 파일 변경 상태 확인

  - 파일의 변경 내역과 커밋 준비가 되었는지를 확인할 수 있다

  ```
  git status
  ```

- 커밋 스테이지에 올리기

  ```
  git add 파일명
  ```

- **모든 변경사항** 커밋 스테이지에 올리기

  ```
  git add . 		(Untracked 파일을 모두 스테이지에 올림)
  ```

- 커밋 스테이지에서 내리기 (add 취소)

  ```
  git restore --staged 파일명
  ```

- #### **커밋**

  ```
  git commit -m 커밋메세지
  ```

- 커밋 내역 조회

  ```
  git log			(나가는 방법 ESC -> Q)
  ```





## Push

원격저장소에 로컬 커밋사항 연동

- #### 푸시

  - 원격저장소에 커밋내용 저장
  
  ```
  git push 원격저장소이름 브랜치이름
  ```
  ```
  git push origin master
  ```

  - 원격저장소 설정 확인  (+ origin이라는 이름으로 원격저장소가 저장되었다)
  
    ```
    git remote -v
    ```





## Pull

원격저장소의 변경사항 로컬에 연동

- #### 풀

  - 원격저장소의 변경사항을 로컬저장소에 내려받기
  
  ```
  git pull 원격저장소이름 브랜치이름
  ```





## gitignore

무시할 파일 

- .gitignore 파일 생성하기

  ```
  -- 파일을 생성 & 변경 모드 
  vim .gitignore
  ```

  ```
  -- 입력 모드
  a,i,o
  -- 셋 중 아무거나 누르면 입력모드가 된다
  
  -- 입력 후 파일 저장
  [Esc] -> :wq (write and quit)
  ```

- 수정하기



## Remove

로컬 저장소와 원격저장소간의 연결을 끊고, '.git'파일을 삭제

- 원격저장소와의 연결 끊기
  ```
  git remote remove origin
  ```
  
- .git 파일 삭제 (직접 삭제해도 상관없음)
  ```
  find ./ -name ".git" | xargs rm -Rf
  ```







