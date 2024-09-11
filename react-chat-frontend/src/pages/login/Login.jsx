import React, { useState } from "react";

import { classNames } from "../../lib/classNames/classNames";

import cls from "./Login.module.scss";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";



const Login = ({ className }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useLogin();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <>
      <Header />
      <div className={classNames(cls.Login, {}, [className ?? ""])}>
        <div className={cls.container}>
          <div className={cls.loginForm}>
            <h1>Login</h1>
            <form onSubmit={handleSubmitLogin}>
              <div className={cls.formItems}>
                <label className={cls.label}>
                  <span>Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className={cls.formItems}>
                <label className={cls.label}>
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Link to="/signup" className={cls.formItems}>
                {"Don't"} have an account?
              </Link>

              <div className={cls.formItems}>
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
