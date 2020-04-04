#### goorm 미로 찾기

[https://level.goorm.io/exam/43131/4x4-%EB%AF%B8%EB%A1%9C%EC%B0%BE%EA%B8%B0/quiz/1](https://level.goorm.io/exam/43131/4x4-미로찾기/quiz/1)

```
import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		// 4*4 입력
		int[][] maze = new int[4][4];
		for(int i=0; i<maze.length; i++){
			// StringTokenizer에 공백으로 자른 값을 저장한다.
			StringTokenizer token = new StringTokenizer(br.readLine()," ");
			int j = 0;
			while(token.hasMoreTokens()) {
				// 값이 있을 때까지 반복하며 값 저장 
				// nextToken() String 반환으로 Integer로 형변환
				maze[i][j++] = Integer.parseInt(token.nextToken());
			}
		}

		
		findWay(maze, 0,0);	// 시작
		
		
		// 4*4 출력
		for(int i=0; i<maze.length; i++){
			for(int j=0; j<maze[i].length; j++){
				 System.out.print(" "+way[i][j]+" ");
			}
			System.out.println();
		}
	}
	// 루트를 표시할 배열
	public static int[][] way = new int[4][4];
	// 길(1)을 찾아 4,4까지 이어저있는 길 찾아 표시
	public static boolean findWay(int[][] maze, int x, int y){
		if(x<0 || x>3 || y<0 || y>3){			// 범위 초과
			return false;
		}else if(maze[x][y] == 0){	// 지나갈 수 없는 길
			return false;
		}
		else if(x==3 && y==3){		// 탈출구
			way[x][y] = 1;
			return true; 
		} else if(findWay(maze, x+1,y) || findWay(maze, x, y+1) || findWay(maze, x-1, y) || findWay(maze,x, y-1)){	// 길탐색
			way[x][y] =1;
			return true;
		}
		return false;
	}
}
```



#### n queen

```
import java.io.*;
import java.util.*;
class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		// 체스판의 크기 입력받기
		int size = Integer.parseInt(br.readLine());
		
		// 상하좌우, 대각선으로 공격할 수 있기에 한 줄에 한개의 퀸만 존재할 수 있다.
		// 행을 중심으로 배치
		int[] board = new int[size];	// index -> 행 board[index] -> 열
		// 검사해야할 조건
		/*
			1. 행, 열, 대각선의 충돌이 있는지
			2. 마지막 줄인지 -> 성공
			3. 다음 줄에 case 추가
		*/
		
		for(int i=0; i<size; i++){
			board[0] = i;
			queens(board, 0);
		}
		System.out.println(total);
	}
	public static int total = 0;
	// 정렬 해보기
	// public static boolean queens(int[] board, int level){
	// 	if(!promising(board, level)){	// 충돌이 있으면 false
	// 		return false;
	// 	} else if(level == (board.length-1)){		// 충돌이 없으며 마지막 행에 도달했을 때
	// 		System.out.println(Arrays.toString(board));
	// 		total++;
	// 		return true;
	// 	} else {
	// 		for(int i=0; i<board.length; i++){
	// 			board[level+1] = i;		// 다음 행에 경우의 수 대입해보기
	// 			if(queens(board, level+1)){
	// 				return true;
	// 			}
	// 		}
	// 		return false;
	// 	}
	// }
	public static void queens(int[] board, int level){
		if(!promising(board, level)){	// 충돌이 있으면 false
			
		} else if(level == (board.length-1)){		// 충돌이 없으며 마지막 행에 도달했을 때
			//System.out.println(Arrays.toString(board));
			total++;
			
		} else {
			for(int i=0; i<board.length; i++){
				board[level+1] = i;		// 다음 행에 경우의 수 대입해보기
				queens(board, level+1);
			}
		}
	}
	// 충돌 여부 확인 메소드
	public static boolean promising(int[] board, int level){
		for(int i=0; i<level; i++){
			if(board[i] == board[level]){		// 같은 열에 있는 경우 -> 충돌
				return false;
			} else if((level-i) == Math.abs(board[i]-board[level])){	// 같은 대각선상에 있는 경우 -> 충돌
				return false;
			}
		}
		// 충돌이 없다.
		return true;
	}
}
```

```
import java.io.*;
import java.util.*;
class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		// 체스판의 크기 입력받기
		int size = Integer.parseInt(br.readLine());
		
		// 상하좌우, 대각선으로 공격할 수 있기에 한 줄에 한개의 퀸만 존재할 수 있다.
		// 행을 중심으로 배치
		int[] board = new int[size];	// index -> 행 board[index] -> 열
		// 검사해야할 조건
		/*
			1. 행, 열, 대각선의 충돌이 있는지
			2. 마지막 줄인지 -> 성공
			3. 다음 줄에 case 추가
		*/
		
		for(int i=0; i<size; i++){
			board[0] = i;
			queens(board, 0);
		}
		System.out.println(total);
	}
	public static int total = 0;
	
	public static void queens(int[] board, int level){
		if(promising(board, level)){	// 충돌이 있으면 false
			 if(level == (board.length-1)){		// 충돌이 없으며 마지막 행에 도달했을 때
				//System.out.println(Arrays.toString(board));
				total++;
				
			 } else {
				for(int i=0; i<board.length; i++){
					board[level+1] = i;		// 다음 행에 경우의 수 대입해보기
					queens(board, level+1);
				}
			 }
		}
	}
	// 충돌 여부 확인 메소드
	public static boolean promising(int[] board, int level){
		for(int i=0; i<level; i++){
			if(board[i] == board[level]){		// 같은 열에 있는 경우 -> 충돌
				return false;
			} else if((level-i) == Math.abs(board[i]-board[level])){	// 같은 대각선상에 있는 경우 -> 충돌
				return false;
			}
		}
		// 충돌이 없다.
		return true;
	}
}
```

