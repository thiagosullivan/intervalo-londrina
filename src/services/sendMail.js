import axios from 'axios';

export const sendContactMail = async (name, senderMail, assunto, content) => {
  const data = {
    name,
    senderMail,
    assunto,
    content
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}