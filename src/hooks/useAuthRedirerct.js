import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAuthRedirerct() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    const currentLoc = window.location.href;

    if (currentLoc.includes("/auth/register")) {
      return;
    }

    if (!token) {
      navigate("/auth/login");
      return;
    }

    try {
      jwtDecode(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } catch (error) {
      Cookies.remove("token");
      navigate("/auth/login");
    }
  }, [navigate]);
}

export default useAuthRedirerct;
