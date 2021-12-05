import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.primary};
  
  .footer_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7.5rem 0 4.3rem;
    max-width: 1330px;
    margin: 0 auto;

    .footer_second_col {
    display: flex;
    align-items: top;
      
      .footer_socialmedia {
        margin-left: 7.2rem;
        
        > p {
          margin-left: 7.5px;
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