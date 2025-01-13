import React, { useState, useEffect } from "react";
import axios from "axios";
import register from "./register.module.css";
import LoginImage from "../../assets/loginImage.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the list of countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sortedCountries = response.data
          .map((country) => country.name.common)
          .sort(); // Sort alphabetically
        setCountries(sortedCountries);
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchCountries();
  }, []);

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

        <form className={register.form}>
          <div className={register.formRow}>
            <div className={register.formGroup}>
              <label htmlFor="username" className={register.label}>
                Username <span className={register.required}>*</span>
              </label>
              <input
                type="text"
                id="username"
                className={register.input}
                required
              />
            </div>

            <div className={register.formGroup}>
              <label htmlFor="email" className={register.label}>
                Email <span className={register.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                className={register.input}
                required
              />
            </div>
          </div>

          <div className={register.formRow}>
            <div className={register.formGroup}>
              <label htmlFor="country" className={register.label}>
                Country
              </label>
              <select id="country" className={register.select} required>
                <option value="">
                  {loading ? "Loading countries..." : "Select a country"}
                </option>
                {countries &&
                  countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
              </select>
            </div>

            <div className={register.formGroup}>
              <label htmlFor="mobile" className={register.label}>
                Mobile Number <span className={register.required}>*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                className={register.input}
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
            Sign Up
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