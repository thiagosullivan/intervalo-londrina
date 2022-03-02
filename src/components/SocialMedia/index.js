import { SocialMediaContainer, SocialMediaIcon } from './styles';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function SocialMedia(){

  function handleRedirect(url) {
    window.open(url)
  }

  return (
    <SocialMediaContainer>
      <SocialMediaIcon>
        <FaFacebookF
          onClick={() => handleRedirect("https://www.facebook.com/Intervalo-Londrina-113752527906813")}
        />
      </SocialMediaIcon>
      <SocialMediaIcon>
        <FaInstagram
          onClick={() => handleRedirect("https://www.instagram.com/intervalolondrina/")}
        />
      </SocialMediaIcon>
      <SocialMediaIcon>
        <FaYoutube
          onClick={() => handleRedirect("https://www.youtube.com/channel/UCFLRV7HUXbbXtF2KGSd2DVg ")}
        />
      </SocialMediaIcon>
    </SocialMediaContainer>
  )
};

export default SocialMedia;