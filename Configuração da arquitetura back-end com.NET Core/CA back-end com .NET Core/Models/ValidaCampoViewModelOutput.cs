using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CA_back_end_com_.NET_Core.Models
{
    public class ValidaCampoViewModelOutput
    {
        public IEnumerable<string> Erros { get; set; }

        public ValidaCampoViewModelOutput(IEnumerable<string> erros)
        {
            Erros = erros;
        }
    }
}
