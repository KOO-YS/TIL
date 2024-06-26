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
- [Stash](#Stash) 
  - 변경 상태를 커밋 하지 않고 임시로 보관
- [Grep](#Grep)
  - 저장소 내에서 특정 단어를 포함한 파일 검색
---



#### [Commit Message Convention](https://doublesprogramming.tistory.com/256)



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
  git reset
  
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

- 커밋 취소

  ```
  git reset HEAD^
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

- 이미 원격 저장소에 반영된 파일들을 뒤늦게 .gitigore에 반영하더라도 해당 파일이 무시되지 않는다

  ```
  git rm -r --cached .
  git add .
  git commit -m "reset .gitignore"
  git push
  -- 반영 확인
  ```

  



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

새 원격저장소 정보를 추가
```
git remote add origin <git-url>

# 확인
git remote -v
```


## Stash

아직 커밋하고 싶지 않은 파일의 변경사항을 임시로 스택에 보관

- 보관하기

  ```
  git stash
  ```

- 보관하고 있는 변경사항 다시 반영하기

  ```
  git stash apply
  ```

- 보관되고있는  stash 목록 확인

  ```
  git stash list
  ```



## Grep

특정 단어가 포함된 파일을 검색

- 검색하기

  ```
  git grep "검색 단어"
  
  (예시)
  $ git grep "에라토스"
  baekjoon/Baekjoon_6588.md:     * 에라토스테네스의 체 공식 -> 소수 판별
  baekjoon/Baekjoon_9020.md:     * 에라토스테네스의 체 공식 -> 소수 판별
  ```



