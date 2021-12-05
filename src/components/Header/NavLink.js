import Link from 'next/link';
import { NavLinkContainer } from './styles';

function NavLink({ title, path, includes }){
  return (
    <NavLinkContainer>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  )
};

export default NavLink;