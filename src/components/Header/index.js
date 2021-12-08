import Image from 'next/image';
import NavLink from './NavLink';
import { HeaderContainer, NavContainer, SideBarContainer } from './styles';
import LogoLight from '../../assets/intervalo-bg-dark.png';
import SocialMedia from '../SocialMedia';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header(){
  const [ sidebar, setSidebar ] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <HeaderContainer>
      <SideBarContainer onClick={showSidebar}>
        <GiHamburgerMenu />
      </SideBarContainer>
      <NavContainer className={sidebar ? 'active' : ''}>
        <div className="close_header" onClick={showSidebar}>
          <MdOutlineClose />
        </div>
        <Image src={LogoLight} alt="Logo da Intervalo"/>
          <ul onClick={showSidebar}>
            <NavLink title="Blog" path="/" />
            <NavLink title="Sobre" path="/sobre" includes />
            <NavLink title="Contato" path="/contato" includes />
          </ul>
        <SocialMedia />
      </NavContainer>
    </HeaderContainer>
  )
};

export default Header;