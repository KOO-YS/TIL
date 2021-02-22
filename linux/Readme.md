# Linux

- [Setting For Linux](#Setting) 
- [Curriculum For Linux](#Curriculum) 









### Setting 

---

#### 1. VMware

[VMware 설치](https://jhnyang.tistory.com/233)



#### 2. Windows Subsystem for Linux (WSL2)
###### Windows Subsystem for Linux 2

[WSL2에 대한 간단한 설명](https://medium.com/@cratios48/%EC%9C%88%EB%8F%84%EC%9A%B0%EC%97%90-%EC%98%AC%EB%A6%B0-%EB%A6%AC%EB%88%85%EC%8A%A4-wsl2-bbd007851147)

- Window 버전 확인 : `cmd` or `시작` : winver 검색
- Window 2004(2020년 5월 이후) 이후 버전 필요 
  
  - ###### 내 경우엔 `시작`->`설정` 들어가서 수동으로 업데이트 함
  
    

#### WSL1과의 차이
기존의 WSL1은 리눅스의 명령어를 윈도우 API로 변환했다면, WSL2에서는 윈도우에 리눅스 커널을 올렸다.

#### WSL 설치

- Window 2004(2020년 5월 이후) 이후 버전 필요 
  - ##### 내 경우엔 `시작`->`설정` 들어가서 수동으로 업데이트 함
[WSL2 설치방법 참고 1](http://melonicedlatte.com/2020/07/05/200400.html)



- `Microsoft Store` -> `Windows Terminal` 설치



**중간 에러**

```
WslRegisterDistribution failed with error: 0x8007019e
```



`설정` -> `개발자용` -> `개발자 모드`

​		 -> `Windows 기능 켜기 끄기` -> `Windows Linux 하위시스템` 체크

**그래도 에러**...



[WSL2 설치방법 참고 2](https://www.lesstif.com/software-architect/wsl-2-windows-subsystem-for-linux-2-89555812.html)

 WSL 2에 커널 구성 요소 업데이트가 필요합니다 -> **해결** : [리눅스 커널 업데이트 패키지 다운로드](https://docs.microsoft.com/ko-KR/windows/wsl/wsl2-kernel)



[WSL2 설치방법 참고 3](https://www.44bits.io/ko/post/wsl2-install-and-basic-usage)

네트워크 드라이브로 바로 접근할 수 있는 방법 : `\\wsl$\Ubuntu\`



---



### Curriculum

독학 커리큘럼 🍤

1. [생활코딩 - 리눅스](https://www.inflearn.com/course/%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9-%EB%A6%AC%EB%88%85%EC%8A%A4-%EA%B0%95%EC%A2%8C/dashboard)
2. 리눅스마스터 2급 📋
  > 참고 사이트 
  > - [github 정리](https://github.com/Lee-KyungSeok/Linux-Study/tree/master/BasicBashShell)
  > - [요약 및 족보 ](https://mozi.tistory.com/244)
3. 이게 우분투 리눅스다 📒
4. [리눅스 시스템 프로그래밍](https://inf.run/GowV)

