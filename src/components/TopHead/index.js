import React, { useState } from 'react';
import { TopHeadContainer } from './style';
import LogoSite from "../LogoSite";
import SearchBar from "./SearchBar";
import { useRouter } from 'next/dist/client/router'

function TopHead() {
  const router = useRouter()
  
  const [search, setSearch] = useState('')
  const [isSearchLoading, setIsSearchLoading] = useState(false)
  
  return (
    <TopHeadContainer>
      <LogoSite />
      <SearchBar
        search={search}
        setSearch={setSearch}
        isSearchLoading={isSearchLoading}
        setIsSearchLoading={setIsSearchLoading}
      />
    </TopHeadContainer>
  )
}

export default TopHead;