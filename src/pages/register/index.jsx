import register from './register.module.css';
import LoginImage from "../../assets/loginImage.png";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className={register.container}>
      <div className={register.leftSection}>
        <img
          src={LoginImage} // Replace with the actual image URL
          alt="Business discussion"
          className={register.image}
        />
      </div>

      <div className={register.rightSection}>
        <h2 className={register.heading}>Register Now</h2>
        <p className={register.subheading}>
          Take the first step and unlock endless possibilities
        </p>

        <form className={register.form}>
          <div className={register.formRow}>
            <div className={register.formGroup}>
              <label htmlFor="username" className={register.label}>
                Username <span className={register.required}>*</span>
              </label>
              <input type="text" id="username" className={register.input} required />
            </div>

            <div className={register.formGroup}>
              <label htmlFor="email" className={register.label}>
                Email <span className={register.required}>*</span>
              </label>
              <input type="email" id="email" className={register.input} required/>
            </div>
          </div>

          <div className={register.formRow}>
            <div className={register.formGroup}>
              <label htmlFor="country" className={register.label}>
                Country
              </label>
              <select id="country" className={register.select} required>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Nigeria">Nigeria</option>
                {/* Add more countries here */}
              </select>
            </div>

            <div className={register.formGroup}>
              <label htmlFor="mobile" className={register.label}>
                Mobile Number <span className={register.required}>*</span>
              </label>
              <input type="tel" id="mobile" className={register.input} required/>
            </div>
          </div>

          <div className={register.formRow}>
            <div className={register.formGroup}>
              <label htmlFor="password" className={register.label}>
                Password <span className={register.required}>*</span>
              </label>
              <div className={register.passwordWrapper}>
                <input type="password" id="password" className={register.input} required/>
                <button type="button" className={register.showPassword}>👁</button>
              </div>
            </div>

            <div className={register.formGroup}>
              <label htmlFor="confirmPassword" className={register.label}>
                Confirm Password <span className={register.required}>*</span>
              </label>
              <div className={register.passwordWrapper}>
                <input
                  type="password"
                  id="confirmPassword"
                  className={register.input}
                  required
                />
                <button type="button" className={register.showPassword}>👁</button>
              </div>
            </div>
          </div>

          <div className={register.checkboxGroup}>
            <input type="checkbox" id="agreement" className={register.checkbox} required/>
            <label htmlFor="agreement" className={register.checkboxLabel}>
              I agree with <span className='specialText'>Privacy Policy</span>, <span className='specialText'>Terms of Service</span>, <span className='specialText'>Trading Policy</span>
            </label>
          </div>
          <button type="submit" className={register.signUpButton}>Sign Up</button>
        </form>

        <p className={register.signIn}>
          Already have an account? <Link to="/login" className={register.signInLink}>Sign In</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
