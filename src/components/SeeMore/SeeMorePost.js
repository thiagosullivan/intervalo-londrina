import Image from "next/image";
import BlogPostInfo from "../BlogPostInfo";
import { ImgPost, SeeMorePostContainer } from "./style";

function SeeMorePost({ title, imgLink, resume, category }) {
  return (
    <SeeMorePostContainer>
      <div className="see_more_col1">
        <ImgPost className="see_more_img" imgUrl={imgLink} />
        <BlogPostInfo category={category} />
      </div>
      <div className="see_more_col2">
        <h2>{title}</h2>
        <p>{resume}</p>
      </div>
    </SeeMorePostContainer>
  )
};

export default SeeMorePost;