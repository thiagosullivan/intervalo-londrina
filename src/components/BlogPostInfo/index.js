import { BlogPostInfos } from "./style";

function BlogPostInfo({ category, date, author }){
  return (
    <BlogPostInfos>
      <div>
        <span className="post_author">Por {author}</span>
        <span className="post_date">{new Date(date).toLocaleDateString()}</span>
      </div>
      <span className="post_category">{category}</span>
    </BlogPostInfos>
  )
};

export default BlogPostInfo;