import styled from "styled-components";

export const TopHeadContainer = styled.div`
  position: relative;
`;

export const SearchBarContainer = styled.form`
  position: absolute;
  right: 0;
  top: 0;
  max-width: 300px;
  width: 100%;
  height: 40px;
  display: flex;

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