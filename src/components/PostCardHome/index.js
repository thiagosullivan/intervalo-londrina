import { useState } from 'react';
import PostIndividualCardHome from './PostIndividualCardHome';
import { PostsHomeContainer } from './styles';
import ReactPaginate from 'react-paginate';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function PostCardHome({ postagens }) {

  console.log(postagens, "postagens")
  const reversedPosts = postagens.map(postagem => postagem).reverse();
  
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = reversedPosts.slice(pagesVisited, pagesVisited + usersPerPage).map((posts) => {
    return (
      <PostIndividualCardHome
          key={posts.node.title}
          author={posts.node.author}
          date={posts.node.createdAt}
          category={posts.node.category}
          title={posts.node.title}
          imgLink={posts.node.postImage}
          resume={posts.node.resume}
          postLink={posts.node.slug}
          text={posts.node.content}
        />
      // <div>{posts.node.title}</div>
    )
  })

  const pageCount = Math.ceil(postagens.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  // const filterdPeople = postagens.filter(posts => posts.category == 'Dança')
  return (
    <PostsHomeContainer>
      {displayUsers}
      <ReactPaginate
        previousLabel={<MdArrowBackIos />}
        nextLabel={<MdArrowForwardIos />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      {/* <div>
            <p>{publicacao.title}</p>
          </div> */}
      {/* {publicacao.map((posts) => {
        return (
          <div>
            <p>{posts.title}</p>
          </div>
        )
      })} */}
    </PostsHomeContainer>
  )
}

export default PostCardHome;