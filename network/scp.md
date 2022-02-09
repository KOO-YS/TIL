# SCP

SCP (Secure CoPy)

- 리눅스 기반 운영체제에서 사용하는 파일 전송 프로토콜
- SSH를 이용하여 네트워크로 연결된 호스트 간 파일을 주고 받는 명령어
- 원격지의 파일 or 디렉토리를 송수신하는 파일 전송 프로토콜
    - 보내기/가져오기
- SSH와 동일한 22번 포트 & identity file(패스워드, ssh 키파일...) 사용

<br>

### 로컬에서 원격지로 파일 전송

- 1개 파일
    
    ```bash
    $ scp [전송할파일명] [원격지-id]@[원격지-ip]:[원격지-받을위치]
    
    $ scp sample.txt root@192.168.0.1:/my-folder
    ```
    
- 여러개 파일
    
    ```bash
    $ scp [전송할파일명1] [전송할파일명2] [원격지-id]@[원격지-ip]:[원격지-받을위치]
    
    $ scp sample.txt another-sample.zip root@192.168.0.1:/my-folder
    ```
    
- 여러 파일을 포함한 디렉토리
    
    ```bash
    $ scp -r [전송할디렉토리명] [원격지-id]@[원격지-ip]:[원격지-받을위치]
    
    $ scp -r sample-dir root@192.168.0.1:/my-folder
    ```
    
<br>


### 원격지에서 로컬로 파일 전송

- 1개 파일
    
    ```bash
    $ scp [원격지-id]@[원격지-ip]:[원본-위치] [로컬-받을위치]
    
    $ scp root@192.168.0.1:/sample.txt /local-folder
    ```
    
- 여러 파일
    
    ```bash
    $ scp [원격지-id]@[원격지-ip]:"[원본-위치1] [원본-위치2]" [로컬-받을위치]
    
    $ scp root@192.168.0.1:/"sample1.txt sample2.txt" /local-folder
    ```
    
- 여러 파일을 포함한 디렉토리
    ```bash
    $ scp -r [원격지-id]@[원격지-ip]:[원격지-디렉토리] [로컬-받을위치]

    $ scp -r root@192.168.0.1:/sample-folder /local-folder
    ```
