import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  
  .footer_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7.5rem 0 4.3rem;
    max-width: 1330px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1500px){
      max-width: 1100px;
    }

    @media (max-width: 1270px){
      max-width: 1000px;
    }

    @media (max-width: 1180px){
      max-width: 900px;
      padding-left: 30px;
    }

    @media (max-width: 980px){
      flex-direction: column;
      padding-left: 0;
      padding-top: 4rem;
    }

    .footer_second_col {
      display: flex;
      align-items: top;

      @media (max-width: 980px){
        margin-top: 2rem;
      }

      @media (max-width: 500px){
        flex-direction: column;
      }

      p {
        @media (max-width: 500px){
          text-align: center;
        } 
      }
      
      .footer_socialmedia {
        margin-left: 7.2rem;
        
        @media (max-width: 1180px){
          margin-left: 2rem;
        }

        @media (max-width: 500px){
          margin-left: 0;
          margin-top: 2rem;
        }

        > p {
          margin-left: 7.5px;

          @media (max-width: 500px){
            text-align: center;
          }
        }
      }

      p {
        color: #ffffff;
        text-transform: uppercase;
        font-size: 15px;
        margin-bottom: 0.6rem;
      }
    }
  }

  .footer_credits {
    font-size: 15px;
    color: #ffffff;
    font-weight: 100;
    text-align: center;
    padding-bottom: 3.1rem;
  }
`;