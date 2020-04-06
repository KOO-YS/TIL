# Algorithm [3] - Tree



### 트리 (tree)

- 계층적인 구조를 표현

- ex) 조직도, 가계도, 파일 시스템(디렉토리, 서브디렉토리)

- tree 용어 정리

  ```
  node : tree의 각 요소
  link : 노드를 이 어주는 가지
  root : 최상위 레벨에 있는 노드
  leaf : 마지막 레벨의 노드
  
  서로에게 상대적으로
  부모 노드 : 한 노드의 상위 레벨의 노드 (root는 부모 노드가 없다)
  자식 노드 : 한 노드의 하위 레벨의 노드 (leaf는 자식 노드가 없다)
  
  조상, 자손으로도 표현
  ```

- root 부터 level 1 -> leaf로 갈수록 레벨이 높아진다



### 이진 트리

- 노드가 최대 2개까지 자식을 가지는 트리
- 이진트리에서 노드의 자식이 같은 데이터를 가지고있다고 하더라도, 노드가 어느 쪽(왼/오른쪽) 방향에 따라 구분된다. 

- Expression Tree, Hoffman Code



#### Full binary tree

- 모든 레벨에서 노드들이 꽉 차있는 트리
- 높이가 N인 Full binary tree는 2^N-1개의 노드를 가진다

#### Complete binary tree

- 마지막 레벨에서 왼쪽에서부터 노드들이 차있는 트리 (중간 빈 칸 없이)

- 노드가 N개인 (Full or Complete)이진트리의 높이는 O(logN)이다



#### 이진트리의 자료구조

- 규칙이 없기에 LinkedList에 저장

- 노드는 왼/오른쪽 자식 주소 + 데이터를 가지고있어야 하고, 필요하다면 부모 노드의 주소도 가진다



#### 트리에 대한 알고리즘

1. ##### 순회 (travelsal)

   - 중위 순회 (In-order) : 왼 -> 부모 -> 오
   - 전위 순회 (Pre-order) : 부모 ->  왼 -> 오
   - 후위 순회 (Post-order) : 왼 -> 오 -> 부모
   - 레벨 순회 (Level-order) : 부모 -> 자식(왼~>오)



### 이진 검색 트리 (BST : Binary Search Tree)

- 

















https://new93helloworld.tistory.com/114?category=691027









