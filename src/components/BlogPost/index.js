import Image from "next/image";
import { BlogPostContainer, PostImageContainer } from "./style";
// import postImg from '../../assets/blog-post-img.png';
import BlogPostInfo from "../BlogPostInfo";
import {RichText} from 'prismic-reactjs';


function BlogPost({ title, categories, date, author, text, imgUrl }) {
  return (
    <BlogPostContainer>
      <div className="blog_post_img">
      </div>
      <PostImageContainer imgUrl={imgUrl} />
      <BlogPostInfo category={categories} date={date} author={author}/>
      <h1>{title}</h1>
      {RichText.render(text)}
    </BlogPostContainer>
  )
}

export default BlogPost;