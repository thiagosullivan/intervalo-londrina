import { LogoContainer } from './style';
import LogoDark from '../../assets/intervalo-bg-dark-two.png';
import Image from 'next/image';

function LogoSite(){
  return (
    <LogoContainer>
      <Image src={LogoDark} alt="Logo da Intervalo" />
    </LogoContainer>
  )
}

export default LogoSite;