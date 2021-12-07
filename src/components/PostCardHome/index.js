import PostIndividualCardHome from './PostIndividualCardHome';
import { PostsHomeContainer } from './styles';

function PostCardHome({ postagens }) {
  return (
    <PostsHomeContainer>
      {postagens.slice( 0, 4 ).map( posts => 
        <PostIndividualCardHome
          author={posts.author}
          date={posts.date}
          category={posts.category}
          title={posts.title}
          imgLink={posts.image}
          resume="Almeida Júnior e Abigail de Andrade: duas visões sobre a figura feminina no espaço do ateliê. Ambas apresentadas com sucesso na Exposição Geral de Belas Artes de 1884."
          postLink={posts.slug}
        />
      )}
      {/* <PostIndividualCardHome
        author="Ana"
        date="18/11/2021"
        category="Musica"
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        imgLink="https://i.ibb.co/4ghQCC6/Your-image-here-2.png"
        resume="Nam eget velit arcu. Integer congue libero vel nibh sollicitudin placerat non vitae sem. Suspendisse vel odio ut diam sagittis tristique a vel nisi. Suspendisse viverra feugiat nisi id consectetur."
        postLink="/sobre"
      />
      <PostIndividualCardHome
        author="Thiago"
        date="20/11/2021"
        category="Esportes"
        title="In tortor eros, ullamcorper maximus vehicula id, varius nec felis. Maecenas vestibulum bibendum turpis, in interdum sapien condimentum vel. Sed."
        imgLink="https://i.ibb.co/Bz4vbQH/Your-image-here-3.png"
        resume="Almeida Júnior e Abigail de Andrade: duas visões sobre a figura feminina no espaço do ateliê. Ambas apresentadas com sucesso na Exposição Geral de Belas Artes de 1884."
        postLink="/sobre"
      />
      <PostIndividualCardHome
        author="Isabela"
        date="17/11/2021"
        category="Literatura"
        title="Phasellus in congue nibh. Maecenas rhoncus purus tellus, nec sollicitudin magna ornare."
        imgLink="https://i.ibb.co/4dMBQv4/Your-image-here-4.png"
        resume="Almeida Júnior e Abigail de Andrade: duas visões sobre a figura feminina no espaço do ateliê. Ambas apresentadas com sucesso na Exposição Geral de Belas Artes de 1884."
        postLink="/sobre"
      /> */}
    </PostsHomeContainer>
  )
}

export default PostCardHome;