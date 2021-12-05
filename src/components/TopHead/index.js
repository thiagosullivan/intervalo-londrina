import { TopHeadContainer } from './style';
import LogoSite from "../LogoSite";
import SearchBar from "./SearchBar";

function TopHead() {
  return (
    <TopHeadContainer>
      <LogoSite />
      <SearchBar />
    </TopHeadContainer>
  )
}

export default TopHead;