import React from "react";
import styled from "styled-components";

import Button from "./buttons/PrimaryButton";

const Nominations = () => {
  return (
    <Wrapper>
      <h2>Nominations</h2>
      <ul>
        <li>
          Rambo (1999)
          <NominateBtn>Remove</NominateBtn>
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

export default Nominations;
