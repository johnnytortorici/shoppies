import styled from "styled-components";

import UnstyledButton from "./UnstyledButton";

export default styled(UnstyledButton)`
  padding: 5px 10px;
  text-align: center;
  border: 1px solid #495257;
  border-radius: 5px;
  transition: 0.15s;
  &:hover {
    opacity: 0.8;
  }
`;
