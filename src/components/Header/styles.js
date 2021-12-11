import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100vh;
  position: absolute;
  width: 100%;

  .active {
    transform: translateX(0px) !important;
  }

  .sidebar_container {
    background: ${({ theme }) => theme.primary};
    width: 80px;
    height: 100%;
    padding-top: 30px;
    position: fixed;
    display: flex;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
  
    > svg {
      color: #ffffff;
      font-size: 3rem;
      font-weight: 300;
    }

    @media (max-width: 980px){
      width: 100vw;
      height: 80px;
      justify-content: left;
      align-items: center;
      padding-top: 0;
      padding-left: 30px;
      box-shadow: 1px 3px 5px rgb(0 0 0 / 20%);
    }
  }
`;

export const NavContainer = styled.nav`
  background: ${({ theme }) => theme.primary};
  height: 100%;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem 0;
  position: fixed;
  z-index: 3;
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

    @media (max-width: 1440px){
      margin-top: 0px;
    }

    @media (max-width: 520px){
      max-height: 250px;
    }
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