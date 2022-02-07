import { SearchBarContainer } from "./style";
import { IoIosSearch } from 'react-icons/io';
import { useRouter } from "next/router";

function SearchBar({
  search,
  setSearch,
  isSearchLoading,
  setIsSearchLoading
}) {

  const router = useRouter()
  return (
    <SearchBarContainer
      onSubmit={event => {
        event.preventDefault()
        setIsSearchLoading(true)

        router.push(`/resultados?s=${search}`)

        setTimeout(() => setIsSearchLoading(false), 600)
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
  )
}

export default SearchBar;