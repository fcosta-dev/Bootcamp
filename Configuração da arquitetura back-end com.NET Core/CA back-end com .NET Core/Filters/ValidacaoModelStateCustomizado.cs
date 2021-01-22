using CA_back_end_com_.NET_Core.Models.Usuarios;
using CA_back_end_com_.NET_Core.Models;
using Microsoft.AspNetCore.Mvc.Filters;

namespace CA_back_end_com_.NET_Core.Filters
{
    public class ValidacaoModelStateCustomizado : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ValidaCampoViewModelOutput(ModelState.SelectMany(sm => sm.Value.Errors).Select(s => s.ErrorMessage)));
            }
            return Ok(loginViewModelInPut);
        }
    }
}
