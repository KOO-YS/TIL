# Algorithm [8] - Permutation



## 순열(Permutation)

총 `n`개의 값 중에서 `r`개의 요소를 **순서를 따져** 뽑는 경우의 수

```
[1,2,3] 배열의 총 3개의 값에서 2개를 순서를 따져서 뽑는 경우
------
[1, 2]
[1, 3]
[2, 1]
[2, 3]
[3, 1]
[3, 2]
------ 총 6개의 경우의 수를 만들 수 있다
```







#### 1. Swap 활용





<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/NewPermutation.gif">

##### Swap 순열 구현 

```java
public class Main {

    public static void main(String[] args) {
        // 순열을 위한 재료
        Character[] letters = {'A', 'B', 'C'};

        // 순열 조합
        permutation(letters, 0, letters.length, letters.length);

    }

    //--------------------- [ swap 이용 순열 구현 파트 ] ---------------------//
    
    /**
     * 배열 인덱스 swap을 이용한 순열
     * @param letters 요소를 뽑을 배열
     * @param turn 몇번째 요소를 뽑을 순서인지
     * @param n    총 갯수 -> 사실 별 필요없다. letters.length 써도 됨
     * @param r    뽑을 갯수
     */
    public static <T> void permutation(T[] letters, int turn, int n, int r){
        if(turn == r){
            printArr(letters);
            return;
        } else {
            for(int i = turn; i<n; i++){
                permutation(swap(letters, turn, i), turn+1, n, r);
            }
        }
    }

    /**
     * @param x y : 서로 바꿀 두 문자의 위치 인덱스
     * @return 변환을 마친 T 배열
     */
    public static <T> T[] swap(T[] letters, int x, int y){
        T temp = letters[x];
        letters[x] = letters[y];
        letters[y] = temp;
        return letters;
    }

    /*
     * 배열의 원소들을 순서대로 출력
     */
    public static <T> void printArr(T[] letters){
        StringBuilder sb = new StringBuilder();
        for(T l : letters){
            sb.append(l).append(" ");
        }
        sb.append("\n");

        // 출력
        System.out.print(sb.toString());
    }
}
```





#### 2. 체크리스트 활용

DFS 트리와 체크리스트 사용

백트래킹의 기본이 된다

<img src="https://miro.medium.com/max/2160/1*xrjS6JIZ5f7wFCNBDPrr0g.png">

```java
public class Main {

    public static void main(String[] args) {
        // 순열을 위한 재료
        Character[] letters = {'A', 'B', 'C'};

        // 순열 조합
        int n = letters.length;         // 총 갯수
        int r = letters.length;         // 뽑을 갯수
        permutationWithDFS(letters, new Character[r], new boolean[n], 0, n, r);

    }

    //--------------------- [ DFS 이용 순열 구현 파트 ] ---------------------//
    

    /**
    * DFS를 이용한 순열
    * @param letters 요소를 뽑을 배열
    * @param result 순열 결과를 담을 배열(뽑을 갯수만큼 크기 제한)
    * @param visited 각 요소가 뽑혔는지 방문 여부를 확인할 배열
    * @param turn 몇번째 요소를 뽑을 순서인지
    * @param n    총 갯수 -> 사실 별 필요없다. letters.length 써도 됨
    * @param r    뽑을 갯수
    */
    public static <T> void permutationWithDFS(T[] letters, T[] result, boolean[] visited, int turn, int n, int r){
        if(turn == r){
            printArr(result);
        } else {
            for(int i=0; i<n; i++){
                if(!visited[i]){
                    result[turn] = letters[i];
                    visited[i] = true;  // 사용하고
                    permutationWithDFS(letters, result, visited, turn+1, n, r);
                    visited[i] = false; // 다시 되돌린 후 다음 것을 진행하는 -> 백트래킹
                }
            }
        }
    }
    /**
    * @param x y : 서로 바꿀 두 문자의 위치 인덱스
    * @return 변환을 마친 T 배열
    */
    public static <T> T[] swap(T[] letters, int x, int y){
        T temp = letters[x];
        letters[x] = letters[y];
        letters[y] = temp;
        return letters;
    }

    /*
    * 배열의 원소들을 순서대로 출력
    */
    public static <T> void printArr(T[] letters){
        StringBuilder sb = new StringBuilder();
        for(T l : letters){
            sb.append(l).append(" ");
        }
        sb.append("\n");

        // 출력
        System.out.print(sb.toString());
    }
}
```































> ##### 참고 사이트
>
> https://bcp0109.tistory.com/14
>
> https://youtu.be/6E69_ddpBwU
>
> https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
>
> https://medium.com/algorithms-and-leetcode/backtracking-e001561b9f28