import styled from "styled-components";

export const TopHeadContainer = styled.div`
  position: relative;
  
  @media (max-width: 980px){
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const SearchBarContainer = styled.form`
  position: absolute;
  right: 0;
  top: 0;
  max-width: 300px;
  width: 100%;
  height: 40px;
  display: flex;

  @media (max-width: 1500px) {
    right: -60px;
  }

  @media (max-width: 1370px) {
    right: -120px;
  }

  @media (max-width: 1240px) {
    top: -90px;
    right: -60px;
  }

  @media (max-width: 1110px) {
    right: 0px;
  }  

  @media (max-width: 980px){
    position: relative;
    top: unset;
    right: unset;
    margin-bottom: 2rem;
  }

  > input {
    width: calc(100% - 50px);
    height: 100%;
    border: 1px solid ${({ theme }) => theme.primary};
    outline: ${({ theme }) => theme.primary};
    background: transparent;
    padding-left: 1.1rem;
    transition: all 300ms ease-in;

    &::placeholder {
      color: ${({ theme }) => theme.secondary};
    }

    &:focus {
      box-shadow: 1px 1px 5px rgba(0,0,0,.2);
    }
  }

  > button {
    width: 50px;
    height: 40px;
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    svg {
      font-size: 30px;
      color: #ffffff;
    }
  }
`;