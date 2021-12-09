import styled from "styled-components";

export const PostsHomeContainer = styled.div`
  transition: all 150ms ease-in;

  .paginationBtns {
    display: flex;
    justify-content: center;
    margin: 2.8rem 0 8.5rem;

    .previousBtn {
      border: none !important;
      margin-right: -5px !important;

      a {
        border: none;
        font-size: 25px;
      }

      &:hover {        
        a {
          background: transparent !important;
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    .next {
      border: none !important;
      margin-left: -5px !important;
      
      a {
        border: none;
        font-size: 25px;
      }

      &:hover {
        
        a {
          background: transparent !important;
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    .paginationActive {
      
      a {
        background: ${({ theme }) => theme.primary};
        height: 32px;
        width: 32px;
        color: #ffffff;
      }
    }

    li {
      
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        border: 1px solid ${({ theme }) => theme.primary};
        margin: 0 1rem;
        cursor: pointer;
        color: ${({ theme }) => theme.primary};
        font-size: 16px;

        &:hover {
          background: ${({ theme }) => theme.primary};
          color: #ffffff;
        }
      }
    }
  }
  
`;

export const IndividualCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 1rem 3.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.greysecond};

  @media (max-width: 980px){
    flex-direction: column;
  }

  .card_first_info {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;

    @media (max-width: 1240px) {
       max-width: 350px;
    }

    @media (max-width: 980px){
      max-width: unset;
    }

    .post_infos {
      display: grid;
      grid-template-areas:
      'author date'
      'category category';
      justify-content: left;
      color: ${({ theme }) => theme.primary};
      font-size: 13px;
      font-weight: 500;

      @media (max-width: 980px){
        justify-content: center;
      }

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

        @media (max-width: 980px){
          width: 100%;
        }
      }
    }

    > h3 {
      font-family: 'Tinsel', sans-serif;
      font-size: 64px;
      color: ${({ theme }) => theme.secondary};
      font-weight: 500;
      margin-top: 1rem;

      @media (max-width: 980px){
        text-align: center;
        margin-top: 2rem;
      }
    }
  }

  .card_second_info {
    > p {
      max-width: 400px;
      font-size: 17px;
      color: ${({ theme }) => theme.secondary};
      margin-bottom: 1.8rem;

      @media (max-width: 980px){
        width: 100%;
        max-width: unset;
        margin-bottom: 3rem;
      }

    }
    a {      
      color: #ffffff;      
      border-top: 1px solid ${({ theme }) => theme.secondary};
      display: flex;
      width: 170px;

      @media (max-width: 980px){
        justify-content: center;
        width: 100%;
        border-top: none;
      }

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
    background-position: center;
    width: 390px;
    height: 300px;
    margin: 0 2rem;

    @media (max-width: 980px){
      margin: 3rem;
    }
`;