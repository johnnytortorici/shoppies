import React, { useState } from "react";
import styled from "styled-components";

import Search from "./Search";
import Results from "./Results";
import Nominations from "./Nominations";

import { BiCameraMovie } from "react-icons/bi";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <Wrapper>
      <Title>
        <BiCameraMovie />
        The Shoppies
      </Title>
      <Search search={search} setSearch={setSearch} />
      <ActionsWrapper>
        <Results search={search} />
        <Nominations />
      </ActionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80vw;
`;

export default Home;
