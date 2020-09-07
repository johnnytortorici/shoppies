import React, { useContext } from "react";
import styled from "styled-components";

import { NominationContext } from "./context/NominationContext";

import Search from "./Search";
import Results from "./Results";
import Nominations from "./Nominations";

import { BiCameraMovie } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";

const Home = () => {
  const { success } = useContext(NominationContext);

  return (
    <Wrapper>
      <Title>
        <BiCameraMovie />
        The Shoppies
      </Title>
      <Search />
      <SuccessMsg success={success}>
        <Check size={30} />
        <div>
          <p>Thank you for nominating your top 5 movies!</p>
        </div>
      </SuccessMsg>
      <ActionsWrapper>
        <Results />
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
  padding: 50px;

  @media (max-width: 600px) {
    padding: 50px 20px;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  padding-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 1.8em;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const SuccessMsg = styled.div`
  display: ${(prop) => (prop.success ? "flex" : "none")};
  align-items: center;
  padding: 20px 30px;
  width: 100%;
  color: #fff;
  background-color: #5ecc62;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0 0 5px #d3d3d3;
`;

const Check = styled(FiCheckCircle)`
  flex-shrink: 0;
  margin-right: 20px;
`;

export default Home;
