import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10rem 0 15rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;

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

  > h1 {
    font-family: 'Tinsel', sans-serif;
    font-size: 64px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }

  .contact_phone {
    display: flex;
    align-items: center;

    svg {
      background-color: ${({ theme }) => theme.secondary};
      border-radius: 50%;
      color: #ffffff;
      padding: 4px;
      height: 20px;
      width: 20px;
      margin-right: .5rem;
    }
    > p {
      color: ${({ theme }) => theme.secondary};
    }
  }

  .contact_mail {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    svg {
      height: 23px;
      width: 23px;
      color: ${({ theme }) => theme.secondary};
      margin-right: .5rem;
    }

    > p {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;