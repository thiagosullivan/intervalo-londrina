import styled from "styled-components";

export const BlogPostInfos = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.primary};
  margin-top: 1rem;
  align-items: center;

  @media (max-width: 420px){
    flex-direction: column;
  }

  > div {
    display: flex;
    font-size: 13px;
    font-weight: 300;
    flex-wrap: wrap;

    .post_author {
      text-transform: uppercase;
      display: flex;

      &::after {
          content: '|';
          display: block;
          margin: 0 15px;
        }

      @media (max-width: 1440px) {
        &::after {
          display: flex;
          align-items: center;
          margin: 0 7px;
        }
      }
    }

    @media (max-width: 1440px) {
      font-size: 12px;
      margin-right: 5px;
      align-items: center;
    }

    @media (max-width: 680px){
       margin-right: 30px;
    }
  }

  .post_category {
    font-size: 12px;
    padding: 0.3rem 2.8rem;
    background: ${({ theme }) => theme.primary};
    color: #ffffff;

    @media (max-width: 1440px) {
      font-size: 10px;
      padding: 0.3rem 1.8rem;
    }

    @media (max-width: 420px){
      margin-top: 1rem;
    }
  }

  @media (max-width: 680px){
    justify-content: flex-start !important;
  }
`;