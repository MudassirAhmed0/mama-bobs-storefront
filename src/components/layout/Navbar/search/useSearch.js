import React, { useState } from "react";

const useSearch = () => {
  const [activeSearch, setactiveSearch] = useState(false);
  const handleSearchActive = () => {
    setactiveSearch(!activeSearch);
  };
  return { activeSearch, handleSearchActive };
};

export default useSearch;
