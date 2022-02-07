import Image from "next/image";
import { BlogPostContainer, PostImageContainer } from "./style";
import BlogPostInfo from "../BlogPostInfo";
// import { RichText } from "@graphcms/rich-text-react-renderer"


function BlogPost({ postTitle, categories, date, author, text, imgUrl }) {
  return (
    <BlogPostContainer>
      <div className="blog_post_img">
        <PostImageContainer imgUrl={imgUrl} />
      </div>
      <BlogPostInfo categories={categories} date={date} author={author}/>
      <h1>{postTitle}</h1>
      {/* <RichText content={text} /> */}
    </BlogPostContainer>
  )
}

export default BlogPost;