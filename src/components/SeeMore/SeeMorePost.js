import Image from "next/image";
import BlogPostInfo from "../BlogPostInfo";
import { ImgPost, SeeMorePostContainer } from "./style";

function SeeMorePost({ title, imgLink, resume, category }) {
  return (
    <SeeMorePostContainer>
      <ImgPost className="see_more_img" imgUrl={imgLink} />
      <BlogPostInfo category={category} />
      <h2>{title}</h2>
      <p>{resume}</p>
    </SeeMorePostContainer>
  )
};

export default SeeMorePost;