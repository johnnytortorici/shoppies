import React, { useContext } from "react";
import styled from "styled-components";

import { SearchContext } from "./context/SearchContext";
import { NominationContext } from "./context/NominationContext";

import Button from "./buttons/PrimaryButton";

const Results = () => {
  const { search, results, error } = useContext(SearchContext);
  const { nominations, addNomination } = useContext(NominationContext);

  if (results[0])
    return (
      <Wrapper>
        <h2>Results for "{search}"</h2>
        <ErrorMsg>{error}</ErrorMsg>
        <ul>
          {results.map((result, index) => {
            return (
              <li key={`result-${index}`}>
                {result.Title} {`(${result.Year})`}
                <NominateBtn
                  onClick={() => addNomination(result)}
                  disabled={
                    nominations.find(
                      (nomination) => nomination.imdbID === result.imdbID
                    ) || nominations.length > 4
                  }
                >
                  Nominate
                </NominateBtn>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    );
  else
    return (
      <Wrapper>
        {search.length > 1 ? <h2>Results for "{search}"</h2> : <h2>Results</h2>}
        <ErrorMsg>{error}</ErrorMsg>
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

  &:disabled {
    color: #959a9c;
    cursor: not-allowed;
    background-color: #f5f7f8;
    border: 1px solid #959a9c;
  }
`;

const ErrorMsg = styled.p`
  color: #e0245e;
  font-size: 0.8em;
  padding-top: 10px;
`;

export default Results;
