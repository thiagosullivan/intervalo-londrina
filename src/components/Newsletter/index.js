import { useState } from 'react';
import { NewsletterContainer } from './style';
import axios from 'axios';
import LoadingSearchScreen from '../LoadingScreenSearch';
import toast from 'react-hot-toast';
import theme from "../../styles/theme";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSearchLoading, setIsSearchLoading] = useState(false)

  const subscribe = async (event) => {
    event.preventDefault()

    setIsSearchLoading(true)
    try {
      const response = await axios.post("/api/newsletter", { email });
      toast('Cadastro realizado com sucesso!', {
        style: {
          background: theme.success,
          color: '#fff'
        }
      });
    } catch (e) {
      toast('Ocorreu um erro ao tentar se cadastrar! Nos informe em contato@intervalolondrina.com.br', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    }

    setIsSearchLoading(false)
    setEmail("")
    setNewsletterSucess(true)
  }

  const [ newsletterSucess, setNewsletterSucess] = useState(false)
  console.log(email)

  return (
    
    <NewsletterContainer>
      {newsletterSucess
        ?
          <p className='NewsletterSucess'> Cadastrado com sucesso na newsletter! </p>
        :
        <>
          <form
            onSubmit={subscribe}
          >
            <p>Inscreva-se e fique por dentro de tudo!</p>
            <div className='formInputs'>
              <input
                type='email'
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="buttonNewsletter"
              >
                Inscrever
              </button>
            </div>
          </form>
          <div className="loader-search-container">
            {isSearchLoading && <LoadingSearchScreen />}
          </div>
        </>
      }
        
    </NewsletterContainer>
  )
};

export default Newsletter;