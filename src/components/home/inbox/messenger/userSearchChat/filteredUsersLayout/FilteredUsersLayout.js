import React, { useEffect, useState } from "react";
import styles from "./FilteredUsersLayout.module.scss";
import { api } from "../../../../../../Api";
import UserSearchProfile from "../../../../../UI/userSearchProfileChat/UserSearchProfileChat";
import Button from "../../../../../UI/button/Button";

function FilteredUsersLayout({ searchValue, onChatOpenClick }) {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    let timeoutId;
    const fetchUsers = async () => {
      await api
        .get(`/User/FilterUsersByUserName?userName=${searchValue}`)
        .then((resp) => setFilteredUsers(resp.data.payload.filteredUsers))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    };
    // useDefferedValue hook wasn't working as expected
    const delayedFetchUsers = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fetchUsers, 500);
    };

    if (searchValue !== "") {
      setIsLoading(true);
      delayedFetchUsers();
    }
    if (searchValue === "") {
      setFilteredUsers([]);
      setSelectedUser(null);
      setIsLoading(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchValue]);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleChatOpenClick = () => {
    onChatOpenClick(selectedUser);
  };

  const showFilteredUsers = filteredUsers.length !== 0 && !isLoading;

  return (
    <React.Fragment>
      <div className={styles.search_result}>
        {isLoading && (
          <img id={styles.loadingGif} src="/images/loading.gif" alt="waiting" />
        )}
        {showFilteredUsers &&
          filteredUsers.map((user) => {
            const isSelectedUser = user.id === selectedUser?.id;
            return (
              <UserSearchProfile
                key={user.id}
                isSelected={isSelectedUser}
                user={user}
                onSelectUser={handleUserSelect}
              />
            );
          })}
      </div>
      <div className={styles.chat_btn_wrapper}>
        <Button
          onClick={handleChatOpenClick}
          text="Chat"
          disabled={!selectedUser}
        />
      </div>
    </React.Fragment>
  );
}

export default FilteredUsersLayout;
