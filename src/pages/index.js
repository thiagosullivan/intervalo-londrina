// import Prismic from '@prismicio/client';
import Head from 'next/head';
import { GetStaticProps } from "next";

import BackgroundImg from '../components/BgSite';
import SideLine from '../components/BgSite/SideLine';
import CategoriesPosts from '../components/CategoriesPosts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import PostCardHome from '../components/PostCardHome';
import TopHead from '../components/TopHead';

import { HomeContainer } from '../styles/HomeStyle';
import { getPosts } from '../services/graphcms';

export default function Home({ posts }) {
  console.log(posts, "home")
  return (
    <div id="homepage">
      <Head>
        <title>Home | Intervalo Londrina</title>
        <meta name="title" content="Intervalo Londrina" />
        <meta name="description" content="Jornalismo cultural e crítica de arte em Londrina" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.intervalolondrina.com.br/" />
        <meta property="og:title" content="Intervalo Londrina" />
        <meta property="og:description" content="Jornalismo cultural e crítica de arte em Londrina" />
        <meta property="og:image" content="https://i.ibb.co/wRXS4t1/intervalo-londrina-metatag-img.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.intervalolondrina.com.br/" />
        <meta property="twitter:title" content="Intervalo Londrina" />
        <meta property="twitter:description" content="Jornalismo cultural e crítica de arte em Londrina" />
        <meta property="twitter:image" content="https://i.ibb.co/wRXS4t1/intervalo-londrina-metatag-img.jpg"></meta>
      </Head>

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
          <PostCardHome postagens={posts} />
          {/* {posts.map((post) => <PostCardHome postagens={post.node} />)} */}
          <Newsletter />
        </main>
        {/* <SeeMore postagens={postagens} /> */}
      </HomeContainer>
      <Footer />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const prismic = getPrismicClient();

//   const projectResponse = await prismic.query(
//     [Prismic.Predicates.at('document.type', 'postagem')],
//     { orderings: '[document.first_publication_date desc]'}
//   );
  
//   const postagens = projectResponse.results.map(post => ({
//       id: post.id,
//       slug: post.slugs,
//       date: post.data.date,
//       title: post.data.title,
//       author: post.data.author,
//       category: post.data.categories,
//       resume: post.data.resume,
//       text: post.data.text,
//       image: post.data.image.url,
//     }));
    
//     console.log(postagens)

//   return {
//     props: {
//       postagens
//     },
//     revalidate: 86400
//   };
// }

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}