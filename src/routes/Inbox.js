import React, { useEffect, useState } from "react";
import LeftNavigatorTab from "../components/home/leftNavigatorTab/LeftNavigatorTab";
import styles from "../components/home/inbox/Inbox.module.scss";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Outlet, useNavigate } from "react-router-dom";
import FriendsMessageList from "../components/home/inbox/friendsList/FriendsMessageList";

function Inbox() {
  const [decodedToken, setDecodedToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    try {
      const decodedToken = jwtDecode(token);
      setDecodedToken(decodedToken);
    } catch (error) {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <LeftNavigatorTab tab={5} />
      <FriendsMessageList token={decodedToken} />
      <Outlet />
    </div>
  );
}

export default Inbox;
