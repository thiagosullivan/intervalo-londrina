import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme';
import GlobalStyles from '../styles/globals';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
