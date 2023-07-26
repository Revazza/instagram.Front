import React, { useEffect, useState } from "react";
import styles from "../components/home/inbox/Inbox.module.scss";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FriendsMessageList from "../components/home/inbox/friendsList/FriendsMessageList";
import { fetchUserChats } from "../store/reducers/notificationReducer";

function Inbox() {
  const [decodedToken, setDecodedToken] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    try {
      const decodedToken = jwtDecode(token);
      const userId = jwtDecode(token).sub;
      dispatch(fetchUserChats(userId, 30));
      setDecodedToken(decodedToken);
    } catch (error) {
      navigate("/auth/login");
    }
  }, [navigate, dispatch]);

  return (
    <div className={styles.container}>
      <FriendsMessageList token={decodedToken} />
      <Outlet />
    </div>
  );
}

export default Inbox;
