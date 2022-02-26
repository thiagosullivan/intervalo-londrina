import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10rem 0 15rem;

  @media (max-width: 980px){
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  position: relative;

  .loader-form-contact {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  h1 {
    font-family: 'Tinsel', sans-serif;
    font-size: 64px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1.5rem;
  }

  button {
    width: max-content;
    padding: 0.9rem 3.75rem;
    color: #ffffff;
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    transition: all 150ms ease-in;

    &:hover {
      color: ${({ theme }) => theme.primary};
      background: transparent;
    }

    @media screen and (max-width: 410px){
      width: 100%;
    }    
  }

  .disabled-btn {
    cursor: not-allowed;

    &:hover {
        background: #E58F35 !important;
        color: #ffffff !important;
    }
  }
  .disabled-input {
    pointer-events: none !important;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  font-size: 15px;
  height: 40px;
  background: transparent;
  padding-left: 1rem;
  margin-bottom: 1.35rem;
  outline: ${({ theme }) => theme.primary};

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
    top: 0;
  }

  &:focus {
    box-shadow: 1px 1px 5px rgba(0,0,0,.2);
  }  
`;

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  font-size: 15px;
  height: 155px;
  background: transparent;
  padding-left: 1rem;
  padding-top: 1rem;
  margin-bottom: 1.35rem;
  outline: ${({ theme }) => theme.primary};
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
    top: 0;
  }

  &:focus {
    box-shadow: 1px 1px 5px rgba(0,0,0,.2);
  }
`;

export const SquareContactContainer = styled.div`
  
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 1.5rem 2rem 3rem;
  height: fit-content;

  @media (max-width: 980px){
    max-width: 400px;
    width: 100%;
    margin-top: 5rem;
  }

  > h1 {
    font-family: 'Tinsel', sans-serif;
    font-size: 64px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;

    @media (max-width: 410px){
      text-align: center;
    }
  }

  .contact_phone {
    display: flex;
    align-items: center;

    @media (max-width: 410px){
      flex-direction: column;
    }

    svg {
      background-color: ${({ theme }) => theme.secondary};
      border-radius: 50%;
      color: #ffffff;
      padding: 4px;
      height: 20px;
      width: 20px;
      margin-right: .5rem;

      @media (max-width: 410px){
        margin-right: 0;
        margin-bottom: .5rem;
      }
    }
    > p {
      color: ${({ theme }) => theme.secondary};
      
      @media (max-width: 325px){
        font-size: 14px;
      }
    }
  }

  .contact_mail {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 410px){
      flex-direction: column;
    }

    svg {
      height: 23px;
      width: 23px;
      color: ${({ theme }) => theme.secondary};
      margin-right: .5rem;

      @media (max-width: 410px){
        margin-right: 0;
        margin-bottom: .5rem;
      }
    }

    > p {
      color: ${({ theme }) => theme.secondary};

      @media (max-width: 325px){
        font-size: 14px;
      }
    }
  }
`;