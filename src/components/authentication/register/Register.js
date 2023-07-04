import React, { useMemo, useState } from "react";
import styles from "./Register.module.scss";
import Card from "../../UI/Card";
import FloatingLabeledInput from "../../UI/input/floatingLabel/FloatingLabeledInput";
import DividingLine from "../../UI/dividingLine/DividingLine";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/button/Button";
import { api } from "../../../Api";

function Register() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const inputSets = useMemo(
    () => ({
      email: setEmail,
      fullName: setFullName,
      userName: setUserName,
      password: setPassword,
    }),
    []
  );

  const inputs = useMemo(
    () => ({
      email,
      fullName,
      userName,
      password,
    }),
    [email, fullName, userName, password]
  );

  const btnIsDisabled = Object.values(inputs).some((val) => val === "");

  const handleInputChange = (e) => {
    const { value, id } = e.target;
    inputSets[id](value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/User/CreateUser", inputs);
      console.log(response);
      if (response.data.status === 1) {
        setErrors(response.data.errors);
        return;
      }
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Card className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register_container}>
            <h1>Instagram</h1>
            <p>Sign up to see photos and videos from your friends.</p>
            <DividingLine />
            <div className={styles.inputs}>
              <FloatingLabeledInput
                onChange={handleInputChange}
                id="email"
                label="Email"
              />
              <FloatingLabeledInput
                onChange={handleInputChange}
                id="fullName"
                label="Full Name"
              />
              <FloatingLabeledInput
                onChange={handleInputChange}
                id="userName"
                label="Username"
              />
              <FloatingLabeledInput
                onChange={handleInputChange}
                id="password"
                label="Password"
                type="password"
              />
            </div>
            <div className={styles.contact}>
              <p>
                People who use our service may have uploaded your contact
                information to Instagram.
                <Link to="someurl">Learn More</Link>
              </p>
            </div>
            <div className={styles.contact} id={styles.terms}>
              <p>
                By signing up, you agree to our
                <Link to="someurl">
                  Terms , Privacy Policy and Cookies Policy .
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.submit_btn}>
            <Button type="submit" text="Sign Up" disabled={btnIsDisabled} />
          </div>
          <div className={styles.errors}>
            {errors.map((err) => {
              return <p key={err}>{err}</p>;
            })}
          </div>
        </form>
      </Card>
      <Card className={styles.link_to_login}>
        <p>
          Have an account? <Link to="/auth/login">Log in</Link>
        </p>
      </Card>
    </React.Fragment>
  );
}

export default Register;
