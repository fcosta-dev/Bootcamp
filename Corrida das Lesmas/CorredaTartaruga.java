import java.io.IOException;
import java.util.Scanner;

public class URI 1789 {
    
	public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int L, nivel, velocidade;
        while (leitor.hasNext()) {
        	L = leitor.nextInt();
        	nivel = 0;
        	for (int i = 0; i < L; i++) {
        		velocidade = leitor.nextInt();
        		if (velocidade < 10 && nivel <= 1)  nivel = 1;
        		else if (velocidade >= 20 && nivel <= 3) nivel = 3;
        		else if (nivel < 2) nivel = 2;
        	}
        	System.out.println(nivel);
        }
	}
	
}