import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    if(sessionStorage.getItem('userDetails')){
      const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
      const { user } = userDetails;
      setProfile({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
      });
      setBalance(user?.balance)
    }
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.profileAvatar}></div>
        <h2>
          {profile.firstName} {profile.lastName}
        </h2>
        <p className={styles.balance}>${balance}</p>
      </div>

      <div className={styles.profileForm}>
        <h3>Edit Profile</h3>
        <p>Enter profile information</p>

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={profile.firstName}
          readOnly
        />

        <label>Last Name</label>
        <input type="text" name="lastName" value={profile.lastName} readOnly />

        <label>Email</label>
        <input type="email" name="email" value={profile.email} readOnly />
      </div>
    </div>
  );
};

export default Profile;
