using System;
using System.Globalization;

namespace Projeto_3
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[] V = { 1, 21 };
            int R = 3;
            int soma = 0;

            for (int i = 0; i < 2; i++)
            {
                int Vm = V[i];
                if (R > Vm)
                {
                    soma = R + 1;
                    for(int j = 1;j <= 5; j++)
                    {
                        int result = soma * j;
                        if(result == 20)
                        {
                            Console.WriteLine(j);
                        }
                    }
                }
            }
        }
    }
}
