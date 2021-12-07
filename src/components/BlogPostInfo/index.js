import { BlogPostInfos } from "./style";

function BlogPostInfo({category}){
  return (
    <BlogPostInfos>
      <div>
        <span className="post_author">Por Isabela</span>
        <span className="post_date">17/11/2021</span>
      </div>
      <span className="post_category">{category}</span>
    </BlogPostInfos>
  )
};

export default BlogPostInfo;