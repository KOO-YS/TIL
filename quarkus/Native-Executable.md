# Building a Native Executable

> reference
> https://quarkus.io/guides/building-native-image

<br>

 ## GraalVM
 native executable을 빌드하기 위해서는 GraalVM이 필요
 
 **GraalVM의 종류**
 - Oracle GraalVM Community Edition (CE)
 - Oracle GraalVM Enterprise Edition (EE)
 - Mandrel

Mandrel 
- Oracle GraalVM CE의 후속. Quarkus 서포트를 위해 특별하게 고안됨. Quarkus에 필요하지 않은 예외들을 불포함
- Linux 컨테이너 환경에 적합
- MacOS의 경우 Oracle GraalVM을 대신 사용하기를 권장

