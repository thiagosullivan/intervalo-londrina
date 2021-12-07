import styled from "styled-components";

export const SeeMoreContainer = styled.section`
  border-left: 2px solid ${({ theme }) => theme.secondary};
  padding-left: 3.6rem;
  margin-bottom: 9.6rem;
  
  h3 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 300;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;
  }
`;

export const SeeMorePostContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding-bottom: 3rem;
  border-bottom: 2px solid ${({ theme }) => theme.secondary};
  margin-bottom: 3.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  > h2 {
    font-family: 'Tinsel', sans-serif;
    font-size: 50px;
    color: ${({ theme }) => theme.secondary};
    font-weight: 500;
    margin: 2rem 0;
  }

  p {
    color: ${({ theme }) => theme.secondary};
    font-size: 17px;
    line-height: 24px;
  }
`;

export const ImgPost = styled.div`
    background: url(${props => props.imgUrl}) center no-repeat;
    background-size: cover;
    width: 400px;
    height: 210px;
`;