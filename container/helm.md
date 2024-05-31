# Helm 


### Chart 
- helm의 리소스 패키지
- k8s cluster에서 애플리케이션이 기동되기 위해 필요한 리소스들 포함
- [차트 검색 사이트](https://artifacthub.io/) 

```
- charts/<이름>
 -- Chart.yaml 		# 차트의 메타 데이터 (name, version, author...)
 -- values.yaml		# 패키지 커스터마이징 데이터 
 -- templates/		# 실제 yaml 오브젝트 파일들이 담겨있는 경로
	 -- ...
```

### Repository
- 차트 저장소

### Release
- 쿠버네티스에 구동되는 차트 인스턴스
- 동일한 차트를 여러번 설치 가능하며, 새로운 Release로 관리가 된다

---

### Helm 응용

#### Helm 설치 전 요구사항
- kubernetes cluster
- kubeconfig (apiserver 사용을 위함)

#### Artifact hub에서 검색

```
helm search hub [keyword]
```

#### Repository 추가
```
helm repo add [repo-name] [repo-url]
```

#### 로컬에서 검색
```
helm search repo [keyword]
```

#### repository list 출력
```
helm repo list
```

####  repository 정보 업데이트
- 추가한 레파지토리의 인텍스 정보를 최신으로 업데이트
```
helm repo update
```












Ref
- https://nayoungs.tistory.com/entry/Kubernetes-Helm%EC%9D%B4%EB%9E%80-Helm%EC%9D%98-%EA%B0%9C%EC%9A%94%EC%99%80-%EC%82%AC%EC%9A%A9%EB%B2%95
- https://velog.io/@rolroralra/Helm-Chart-%EB%AA%85%EB%A0%B9%EC%96%B4