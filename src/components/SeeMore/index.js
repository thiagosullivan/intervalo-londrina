import { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../../services/graphcms";
import SeeMorePost from "./SeeMorePost";
import { SeeMoreContainer } from "./style";
export { getStaticProps } from '../../pages';

function SeeMore({ slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {    
    if (slug) {
      getSimilarPosts(slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);
  
  console.log(relatedPosts, "related")

  return (
    
    <SeeMoreContainer>      
      <h3>Veja Mais</h3>
      {relatedPosts.map((post) => (
      //  <div key={post.title}>
      //   <div>
      //     <img
      //       alt={post.title}
      //       src={post.postImage.url}
      //       height="60px"
      //       width="60px"
      //     />
      //     <div>{new Date(post.createdAt).toLocaleDateString()}</div>
      //   </div>
      //  </div>
       <SeeMorePost
        key={post.title}
        title={post.title}
        image={post.postImage.url}
        resume={post.resume}
        categories={post.category.name}
        author={post.author.name}
        date={post.createdAt}
        slug={post.slug}
     />
     ))}
      {/* <SeeMorePost
        title={post.title}
        image={post.image}
        resume={post.resume}
        categories={post.categories}
        author={post.author}
        date={post.date}
        slug={post.slug}
      /> */}
      {/* <SeeMorePost
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
      /> */}
    </SeeMoreContainer>
  )
};

export default SeeMore;