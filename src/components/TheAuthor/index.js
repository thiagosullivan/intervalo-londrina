import Image from 'next/image';
import Author from '../../assets/isabela-photo.webp';
import { TheAuthorContainer } from './style';

function TheAuthor() {
  return (
    <TheAuthorContainer>
      <div className="author_img_container">
        <Image src={Author} width={345} height={345} alt="Foto da Isabela" />
      </div>
      <div className="author_text_container">
        <h2>A <span>Autora</span></h2>
        <p>Oi, eu sou Isabela Cunha e este é o Intervalo, um site criado por mim – e com a ajuda de muitas mãos - para falar sobre a produção cultural londrinense.</p>
        <p>Sou jornalista de formação e a razão por que escolhi o Jornalismo foi justamente o desejo de escrever sobre cultura. Lá atrás, em 2009, achei que escrever sobre música e os meus ídolos poderia ser uma boa profissão. Mas a vida é real e de viés, você sabe, de modo que eu nunca cheguei a trabalhar como jornalista, mas sempre atuei na área da cultura.</p>
        <p>Na prática, sou produtora cultural, programadora de espaços culturais e assessora de imprensa em projetos culturais. Hoje, dirijo o Céu Aberto – Festival de Música e Pensamento, faço parte da Vila Cultura Canto do Marl, e também sou mestranda em Comunicação &#40;onde estudo a crise do capitalismo&#41;.</p>
        <p>O que escrevo em Intervalo é uma mistura de dois desejos: o primeiro você já sabe, exercitar a escrita sobre arte; Mas o segundo é mais importante: abrir espaços de diálogo e reflexão sobre o que ainda pode nos emocionar.</p>
      </div>
    </TheAuthorContainer>
  )
};

export default TheAuthor;