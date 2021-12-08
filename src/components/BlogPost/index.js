import Image from "next/image";
import { BlogPostContainer, PostImageContainer } from "./style";
// import postImg from '../../assets/blog-post-img.png';
import BlogPostInfo from "../BlogPostInfo";
import {RichText} from 'prismic-reactjs';


function BlogPost({ post }) {
  return (
    <BlogPostContainer>
      <div className="blog_post_img">
        {/* <Image src={post.image} layout="fixed" alt='Imagem da postagem' /> */}
      </div>
      <PostImageContainer imgUrl={post.image} />
      <BlogPostInfo category={post.categories} date={post.date} author={post.author}/>
      <h1>{post.title}</h1>
      {RichText.render(post.text)}
    </BlogPostContainer>
  )
}

export default BlogPost;