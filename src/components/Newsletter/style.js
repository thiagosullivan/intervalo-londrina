import styled from "styled-components";

export const NewsletterContainer = styled.section`
  background: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3.1rem 8.7rem;

  @media (max-width: 1370px){
    padding: 3.1rem;
  }

  @media (max-width: 980px){
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 430px){
    padding: 1rem;
  }

  .NewsletterSucess,
  .Newsletter_title label {
  font-family: 'Tinsel', sans-serif;
  font-size: 55px;
  font-weight: 500;
  color: #ffffff;
  max-width: unset;
  
    @media (max-width: 980px){
      margin-bottom: 2rem;
    }
  }
  
  .Newsletter_title {
    margin-bottom: 1rem;
  }

  > .Form_newsletter {
    display: flex;
    flex-direction: column;

    .newsletter_inputs {
      display: flex;
      width: 100%;

      @media (max-width: 570px){
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    
    p {
      width: 100%;

      #tlemail {
        /* max-width: 300px; */
        width: 100%;
        height: 40px;
        border: 1px solid ${({ theme }) => theme.primary};
        padding-left: 1.1rem;
        background: transparent;
        color: #ffffff;
        outline: ${({ theme }) => theme.primary};
        

        &::placeholder {
          color: #ffffff;
        }

        &:focus {
          box-shadow: 2px 2px 7px rgba(0,0,0,.5);
        }
      }
    }

    .buttonNewsletter {
      width: 100px;
      height: 40px;
      background: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
      color: #ffffff;

      @media (max-width: 570px){
        margin-top: 1rem;
      }
    }    
  }
`;