import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1365px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-left: 60px;

  @media (max-width: 1500px){
    max-width: 1300px;
  }

  @media (max-width: 1370px){
    max-width: 1040px;
  }

  @media (max-width: 980px){
    padding-left: 0px;
  }

  .home_subtitle {
    margin-top: 4.5rem;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .sub_line {
      max-width: 580px;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.secondary};
    }
    h1 {
      text-transform: uppercase;
      color: ${({ theme }) => theme.secondary};
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      text-align: center;
      font-size: 16px;
      margin: 0 1.25rem;
      white-space: nowrap;
    }
  }
`;