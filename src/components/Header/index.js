import Image from 'next/image';
import NavLink from './NavLink';
import { HeaderContainer, NavContainer, SideBarContainer } from './styles';
import LogoLight from '../../assets/intervalo-bg-dark.png';
import SocialMedia from '../SocialMedia';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

function Header(){
  const [ sidebar, setSidebar ] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <HeaderContainer>
      <div className="sidebar_container" onClick={showSidebar}>
        <GiHamburgerMenu />
      </div>
      <NavContainer className={sidebar ? 'active' : ''}>
        <div className="close_header" onClick={showSidebar}>
          <MdOutlineClose />
        </div>
        <Link href="/">
          <a>
            <Image src={LogoLight} alt="Logo da Intervalo"/>
          </a>
        </Link>
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