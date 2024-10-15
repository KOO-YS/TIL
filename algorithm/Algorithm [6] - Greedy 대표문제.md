# 백준 11047 - 동전 0

[동전 0](https://www.acmicpc.net/problem/11047)

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer token = new StringTokenizer(br.readLine(), " ");
		
		// 준규가 가지고 있는 동전 종류 개수 (ex. 1원, 5원, 10원, 50원...10000원 등등)
		int N = Integer.parseInt(token.nextToken());
		// 동전을 사용해 만들 수 있는 가치의 합
		int K = Integer.parseInt(token.nextToken());
		
		// 동전 종류를 저장할 배열
		int[] cash = new int[N];
		
		// N개의 동전의 종류 입력
		for(int i=cash.length-1; i>=0; i--) {
			cash[i] = Integer.parseInt(br.readLine());
		}
		
		int coin = useMinCoin(cash, K);
		System.out.println(coin);
	}
	/**
	 * 최소한의 동전 갯수를 사용해 주어진 금액을 맞춘다
	 * 
	 * @param cash 돈의 종류가 담긴 배열
	 * @param K 동전을 사용해서 만들 돈의 가치 합
	 * @return 가치를 만들기 위해 필요한 동전 최소 갯수
	 */
	public static int useMinCoin(int[] cash, int K) {
		int coin = 0;
		for(int i:cash) {
			if((K/i)>0) {
				coin += K/i;
				K %= i;
			}
		}
		return coin;
	}
}

```