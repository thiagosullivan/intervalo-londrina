import Image from "next/image";
import Link from "next/link";
import logoFooter from '../../assets/intervalo-logo-footer.png'
import logoPrefeitura from '../../assets/logo-prefeitura.png'
import SocialMedia from "../SocialMedia";
import { FooterContainer } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <div className="footer_top">
        <Link href="/">
          <a>
            <Image src={logoFooter} alt="Logo da Intervalo" />
          </a>
        </Link>
        <div className="footer_second_col">
          <div className="footer_prefeitura">
            <p>Patrocínio</p>              
            <Image src={logoPrefeitura} alt="Logo da Prefeitura de Londrina" />
          </div>
          <div className="footer_socialmedia">
            <p>Nossas redes</p>
            <SocialMedia />
          </div>
        </div>
      </div>
      <p className="footer_credits">Criado e desenvolvido por Intervalo Londrina - Londrina/PR</p>
    </FooterContainer>
  )
}

export default Footer;