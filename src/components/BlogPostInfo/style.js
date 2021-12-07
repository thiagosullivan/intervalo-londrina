import styled from "styled-components";

export const BlogPostInfos = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.primary};
  margin-top: 1rem;

  > div {
    display: flex;
    font-size: 13px;
    font-weight: 300;

    .post_author {
      text-transform: uppercase;
      display: flex;

      &::after {
          content: '|';
          display: block;
          margin: 0 15px;
        }
    }
  }

  .post_category {
    font-size: 12px;
    padding: 0.3rem 2.8rem;
    background: ${({ theme }) => theme.primary};
    color: #ffffff;
  }
`;