import React, { useState } from "react";

import { classNames } from "../../lib/classNames/classNames";

import cls from "./SignUp.module.scss";
import { Header } from "../../components/Header/Header";
import GenderCheckbox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";



const SignUp = ({ className }) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <>
      <Header />
      <div className={classNames(cls.Login, {}, [className ?? ""])}>
        <div className={cls.container}>
          <div className={cls.loginForm}>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
              <div className={cls.formItems}>
                <label className={cls.label}>
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
              <div className={cls.formItems}>
                <label className={cls.label}>
                  <span>Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </div>

              <div className={cls.formItems}>
                <label className={cls.label}>
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>

              <div className={cls.formItems}>
                <label className={cls.label}>
                  <span>Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Confirm Password"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>

              <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

              <Link to={"/login"} className={cls.formItems}>
                Already have an account?
              </Link>

              <div className={cls.formItems}>
                <button >Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
