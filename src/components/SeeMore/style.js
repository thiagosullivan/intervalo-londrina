import styled from "styled-components";

export const SeeMoreContainer = styled.section`
  border-left: 2px solid ${({ theme }) => theme.secondary};
  padding-left: 2rem;
  margin-bottom: 9.6rem;

  @media screen and (max-width: 1440px){
    max-width: 350px !important;
    width: 100%;
  }

  /* @media (max-width: 1300px){
    padding-right: 2rem;
  } */

  @media (max-width: 980px){
    padding: 0 3rem;
    max-width: unset !important;
  }

  @media (max-width: 530px){
    padding: 0 1rem;
    border-left: none;
    border-top: 2px solid ${({ theme }) => theme.secondary};    
  }
  
  h3 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 300;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;

    @media (max-width: 530px){
      margin-top: 2rem;
    }
  }
`;

export const SeeMorePostContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding-bottom: 3rem;
  border-bottom: 2px solid ${({ theme }) => theme.secondary};
  margin-bottom: 3.75rem;

  a {
    @media (max-width: 980px){
      display: flex;
    }

    @media (max-width: 680px){
      flex-direction: column;
    }
  }

  @media (max-width: 980px){
    display: flex;
    align-items: center;
    max-width: unset;
  }

  @media (max-width: 680px){
    flex-direction: column;
  }

  .see_more_col1 {
    width: 100%;
    margin: 0 auto;

    @media (max-width: 980px){
      margin-right: 2rem;
    }

    @media (max-width: 880px){
      .see_more_img {
        max-width: 300px;
        width: 100%;
      }
    }

    @media (max-width: 680px){
      margin-right: 0;

      .see_more_img {
        margin: 0 auto;
      }
    }

    .see_more_img {
      @media (max-width: 1440px){
        max-width: 350px !important;
        width: 100%;
        height: 150px;
      }

      @media (max-width: 680px){
        margin: 0;
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  .see_more_col2 {

    > h2 {
      font-family: 'Tinsel', sans-serif;
      font-size: 50px;
      color: ${({ theme }) => theme.secondary};
      font-weight: 500;
      margin: 2rem 0;

      @media (max-width: 1440px){
        font-size: 40px;
        line-height: 0.9;
      }

      @media (max-width: 980px){
        margin-top: 0;
      }

      @media (max-width: 680px){
        margin-top: 1rem;
      }
    }    

    p {
      color: ${({ theme }) => theme.secondary};
      font-size: 17px;
      line-height: 24px;
    }
  }
`;

export const ImgPost = styled.div`
    background: url(${props => props.imgUrl}) center no-repeat;
    background-size: cover;
    width: 400px;
    height: 210px;
`;