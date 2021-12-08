import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  @font-face {
    font-family: 'Tinsel';
    src: url('/tinsel-regular.otf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
  }
  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 7.5rem 1rem;
    
    @media(max-width:1450px) {

    }
    @media(max-width:1000px) {

    }
    @media(max-width:700px) {

    }
  }

  #post_page ul {
    list-style: disc;
    padding-left: 2rem;
    padding-bottom: 1rem;
  }

  #post_page ol {
    padding-left: 2rem;
    padding-bottom: 1rem;
  }
`;
