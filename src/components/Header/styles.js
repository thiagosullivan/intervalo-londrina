import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.primary};
  height: 100vh;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  position: fixed;
  
  h1 {
    color: red;
  }

  .header_cont_one {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-height: 300px;
    height: 100%;
    margin-top: -130px;
  }
`;

export const NavLinkContainer = styled.nav`
  display: flex;
  
  a {
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    font-size: 25px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 12px;
    transition: all 100ms ease-in;

    &:hover {
      transform: scale(1.05)
    }
  }
`;