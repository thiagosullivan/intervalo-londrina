import Image from 'next/image';
import Author from '../../assets/isabela-photo.png';
import { TheAuthorContainer } from './style';

function TheAuthor() {
  return (
    <TheAuthorContainer>
      <div className="author_img_container">
        <Image src={Author} width={345} height={345} />
      </div>
      <div className="author_text_container">
        <h2>A <span>Autora</span></h2>
        <p>A música Construção, de Chico Buarque, é um grande manifesto poético e político da música popular brasileira. O jogo de palavras e a temática proposta pela canção tornam-a um marco do cenário musical brasileiro da década de 1970. Chico Buarque, com então 27 anos de idade, atingiu a muitos públicos com a música, agradando a diferentes gostos durante um período de intensa censura e tensão política na ditadura militar. Com Chico Buarque, Construção atingiu o topo das paradas nas rádios de todo o país e atravessou gerações, sendo uma música de grande relevância e prestigiada até os dias de hoje!</p>
      </div>
    </TheAuthorContainer>
  )
};

export default TheAuthor;