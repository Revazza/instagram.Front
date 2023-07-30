import React, { useCallback, useState } from "react";
import styles from "./SearchTab.module.scss";
import SearchResult from "../searchResult/SearchResult";

function SearchTab() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const memoizedSetIsLoading = useCallback(
    (value) => {
      setIsLoading(value);
    },
    [setIsLoading]
  );

  const handleSearchValueChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setIsLoading(false);
    }
    setSearchValue(value);
  };

  const handleRemoveSearchInput = () => {
    setSearchValue("");
  };

  const showRemoveBtn = searchValue !== "" && !isLoading;

  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <p>Search</p>
        <div className={styles.search}>
          <div className={styles.img_wrapper}>
            <img src="/images/search_inactive.png" alt="search" />
          </div>
          <div className={styles.search_wrapper}>
            <input
              className={styles.search_input}
              type="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchValueChange}
            />
            <div className={styles.btn}>
              {showRemoveBtn && (
                <img
                  onClick={handleRemoveSearchInput}
                  src="/images/remove.png"
                  alt="remove"
                />
              )}
              {isLoading && <img src="/images/loading.gif" alt="loading" />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <SearchResult
          setLoading={memoizedSetIsLoading}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}

export default SearchTab;
