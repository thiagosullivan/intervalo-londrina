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
        <Image src={firstPhoto} width={678} height={555} alt="Foto ilustrativa"/>
      </div>
      <div className="project_text">
        <p>Intervalo é um projeto que poderia não existir. A vida da maioria das pessoas acontece muito bem, obrigada, com ou sem a publicação de textos críticos, com ou sem a atividade do jornalismo cultural. Aliás, arte para quê? Crítica para quem? Diálogo por onde?
          <br/>
          <br/>
          Mas é triste, né, descrever o mundo desse jeito - porque é triste, também, imaginá-lo pintado assim: um pequeno enredo de rotina produtiva alternado com descanso, um grande parque onde as pessoas se isolam.
          <br/>
          <br/>
          Intervalo é um espaço de observador. O que faz Intervalo não é muito diferente do que faria um casal depois de assistir a um filme, ou do que faz um grupo de amigos depois de uma batalha de rima.
          <br/>
          <br/>
          Diante da realidade árida, grupos, indivíduos, coletivos e empreendimentos seguem fazendo arte em Londrina. E o que nós fazemos aqui é justamente olhar e conversar um pouco sobre essa produção.
          <br/>
          <br/>
          Com interesse em derrubar o muro que distingue o “periférico” do “central” ou o “erudito” do “popular”, nos interessa principalmente que esse espaço não seja restrito, que não seja inacessível, nem exclusivo de um grupo ou de uma linguagem.
          <br/>
          <br/>
          Na contramão do mundo cinza, Intervalo quer reforçar a importância da fruição cultural. Contra a aridez do nosso tempo, apostamos em fortalecer o espaço público de debate.
          <br/>
          <br/>
          Assista, leia, compartilhe, envie seu texto. Faz um intervalo!  Quanto mais participativo, melhor!
          <br/>
          <br/>
          <span><strong>Intervalo Londrina é um projeto financiado pelo programa municipal de incentivo á cultura, o PROMIC, de Londrina.</strong></span>
        </p>
      </div>
    </TheProjectContainer>
  )
};

export default TheProject;