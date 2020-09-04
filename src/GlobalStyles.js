import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #495257;
    font-size: 1.2em;
    font-family: 'Raleway', sans-serif;
    background-color: #F5F7F8;
  }

  input {
    color: #495257;
    font-size: 1em;
    font-family: 'Raleway', sans-serif;
    padding: 10px;
    border: none;
    outline: none;
    background: none;
  }

  label {
    display: block;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 1.2em;
  }

  li {
    padding-top: 15px;
    margin-left: 40px;
  }
`;
