import { useState } from 'react';
import { NewsletterContainer } from './style';

function Newsletter() {

  const [ newsletterSucess, setNewsletterSucess] = useState(false)

  function sendNewsLetter(){
    window.open('https://tinyletter.com/Intervalo', 'popupwindow', 'scrollbars=yes,width=800,height=600');
    return (
      true,
      setNewsletterSucess(true)
    )
  }

  return (
    <NewsletterContainer>
      {newsletterSucess
        ?
          <p className='NewsletterSucess'> Cadastrado com sucesso na newsletter! </p>
        :
        <form
          action="https://tinyletter.com/Intervalo"
          method="post"
          target="popupwindow"
          onSubmit={sendNewsLetter}
          className='Form_newsletter'
        >
          <p className='Newsletter_title'>
            <label htmlFor="tlemail" placeholder="Seu e-mail">Inscreva-se e fique por dentro de tudo!</label>
          </p>
          <div className='newsletter_inputs'>
            <p>
              <input type="text" name="email" id="tlemail" placeholder="Seu e-mail" />
            </p>
            <input type="hidden" value="1" name="embed"/>
            <input className='buttonNewsletter' type="submit" value="Inscrever" />
          </div>
        </form>
      }
        
    </NewsletterContainer>
  )
};

export default Newsletter;