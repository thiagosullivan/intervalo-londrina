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

  .NewsletterSucess {
    font-family: 'Tinsel', sans-serif;
    font-size: 55px;
    font-weight: 500;
    color: #ffffff;
    max-width: unset;
  
    @media (max-width: 980px){
      margin-bottom: 2rem;
    }
  }

  form {

    > p {
      font-family: 'Tinsel', sans-serif;
      font-size: 55px;
      font-weight: 500;
      color: #ffffff;
      max-width: unset;
      margin-bottom: 1rem;
      
        @media (max-width: 980px){
          margin-bottom: 2rem;
        }
      }

    .formInputs {
      display: flex;
      align-items: center;

      @media (max-width: 570px){
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      > input {
        display: flex;
        width: 100%;
        border: 1px solid ${({ theme }) => theme.primary};
        background-color: transparent;
        padding-left: 1.1rem;
        color: ${({ theme }) => theme.white};
        outline: ${({ theme }) => theme.primary};
        height: 40px;

        &::placeholder {
          color: ${({ theme }) => theme.white};
        }        
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
  
  .loader-search-container {
    display: flex;
    position: absolute;
}
`;