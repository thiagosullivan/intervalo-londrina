import styled from "styled-components";

export const ResultContainerPage = styled.main`

  .Search__error {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.primary};
      margin-bottom: 2rem;
    }

    a {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
      border: 1px solid ${({ theme }) => theme.primary};
      transition: all 150ms ease-in;
      height: 50px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`