# Git Branch Command 정리

- [브랜치 확인](#브랜치 확인)
- [브랜치 생성](#브랜치 생성)　

- [브랜치 이동](#브랜치 이동)
- [브랜치 삭제](#브랜치 삭제)



## 브랜치 확인

- 현재 내가 사용하는 브랜치 확인

  ```
  git status
  
  (예시)
  On branch develop		-> develop 브랜치 위에 있다
  ```

- 로컬 저장소에서 모든 브랜치 확인

  ```
  git branch
  ```

- 원격 저장소에서 브랜치 확인

  ```
  git branch -r
  ```



## 브랜치 생성

- 로컬 저장소에서 생성

  ```
  git branch 브랜치이름
  ```

- **원격 저장소로 브랜치 push**

  ```
  git push --set-upstream origin develop
  ```

## 브랜치 이동

- 브랜치 이동

  ```
  git checkout 이동할 브랜치명
  ```



## 브랜치 삭제

- 브랜치 삭제

  ```
  git branch -d 삭제할 브랜치명
  ```