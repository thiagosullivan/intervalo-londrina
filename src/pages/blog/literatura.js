import Head from 'next/head';

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
import { PostsHomeContainerIndividual } from '../../styles/CategoriesPages';
import { useState } from 'react';
import NoPostYet from '../../components/NoPostYet';
import { getPosts } from '../../services/graphcms';

function Literatura({ posts }) {

  const [showResults, setShowResults ] = useState(posts)

  const filterdCategory = posts.filter(posts => posts.node.category.name == 'Literatura')

  return (
    <div id="homepage">
      <Head>
        <title>Literatura | Intervalo Londrina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
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

          <PostsHomeContainerIndividual postagens={posts}>
            {filterdCategory.length > 0 &&
              <PostsHomeContainerIndividual postagens={posts}>
              {filterdCategory.slice( 0, 4 ).map( (posts, index) => 
                <PostIndividualCardHome
                  key={index}
                  author={posts.node.author}
                  date={posts.node.createdAt}
                  category={posts.node.category}
                  title={posts.node.title}
                  imgLink={posts.node.postImage}
                  resume={posts.node.resume}
                  postLink={posts.node.slug}
                  text={posts.node.text}
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

export default Literatura;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}