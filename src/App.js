import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Authentication from "./routes/Authentication";
import Register from "./components/authentication/register/Register";
import Login from "./components/authentication/login/Login";
import Home from "./routes/Home";
import Inbox from "./routes/Inbox";
import Messenger from "./components/home/inbox/messenger/Messenger";
import Chat from "./components/home/inbox/messenger/chat/Chat";
import Main from "./components/home/main/Main";
import useAuthRedirerct from "./hooks/useAuthRedirerct";
import useNotificationHubConnection from "./hooks/useNotificationHubConnection";

function App() {
  useAuthRedirerct();
  useNotificationHubConnection();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
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
