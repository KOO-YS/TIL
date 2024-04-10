# Docker volume

### Container Volume이 필요한 이유
- 컨테이너 기본 이미지는 ReadOnly이다
- 그렇기 때문에 컨테이너에 추가되는 데이터들은 별도의 (ReadWrite )레이어에 저장된다
- **Union File System (Overlay)** : { 기본 ReadOnly 레이어 + 추가된 데이터가 담긴 ReadWrite 레이어 }를 합쳐서 운영
- 이렇게 생성되었던 별도의 데이터 레이어는 컨테이너가 삭제될 때 함께 삭제가 된다
    - Docker Volume를 통해 컨테이너에서 만들어진 데이터를 영구적으로 보존할 것


### Volume Mount
- `/my/own/datadir` 경로에 볼륨 마운트
```shell
docker run --name some-mysql -v /my/own/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

- volume 설정 종류
  ```shell
  -v {host-path}:{container-mount-path}
  -v {host-path}:{container-mount-path}:{read-write-mode}
  -v {container-mount-path}
  ```
  - read-write 모드를 설정할 수 있는 이유?
    - 애플리케이션 내에서 보안이슈가 발생한 경우 컨테이너 볼륨의 정보를 그대로 마운트 하기에 리스크가 있다
    - `ro` (readonly) 모드를 설정할 수 있다
    - default는 `rw`
  - host-path를 설정하지 않는다면 임의의 경로를 만들어서 마운트 해준다


### Container Data Share
- 여러 컨테이너의 볼륨 host-path를 공유한다면?
- 예시
  1. 웹 콘텐츠 생성 컨테이너 A와 웹 서버 컨테이너 B가 존재
  2. A가 생성한 콘텐츠를 볼륨 마운트된 경로 `/web/data`에 저장
  3. B는 볼륨 마운트된 경로 `/web/data`에 저장된 콘텐츠를 이용해 서버에 퍼블리싱
