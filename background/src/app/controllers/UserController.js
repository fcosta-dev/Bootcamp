import passwordGenerator from "password-generator"; // Instale a biblioteca com o comando 'npm install password-generator'

import Queue from "../lib/Queue";

export default {
  // este método recebe o "request" e devolve o "response"
  async store(req, res) {
    const { name, email } = req.body; // dados que será recebido

    // objeto do usuário com as propriedades para enviar ao servidor
    const user = {
      name,
      email,
      password: passwordGenerator(15, false), // número randômico de 15 caracteres sem repetição
    };

    await Queue.add("RegistrationMail", { user }); // adicionando evento a fila
    // RegistrationMail = chave
    // { user } = json que tem acesso ao método que possui essa chave ("enviado" para RegistrationMail.js)

    return res.json(user);
  },
};
