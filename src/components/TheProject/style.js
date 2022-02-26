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

    @media (max-width: 1590px){
      left: 3rem;
    }

    @media (max-width: 1450px){
      left: 5rem;
    }

    @media (max-width: 1310px){
      left: 2.5rem;
    }

    > div {
      position: absolute;
      z-index: 1;
      left: -115px;
      top: 105px;

      @media (max-width: 1590px){
        top: 35px;
        left: -75px;
      }

      @media (max-width: 1310px){
        top: 35px;
        left: -45px;
      }

      @media (max-width: 1100px){
        left: -50px;
      }

      @media (max-width: 980px){
        left: 0;
        top: -50px;
      }

      @media (max-width: 565px){
        left: 20px;
      }

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
          -webkit-text-stroke-width: 2px;

          @media (max-width: 1150px){
            font-size: 135px;
          }

          @media (max-width: 435px){
            font-size: 90px;
          }
        }

        @media (max-width: 1150px){
          font-size: 135px;
        }

        @media (max-width: 435px){
          font-size: 90px;
          letter-spacing: 10px;
        }
      }
    }

    @media (max-width: 1590px){
      width: 610px;
      height: 499px;
    }

    @media (max-width: 1380px){
      width: 549px;
      height: 449px;
    }

    @media (max-width: 1185px){
      width: 494px;
      height: 404px;
    }

    @media (max-width: 1125px){
      width: 444px;
      height: 363px;
    }

    @media (max-width: 980px){
      width: 500px;
      height: 471px;

      position: relative;
      /* margin-right: auto; */
      left: 0;
    }

    @media (max-width: 565px){
      width: 400px;
      height: 371px;
      margin: 0 auto;
    }

    @media (max-width: 435px){
      width: 290px;
      height: 261px;
      margin: 0 auto 5rem;
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

    @media (max-width: 1200px){
      max-width: 600px;
    }

    @media (max-width: 1080px){
      padding: 4.6rem 2.3rem 4.6rem 0;
    }

    @media (max-width: 1080px){
      padding: 4.6rem 1.5rem 4.6rem 0;
    }    

    @media (max-width: 980px){
      margin-top: 0;
      /* margin-left: auto; */
      padding-left: 1.5rem;
    }

    @media (max-width: 430px){
      padding: 1.5rem;
    }

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

      @media (max-width: 1245px){
        max-width: 425px;
      }

      @media (max-width: 1200px){
        max-width: 400px;
      }

      @media (max-width: 1050px){
        max-width: 345px;
      }

      @media (max-width: 980px){
        max-width: unset;
      }

      @media (max-width: 430px){
        overflow-y: unset;
        max-height: unset;
        text-align: justify;
        padding: 0;
      }

      &::-webkit-scrollbar-thumb {
        background: #ffffff;
      }
      &::-webkit-scrollbar-track{
        background: ${({ theme }) => theme.secondary};
        border-radius: 10px;
      }
    }
  }
  
  @media (max-width: 980px){
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 560px){
    align-items: center;
  }

`;