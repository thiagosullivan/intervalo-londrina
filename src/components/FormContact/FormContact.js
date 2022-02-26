import { useState } from "react";
import theme from "../../styles/theme";
import { FormContainer, Input, TextArea } from "./style";
import toast from 'react-hot-toast';
import { sendContactMail } from "../../services/sendMail";
import LoadingSearchScreen from "../LoadingScreenSearch";


function FormContact() {
  const [ nome, setNome ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ assunto, setAssunto ] = useState("");
  const [ mensagem, setMensagem ] = useState("");
  const [isSearchLoading, setIsSearchLoading] = useState(false)

  async function handleSubmit(event){
    event.preventDefault();
    console.log(nome, email, assunto, mensagem)
    setIsSearchLoading(true)
    
    if(!nome || !email || !mensagem){
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      setIsSearchLoading(false)
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
      setIsSearchLoading(false)
    } catch {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      setIsSearchLoading(false)
    }

    setIsSearchLoading(false)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Fale conosco</h1>
      <Input
        placeholder="Nome"
        onChange={({ target }) => setNome(target.value)}
        value={nome}
        type="text"
        className={`${isSearchLoading ? "disabled-input" : ""}`}
      />
      <Input
        placeholder="E-mail"
        required
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        type="email"
        className={`${isSearchLoading ? "disabled-input" : ""}`}
      />
      <Input
        placeholder="Assunto"
        onChange={({ target }) => setAssunto(target.value)}
        value={assunto}
        type="text"
        className={`${isSearchLoading ? "disabled-input" : ""}`}
      />
      <TextArea
        placeholder="Mensagem"
        onChange={({ target }) => setMensagem(target.value)}
        value={mensagem}
        type="text"
        className={`${isSearchLoading ? "disabled-input" : ""}`}
      />
      <button
        type="submit"
        disabled={isSearchLoading}
        className={`${isSearchLoading ? "disabled-btn" : ""}`}
      >
        Enviar
      </button>
      <div className="loader-form-contact">
        {isSearchLoading && <LoadingSearchScreen />}
      </div>
    </FormContainer>
  )
};

export default FormContact;