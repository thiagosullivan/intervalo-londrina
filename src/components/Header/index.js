import Image from 'next/image';
import NavLink from './NavLink';
import { HeaderContainer } from './styles';
import LogoLight from '../../assets/intervalo-bg-dark.png';
import SocialMedia from '../SocialMedia';

function Header(){
  return (
    <HeaderContainer>
      <Image src={LogoLight}/>
        <ul>
          <NavLink title="Blog" path="/" />
          <NavLink title="Sobre" path="/sobre" includes />
          <NavLink title="Contato" path="/contato" includes />
        </ul>
      <SocialMedia />
    </HeaderContainer>
  )
};

export default Header;