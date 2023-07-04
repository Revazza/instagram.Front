import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Authentication from "./routes/Authentication";
import Register from "./components/authentication/register/Register";
import Login from "./components/authentication/login/Login";
import { useEffect } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Home from "./routes/Home";
import { api } from "./Api";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      navigate("/auth/login");
      return;
    }

    try {
      const token = jwtDecode(token);
      console.log(api);
      api = axios.create({
        baseURL: BASE_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(api);

    } catch (error) {
      Cookies.remove("token");
      navigate("/auth/login");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>

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
