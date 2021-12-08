import { LogoContainer } from './style';
import LogoDark from '../../assets/intervalo-bg-dark-two.png';
import Image from 'next/image';
import Link from 'next/link';

function LogoSite(){
  return (
    <LogoContainer>
      <Link href="/">
        <a>
          <Image src={LogoDark} alt="Logo da Intervalo" />
        </a>
      </Link>
    </LogoContainer>
  )
}

export default LogoSite;