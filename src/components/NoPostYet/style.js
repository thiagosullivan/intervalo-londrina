import styled from "styled-components";

export const NoPostsYetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0;

  p {
    text-align: center;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.primary};
    font-size: 2rem;
  }

  a {
      border: 1px solid ${({ theme }) => theme.primary};
      display: flex;
      align-items: center;
      justify-content: center;      
      height: 70px;
      width: 250px;
      font-weight: 500;
      font-size: 1.5rem;
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
      
      transition: all ease-in 150ms;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.primary};
      }
    }
`;