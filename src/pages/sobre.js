import Head from 'next/head'

import BackgroundImg from '../components/BgSite'
import SideLine from '../components/BgSite/SideLine'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import TheAuthor from '../components/TheAuthor'
import TheProject from '../components/TheProject'
import TopHead from '../components/TopHead'
import { AboutContainerPage } from '../styles/AboutPage'

import { HomeContainer } from '../styles/HomeStyle'

export default function Home() {
  return (
    <div id="contato">
      <Head>
        <title>Sobre | Intervalo Londrina</title>
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
      <AboutContainerPage>
        <main className="container">
          <TopHead />
          <TheProject />
          <TheAuthor />
          <Newsletter />
        </main>
      </AboutContainerPage>
      <Footer />
    </div>
  )
}
