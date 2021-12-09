import styled from "styled-components";

export const CategoriesPostsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15rem;
  max-width: 1300px;

  @media (max-width: 980px){
    margin-top: 5rem;
  }
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

export const LinkText = styled.a`
  color: ${(props) => (props.href == props.pathName ? '#FFFFFF' : '#4D4343')};
  background: ${(props) => (props.href == props.pathName ? '#E58F35' : 'transparent')};
  font-size: 15px;
  padding: 0.6rem 2.8rem;
  border: 1px solid ${({ theme }) => theme.primary};
  margin: .7rem 1.3rem;

  @media (max-width: 980px){
    width: 180px;
    text-align: center;
  }
`;