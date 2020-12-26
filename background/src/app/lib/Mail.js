import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail.js';

// método para enviar e-mail onde receberá nos parâmetros as credenciais
export default nodemailer.createTransport(mailConfig);