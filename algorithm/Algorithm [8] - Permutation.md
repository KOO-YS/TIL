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







### Swap을 이용한 순열

이 방식은 백트래킹의 기초가 되는 방법이다

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
        System.out.println(sb.toString());
    }
}
```





































> ##### 참고 블로그
>
> https://bcp0109.tistory.com/14
>
> https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/