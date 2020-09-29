# Linux Command

> ###### 자세한 메뉴얼을 보고싶을 때
>
> ```
> 명령어 --help 
> ```
>
> ###### 더 자세한 명령어
>
> ```
> man 명령어 --help
> ```



---



### *command basic*



##### 현 경로상에 파일 목록을 출력

- a : 모든 파일(숨김파일까지) 출력 
- l : list 형태 (세로로 출력)

> ls (-al)



##### 경로 확인

> pwd



##### 경로 만들기

> mkdir 경로(폴더)



##### 파일 만들기

> touch 파일명



##### 터미널 흔적 지우기

> clear



###### 삭제

> rm 파일
>
> rm -r 경로



###### nano 에디터 열기

> nano [파일명]



###### 파일 읽기 or 사용자의 입력값 받기

> cat [파일명]
>
> cat [텍스트]  -> 텍스트 그대로 출력



###### 패키지 매니저 (download)

> ###### // apt의 버전을 최신상태로 만듦
>
> sudo apt -get update 
>
> ###### // 패키지 설치
>
> sudo apt-get install [ex.htop]
>
> ###### // 패키지 삭제
>
> sudo apt-get remove htop
>
> ###### // 패키지 검색
>
> sudo apt-cache search [keyword]



###### 다운로드 방법  

>  wget [경로.https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png]



---



### *IO Redirection*



![io detail](img/linux-io.jpg)

###### command output

> //예시
>
> ls -l **>** result.txt 
>
> <u>*mean : 명령어의 결과를 result.txt에 담음*</u>

* `>` 덮어쓰기,  `>>` 이어쓰기



###### command input 

> cat **<** result.txt
>
> <u>*mean : result.txt의 데이터를 가져와 출력*</u> 





---



### *shell script*

![kernel vs shell](img/kernel-n-shell.jpg)

`shell` : 사용자. 껍데기

`kernal` : 운영체제 중심. 핵심 



###### 현재 쉘 카테고리에서 어떤 프로그램을 쓰고 있는지 확인

> echo $0
>
> 출력 : bash



###### bash vs zsh

shell 스타일의 차이

평소 쓰는 script가 `bash`



###### shell script 

shell 명령어들의 실행 순서와 방법을 적어둔 파일

```
#!/bin/bash								// bash 명령어 해석기 사용
if ![ -d bak ]; then 					// if bak이란 direction이 없다면
	mkdir bak							// bak 경로를 만들어라
fi										// if문 종료
cp *.log bak							// log 확장자를 가진 모든 파일을 bak에 복붙
```



>###### yaans@ubuntu:~/study/command/script$ ./backup
>
>bash: ./backup: Permission denied **(실행 권한 실패)**
>
>###### yaans@ubuntu:~/study/command/script$ chmod +x backup
>
>**(실행을 위해 입력)**
>
>###### yaans@ubuntu:~/study/command/script$ ./backup





---

#### 참고 자료

- ##### [생활코딩 - 리눅스](https://www.inflearn.com/course/%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9-%EB%A6%AC%EB%88%85%EC%8A%A4-%EA%B0%95%EC%A2%8C/dashboard)
