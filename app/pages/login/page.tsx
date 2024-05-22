"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

//   const incrementValue = Number(incrementAmount) || 0;
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //const navigate = useNavigate()
  const router = useRouter();
  const onButtonClick = () => {
    axios
      .post("https://dev-api-cms.onlive.vn/api/auth/login", {
        username: email,
        password: password,
      })

      .then(function (response) {
        console.log(response);
        // Navigate to home page on successful login
        router.push("/");
      })
      .catch(function (error) {
        console.error("There was an error logging in!", error);
      });
  };
  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
    </div>
  );
};
export default Login;
