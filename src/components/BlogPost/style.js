import styled from "styled-components";

export const BlogPostContainer = styled.section`
  max-width: 815px;
  width: max-content;
  /* padding-right: 4.6rem; */
  margin-bottom: 9.5rem;

  .blog_post_img {
    margin: 0 auto;
    max-width: 815px;
    width: 100%;
  }

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
    line-height: 24px;
    margin-bottom: 1rem;
  }
`;

export const PostImageContainer = styled.div`
  width: 815px;
  height: 300px;
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-size: cover;
`;