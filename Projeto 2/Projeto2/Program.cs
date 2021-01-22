using System;

namespace Projeto2
{
    class Program
    {
        public static void Main(string[] args)
        {
            //double[] myIntArray = new double[4] { -3.5, 3.5, 11.0, 10.0 };

            double[] MA = { -3.5, 3.5, 11.0, 10.0 };
            double total = 0;
            double nota = 0;
            int cont = 0;

            for(int i = 0; i <= 3; i++)
            {

                nota = MA[i];
                if(nota >= 0 && nota <= 10.0)
                {
                    total += nota;
                    cont++;
                }
                else
                {
                    Console.WriteLine("nota invalida");
                }
            }
            
            Console.WriteLine("media = " + total/cont);
        }
    }
}
