import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import login from "./login.module.css";
import LoginImage from "../../assets/loginImage.png";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://api.goldencoin.pro/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.data)
        if (response.status === 200) alert("Successfully Logged In");
        setIsLoading(false);
        sessionStorage.setItem('userDetails', JSON.stringify(response.data.data))
        navigate("/dashboard")
      })
      .catch((error) => {
        if (error.status === 401) alert(`Invalid Email or Password`);
        if (error.status === 422) alert(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className={login.container}>
      <div className={login.leftSection}>
        <img
          src={LoginImage}
          alt="Login illustration"
          className={login.image}
        />
      </div>
      <div className={login.rightSection}>
        <h2 className={login.heading}>Welcome Back</h2>
        <p className={login.subheading}>
          We missed you and are excited to have you here again
        </p>

        <form className={login.form} onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className={login.label}>
              Email <span className={login.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              className={login.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className={login.label}>
              Password <span className={login.required}>*</span>
            </label>
            <div className={login.passwordWrapper}>
              <input
                type="password"
                id="password"
                className={login.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className={login.showPassword}>
                👁
              </button>
            </div>
          </div>

          <button type="submit" className={login.loginButton}>
            {isLoading ? "Wait a Minute ..." : "Login"}
          </button>
        </form>
        <p className={login.signUp}>
          Don't have an account?{" "}
          <Link to="/register" className={login.signUpLink}>
            Sign Up
          </Link>
        </p>
        <p className={login.return}>
          <Link to="/" className={login.signUpLink}>
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
