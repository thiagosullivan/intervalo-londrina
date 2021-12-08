import styled from "styled-components";

export const HeaderContainer = styled.header`
  .active {
    transform: translateX(0px) !important;
  }

  .sidebar_container {
    background: ${({ theme }) => theme.primary};
    width: 80px;
    height: 100vh;
    padding-top: 30px;
    position: fixed;
    display: flex;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
  
    > svg {
      color: #ffffff;
      font-size: 3rem;
      font-weight: 300;
    }
  }
`;

export const NavContainer = styled.nav`
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
  z-index: 2;
  box-shadow: 1px 3px 5px rgba(0,0,0,.2);
  transform: translateX(-400px);
  transition: all 200ms ease-in-out;
  
  h1 {
    color: red;
  }

  .close_header {
    color: #ffffff;
    position: absolute;
    top: 10px;
    right: 2rem;
    font-size: 2rem;
    cursor: pointer;
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

export const NavLinkContainer = styled.div`
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

export const SideBarContainer = styled.div`
  
`;