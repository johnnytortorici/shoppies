import React, { useState, useEffect } from "react";

export const NominationContext = React.createContext(null);

export const NominationProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);

  // for localStorage
  const existingNominations = JSON.parse(localStorage.getItem("nominations"));
  const [nominations, setNominations] = useState(
    existingNominations ? existingNominations : []
  );

  const setLocalStorage = (data) => {
    if (data) {
      localStorage.setItem("nominations", JSON.stringify(data));
      setNominations(data);
    } else {
      localStorage.clear();
      setNominations();
    }
  };

  const addNomination = (result) => {
    setNominations((nominations) => [...nominations, result]);
  };

  const removeNomination = (index) => {
    const nominationsCopy = [...nominations];
    nominationsCopy.splice(index, 1);
    setNominations(nominationsCopy);
  };

  useEffect(() => {
    setLocalStorage(nominations);

    if (nominations.length >= 5) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [nominations]);

  return (
    <NominationContext.Provider
      value={{
        nominations,
        addNomination,
        removeNomination,
        success,
      }}
    >
      {children}
    </NominationContext.Provider>
  );
};
