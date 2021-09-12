# Deploy Shell Script

> jar or war 파일을 배포하기 위해 인스턴스에 저장해두었다 실행할 shell script

<br>

```shell
!#/bin/bash

REPOSITORY=/var/lib/jenkins/workspace/pipeline-aws/build/libs
echo "REPOSITORY=$REPOSITORY"

PROJECT_NAME=vending-api
echo "PROJECT_NAME=$PROJECT_NAME"

echo "Start Spring Boot Application!"
CURRENT_PID=$(ps -ef | grep java | grep vending-api | awk '{print $2}')
echo "$CURRENT_PID"

 if [ -z $CURRENT_PID ]; then
echo ">현재 구동중인 어플리케이션이 없으므로 종료하지 않습니다."

else
echo "> kill -9 $CURRENT_PID"
kill -9 $CURRENT_PID
sleep 10
fi
 echo ">어플리케이션 배포 진행!"

JAR_NAME=$(ls $REPOSITORY/ | grep $PROJECT_NAME | tail -n 1)
echo "JAR_NAME = $JAR_NAME"

java -Djasypt.encryptor.password=암호화키 -jar $REPOSITORY/$JAR_NAME &
```

### 구성

- REPOSITORY
- PROJECT_NAME
- CURRENT_PID
- JAR_NAME