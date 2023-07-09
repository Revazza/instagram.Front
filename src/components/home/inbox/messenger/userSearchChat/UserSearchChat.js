import React, { useState } from "react";
import styles from "./UserSearchChat.module.scss";
import PopUp from "../../../../UI/popup/PopUp";
import FilteredUsersLayout from "./filteredUsersLayout/FilteredUsersLayout";
import { api } from "../../../../../Api";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function UserSearchChat({ handlePopUpClose, open }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onPopUpCloseClick = () => {
    setSearchValue("");
    handlePopUpClose();
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOpenChatClick = (user) => {
    console.log("user: ", user);
    const token = Cookies.get("token");
    const credentials = jwtDecode(token);
    const request = {
      creatorId: credentials.sub,
      participantId: user.id,
    };
    api.post(`/Chat/CreateChat`, request).then((res) => navigate(res.data.payload.chatId));
  };

  return (
    <PopUp text="New message" open={open} onPopUpCloseClick={onPopUpCloseClick}>
      <div className={styles.search_bar}>
        <div className={styles.to}>
          <p>To:</p>
        </div>
        <div className={styles.search_bar_wrapper}>
          <input
            value={searchValue}
            id={styles.input}
            type="text"
            onChange={handleSearchValueChange}
            placeholder="Search..."
          />
        </div>
      </div>
      <FilteredUsersLayout
        onChatOpenClick={handleOpenChatClick}
        searchValue={searchValue}
      />
    </PopUp>
  );
}

export default UserSearchChat;
