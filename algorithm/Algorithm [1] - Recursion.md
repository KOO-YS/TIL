# Algorithm [1] - Recursion(재귀)



#### 재귀함수 : 자기자신을 호출하는 함수

```JAVA
public void function(){
    System.out.println("재귀 함수 호출");
    function();		// 자기 자신을 다시 호출 -> 순환
}
// 꼬리에 꼬리를 무는 함수 호출
// 조건을 걸지 않는다면 무한 루프에 빠지게 된다
```



### - 재귀함수를 사용하는 예시

---

#### 1. 팩토리얼 (Factorial)

- 1부터 n까지 연속한 숫자를 곱한 값
- n! = 1 * 2 * 3 * ... * n
  - 예외 : 0! 은 1



#### 2. 최대공약수 (Greatest Common Divisor, GCD)

- 두 개 이상의 정수의 `공통` `약수` 중에서 `최댓`값

- 모든 정수로 나누어보는 방법

  ```JAVA
  /**
  * [모든 정수로 나누어 보는 방법]
  * 1. A, B 중 더 작은 수를 구한다
  * 2. A, B 두 개가 정확히 나누어 떨어질때까지 수를 1씩 차감한다. 
  * 3. A, B 모두 딱 맞게 나누어 떨어지는 가장 큰 수 리턴
  * 
  * @param A 최대 공약수를 구할 수 1
  * @param B 최대 공약수를 구할 수 2
  * @return 최대공약수
  */
  public static int solution(int A, int B) {
      int div;
      // 둘 중 더 작은 수를 div에 초기화
      if(A>B) {
          div = B;
      } else {
          div = A;
      }
  
      // A와 B 두 개가 div로 나누어떨어지는 수를 구한다 
      while(true) {
          if((A%div==0) && (B%div==0)) {
              return div;
          }
          div--;
      }
  }
  ```

- 유클리드 호제법

  >  2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 [나머지](https://ko.wikipedia.org/wiki/나머지)를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다. 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
  >
  > [ 참조 ]
  >
  > [https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95](https://ko.wikipedia.org/wiki/유클리드_호제법)

  ```JAVA
      public static int solution(int A, int B) {
          /* if(A<B){
              int temp = A;
              A = B;
              B = temp;
          } */	
          if(B == 0) return A;
          return solution(B, A%B);
      }	
  	// 공식을 아는 것만으로도 코드가 눈에 띄게 짧아진다..
  ```

  **주석 이유** : 보통 A가 B보다 크도록 배치하는 예시가 많이 존재하는데,  이런 변환 없이도 잘 돌아간다.  

  **ex)** solution(3, 36) -> return solution(36, 3%36**(=3)** )

  
  
  `[ 번외 ]` : 유클리드 호제법 최대공약수를 이용한 최소 공배수 구하기
  
  **A,B의 최소공배수 = (A*B)/최대공약수**
  
  ```
  [ A, B ] = [ 3, 12 ]
  3 = 1 * 3
  12 = 1 * 2^2 * 3
  최대 공배수 = A*B/최대공약수 = (3 * 2^2* 3)/3 = 2^2*3 = 12 
  ```
  
  
  
  

#### 3. 피보나치 수열 (Fibonacci Sequence)

- 0과 1부터 시작해서 앞에 있는 두 수를 더한 값을 다음 값으로 추가

- 0+1=1, 1+1=2, 1+2=3, 2+3=5...

- 0, 1, 2, 3, 5, 8 ...

  ```java
      public static int solution(int A) {
          if(A == 0) return 0;
          else if(A ==1) return 1;
          else return solution(A-1) + solution(A-2);
      }
  ```

  

  

  > ### 영리한 프로그래밍을 위한 알고리즘 강좌 (권오흠)
  >
  > Recursion의 응용 
  
  #### 1. 미로찾기 1 
  
  ```JAVA
  import java.util.Arrays;
  
  public class Maze {
  	private static int N=8;
      private static int [][] maze = {
          {0,0,0,0,0,0,0,1},
          {0,1,1,0,1,1,0,1},
          {0,0,0,1,0,0,0,1},
          {0,1,0,0,1,1,0,0},
          {0,1,1,1,0,0,1,1},
          {0,1,0,0,0,1,0,1},
          {0,0,0,1,0,0,0,1},
          {0,1,1,1,0,1,0,0}
      };
   
      private static final int PATHWAY_COLOUR = 0;    // 지날 수 있는길                                                         
      private static final int WALL_COLOUR = 1;		// 가로막은 벽
      private static final int BLOCKED_COLOUR = 2;	// 이미 지나갔지만 길이 막혀있다
      private static final int PATH_COLOUR = 3;		// 이미 지났지만 경로가 있을지 없을지 아직 모름
      
      /**
       * 지날 수 있는 길인지 판별한다
       * @param x x좌표
       * @param y y좌표
       * @return 길을 지날 수 있는지의 여부
       */
      public static boolean findMazePath(int x, int y) {
      	if(x<0 || y<0 || x>N-1 || y>N-1) {	// 좌표 범위 초과
      		return false;
      	}else if(maze[x][y] != PATHWAY_COLOUR) { 	// 지날 수 없는 길
      		return false;
      	} else if(x==N-1 && y==N-1){	// 맨 마지막 좌표(미로탈출구)
      		maze[x][y] = PATH_COLOUR;	// 지난 길 표시
      		return true;
      	}else {
      		maze[x][y] = PATH_COLOUR;	// 지난 길 표시
      		// 인근 좌표 4개
      		if(findMazePath(x-1, y) || findMazePath(x+1, y) || findMazePath(x, y+1) || findMazePath(x, y-1)) {
      			// 인근 좌표중 findMazePath()를 true로 반환하는 좌표가 있다 -> 탈출구
      			return true;
      		}
      		maze[x][y] = BLOCKED_COLOUR;	// 인근 좌표를 살펴봤지만 탈출구를 찾을 수 없다
      		return false;
      	}
      }
      
      public static void printMazePath() {
      	for(int i=0;i<maze.length; i++) {
      		System.out.println(Arrays.toString(maze[i]));
      	}
      }
      
      public static void main(String[] args) {
  		System.out.println("미로찾기 전 출력");
  		printMazePath();
  		System.out.println();
  		
  		if(findMazePath(0, 0)) {
  			System.out.println("성공적으로 미로를 탈출했습니다");
  		
          System.out.println();
  		System.out.println("미로찾기 결과 출력");
  		printMazePath();
  	}
      }   
  }
  ```
  
  
  
  #### 2. Counting Cells in a Blob
  
  ```JAVA
  
  public class CountingCells_In_A_Blob {
  	private static int N=8;
      private static int [][] binaryImage = {
          {1,1,0,0,0,0,0,1},
          {1,1,0,0,1,1,0,1},
          {0,0,0,1,0,0,0,1},
          {0,1,0,0,1,1,0,0},
          {0,1,1,1,0,0,1,1},
          {0,1,0,0,0,1,0,1},
          {0,0,0,1,0,0,0,1},
          {0,1,1,1,0,1,0,0}
      };
      
  	private static int BACKGROUND_COLOR = 0;
  	private static int IMAGE_COLOR = 1;
  	private static int ALREADY_COLOR = 2;
  	
  	/**
  	 * 하나의 좌표가 포함된 blob의 크기
  	 * @param x x좌표
  	 * @param y y좌표
  	 * @return blob에 포함된 좌표 갯수
  	 */
  	public static int countCells(int x,int y){
  	    int result = 0;
  	    if(x<0 || x>N-1 || y<0 || y>N-1) {	// 이미지 크기를 벗어남
  	    	return 0;
  	    }
  	    else if(binaryImage[x][y] != IMAGE_COLOR) {	// 배경 또는 이미 색칠한 좌표
  	    	return 0;
  	    }
  	    else{		
  	    	binaryImage[x][y] = ALREADY_COLOR;	// 확인한 표시
  	    	result ++;	// 자신 카운트
  	    	// 북서 -> 북 -> 북동 -> 동 -> 남동 -> 남 -> 남서 -> 서
  	        result += countCells(x-1,y-1) + countCells(x, y-1)
  	                 + countCells(x+1,y-1) + countCells(x+1,y) 
  	                 + countCells(x+1, y+1) + countCells(x, y+1)
  	                 + countCells(x-1, y+1) + countCells(x-1, y);
  	    }
  	    return result;
  	}
  	
  	public static void main(String[] args) {
  		System.out.println("좌표 (1,1)이 포함된 blob의 크기");
  		System.out.println(countCells(1,1));
  	}
  }
  
  ```
  
  
  
  #### 3. N Queens
  
  ```JAVA
  
  public class NQueens {
  	
  	/* 
  	 * N*N 크기의 체스판(배열)에  N개의 말을 배치하되,
  	 * 그중 어떤 두개의 말도 동일한 행, 열, 대각선에 오지 않게 배치해야한다.
  	 * 
  	 * -> N개의 말 중 행이 겹치면 안되고 열이 겹치면 안된다
  	 * 즉, 무조건 1~N번째 행,열에는 말이 하나씩 들어가야한다.
  	 * 
  	 * ++ 기준을 1~N 행으로 잡자++-
  	 * 
  	 * */
  
  	// N*N배열 체스판
  	private static int N = 6;		
  	
  	private static int[] cols = new int[N+1];
  	// ex) cols[1] = 2		-> 		노드 (1,2)
  	// 노드 좌표 : 1차원 배열로 표시 가능하다
  	
  	public static boolean queens(int level) {
  		if(!promising(level)) {	// 행,열,대각선 충돌이 있다 -> 배치 실패
  			return false;
  		} else if(level == N) {	
  			// 겹치는 행,열, 대각선이 없으면서, 마지막 노드 -> 배치 성공!
  			return true;
  		} else {
  			// 겹치는 행,열, 대각선이 없으면 다음 행으로 이동
  			for(int i=1; i<=N; i++) {
  				cols[level+1] = i;
  				if(queens(level+1)) {
  					return true;
  				}
  			}
  			// 반복문이 return되지 않고 끝났다 -> 실패
  			return false;
  		}
  	}
  	/**
  	 * 동일한 행, 열, 대각선에 존재하는 말이 없는지 확인 후 배치를 이어갈 수 있는지 확인
  	 * @return 배치가능성
  	 */
  	public static boolean promising(int level) {	// 답이 아닌 게 확실한 노드를 non-promising 이라고 한다
  		for(int i=1; i<level; i++) {
  			// level행의 말과 i행의 말이 같은 열에 존재 => 충돌
  			if(cols[i] == cols[level]) {
  				return false;
  			}
  			// level행의 말과 i행의 말이 같은 대각선에 존재 => 충돌
  			else if(Math.abs(cols[i]-cols[level]) == (level-i)) {
  				return false;
  			}
  		}
  		// 반복문 중에서 충돌난 부분이 없었다 -> 답일 가능성 있다
  		return true;
  	}
  	/**
  	 * 퀸의 배치 상태를 도면으로 출력
  	 */
  	public static void printQueens() {
  		System.out.println("___________________");
  		for(int i=1; i<cols.length; i++) {
  			for(int j=1; j<=N; j++) {
  				if(cols[i] == j ) {
  					System.out.print("| ♠");
  				}else {
  					System.out.print("| 0");
  				}
  			}
  			System.out.println("|");
  		}
  		System.out.println("___________________");
  	}
  	
  	public static void main(String[] args) {
  		queens(0);
  		printQueens();
  	}
  }
  
  ```
  
  
  
  #### 4. 멱집합
  
  ```JAVA
  
  public class PowerSet {
  	private static char data[] = {'a','b','c','d','e','f'};
  	private static int n=data.length;
  	private static boolean [] include = new boolean [n];
  	 
  	public static void powerSet(int index) {
  		if(index==n){	// index가 마지막 원소를 지났을 때
  			System.out.print("{ ");
  			for(int i=0; i<n; i++) {
  				if(include[i]) System.out.print(data[i] + ", ");        // 포함되어있는 상태의 원소만 출력                                        
  			}
  			System.out.println("}");
  			return;
  		}
  		include[index]=false;
  		powerSet(index+1);	// data[index] 원소 포함하지 않은 원소들의 멱집합
  		include[index]=true;
  		powerSet(index+1);	// data[index] 원소를 포함한 원소들의 멱집합
  	}
  	 
  	public static void main(String[] args) {
  		powerSet(0);
  	}
  }
  ```
  
  