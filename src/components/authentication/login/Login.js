import React, { useMemo, useState } from "react";
import styles from "./Login.module.scss";
import Card from "../../UI/Card";
import FloatingLabeledInput from "../../UI/input/floatingLabel/FloatingLabeledInput";
import Button from "../../UI/button/Button";
import DividingLine from "../../UI/dividingLine/DividingLine";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../Api";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const inputs = useMemo(
    () => ({
      email,
      password,
    }),
    [email, password]
  );

  const setInputs = useMemo(
    () => ({
      email: setEmail,
      password: setPassword,
    }),
    []
  );

  const handleInputChange = (e) => {
    const { value, id } = e.target;
    setInputs[id](value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/User/Login", inputs);
      if (response.data.status === 1) {
        setErrors(response.data.errors);
        return;
      }
      const token = response.data.payload.token;
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      Cookies.set("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const btnIsDisabled = Object.values(inputs).some((val) => val === "");

  return (
    <div className={styles.container}>
      <div className={styles.img_form_container}>
        <div className={styles.img_wrapper}>
          <img src="/images/loginPhoto.png" alt="instagram" />
        </div>
        <div className={styles.form_account_wrapper}>
          <div className={styles.form_wrapper}>
            <Card className={styles.form}>
              <form onSubmit={handleSubmit}>
                <h1>Instagram</h1>
                <div className={styles.inputs}>
                  <FloatingLabeledInput
                    onChange={handleInputChange}
                    id="email"
                    label="Email"
                  />
                  <FloatingLabeledInput
                    onChange={handleInputChange}
                    id="password"
                    label="Password"
                    type="password"
                  />
                </div>
                <div className={styles.errors}>
                  {errors.map((err) => {
                    return <p key={err}>{err}</p>;
                  })}
                </div>
                <div className={styles.submit_btn}>
                  <Button
                    type="submit"
                    text="Log In"
                    disabled={btnIsDisabled}
                  />
                </div>
              </form>
              <DividingLine />
              <Link className={styles.forgot_password} to="#">
                Forgot Password?
              </Link>
            </Card>
          </div>
          <Card className={styles.already_have_account}>
            <p>
              Don't have an account? <Link to="/auth/register">Sign up</Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
