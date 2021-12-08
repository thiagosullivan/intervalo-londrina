import { useState } from 'react';
import PostIndividualCardHome from './PostIndividualCardHome';
import { PostsHomeContainer } from './styles';
import ReactPaginate from 'react-paginate';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function PostCardHome({ postagens }) {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = postagens.slice(pagesVisited, pagesVisited + usersPerPage).map((posts) => {
    return (
      <PostIndividualCardHome
          key={posts.id}
          author={posts.author}
          date={posts.date}
          category={posts.category}
          title={posts.title}
          imgLink={posts.image}
          resume={posts.resume}
          postLink={posts.slug}
          text={posts.text}
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
      {/* {postagens.slice( 0, 4 ).map( (posts, index) => 
        <PostIndividualCardHome
          key={posts.id}
          author={posts.author}
          date={posts.date}
          category={posts.category}
          title={posts.title}
          imgLink={posts.image}
          resume={posts.resume}
          postLink={posts.slug}
          text={posts.text}
        />
      )}       */}
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
    </PostsHomeContainer>
  )
}

export default PostCardHome;