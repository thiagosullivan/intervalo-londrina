import Image from "next/image";
import Link from "next/link";
import BlogPostInfo from "../BlogPostInfo";
import { ImgPost, SeeMorePostContainer } from "./style";

function SeeMorePost({ title, image, resume, categories, author, date, slug }) {
  return (
    <SeeMorePostContainer>
      <Link href={`/blog/${slug}`}>
        <a>
        <div className="see_more_col1">
          <ImgPost className="see_more_img" imgUrl={image} />
          <BlogPostInfo categories={categories} author={author} date={date} />
        </div>
        <div className="see_more_col2">
          <h2>{title.length > 120 ? title.substr(0, 120) + "..." : title}</h2>
          <p>{resume.length > 180 ? resume.substr(0, 150) + "..." : resume}</p>
        </div>
        </a>
      </Link>
    </SeeMorePostContainer>
  )
};

export default SeeMorePost;