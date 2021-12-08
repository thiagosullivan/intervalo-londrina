import Image from 'next/image';
import Link from 'next/link';
import { ImgPost, IndividualCardContainer } from './styles';
import {RichText} from 'prismic-reactjs';

function PostIndividualCardHome({ author, date, category, title, imgLink, resume, postLink, text }) {
  return (
    <IndividualCardContainer>
      <div className="card_first_info">
        <div className="post_infos">
          <span className="author_post">Por {author}</span>
          <span className="date_post">{new Date(date).toLocaleDateString()}</span>
          <span className="category_post">{category}</span>
        </div>
        <h3 className="post_title">{title}</h3>
      </div>
      <ImgPost className="post_img" imgUrl={imgLink} />
      <div className="card_second_info">
        <p className="post_resume">{resume.length > 180 ? resume.substr(0, 150) + "..." : resume}</p>
        {/* {RichText.render(text)} */}
        <Link href={`/blog/${postLink}`}>
          <a><span>Ler mais</span></a>
        </Link>
      </div>
    </IndividualCardContainer>
  )
}

export default PostIndividualCardHome;