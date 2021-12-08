import styled from "styled-components";

export const TheProjectContainer = styled.section`
  display: flex;
  justify-content: right;
  position: relative;
  margin-bottom: 4.8rem;

  .project_title_one {
    position: absolute;
    left: 0;
    top: 6.25rem;

    > div {
      position: absolute;
      z-index: 1;
      left: -115px;
      top: 105px;      

      .project_border {
        width: 140px;
        height: 3px;
        background: ${({ theme }) => theme.primary};
        margin-bottom: 2.3rem;
      }
      
      h2 {
        font-family: 'Tinsel', sans-serif;
        font-size: 165px;
        font-weight: 500;
        color: ${({ theme }) => theme.primary};
        text-transform: uppercase;
        letter-spacing: 20px;
    
        span {
          font-family: 'Tinsel', sans-serif;
          font-size: 165px;
          font-weight: 500;
          color: ${({ theme }) => theme.primary};
          -webkit-text-fill-color: transparent;
          /* -webkit-text-stroke-width: 2px; */
          stroke-width: 2px;
        }
      }
    }
  }

  .project_text {
    background: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: right;
    max-width: 800px;
    width: 100%;
    padding: 4.6rem 3.3rem 4.6rem 0;
    margin-top: 20rem;

    p {
      max-width: 460px;
      width: 100%;
      color: #ffffff;
      font-size: 18px;
      font-weight: 300;
      max-height: 45rem;
      overflow-y: scroll;
      padding-right: 1rem;
      line-height: 30px;

      &::-webkit-scrollbar-thumb {
        background: #ffffff;
      }
      &::-webkit-scrollbar-track{
        background: ${({ theme }) => theme.secondary};
        border-radius: 10px;
      }
    }
  }

`;