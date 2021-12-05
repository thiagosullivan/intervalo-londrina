import styled from "styled-components";

export const PostsHomeContainer = styled.div`

`;

export const IndividualCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0 3.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.greysecond};

  .card_first_info {
    display: flex;
    flex-direction: column;
    max-width: 400px;

    .post_infos {
      display: grid;
      grid-template-areas:
      'author date'
      'category category';
      justify-content: left;
      color: ${({ theme }) => theme.primary};
      font-size: 13px;
      font-weight: 500;

      .author_post {
        grid-area: author;
        text-transform: uppercase;
        display: flex;

        &::after {
          content: '|';
          display: block;
          margin: 0 15px;
        }
      }
      .date_post {
        grid-area: date;
      }
      .category_post {
        grid-area: category;
        background: ${({ theme }) => theme.primary};
        color: #ffffff;
        display: flex;
        justify-content: center;
        padding: 0.3rem 2.5rem;
        width: fit-content;
        margin-top: 1.12rem;
      }
    }

    > h3 {
      font-family: 'Tinsel', sans-serif;
      font-size: 64px;
      color: ${({ theme }) => theme.secondary};
      font-weight: 500;
      margin-top: 1rem;
    }
  }

  .card_second_info {
    > p {
      max-width: 400px;
      font-size: 17px;
      color: ${({ theme }) => theme.secondary};
      margin-bottom: 1.8rem;
    }
    a {      
      color: #ffffff;      
      border-top: 1px solid ${({ theme }) => theme.secondary};
      display: flex;
      width: 170px;

      span {
        background: ${({ theme }) => theme.primary};
        border: 1px solid ${({ theme }) => theme.primary};
        margin-top: 1.8rem;
        padding: 0.9rem 3.1rem;
        display: block;
        transition: all 150ms ease-in;

        &:hover {
          color: ${({ theme }) => theme.primary};
          background: transparent;
        }
      }
    }
  }
`;

export const ImgPost = styled.div`
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    width: 390px;
    height: 300px;
`;