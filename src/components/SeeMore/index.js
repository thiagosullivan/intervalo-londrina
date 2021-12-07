import SeeMorePost from "./SeeMorePost";
import { SeeMoreContainer } from "./style";

function SeeMore() {
  return (
    <SeeMoreContainer>
      <h3>Veja Mais</h3>
      <SeeMorePost
        title="Duas Visões sobre a figura feminina no espaço do ateliê em 1994"
        imgLink="https://i.ibb.co/4ghQCC6/Your-image-here-2.png"
        resume="Almeida Júnior e Abigail de Andrade: duas visões sobre a figura feminina no espaço do ateliê. Ambas apresentadas com sucesso na Exposição Geral de Belas Artes de 1884."
        category="Cinema"
      />
      <SeeMorePost
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        imgLink="https://i.ibb.co/Bz4vbQH/Your-image-here-3.png"
        resume="Almeida Júnior e Abigail de Andrade: duas visões sobre a figura feminina no espaço do ateliê. Ambas apresentadas com sucesso na Exposição Geral de Belas Artes de 1884."
        category="Musica"
      />
      <SeeMorePost
        title="In tortor eros, ullamcorper maximus vehicula id, varius nec felis. Maecenas vestibulum bibendum turpis, in interdum sapien condimentum vel. Sed."
        imgLink="https://i.ibb.co/4dMBQv4/Your-image-here-4.png"
        resume="Almeida Júnior e Abigail de Andrade: duas visões sobre a figura feminina no espaço do ateliê. Ambas apresentadas com sucesso na Exposição Geral de Belas Artes de 1884."
        category="Literatura"
      />
      <SeeMorePost
        title="Phasellus in congue nibh. Maecenas rhoncus purus tellus, nec sollicitudin magna ornare."
        imgLink="https://i.ibb.co/Js8QHjG/Your-image-here.png"
        resume="Almeida Júnior e Abigail de Andrade: duas visões sobre a figura feminina no espaço do ateliê. Ambas apresentadas com sucesso na Exposição Geral de Belas Artes de 1884."
        category="Cinema"
      />
    </SeeMoreContainer>
  )
};

export default SeeMore;