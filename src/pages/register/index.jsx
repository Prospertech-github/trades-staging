import React, { useState, useEffect } from "react";
import axios from "axios";
import register from "./register.module.css";
import LoginImage from "../../assets/loginImage.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://api.goldencoin.pro/api/v1/auth/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        if (response.status === 201) alert("Account created successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.status === 422)
          alert(`Kindly check the data entered and input correct details. \nPassword must be eight(8) characters long \nEmail must be a valid .com email`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className={register.container}>
      <div className={register.leftSection}>
        <img
          src={LoginImage}
          alt="Business discussion"
          className={register.image}
        />
      </div>

      <div className={register.rightSection}>
        <h2 className={register.heading}>Register Now</h2>
        <p className={register.subheading}>
          Take the first step and unlock endless possibilities
        </p>

        <form className={register.form} onSubmit={handleSubmit}>
          <div className={register.formRow}>
            <div className={register.formGroup}>
              <label htmlFor="firstName" className={register.label}>
                First Name <span className={register.required}>*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className={register.input}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className={register.formGroup}>
              <label htmlFor="lastName" className={register.label}>
                Last Name <span className={register.required}>*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className={register.input}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={register.formRow}>
            <div className={register.formGroup}>
              <label htmlFor="email" className={register.label}>
                Email <span className={register.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                className={register.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={register.formGroup}>
              <label htmlFor="password" className={register.label}>
                Password <span className={register.required}>*</span>
              </label>
              <input
                type="password"
                id="password"
                className={register.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={register.checkboxGroup}>
            <input
              type="checkbox"
              id="agreement"
              className={register.checkbox}
              required
            />
            <label htmlFor="agreement" className={register.checkboxLabel}>
              I agree with <span className="specialText">Privacy Policy</span>,{" "}
              <span className="specialText">Terms of Service</span>,{" "}
              <span className="specialText">Trading Policy</span>
            </label>
          </div>
          <button type="submit" className={register.signUpButton}>
            {isLoading ? "Wait a Minute ..." : "Sign"}
          </button>
        </form>

        <p className={register.signIn}>
          Already have an account?{" "}
          <Link to="/login" className={register.signInLink}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
