import React, { useState, useEffect } from "react";

export const SearchContext = React.createContext(null);
const API_KEY = process.env.REACT_APP_API_KEY;

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [debounce, setDebounce] = useState();

  const handleSearch = () => {
    setError("");

    // reset fetch timeout when user types within 500 ms per char to avoid redundant fetches
    clearTimeout(debounce);
    setDebounce(
      setTimeout(() => {
        if (search.length > 1) {
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            .then((res) => res.json())
            .then((json) => {
              if (json.Response === "False") {
                setError(json.Error);
                setResults([]);
              } else setResults(json.Search);
            });
        } else {
          setResults([]);
        }
      }, 500)
    );
  };

  // trigger handleSearch on every change in the search input
  useEffect(() => {
    handleSearch();

    // eslint-disable-next-line
  }, [search]);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, handleSearch, results, error }}
    >
      {children}
    </SearchContext.Provider>
  );
};
