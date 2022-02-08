import styled from "styled-components";

export const BlogPostContainer = styled.section`
  max-width: 815px;
  width: max-content;
  margin-bottom: 9.5rem;
  margin-right: 2rem;

  @media (max-width: 1500px){
    /* margin-right: 0; */
  }

  @media (max-width: 980px){
    margin-right: 0;
  }

  @media (max-width: 880px){
    max-width: 700px;
  }

  @media (max-width: 750px){
    max-width: 600px;
  }

  @media (max-width: 660px){
    max-width: 500px;
  }

  @media (max-width: 530px){
    max-width: 400px;
    margin-bottom: 3rem;
  }

  @media (max-width: 420px){
    max-width: 300px;
  }

  .blog_post_img {
    margin: 0 auto;
    max-width: 815px;
    width: 100%;

    @media (max-width: 660px){
      max-width: 500px;
    }
  }

  > h1 {
    font-family: 'Tinsel', sans-serif;
    font-size: 85px;
    color: ${({ theme }) => theme.secondary};
    font-weight: 500;
    margin: 2rem 0;

    @media (max-width: 750px){
      font-size: 70px;
      text-align: center;
    }

    @media (max-width: 530px){
      font-size: 50px;
    }
  }

  p {
    color: ${({ theme }) => theme.secondary};
    text-align: justify;
    line-height: 24px;
    margin-bottom: 1rem;
  }

  blockquote {
    border-left: 5px solid orange;
    padding: 2rem 0 2rem 1rem;
    background-color: rgba(0,0,0,.030);
    margin: .5rem 1rem;
  }

  blockquote:after {
      content: '"';
      font-size: 2rem;
      font-weight: 600;
  }

  blockquote:before {
      content: '"';
      font-size: 2rem;
      font-weight: 600;
  }
`;

export const PostImageContainer = styled.div`
  width: 815px;
  height: 300px;
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-size: cover;

  @media (max-width: 880px){
    max-width: 700px;
  }

  @media (max-width: 750px){
    max-width: 600px;
  }

  @media (max-width: 660px){
    max-width: 500px;
  }

  @media (max-width: 530px){
    max-width: 400px;
  }

  @media (max-width: 420px){
    max-width: 300px;
  }
`;