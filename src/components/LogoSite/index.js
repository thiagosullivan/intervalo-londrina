import { LogoContainer } from './style';
import LogoDark from '../../assets/intervalo-bg-dark-two.png';
import Image from 'next/image';

function LogoSite(){
  return (
    <LogoContainer>
      <Image src={LogoDark} />
    </LogoContainer>
  )
}

export default LogoSite;