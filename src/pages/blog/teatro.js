import Head from 'next/head';

import BackgroundImg from '../../components/BgSite';
import SideLine from '../../components/BgSite/SideLine';
import CategoriesPosts from '../../components/CategoriesPosts';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import PostCardHome from '../../components/PostCardHome';
import TopHead from '../../components/TopHead';

import { HomeContainer } from '../../styles/HomeStyle';

function Cinema() {
  return (
    <div id="homepage">
      <Head>
        <title>Home | Intervalo Londrina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>TEATRO</h1>
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
          <PostCardHome />
          <Newsletter />
        </main>
      </HomeContainer>
      <Footer />
    </div>
  )
}

export default Cinema;