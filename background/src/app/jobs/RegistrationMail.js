import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  options: {
    delay: 5000, // atraso de 5 segundos
    priority: 3 // como não é uma tarefa tão "importante", outros processos com prioridades 1 ou 2 seriam realizadas primeiro, independente da chegada.
  },
  async handle({ data }) {
    // { var } = desestruturação para que a variavel do parâmetro seja o atributo "Pai" da fila
    // ↑ É uma alternativa para ..(data){ data.data.user.name }
    // Com desestruturação as váriaveis "filhas" também devem ser declaradas "desestruturadas"

    const { user } = data;
    
    // enviar e-mail
    await Mail.sendMail({
        from: 'TESTE <contato@testebiel.com.br>', // Remetente: Nome <endereço>
        to: `${user.name} <${user.email}>`, // destinatário
        subject: 'Confirmação de Cadastro', // Assunto do e-mail
        html: `Olá ${user.name}, obrigado por se cadastrar e bem-vindo.`
    })
    // ** sem o "await" também funciona, porém, corre risco de falhas em caso por exemplo de
    // versão diferente de bibliotecas, variáveis que provocaram uma excessão e o e-mail não
    // foi enviado para o usuário, no entanto, os dados foram gravados no sistema.
    // Então precisaria que o usuário se cadastra-se novamente por que não houve certificação
    // Com "await" ele cria uma fila de processamento que monitora esses tipos de eventos
  },
};
