import Head from 'next/head'
import Image from 'next/image'
import BackgroundImg from '../components/BgSite'
import SideLine from '../components/BgSite/SideLine'
import Footer from '../components/Footer'
import ContactContent from '../components/FormContact'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import TopHead from '../components/TopHead'
import { HomeContainer } from '../styles/HomeStyle'

export default function Home() {
  return (
    <div id="contato">
      <Head>
        <title>Contato | Intervalo Londrina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <BackgroundImg />
      <SideLine />
      <HomeContainer>
        <main className="container">
          <TopHead />
          <ContactContent />   
          <Newsletter />
        </main>
      </HomeContainer>
      <Footer />
    </div>
  )
}
