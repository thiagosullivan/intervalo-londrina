import { SearchBarContainer, SearchBarContainerFather } from "./style";
import { IoIosSearch } from 'react-icons/io';
import { useRouter } from "next/router";
import LoadingSearchScreen from "../LoadingScreenSearch";

function SearchBar({
  search,
  setSearch,
  isSearchLoading,
  setIsSearchLoading
}) {

  const router = useRouter()
  return (
    <SearchBarContainerFather>
      <SearchBarContainer
        onSubmit={event => {
          event.preventDefault()
          setIsSearchLoading(true)

          router.push(`/resultados?s=${search}`)

          setTimeout(() => setIsSearchLoading(false), 400)

          setSearch('')
        }}
      > 
       
       
        <input
          placeholder="Pesquisar"
          type="text"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <button type="submit">
          <IoIosSearch />
        </button>
      </SearchBarContainer>
      {/* <div className="loader-search-container">
        {isSearchLoading && <LoadingSearchScreen />}
      </div> */}
    </SearchBarContainerFather>
  )
}

export default SearchBar;