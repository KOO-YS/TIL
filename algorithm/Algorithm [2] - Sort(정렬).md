# Algorithm [2] - Sort(정렬)



#### 간단하지만 효율면에서 떨어지는 정렬 방법

- Selection Sort (선택 정렬)

  ```JAVA
  /**
  * 배열에서 가장 작은 값(또는 큰 값)을 찾아내 맨 앞의 값과 교환
  * 점점 데이터 범위를 좁혀가며 교환 정렬
  * @param list 정렬 대상
  */
  void selectionSort(int[] list) {
      int indexMin, temp;
  	
      for (int i = 0; i < list.length - 1; i++) {
          indexMin = i;
          for (int j = i + 1; j < list.length; j++) {	
              // 범위안에서 가장 작은 값을 찾아 교환
              if (list[j] < list[indexMin]) {
                  indexMin = j;
              }
          }
          temp = list[indexMin];
          list[indexMin] = list[i];
          list[i] = temp;
      }
  }
  ```

- Bubble Sort  (거품 정렬)

  ```JAVA
  /**
  * 인접한 두 수의 크기를 비교하여 정렬
  * @param arr 정렬 대상
  */
  void bubbleSort(int[] arr) {
      int temp = 0;
  	for(int i = 0; i < arr.length; i++) {
  		for(int j= 1 ; j < arr.length-i; j++) {
  			if(arr[j]<arr[j-1]) {
  				temp = arr[j-1];
  				arr[j-1] = arr[j];
  				arr[j] = temp;
  			}
  		}
  	}
  	System.out.println(Arrays.toString(arr));
  }
  ```

- Insection Sort (삽입 정렬)

  ```
  /**
  * 한 데이터 값의 크기가 들어가야할 곳을 탐색한 후, 나머지를 한칸씩 옮긴 뒤 끼워넣는다
  * @param arr 정렬 대상
  */
  void insertionSort(int[] arr) {
     for(int index = 1 ; index < arr.length ; index++){
  
        int temp = arr[index];
        int aux = index - 1;
  
        while( (aux >= 0) && ( arr[aux] > temp ) ) {
  
           arr[aux+1] = arr[aux];
           aux--;
        }
      arr[aux + 1] = temp;
     }
}
    ```
  







#### 효율성을 높인 정렬 방법

- #### Merge Sort (합병 정렬)
  
  1. 데이터를 작은 크기로 동일하게 분할한다
  2. 분할된 범위에서 각각 정렬
  3. 병합을 통해 전체 데이터에 대한 정렬 완료



- Quick Sort (퀵 정렬)

  - 분할 정복으로 인해 빠른 정렬에 속한다

  - 평균 시간 복잡도는 O(NlogN)이지만 최악의 경우 O(N^2)까지 간다

    ```
    https://www.youtube.com/watch?v=gBcUO_6JXIA&list=PLRx0vPvlEmdDHxCvAQS1_6XV4deOwfVrz&index=6
    ```

    



- #### Heap Sort (힙 정렬)

  - 최악의 경우에도 시간복잡도가 nlogn이 되는 정렬 (효율성이 좋다)
  
  - 힙 정렬에는 추가 배열이 필요하지 않다.
  
  - '힙' 자료구조를 이용해 정렬
  
  - 이론 참고 : https://gmlwjd9405.github.io/2018/05/10/algorithm-heap-sort.html
  
  - 쉬운 힙 정렬 강의 : https://youtu.be/WDm8a9GvQyU
  
    ```JAVA
    import java.util.Arrays;
    
    public class Heap {
    	public static void main(String[] args) {
    		int arr[] = {12, 11, 13, 5, 6, 7};
    		System.out.println(Arrays.toString(arr));
    		heapSort(arr, arr.length);
    		System.out.println(Arrays.toString(arr));
    	}
    	
    	public static void heapSort(int[] arr, int size) {
    		int i = size/2 -1;		// heap의 높이가 N일때, i는 N-1 레벨에서 오른쪽에서 가장 먼저 자식이 있는 노드로 계산된다
    		/* (max-heap-property) 이진트리를 힙 구조로 변경 		*/
    		while(i>=0) {		// 자식을 가진 노드 전체(최상위 노드까지)진행
    			heapify(arr, i--, size);
    		}
    		
    		for(int r=size-1; r>=0; r--) { // 루트 값을 끝으로
    			 swap(arr, 0, r);		// 가장 큰 값 -> 범위 끝으로 배치 (큰 값부터 정렬)
    			 heapify(arr, 0, r);	// 0 인덱스에 다시 범위에서 가장 큰 값을 배치
    		}
    	}
    	// 이진트리를 힙(max) 구조로 만들기 위해 부모 노드보다 자식 노드의 값이 더 큰 경우, 값을 swap한다
    	public static void heapify(int[] arr, int i, int size) {
    		int left = 2*i+1;		// 왼쪽 자식노드
    		int right = 2*i+2;		// 오른쪽 자식노드
    		
    		if(left<size && arr[left] > arr[i]) {	// 자식노드가 부모노드보다 값이 크다
    			swap(arr, i, left);		// 노드 교환 
    		}
    		if(right<size && arr[right] > arr[i]) {	// 자식노드가 부모노드보다 값이 크다
    			swap(arr, i, right);		// 노드 교환 
    		}
    	}
    	// 노드 교환
    	public static void swap(int[] arr, int p, int c) {
    		int temp = arr[p];
    		arr[p] = arr[c];
    		arr[c] = temp;
    	}
    }
    ```
  
  
  
- #### Heap의 응용, 우선 순위 큐(Priority Queue)

  - 최대 우선 순위 큐 / 최소 우선 순위 큐 중 **최대 우선 순위 큐** 를 기준으로 잡는다

  - FIFO 구조의 큐와는 다르게 들어간 순서 상관없이 **우선 순위가 높은 데이터**부터 나온다

  - 최대 우선 순위 큐가 지원하는 두가지 연산

    - INSERT(x) : 새로운 원소 x를 삽입
    - EXTRACT_MAX : 최대값을 삭제하고 반환

    ```
    /* INSERT() 연산을 위한 고려사항 */
    새 원소를 추가할 때 complate binary tree를 만족하려면 가장 마지막 노드 자리에 추가될 수 밖에 없다.
    그러나 추가 이후 max heap property를 만족하지 못하므로, 힙 정렬을 거쳐야한다.
    
    /* EXTRACT_MAX 연산을 위한 고려사항 */
    힙 구조는 complete binary tree이므로 아무 노드나 삭제할 수 없고 마지막 노드만 삭제할 수 있다. 
    ```

    

---



#### 정렬 알고리즘 유형

- #### Comparison Sort 

  - 데이터의 **상대적 크기 관계**만을 비교하며 정렬
  - 데이터 크기 관계만 정의되어있다면 어떠한 데이터형도 적용 가능
  - ex) 버블, 삽입, 선택, 퀵, 힙 정렬

- #### Non-Comparison Sort

  - 정렬된 데이터에 대한 사전 지식을 이용
  - 적용에 제한이 있다
  - ex) Bucket, Radix 정렬



#### 정렬문제의 하한(Lower Bound)

- 입력된 데이터를 한 번씩 다보기 위해서 최소 O(n)의 시간복잡도가 필요
- 합병정렬과 힙정렬 알고리즘 시간복잡도 : O(nlogn)
- 어떠한 비교 정렬 알고리즘도 O(nlogn)보다 나을 수 없다



#### 비교 정렬이 아닌 유형의 정렬 알고리즘

- Counting Sort







선형시간 알고리즘

- O(n+k) ==  O(n) if k = O(n)			* k가 클 경우 비실용적
- Stable 정렬 알고리즘에 속한다
  - 입력에 동일한 값이 있을때 먼저 입력된 값이 먼저 출력된다
