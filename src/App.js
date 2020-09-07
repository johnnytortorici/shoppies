import React from "react";

import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";

import { SearchProvider } from "./components/context/SearchContext";
import { NominationProvider } from "./components/context/NominationContext";

require("dotenv").config();

function App() {
  return (
    <>
      <GlobalStyles />
      <SearchProvider>
        <NominationProvider>
          <Home />
        </NominationProvider>
      </SearchProvider>
    </>
  );
}

export default App;
