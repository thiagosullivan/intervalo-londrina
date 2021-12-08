import styled from "styled-components";

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;
  position: fixed;
  z-index: -1;
`;

export const SideLineContainer = styled.div`
  position: fixed;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);
`;