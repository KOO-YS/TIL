# NoSQL

- Not Only SQL 
- 기존 RDBMS의 한계를 극복하는 새로운 형태의 저장소
- 메신저 텍스트, 음성 등 반정형화, 비정형화된 데이터를 다루거나 클라우드, 분산형 컴퓨팅에는 기존의 RDBMS가 적합하지 않음
- 분산형을 추구하는 비관계형 데이터베이스
- 고정된 스키마 & JOIN이 존재하지 않는다



#### NoSQL의 특징

- 관계형이지않은 데이터베이스를 아우르기 때문에 종류 다양
- 반정형화, 비정형화된 데이터에 적합
- 정보의 일관성을 유지하기어렵다. -> Eventual Consistency (업데이트 전까지는 가지고 있는 최신의 데이터를 반환)

- 대용량 데이터 저장에 유리
- 데이터 모델, 데이터 질의 API가 다양





> 참고 블로그
>
> - https://shoark7.github.io/programming/knowledge/what-is-NoSQL
>

---





# MongoDB

- C++로 작성된 오픈소스 

- 문서지향적(Document-Oriented) NoSQL DB

  > **Document**
  >
  > RDMS의 recode와 비슷한 개념으로 { key - value }의 쌍으로 구성되어 있다
  >
  > ```
  > {
  > 	"_id" : ObjectId("5099803df3f4948bd2f98391"),
  > 	"name" : "yaans"
  > }
  > ```
  >
  > 
  >
  > `_id` : 고유값
  > **구성** : 총 12 bytes [현재시간(4)] [기계ID(3)] [MongoDB서버 프로세스ID(2)] [순차번호(3)]
  >
  > 동적인 Schema를 가지고 있으며 Collection의 내부에 있다

  

  > **Collection**
  >
  > MongoDB Document의 그룹
  >
  > RDBMS의 Table과 비슷한 개념이면서 Schema를 가지고 있지 않다

  

#### RDMS vs MongoDB 비교

| RDBMS       | MongoDB                      |
| ----------- | ---------------------------- |
| Database    | DataBase                     |
| Table       | Collection                   |
| Tuple / Row | Document of BSON Document    |
| Column      | Field                        |
| Table Join  | Embedded Documents & Linking |
| Primary Key | Primary Key (_id)            |



#### MongoDB 특징

- Schema-less
  - 고정 스키마가 존재하지 않으므로 같은 Collection 내에 있어도 document들은 다른 스키마를 가질 수 있다. (동적 스키마)
- JOIN이 없어 하나의 document에 최대한 많은 데이터를 포함시킨다
  - ex) RDBMS에서 게시글과 게시글 댓글의 테이블을 분리한다면 MongoDB는 도큐먼트 내 서브 도큐먼트로 포함시킨다.
- Scalability
  - 규모 가변성, 확장성이 우수하여 Sharding(여러 데이터베이스에 데이터 분할) 클러스터 구축도 가능



#### MongoDB 설치

- [How to install MongoDB](https://somjang.tistory.com/entry/WindowsMongodb%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0ver-420)





> 참고 블로그 
>
> - https://velopert.com/436
>
> - https://poiemaweb.com/mongdb-basics

---





### MongoDB 사용 

##### (velopert 님의 포스팅에 따른 실습) 

> [velopert님의 포스팅](https://velopert.com/category/dev-log/tech-log/mongodb)

- 현재 DB 확인

  ```
  > db
  
  [현재 사용중인 db 출력]
  ```

- DB 생성

  ```
  > use [new_db]
  
  [switched to db new_db]
  ```

- 내가 만든 DB 리스트 확인

  ```
  > show dbs
  
  [ 존재하는 DB 리스트 출력 ※ 단, 데이터베이스 내에 최소 하나의 Document가 있어야 출력됨]
  ```

- Document 추가

  ```
  > db.book.insert({"title":"mongo db tutorial", "user":"yaans"});
  
  [ WriteResult({ "nInserted" : 1 }) ]
  ```

  - 설명 : db.(Collection 이름).insert(Document 정보);

- DB 삭제

  ```
  > db.dropDatabase();
  
  [ { "dropped" : "new_db", "ok" : 1 } ]
  ```

  

---



- Collection 생성 (옵션 없이)

  ```
  > db.createCollection("books")
  
  [ { "ok" : 1 } ]
  ```

- Collection 생성 (옵션 포함)

  ```
  > db.createCollection("articles", { 
  ... capped: true, 
  ... autoIndexId : true, 
  ... size : 6142800, 
  ... max : 10000 })
  
  [ {
  	"note" : "The autoIndexId option is deprecated and will be removed in a future release",
  	"ok" : 1
  } ]
  ```

- Collection을 따로 생성하지 않아도 Document를 생성하면 같이 생성된다

- Collection List 확인

  ```
  > show collections
  
  [ Collection List 출력 ]
  ```

- Collection 삭제

  ```
  > db.articles.drop()
  
  [ true ]
  ```



---



- Document 추가

  ```
  > db.book.insert({"title":"mongo db tutorial", "user":"yaans"});
  
  [ WriteResult({ "nInserted" : 1 }) ]
  ```

- Document 여러개 추가

  ```
  > db.book.insert([{"title":"book1", "user":"yaans1"}, {"title":"book2", "user":"yans2"}])
  
  [ BulkWriteResult({
          "writeErrors" : [ ],
          "writeConcernErrors" : [ ],
          "nInserted" : 2,
          "nUpserted" : 0,
          "nMatched" : 0,
          "nModified" : 0,
          "nRemoved" : 0,
          "upserted" : [ ]
  }) ]
  ```

- Collection에 속한 Document 리스트 확인

  ```
  > db.book.find()
  
  [ { "_id" : ObjectId("5f521ad34f9d6698fd7cc6ba"), "title" : "mongo db tutorial", "user" : "yaans" }
  { "_id" : ObjectId("5f521c244f9d6698fd7cc6bb"), "title" : "book1", "user" : "yaans1" }
  { "_id" : ObjectId("5f521c244f9d6698fd7cc6bc"), "title" : "book2", "user" : "yans2" } ]
  ```

- Document 검색

  ```
  > db.book.find({"title":"book2"})
  
  [ { "_id" : ObjectId("5f521c244f9d6698fd7cc6bc"), "title" : "book2", "user" : "yans2" } ]
  ```
  - **db.book.find().pretty()** : 코드 스타일 깔끔하게 조회

- Document 삭제

  ```
  > db.book.remove({"title":"book2"})
  
  [ WriteResult({ "nRemoved" : 1 }) ]
  ```



----



#### Document 조회의 두가지 매개변수

> ###### db.collection_name.find( `query` , `projection` )

- **query** : document 조회 기준

  -  연산자 ( > , < , <= , ==,  != ) 등 사용 가능 

  - [공식 도큐먼트 참고](https://docs.mongodb.com/v3.2/reference/operator/query/) : 비교, 논리, 요소, 배열 등

    ```
    > db.articles.find( { "likes" : {$gt:10} } ).pretty()
    
    // likes 수가 10 이상인 document만 조회
    ```



- **projection** : document를 조회할 때 보여질 필드 정함

  - `_id`는 false 처리하지 않을 경우, 자동 조회

    ```
    > db.articles.find({},{"title":true,"likes":true})
    
    [ { "_id" : ObjectId("5f521e804f9d6698fd7cc6bd"), "title" : "article01", "likes" : 0 }
    { "_id" : ObjectId("5f521e804f9d6698fd7cc6be"), "title" : "article02", "likes" : 23 }
    { "_id" : ObjectId("5f521e804f9d6698fd7cc6bf"), "title" : "article03", "likes" : 40 } ]
    ```

    ```
    > db.articles.find({},{"_id":false,"title":true,"likes":true})
    
    [ { "title" : "article01", "likes" : 0 }
    { "title" : "article02", "likes" : 23 }
    { "title" : "article03", "likes" : 40 } ]
    ```



---



- sort( { "필드명" : 1} ) : 특정 필드를 기준으로 정렬 순서를 정한다

  - 1 (오름차순) | -1 (내림차순) 

  ```
  > db.orders.find().sort( {"category":1} )
  ```

- limit( 출력할 갯수 ) : 출력될 데이터의 갯수를 한정짓는다

  ```
  > db.orders.find().limit(3)
  ```

- skip( 출력을 제외할 row 개수 ) : 순차적으로 봤을 때 특정 갯수만 제외하고 나머지만 출력

  ```
  > db.orders.find().skip(2)
  ```



---



- update() : Collection 안에 document를 수정

  - **특정 필드 수정 또는 존재하는 도큐먼트 변형**

  - 특정 필드 수정

    ```
    > db.people.update( {조건:"조건값"}, {$set : { 수정할필드명 }: 변경값 } } )
    
    [ WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 }) ] 
    ```

  - 도큐먼트 변경

    ```
    // 변경 전 확인
    > db.people.find({"name":"Betty"});
    
    [ { "_id" : ObjectId("5f534d27026240edd0a61b8e"), "name" : "Betty", "age" : 20 } ]
    
    
    // replace 
    > db.people.update( { name : "Betty"}, {"name": "Betty 2nd", age : 1} )
    
    [ WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 }) ]
    
    // 변경 후 확인
    > db.people.find({"name":"Betty 2nd"});
    [ { "_id" : ObjectId("5f534d27026240edd0a61b8e"), "name" : "Betty 2nd", "age" : 1 } ]
    ```

  - 필드 삭제

    ```
    // 삭제 전 변경
    > db.people.find({name:"David"})
    
    [ { "_id" : ObjectId("5f534d27026240edd0a61b90"), "name" : "David", "age" : 23, "score" : 20 } ]
    
    // 필드 삭제
    > db.people.update( {name:"David"}, { $unset : {score : 1} })
    
    [ WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 }) ]
    
    // 삭제 후 확인
    > db.people.find({name:"David"})
    
    [ { "_id" : ObjectId("5f534d27026240edd0a61b90"), "name" : "David", "age" : 23 } ]
    ```



---



- Index
  - 데이터 쿼리의 효율을 높여줌
  - document들을 가르키는 포인터 값으로 이루어진 B-Tree(Balanced Binarysearch Tree)를 만든다
  - index의 종류
    - 기본 인덱스 `_id` : 기본 제공되는 인덱스. 컬렉션에서 자동으로 _id 필드값을 ObjectId로 설정
    - 단일 필드 인덱스 : 사용자가 원하는 필드로 지정 가능
    - 복합 필드 인덱스 : 두개 이상의 필드로 사용하는 인덱스
    - MultiKey 인덱스 : 필드 타입이 배열인 필드에 인덱스 적용
    - Geospatial 인덱스 : 지도의 좌표와 같은 데이터를 위한 인덱스
    - Text 인덱스 : 텍스트 관련 데이터를 위한 인덱스
    - 해쉬 인덱스 : B-Tree가 아닌 Hash 자료구조를 사용한 인덱스. 정렬보다 검색 효율에 중점



- Index 생성

  ```
  > db.콜렉션.createIndex( { 필드 : 1 } )
  ```

- Index 속성

  - Unique 속성 : 고유값을 가지도록 함
  - Partial 속성 : document에 조건을 정하여 일부 document에만 인덱스를 적용할 때 사용
    - 필요한 부분만 인덱스를 적용하여 저장공간을 아끼면서 속도를 높인다
  - TLL 속성 : Date, Date 배열 타입의 필드에만 적용할 수 있는 속성. document를 만료시킬 수 있다

- Index 조회

  ```
  > db.people.getIndexes()
  ```

- Index 제거 (`_id` 인덱스 제외)

  ```
  > db.people.dropIndex( { key : 1 } )
  ```

