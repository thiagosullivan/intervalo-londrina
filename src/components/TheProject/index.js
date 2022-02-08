import Image from "next/image";
import { TheProjectContainer } from "./style";
// import firstPhoto from '../../assets/contact-woman.jpg';
import firstPhoto from '../../assets/contact-woman.webp';

function TheProject() {
  return (
    <TheProjectContainer>
      <div className="project_title_one">
        <div>
          <div className="project_border" />
          <h2>O<br/> <span>Projeto</span></h2>
        </div>
        <Image src={firstPhoto} width={754} height={617} alt="Foto ilustrativa"/>
      </div>
      <div className="project_text">
        <p>A música Construção, de Chico Buarque, é um grande manifesto poético e político da música popular brasileira. O jogo de palavras e a temática proposta pela canção tornam-a um marco do cenário musical brasileiro da década de 1970. Chico Buarque, com então 27 anos de idade, atingiu a muitos públicos com a música, agradando a diferentes gostos durante um período de intensa censura e tensão política na ditadura militar. Com Chico Buarque, Construção atingiu o topo das paradas nas rádios de todo o país e atravessou gerações, sendo uma música de grande relevância e prestigiada até os dias de hoje!
          <br/>
          <br/>
        Apesar da letra crítica de Construção, Chico Buarque conseguiu aprovar o uso da mesma sem problemas com o departamento de censura do governo da ditadura militar. O significado da música Construção reflete um país cuja desigualdade social, a alienação política da classe trabalhadora e o descaso com a morte do próximo são temas presentes em meio à interpretação da música no contexto da época. A música Construção, de Chico Buarque, é um grande manifesto poético e político da música popular brasileira. O jogo de palavras e a temática proposta pela canção tornam-a um marco do cenário musical brasileiro da década de 1970. Chico Buarque, com então 27 anos de idade, atingiu a muitos públicos com a música, agradando a diferentes gostos durante um período de intensa censura e tensão política na ditadura militar. Com Chico Buarque, Construção atingiu o topo das paradas nas rádios de todo o país e atravessou gerações, sendo uma música de grande relevância e prestigiada até os dias de hoje! Apesar da letra crítica de Construção, Chico Buarque conseguiu aprovar o uso da mesma sem problemas com o departamento de censura do governo da ditadura militar. O significado da música Construção reflete um país cuja desigualdade social, a alienação política da classe trabalhadora e o descaso com a morte do próximo são temas presentes em meio à interpretação da música no contexto da época.
        </p>
      </div>
    </TheProjectContainer>
  )
};

export default TheProject;