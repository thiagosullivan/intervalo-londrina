import axios from 'axios';

export const sendContactMail = async (nome, senderMail, assunto, content) => {
  const data = {
    nome,
    assunto,
    senderMail,
    content
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}