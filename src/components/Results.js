import React from "react";
import styled from "styled-components";

import Button from "./buttons/PrimaryButton";

const Results = ({ search }) => {
  return (
    <Wrapper>
      <h2>Results for "{search}"</h2>
      <ul>
        <li>
          Rambo (1999)
          <NominateBtn>Nominate</NominateBtn>
        </li>
        <li>
          Hey Ram (2000)
          <NominateBtn>Nominate</NominateBtn>
        </li>
        <li>
          Ram Das, Going Home (2007)
          <NominateBtn>Nominate</NominateBtn>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
  width: 49%;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  box-shadow: 0 0 5px #d3d3d3;

  &:hover {
    box-shadow: 0 0 10px #d3d3d3;
  }

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const NominateBtn = styled(Button)`
  font-size: 0.9em;
  margin-left: 10px;
`;

export default Results;
