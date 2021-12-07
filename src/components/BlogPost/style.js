import styled from "styled-components";

export const BlogPostContainer = styled.section`
  max-width: 815px;
  width: 100%;
  padding-right: 4.6rem;
  margin-bottom: 9.5rem;

  > h1 {
    font-family: 'Tinsel', sans-serif;
    font-size: 85px;
    color: ${({ theme }) => theme.secondary};
    font-weight: 500;
    margin: 2rem 0;
  }

  p {
    color: ${({ theme }) => theme.secondary};
    text-align: justify;
  }
`;