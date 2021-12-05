import styled from "styled-components";

export const CategoriesPostsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
`;

export const ButtonCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContegoryContainer = styled.button`
  margin: 0 1.4rem;
  padding: 0.6rem 2.75rem;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  transition: all 150ms ease-in;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary};
    color: #ffffff;
  }
`;