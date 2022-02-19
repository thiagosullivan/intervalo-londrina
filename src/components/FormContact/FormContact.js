import { useState } from "react";
import theme from "../../styles/theme";
import { FormContainer, Input, TextArea } from "./style";
import toast from 'react-hot-toast';
import { sendContactMail } from "../../services/sendMail";


function FormContact() {
  const [ nome, setNome ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ assunto, setAssunto ] = useState("");
  const [ mensagem, setMensagem ] = useState("");

  async function handleSubmit(event){
    event.preventDefault();
    console.log(nome, email, assunto, mensagem)
    
    if(!nome || !email || !assunto || !mensagem){
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });  
      return
    }

    try {
      await sendContactMail(nome, email, assunto, mensagem);
      setNome("");
      setEmail("");
      setAssunto("");
      setMensagem("");
      toast('Sua mensagem foi enviada com sucesso!', {
        style: {
          background: theme.success,
          color: '#fff'
        }
      }); 
    } catch {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });  
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Fale conosco</h1>
      <Input
        placeholder="Nome"
        onChange={({ target }) => setNome(target.value)}
        value={nome}
        type="text"
      />
      <Input
        placeholder="E-mail"
        required
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        type="email"
      />
      <Input
        placeholder="Assunto"
        onChange={({ target }) => setAssunto(target.value)}
        value={assunto}
        type="text"
      />
      <TextArea
        placeholder="Mensagem"
        onChange={({ target }) => setMensagem(target.value)}
        value={mensagem}
        type="text"
      />
      <button type="submit">Enviar</button>
    </FormContainer>
  )
};

export default FormContact;