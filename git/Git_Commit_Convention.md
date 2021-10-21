# Commit Message Conventions

#### 중요하지 않은 커밋 인식

- 공백, 빈 줄, 들여쓰기 등의 변화
- 세미콜론 추가
- 주석

커밋 내역 안에 바뀐 로직이 없는 경우

<br>



#### 기록을 검색할 때 더 많은 정보를 제공해야 한다

###### example 1

- Fix small typo in docs widget (tutorial instructions)
- Fix test for scenario.Application - should remove old iframe
- docs - various doc fixes
- docs - stripping extra new lines
- Replaced double line break with single when text is fetched from Google
- Added support for properties in documentation

> 상단의 커밋들은 코드 수정 내역을 구분할 수 있지만, 어느 컨벤션도 따르지 않았다

<br>



---

<br>



###### example 2

- fix comment stripping
- fixing broken links
- Bit of refactoring
- Check whether links do exist and throw exception
- Fix sitemap include (to work on case sensitive linux)

> 상단의 커밋들은 코드 수정 위치를 표시하지 않았다. 

<br>



물론 커밋에 바뀐 파일을 체크함으로써 위치 정보를 얻을 수 있으나, 번거롭다.

<br>



## Format of the commit message

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

커밋 메시지는 한 줄당 100개 문자를 넘지 못한다 -> 이 덕분에 깃허브와 여러 깃 도구에서 메시지를 쉽게 읽을 수 있다

<br>



### subject

- 변화에 대한 간결한 설명
- 명령형이되 현재형 사용 ex) change :o:, changed :x:, changes :x:
- 대문자로 시작하지 않는다
- 마지막에 . (dot) 제외

### type

- feat (feature) : 새 기능 추가
- fix (bug fix) : 버그, 이슈 수정
- docs (documentation) : 문서 수정
- style (formatting, missing semi colons, …) : 로직이 아닌 코드에 영향을 주지 않는 변경사항
- refactor : 기능 추가 코드가 아닌 개선을 위한 코드 수정
- test (when adding missing tests) : 테스트 수정
- chore (maintain) : 빌드, 패키지 매니저 등 코드 수정 없이 설정만 변경 

### scope

- 커밋 변경 장소를 지정하는 모든 것 :question:
- 예시 : $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...

<br>



### Message body

- 명령형이되 현재형 사용
- 코드를 변화시킨 의도를 포함하며, 달라진 점을 기술한다

<br>



### Message footer

- 모든 breaking changes는 변화에 대한 타당한 설명과 함께 footer에 언급되야한다

**BREAKING CHANGE** : 단절적 변경을 뜻한다

###### example

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

<br>







#### 참고 자료

https://gist.github.com/stephenparish/9941e89d80e2bc58a153

https://www.conventionalcommits.org/en/v1.0.0/

