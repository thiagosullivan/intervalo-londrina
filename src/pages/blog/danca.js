import Head from 'next/head';
import Prismic from '@prismicio/client';

import BackgroundImg from '../../components/BgSite';
import SideLine from '../../components/BgSite/SideLine';
import CategoriesPosts from '../../components/CategoriesPosts';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import PostCardHome from '../../components/PostCardHome';
import PostIndividualCardHome from '../../components/PostCardHome/PostIndividualCardHome';
import TopHead from '../../components/TopHead';

import { HomeContainer } from '../../styles/HomeStyle';
import { getPrismicClient } from '../../services/prismic';
import { PostsHomeContainerIndividual } from '../../styles/CategoriesPages';

import NoPostYet from '../../components/NoPostYet';

function Danca({ postagens }) {

  const filterdCategory = postagens.filter(posts => posts.category == 'Dança')

  return (
    <div id="homepage">
      <Head>
        <title>Home | Intervalo Londrina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <h1>Dança</h1>
      <Header />
      <BackgroundImg />
      <SideLine />
      <HomeContainer>
        <main className="container">
          <TopHead />
          <CategoriesPosts />
          <div className="home_subtitle">
            <div className="sub_line"></div>
            <h1>Últimos Posts</h1>
            <div className="sub_line"></div>
          </div>

          <PostsHomeContainerIndividual postagens={postagens}>
            {filterdCategory.length > 0 &&
              <PostsHomeContainerIndividual postagens={postagens}>
                {filterdCategory.slice( 0, 4 ).map( (posts, index) => 
                  <PostIndividualCardHome
                    key={index}
                    author={posts.author}
                    date={posts.date}
                    category={posts.category}
                    title={posts.title}
                    imgLink={posts.image}
                    resume={posts.resume}
                    postLink={posts.slug}
                    text={posts.text}
                  />
                )}        
              </PostsHomeContainerIndividual>
            }
            {filterdCategory.length <= 0 &&
              <NoPostYet />
            }  
          </PostsHomeContainerIndividual>

          {/* <PostCardHome /> */}
          <Newsletter />
        </main>
      </HomeContainer>
      <Footer />
    </div>
  )
}

export default Danca;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'postagem')],
    { orderings: '[document.first_publication_date desc]'}
  );
  
  const postagens = projectResponse.results.map(post => ({
      id: post.id,
      slug: post.slugs,
      date: post.data.date,
      title: post.data.title,
      author: post.data.author,
      category: post.data.categories,
      resume: post.data.resume,
      text: post.data.text,
      image: post.data.image.url,
    }));
    
    console.log(postagens)

  return {
    props: {
      postagens
    },
    revalidate: 86400
  };
}