import React, { useContext } from "react";
import styled from "styled-components";

import { SearchContext } from "./context/SearchContext";

import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <Wrapper>
      <label htmlFor="search">Movie title</label>
      <SearchWrapper>
        <BiSearchAlt2 size="30" />
        <SearchBar
          type="text"
          id="search"
          value={search}
          onChange={(ev) => setSearch(ev.currentTarget.value)}
        />
      </SearchWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  box-shadow: 0 0 5px #d3d3d3;
  margin-bottom: 15px;

  &:hover {
    box-shadow: 0 0 10px #d3d3d3;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #495257;
  border-radius: 5px;
`;

const SearchBar = styled.input`
  width: 100%;
`;

export default Search;
