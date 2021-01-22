using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CA_back_end_com_.NET_Core.Models;
using CA_back_end_com_.NET_Core.Models.Usuarios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace CA_back_end_com_.NET_Core.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        /// <summary>
        /// teste
        /// </summary>
        /// <param name="loginViewModelInPut"></param>
        /// <returns>Retorna satus ok, dados do usuario e o token em caso</returns>
        [SwaggerResponse(statusCode: 200, description:"Sucesso ao autenticar", Type = typeof(LoginViewModelInPut))]
        [SwaggerResponse(statusCode: 200, description:"Campo obrigatórios", Type = typeof(ValidaCampoViewModelOutput))]
        [SwaggerResponse(statusCode: 200, description:"Erro Interno", Type = typeof(ErroGenericoViewModel))]
        [HttpPost]
        [Route("logar")]
        public IActionResult Logar(LoginViewModelInPut loginViewModelInPut)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new ValidaCampoViewModelOutput(ModelState.SelectMany(sm => sm.Value.Errors).Select(s => s.ErrorMessage)));
            }
            return Ok(loginViewModelInPut);
        }
        [HttpPost]
        [Route("registrar")]
        public IActionResult Registrar(RegistroViewModelInput LoginViewModelInPut)
        {
            return Created("", LoginViewModelInPut);
        }
    }
}
