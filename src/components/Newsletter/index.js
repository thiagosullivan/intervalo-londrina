import { NewsletterContainer } from './style';

function Newsletter() {
  return (
    <NewsletterContainer>
      <p>Inscreva-se e fique por dentro de tudo!</p>
      <form>
        <input placeholder="Seu e-mail" type="text" />
        <button type="submit">
          Inscrever
        </button>
      </form>
    </NewsletterContainer>
  )
};

export default Newsletter;