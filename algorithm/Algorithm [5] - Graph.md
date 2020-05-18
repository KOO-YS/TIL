# Algorithm [5] - Graph

#### 그래프

- 현상이나 사물을 정점과 간선으로 표현한 것
- 정점(Vertex) : 대상이나 개체를 나타냄
- 간선(Edge) : 이들간의 관계

```
G = (V,E)
```



#### 그래프의 종류

- 무 방향 그래프 < - > 방향그래프
- 가중치를 가진 그래프



#### 그래프의 표현

- **인접 행렬 (Adjacent Matrix)** 

  - 정점의 총 수가 n일때 n*n 행렬을 준비한 후, 정점 i와 정점 j간의 간선이 있을 때 행렬 (i,j)원소와 (j,i)원소의 값을 1로 할당. 나머지는 0으로 할당
  - 간선이 있는 경우 : 두 정점은 인접하다

  **인접 행렬의 장점** : 행렬 표현법으로 이해하기 쉽고 간선의 존재 여부를 즉각 알 수 있다.

  **인접 행렬의 단점** : n*n 행렬이 필요하므로 n^2에 비례하는 공간이 필요하고, 모든 원소를 채우는 데만 n^2에 비례하는 시간이 든다. (효율성 낮음)

  **적합한 경우** : 간선의 밀도가 아주 높은 그래프

  

- **인접 리스트 (Adjacency List)**

  - 각 정점마다 리스트를 하나씩 만들어 인접한 정점들을 연결 리스트(Linked List)로 매단다
  - 하나의 간선을 가진 두 정점에 노드가 만들어지고 각 노드는 <정점 번호, 다음 정점의 포인터>로 구성된다
  - 가중치를 가진 그래프라면 각 노드는 <정점 번호, 가중치, 다음 정점의 포인터>로 구성
  - 무방향 그래프일 경우 인접 리스트에 간선의 2배의 노드를 추가해야하지만(양 끝 정점에 각각 노드 추가), 유방향 그래프의 경우 간선 하나당 1개의 노드만 만들어진다

  **인접 리스트의 장점** : 공간이 간선의 총수에 비례하므로 공간의 낭비가 없다. 간선의 수가 적을 때 유용하다

  **인접 리스트의 단점** : 거의 모든 정점 쌍에 대해 간선이 존재하는 경우에는 오히려 리스트를 만드는데 필요한 오버헤드만 더 든다. 간선이 존재하는지 검색할 경우 리스트를 차례로 훑어야하기 때문에 인접 행렬보다 시간이 많이 걸린다





### 순회

- 그래프에서 모든 정점을 방문해야 하는 경우



#### 대표 순회 알고리즘

- **너비우선탐색(BFS : Breadth-First Search)** : 레벨별로 훑어나간다

  ```JAVA
  package graph;
  
  import java.util.Iterator;
  import java.util.LinkedList;
  
  public class Main {
  	public static void main(String[] args) {
  		Graph g = new Graph(4); 
  		  
          g.addEdge(0, 1); 
          g.addEdge(0, 2); 
          g.addEdge(1, 2); 
          g.addEdge(2, 0); 
          g.addEdge(2, 3); 
          
          g.BFS(2); 	
  		
  	}
  }
  
  //Java program to print BFS traversal from a given source vertex.
  /**
   * 방향성 있는 그래프 클래스(인접 리스트 사용)
   */
  class Graph {
  	// 정점
  	private int vertex;		
  	// 인접 리스트
  	private LinkedList<Integer>[] adj;
  	
  	// 그래프 생성자
  	public Graph(int vertex) {
  		this.vertex = vertex;
  		adj = new LinkedList[vertex];
  		for(int i=0; i<vertex; i++) {
  			// 각 인덱스에 리스트 초기화
  			adj[i] = new LinkedList<Integer>();
  		}
  	}
  	// 방향성있는 간선
  	public void addEdge(int v, int w) {
  		// v 정점이 w정점을 인접 (단방향)
  		adj[v].add(w);
  	}
  	/**
  	 * Breadth First Search(BFS)
  	 */
  	public void BFS(int n) {
  		// 각 정점을 방문했는지 여부를 표시한다 (초기값  : false)
  		boolean visited[] = new boolean[vertex];
  		
  		// 너비우선탐색을 위한 큐 생성
  		LinkedList<Integer> queue = new LinkedList<Integer>();
  		
  		visited[n] = true;	// 방문 표시
  			queue.add(n);
  		while (queue.size()>0) {
  			
  			// 큐의 가장 앞부분에서 정점을 꺼내온다
  			n = queue.poll();	
  			System.out.print(n+" ");
  			
  			// 정점 n에 인접한 모든 정점의 리스트를 꺼내온다
  			Iterator<Integer> i = adj[n].listIterator();
  			while(i.hasNext()) {
  				int v = i.next();
  				if(!visited[v]) {
  					visited[v] = true;
  					queue.add(v);
  				}
  			}
  			
  		}
  	}	
  }
  ```

- **깊이우선탐색(DFS : Depth-First Search)** : 아래로 갈 수 있을 때까지 갔다가 막히면 되돌아가서 다시 내려간다

  ```JAVA
  package graph;
  
  import java.util.LinkedList;
  
  public class Main {
  	public static void main(String[] args) {
  		Graph graph = new Graph(4);
  //		graph.addEdge(0, 1);
  		graph.addEdge(0, 2);
  		graph.addEdge(1, 2);
  		graph.addEdge(2, 0);
  		graph.addEdge(2, 3);
  		
  		graph.DFS();
  		
  	}
  	
  }
  
  //Java program to print DFS traversal from a given given graph
  /**
   * 방향성 있는 그래프 클래스(인접 리스트 사용)
   */
  class Graph {
  	// 노드의 개수
  	private int vertex;		
  	// 인접 리스트
  	private LinkedList<Integer>[] adj;
  	
  	// 그래프 생성자
  	public Graph(int vertex) {
  		this.vertex = vertex;
  		adj = new LinkedList[vertex];
  		for(int i=0; i<vertex; i++) {
  			// 각 인덱스에 리스트 초기화
  			adj[i] = new LinkedList<Integer>();
  		}
  	}
  	// 방향성있는 간선
  	public void addEdge(int v, int w) {
  		// v 정점이 w정점을 인접 (단방향)
  		adj[v].add(w);
  	}
  	
  	/**
  	 * @param v 정점 인덱스 번호
  	 * @param visited 방문 여부가 표시된 배열
  	 */
  	public void DFSUtil(int v, boolean visited[]) {
  		visited[v] = true;	// 방문 표시
  		System.out.print(v+" ");
  		
  		for(int i=0; i<adj[v].size(); i++) {
  			// v와 인접한 정점 범위 반복
  			int n = adj[v].get(i);
  			if(!visited[n]) {
  				// 인접한 정점 중 아직 방문하지 않은 정점 이 있다면 순환
  				DFSUtil(n, visited);
  			}
  		}
  	}
      /*
  	 * Depth First Search(DFS)
   	 */
  	public void DFS(){
  		// 각 정점을 방문했는지 여부를 표시한다 (초기값  : false)
  		boolean visited[] = new boolean[vertex];
  		
  		for(int i=0; i<vertex; i++) {
  			if(!visited[i]) {
  				DFSUtil(i, visited);
  			}
  		}
  	}
  	
  }
  
  ```



### DAG (Directed Acyclic Graph)

- 방향성 비 사이클 : 그래프에 방향이 있지만 자신에게 돌아오는 경로가 없어야한다

- 일반적으로 작업의 우선순위를 표현할 때 사용 

  - 우선순위 표현 : 위상정렬 사용

    

#### 위상 정렬 

[유튜브 위상정렬 (참고)](https://www.youtube.com/watch?v=qzfeVeajuyc)

- 작업의 순서대로 노드를 일렬로 정렬하는 것
- 노드의 순서가 왼쪽에서 오른쪽 방향으로 향해야함
- 시작값에 따라 여러 표현 가능 
- 노드로 들어오는 간선 : **Incomming Edge** (개수 : Indegree)
- 노드에서 나가는 간선 : **Outgoing Edge** (개수 : Outdegree)



1. 모든 노드에 대해서 indegree가 0인 노드를 찾는다 (여러개면 그 중 하나 선택)
2. 해당 노드와 노드에서 나가는 간선을 제거
3. 다시 indegree가 0인 노드를 찾아 해당 노드, 노드에서 나가는 간선을 제거
4. 마지막 노드까지 반복



1. 모든 노드의 방문 상태를 false로 초기화

2. 위상 정렬된 순서대로 노드를 정리할 LinkedList를 하나 생성

3. 아직 방문하지 않은 노드를 시작으로 DFS 실행

4. 방문한 노드를 체크 후 그 노드와 인접한 노드에 대해 DFS 실행

5. 마지막 노드까지 DFS를 실행하고 끝에 도달했을때 링크에 해당 노드를 추가한다 

   -> 위상 정렬된다.



### 최소비용신장트리(Minimum Spanning Tree)

- 각 정점을 이어주는 간선(Edge)를 비용이라 가정한다
- **최소의 비용(Egde)**를 가지고 특정 정점들이 연결되도록 하는 방법
- 최소비용신장트리의 해는 유일하지 않다

> 왜 트리일까? 
>
> 공학분야에선 계층적 구조를 트리라고 부르지만 수학 분야에선 트리는 '사이클이 없는 무방향 그래프'를 뜻한다.



#### 최소비용신장트리 조건

1. 그래프
   1. 무방향 가중치 그래프
   2. 각 노드 사이에 가중치가 있어야한다 (가중치의 합이 최소여야 한다)
   3. 사이클(자기 자신에게 다시 돌아오는 경우)이 없어야 한다
2. 문제 해결
   1. 모든 노드들이 서로 연결되는 조건
   2. 가중치의 합이 최소가 되는 조건



#### 대표 최소비용신장트리(MST) 알고리즘

[최소비용 신장 트리 참고](https://gmlwjd9405.github.io/2018/08/28/algorithm-mst.html)

- 크루스칼 알고리즘 (Kruskal MST Algorithm)

  탐욕적인(Greedy) 방법을 이용하여 네트워크(가중치를 간선에 할당한 그래프)의 모든 정점을 최소비용으로 연결하는 최적 해답을 구하는 것

- 프림 알고리즘





















































https://new93helloworld.tistory.com/184?category=691027

https://www.youtube.com/watch?v=qzfeVeajuyc

https://www.youtube.com/watch?v=m-Z19d2uS0w



최소비용신장트리 : 크루스칼 알고리즘
