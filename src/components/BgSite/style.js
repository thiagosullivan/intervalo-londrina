import styled from "styled-components";

export const BackgroundContainer = styled.div`
  width: 130vw;
  height: 100vh;
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;
  position: fixed;
  z-index: -1;
  left: 80px;

  @media (max-width: 980px){
    left: 0;
  }
`;

export const SideLineContainer = styled.div`
  position: fixed;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;

  @media (max-width: 1560px) {
    right: 1rem;
  }

  @media (max-width: 540px){
    position: absolute;
    right: 5px;
  }
`;