using System;

namespace Hora_da_Corrida
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 3;
            int y = 11;

            int totalPlacas = x * y;

            for (int i = 10; i <= 90; i += 10)
            {
                float result = (float)totalPlacas / 100 * i;
                Console.Write(Math.Ceiling(result) + " ");
            }
        }
    }
}
