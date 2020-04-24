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

- 노드의 개수가 N개이면 링크의 개수는 N-1개이며, 루트에서 링크를 타고 어떤 노드로 가는 경로는 유일하다

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

- 일반적 이진트리는 규칙이 없기에 LinkedList에 저장

- 노드는 왼/오른쪽 자식 주소 + 데이터를 가지고있어야 하고, 필요하다면 부모 노드의 주소도 가진다



#### 트리에 대한 알고리즘

1. ##### 순회 (travelsal)

   - 중위 순회 (In-order) : 왼 -> 부모 -> 오
   - 전위 순회 (Pre-order) : 부모 ->  왼 -> 오
   - 후위 순회 (Post-order) : 왼 -> 오 -> 부모
   - 레벨 순회 (Level-order) : 부모 -> 자식(왼~>오)

**구현**

```JAVA
class Node{
		private int data;		// 노드의 데이터값
		private Node left;		// 왼쪽 자식 노드
		private Node right;		// 오른쪽 자식 노드
		
		public Node(int data){
			this.data = data;
		}
		public Node(int data, Node left, Node right){
			this.data = data;
			this.left = left;
			this.right = right;
		}
	
	public void setData(int data){
		this.data = data;
	}
	public int getData(){
		return data;
	} 
	public void setRight(int data){
		this.right = new Node(data);
	}
	public Node getRight(){
		return right;
	}
	public void setLeft(int data){
		this.left = new Node(data);
	}
	public Node getLeft(){
		return left;
	}
}
class BinaryTree {
	private Node root;
	public BinaryTree(Node root){
		this.root = root;
	}
	
	// 전위 순회	
	public void preOrder(Node parent){
		if(parent == null) return;
		System.out.print(parent.getData()+" ");
		preOrder(parent.getLeft());	
		preOrder(parent.getRight());
	}
	// 중위 순회
	public void inOrder(Node parent){
		if(parent != null){
			inOrder(parent.getLeft());
			System.out.print(parent.getData()+" ");
			inOrder(parent.getRight());
		}
	}
	// 후위 순회
	public void postOrder(Node parent){
		if(parent != null){
			postOrder(parent.getLeft());
			postOrder(parent.getRight());
			System.out.print(parent.getData()+" ");
		}
	}
}
```





### 이진 검색 트리 (BST : Binary Search Tree)

- 키 x를 가진 노드를 검색하고자 할때, 트리에 해당 노드가 존재하면 해당 노드를 리턴
  - 검색하고자 하는 값이 루트보다 작을 경우 왼쪽으로 이동
  - 검색하고자 하는 값이 루트보다 클 경우 오른쪽으로 이동



#### 삽입

- 새로운 노드를 이진 검색 트리에 추가하는 연산
- 새로운 노드를 추가할 때 기존의 노드들은 전혀 건드리지 않는다

  

#### 삭제

- 이진 검색 트리 연산 중 가장 복잡한 연산

- 경우에 따라 연산이 다르다

  1. 자식이 없을 때 -> 그냥 삭제

  2. 하나의 자식이 있을 때 -> 부모와 자식을 이어주고 삭제

  3. 두 자식이 있을 때 -> 

     ```
     두 자식이 있는 노드를 그냥 없애버릴 경우 자식 노드들의 부모가 없어지므로
     해당 노드의 저장된 데이터만 삭제
     없어진 데이터의 successor*를 삭제된 부분으로 옮겨온다
     successor은 자식노드가 없거나 하나 있다. -> 1,2번 경우처럼 처리
     ```


#### 검색

- successor* : 바로 다음 값. 삭제 노드 데이터를 대체해주기 위해 바로 다음 값을 검색



**구현**

```JAVA
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	
		BinarySearchTree bst = new BinarySearchTree();
		String num;
		while((num = br.readLine()) != null && num.length() != 0) {
			bst.insertNode(Integer.parseInt(num));
		}
		bst.preOrder(bst.getRoot());
		System.out.println();
		bst.deleteNode(50);
		System.out.println("삭제 연산 결과 : ");
		bst.preOrder(bst.getRoot());
	}
}
/**
 * 	이진 검색 트리
 */
class BinarySearchTree {
	// 최상위 노드
	private Node root;
	
	public Node getRoot() {
		return root;
	}

	public void setRoot(Node root) {
		this.root = root;
	}

	/**
	 * 트리에 노드를 삽입한다
	 * 조건 1. 이미 같은 데이터가 있는지
	 * 조건 2-1. 비교 노드보다 데이터가 크다 -> 오른쪽 자식 노드로 이동
	 * 조건 2-2. 비교 노드보다 데이터가 작다 -> 왼쪽 자식 노드로 이동
	 * 조건 3. 비교할 다음 노드가 null이라면? 그곳에 데이터 삽입
	 * @param data 삽입할 데이터 값
	 */
	public void insertNode(int data) {
		// 루트 데이터가 존재하는지
		if(root == null) {
			this.setRoot(new Node(data));
			return;
		}
		// 루트부터 탐색
		Node compare = root;
		
		while(true) {
			if(compare.getData() == data) {
				// 이진 검색 트리에 같은 데이터 값이 들어갈 수 없다
				return;	
			} else if(compare.getData()>data) {
				// 왼쪽 자식노드로 이동
				if(compare.getLeft() == null) {
					compare.setLeft(new Node(data));
					return;
				}
				compare = compare.getLeft();
			} else {
				// 오른쪽 자식노드로 이동
				if(compare.getRight() == null) {
					compare.setRight(new Node(data));
					return;
				}
				compare = compare.getRight();
			}
		}
	}
	
	// TODO 노드 삭제
	/**
	 * Case 1. 양 자식 노드가 없을때
	 * Case 2-1. 왼쪽 자식 노드가 없을때
	 * Case 2-2. 오른쪽 자식 노드가 없을때
	 * Case 3. 양쪽 (왼/오른쪽) 자식 노드가 둘다 있을때
	 * @param node
	 */
	public void deleteNode(int data) {
		/*
		 * 시행착오 : 검색연산을 통해 노드를 찾거나 매개변수를 노드를 받아서 바로 삭제연산은 되지않을까? 
		 * -> 안되는 이유 : 삭제될 노드의 부모 노드의 처리를 위해서 
		 * 삭제 연산안에서 데이터로 노드를 찾으며 부모노드도 같이 찾아야 한다
		 */
		// 데이터 값을 가진 노드와 그 부모 노드 찾기
		Node parent = root;			// 데이터 노드의 부모 노드를 담을 객체
		Node current = root;		// 데이터를 가진 노드를 담을 객체
		boolean isLeft = false;		// 삭제 연산을 위래 데이터 검색을 하며 데이터 노드가 부모의 어느 쪽 자식인지 알아두기
		
		while(current.getData() != data){	// 데이터를 가진 노드를 찾을때까지 반복
			parent = current;
			if(current.getData() > data) {
				isLeft = true;
				current = current.getLeft();
			}else{
				isLeft = false;
				current = current.getRight();
			}
			if(current == null) {
				return;		// 데이터 값이 없다
			}
		}
		
		// 본격적인 삭제 연산
		// Case 1 : 자식 노드가 없을 때
		if(current.getLeft() == null && current.getRight() == null) {
			if(current == root) root = null;
			else if(isLeft) parent.setLeft(null);
			else parent.setRight(null);
			
			return;
		} // Case 2-1 : 오른쪽 자식 노드만 있을 때 -> 부모와 오른쪽 자식 노드를 이어준다
		else if(current.getLeft() == null) {
			if(current == root) root = current.getRight();
			else if(isLeft) parent.setLeft(current.getRight());
			else parent.setRight(current.getRight());
			
			return;
		} // Case 2-2 : 왼쪽 자식 노드만 있을 때 -> 부모와 왼쪽 자식 노드를 이어준다
		else if(current.getRight() ==  null) {
			if(current == root) root = current.getLeft();
			else if(isLeft) parent.setLeft(current.getLeft());
			else parent.setRight(current.getLeft());
			
			return;
		} // Case 3. data의 바로 다음 값을 가진 노드를 가져와 삭제 노드 자리에 대체해준다
		else if(current.getLeft() != null && current.getRight() != null) {
			// 검색 논리상 이 노드는 2개의 자식 노드를 가질 수 없다
			Node next = getSuccessor(current);		
			// 원래 위치에서 삭제
			deleteNode(next.getData());		
			if(current == root) root.setData(next.getData());
			else if(isLeft) parent.getLeft().setData(next.getData());
			else parent.getRight().setData(next.getData());
			return;
		}
	}
	
	/**
	 * data의 바로 다음 크기의 데이터를 가진 노드 검색
	 * Case 1. 노드의 오른쪽 서브 트리 중 가장 왼쪽에 있는 노드 찾기
	 * Case 2. 오른쪽 서브 트리가 존재하지 않는다면? 왼쪽 서브트리의 최대값
	 * @param node
	 * @return 다음값을 가진 노드
	 */
	public Node getSuccessor(Node node) {
		Node successor = null;
		if(node.getRight() != null) {			// Case 1
			successor = node.getRight();
			while(successor.getLeft() != null) {
				successor = successor.getLeft();
			}
		} else if(node.getLeft() != null) {		// Case 2
			successor = node.getLeft();
			while(successor.getRight() != null) {
				successor = successor.getRight();
			}
		}
		return successor;
	}
	
	/**
	 * 전위순회
	 */
	public void preOrder(Node node) {
		if(node != null) {
			System.out.print(node.getData()+" ");
			preOrder(node.getLeft());
			preOrder(node.getRight());
		}
	}
	public void inOrder(Node node) {
		if(node != null) {
			inOrder(node.getLeft());
			System.out.print(node.getData()+" ");
			inOrder(node.getRight());
		}
	}
	/**
	 * 후위순회
	 */
	public void postOrder(Node node) {
		if(node != null) {
			postOrder(node.getLeft());
			postOrder(node.getRight());
			System.out.println(node.getData());
		}
	}
	
}

/**
 *	트리에 속할 노드 객체
 */
class Node {
	private int data;
	private Node left;
	private Node right;
	
	public Node() {}
	public Node(int data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	
	public int getData() {
		return data;
	}
	public void setData(int data) {
		this.data = data;
	}
	public Node getLeft() {
		return left;
	}
	public void setLeft(Node left) {
		this.left = left;
	}
	public Node getRight() {
		return right;
	}
	public void setRight(Node right) {
		this.right = right;
	}
}

```





### 레드 블랙 트리(Red Black Tree)

- 트리의 시간복잡도는 높이에 비례하므로 극단적으로 비대칭적이거나 높이가 높은 트리는 효율이 높지않다
- 레드 블랙 트리는 이진 탐색 트리의 일종으로 높이에 상관없이 O(logN)의 시간 복잡도를 유지할 수 있다.

#### 레드 블랙 트리의 구성

- 각 노드가 가진 정보 : data, 왼쪽 자식 노드, 오른쪽 자식 노드, 부모 노드의 주소
- NIL 노드 : 데이터가 없는 노드 (구현에서는 존재하지 않는다)
  - 모든 리프 노드는 NIL 노드이다
  - 루트의 부모 노드 역시 NIL

- 레드 블랙 트리는 5가지 조건을 만족한다
  1. 각 노드는 Red or Black
  2. 루트 노드는 Black
  3. 모든 Leaf 노드는 Black -> NIL 노드는 Black
  4. Red 노드의 자식은 모두 Black이어야한다 (Red가 연속적으로 나올 수 없다)
  5. 한 노드로부터 리프노드까지 이르는 모든 경로에 동일 개수의 Black이 존재해야한다
- 레드 블랙 트리의 높이 h : 자신으로부터 리프 노드(NIL)까지 가장 긴 경로에 포함되는 에지(노드?) 개수
- 블랙 높이 bh : 자신(자기자신은 포함 X)으로부터 리프 노드(NIL)까지의 경로상의 블랙 노드의 개수 -> (상단 5번* -> 곧, 블랙 높이는 어디로 내려가더라도 동일한 값이 나온다)

```
* 높이가 h인 노드의 블랙 높이는 bh >= h/2
* 노드 x를 루트로 하는 서브트리는 적어도 2^(bh(x))-1개의 노드를 포함해야한다
* n개의 노드를 가지는 레드 블랙 트리의 높이는 log(n+1)[밑이 2] 이하이다
```

