import { useRouter } from 'next/router';
import React from 'react';
import { getPosts } from '../services/graphcms';

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
import PostCardResults from '../components/PostCardResults';
import { ResultContainerPage } from '../styles/ResultPage';
import Link from 'next/link';



export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

function ResultsPage({ posts }) {
  console.log(posts, "result page")

  const router = useRouter()
  const searchQuery = router.query.s
  let filteredPosts = posts

  if (searchQuery) {
    const searchTerms = String(searchQuery).toLowerCase().trim()
    const searchTermsArray = searchTerms
      .split(' ')
      .filter(term => term.length > 2)

    filteredPosts = posts.filter(post => {
      const title = post.node.title.toLowerCase()
      const description = post.node.resume.toLowerCase()

      let includesInTitle
      let includesInDescription

      searchTermsArray.forEach(searchTerm => {
        includesInTitle = title.includes(searchTerm)
        includesInDescription = description.includes(searchTerm)

        return includesInTitle || includesInDescription
      })

      if (includesInTitle || includesInDescription) return true
    })
  }

  console.log(filteredPosts, "posts filtrados")

  return (
    <div>

      <Head>
        <title>Resultados | Intervalo Londrina</title>
        <meta name="title" content="Intervalo Londrina" />
        <meta name="description" content="Jornalismo cultural e crítica de arte em Londrina" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Intervalo Londrina" />
        <meta property="og:description" content="Jornalismo cultural e crítica de arte em Londrina" />
        <meta property="og:image" content="https://i.ibb.co/wRXS4t1/intervalo-londrina-metatag-img.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
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
          <div className="home_subtitle">
            <div className="sub_line"></div>
            <h1>Resultados</h1>
            <div className="sub_line"></div>
          </div>
          <ResultContainerPage>
            {filteredPosts.length === 0 && (
              <div className='Search__error'>
                <p>Desculpe, mas nenhuma publicação foi encontrada nessa busca.</p>
                <Link href="/">Voltar para a Home</Link>
              </div>
            )}
            <PostCardResults postagens={filteredPosts} />
          </ResultContainerPage>

          
          <Newsletter />
        </main>
      </HomeContainer>
      <Footer />    
    </div>
  )
}

export default ResultsPage;
