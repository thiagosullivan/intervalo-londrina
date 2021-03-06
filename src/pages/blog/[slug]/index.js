import Head from "next/head";
import { useRouter } from "next/router";

import BackgroundImg from "../../../components/BgSite";
import SideLine from "../../../components/BgSite/SideLine";
import Footer from "../../../components/Footer";
import Newsletter from "../../../components/Newsletter";
import TopHead from "../../../components/TopHead";
import CategoriesPosts from '../../../components/CategoriesPosts';
import BlogPost from "../../../components/BlogPost";
import SeeMore from "../../../components/SeeMore";
import Header from "../../../components/Header";
import LoadingScreen from "../../../components/LoadingScreen";

import { BlogPostContent } from "../../../styles/PostStyle";
import { SlugContainerPage } from "../../../styles/SlugPages";
import { getPostDetails, getPosts } from "../../../services/graphcms";

function Postagem({ post }) {

  console.log(post, "slug page")

  const router = useRouter();

  if(router.isFallback) {
    return <LoadingScreen />
  }

  return (
    <div id="post_page">
      <Head>
        <title>{post.title} | Intervalo Londrina </title>
        <meta name="description" content={post.resume} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={post.postImage.url} />
        <meta property="twitter:image" content={post.postImage.url} />
      </Head>

      <Header />
      <BackgroundImg />
      <SideLine />
      <SlugContainerPage>
        <main className="container">
          <TopHead />
          <CategoriesPosts />
          <BlogPostContent id="post_page_cont">
            <BlogPost
              postTitle={post.title}
              categories={post.category.name}
              date={post.createdAt}
              author={post.author.name}
              text={post.content.raw}
              imgUrl={post.postImage.url}
            />
            <SeeMore/>            
          </BlogPostContent>
          <Newsletter />
        </main>
      </SlugContainerPage>
      <Footer />
    </div>
  )
}

export default Postagem;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}