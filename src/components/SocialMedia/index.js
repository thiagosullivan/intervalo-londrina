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
          onClick={() => handleRedirect("https://facebook.com")}
        />
      </SocialMediaIcon>
      <SocialMediaIcon>
        <FaInstagram
          onClick={() => handleRedirect("https://www.instagram.com/intervalolondrina/")}
        />
      </SocialMediaIcon>
      <SocialMediaIcon>
        <FaYoutube
          onClick={() => handleRedirect("https://youtube.com")}
        />
      </SocialMediaIcon>
    </SocialMediaContainer>
  )
};

export default SocialMedia;