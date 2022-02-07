import Image from "next/image";
import { BlogPostContainer, PostImageContainer } from "./style";
// import postImg from '../../assets/blog-post-img.png';
import BlogPostInfo from "../BlogPostInfo";
import ReactMarkdown from "react-markdown";
// import {RichText} from 'prismic-reactjs';


function BlogPost({ postTitle, categories, date, author, text, imgUrl }) {
  return (
    <BlogPostContainer>
      <div className="blog_post_img">
        <PostImageContainer imgUrl={imgUrl} />
      </div>
      <BlogPostInfo categories={categories} date={date} author={author}/>
      <h1>{postTitle}</h1>
      {/* {RichText.render(text)} */}
      <ReactMarkdown children={text}/>
    </BlogPostContainer>
  )
}

export default BlogPost;