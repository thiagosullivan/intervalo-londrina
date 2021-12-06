import Head from 'next/head'
import Image from 'next/image'
import BackgroundImg from '../components/BgSite'
import SideLine from '../components/BgSite/SideLine'
import Footer from '../components/Footer'
import ContactContent from '../components/FormContact'
import Header from '../components/Header'
import SideBar from '../components/Header/SideBar'
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
      </Head>

      <SideBar />
      {/* <Header /> */}
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
