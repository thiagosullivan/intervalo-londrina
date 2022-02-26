import styled from "styled-components";

export const TheAuthorContainer = styled.div`
  border-top: 3px solid ${({ theme }) => theme.primary};
  padding: 7.1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .author_img_container {
    margin-right: 70px;

    @media (max-width: 980px){
      margin-right: 25px;
    }
  }

  .author_text_container p {
    margin-bottom: 10px;
  }

  > div {
    
    
    h2 {
      font-family: 'Tinsel', sans-serif;
      font-size: 145px;
      font-weight: 500;
      color: ${({ theme }) => theme.primary};
      text-transform: uppercase;
      letter-spacing: 20px;

      @media (max-width: 850px){
        text-align: center;
        margin: 2rem 0;
      }

      @media (max-width: 430px){
        font-size: 100px;
      }
  
      span {
        font-family: 'Tinsel', sans-serif;
        font-size: 145px;
        font-weight: 500;
        color: ${({ theme }) => theme.primary};
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;

        @media (max-width: 430px){
          font-size: 100px;
        }
      }
    }

    p {
      text-align: justify;
      max-width: 950px;
      width: 100%;
      line-height: 31px;      
    }
  }

  @media (max-width: 850px){
    flex-direction: column;
  }
`;