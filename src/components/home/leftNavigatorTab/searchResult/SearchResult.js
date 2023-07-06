import React, { useEffect, useState } from "react";
import styles from "./SearchResult.module.scss";
import UserProfile from "../../../UI/userProfile/UserProfile";
import { api } from "../../../../Api";

function SearchResult({ users, searchValue, setLoading }) {
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    let timeoutId;
    const fetchUsers = async () => {
      await api
        .get(`/User/FilterUsersByUserName?userName=${searchValue}`)
        .then((resp) => setFilteredUsers(resp.data.payload.filteredUsers))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };
    // useDefferedValue hook wasn't working as expected
    const delayedFetchUsers = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fetchUsers, 500);
    };

    if (searchValue !== "") {
      setLoading(true);
      delayedFetchUsers();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchValue, setLoading]);

  return (
    <div className={styles.container}>
      {users && <p id={styles.recentP}>Recent</p>}
      <div className={styles.search_results}>
        {filteredUsers.map((user) => {
          return <UserProfile key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}

export default SearchResult;
