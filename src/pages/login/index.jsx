import { Link } from "react-router-dom";
import login from "./login.module.css";
import LoginImage from "../../assets/loginImage.png";

const Login = () => {
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
        <div className={login.logo}>
          {/* <img src="https://via.placeholder.com/100" alt="Logo" /> */}
        </div>
        <h2 className={login.heading}>Welcome Back</h2>
        <p className={login.subheading}>
          We missed you and are excited to have you here again
        </p>
        <form className={login.form}>
          <div>
            <label htmlFor="email" className={login.label}>
              Email <span className={login.required}>*</span>
            </label>
            <input type="email" id="email" className={login.input} required/>
          </div>

          <div>
            <label htmlFor="password" className={login.label}>
              Password <span className={login.required}>*</span>
            </label>
            <div className={login.passwordWrapper}>
              <input type="password" id="password" className={login.input}  required/>
              <button type="button" className={login.showPassword}>
                👁
              </button>
            </div>
          </div>

          <button type="submit" className={login.loginButton}>
            Login
          </button>
        </form>
        <p className={login.signUp}>
          Don’t have an account?{" "}
          <Link to="/signup" className={login.signUpLink}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
