import { SearchBarContainer } from "./style";
import { IoIosSearch } from 'react-icons/io';

function SearchBar(){
  return (
    <SearchBarContainer>
      <input placeholder="Pesquisar" type="text" />
      <button type="submit">
        <IoIosSearch />
      </button>
    </SearchBarContainer>
  )
}

export default SearchBar;