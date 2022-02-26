import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme';
import GlobalStyles from '../styles/globals';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import {Toaster} from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />

        <Toaster position="bottom-right" />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
