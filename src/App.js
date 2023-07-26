import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Authentication from "./routes/Authentication";
import Register from "./components/authentication/register/Register";
import Login from "./components/authentication/login/Login";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Home from "./routes/Home";
import Inbox from "./routes/Inbox";
import Messenger from "./components/home/inbox/messenger/Messenger";
import Chat from "./components/home/inbox/messenger/chat/Chat";
import Main from "./components/home/main/Main";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

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
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />}/>
          <Route path="inbox" element={<Inbox />}>
            <Route index element={<Messenger />} />
            <Route path=":id" element={<Chat />} />
          </Route>
        </Route>

        <Route path="/auth" element={<Authentication />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
