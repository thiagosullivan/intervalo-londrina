import { useState } from 'react';
import PostIndividualCardHome from './PostIndividualCardHome';
import { PostsHomeContainer } from './styles';
import ReactPaginate from 'react-paginate';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function PostCardHome({ postagens }) {

  console.log(postagens, "postagens")
  const reversedPosts = postagens.map(postagem => postagem).reverse();
  console.log(reversedPosts, "postagens")
  
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
      {reversedPosts.length >= 4 &&
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
      }
    </PostsHomeContainer>
  )
}

export default PostCardHome;