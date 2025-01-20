import React, { useState } from 'react';
import styles from './profile.module.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Pro',
    lastName: 'Ik',
    email: 'pichybyke@gmail.com',
    phone: '0808914123434',
    gender: 'Male',
    verificationFile: null,
    verificationMethod: 'Drivers License',
  });

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, verificationFile: e.target.files[0] });
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.profileAvatar}></div>
        <h2>{profile.firstName} {profile.lastName}</h2>
        <p className={styles.balance}>$0.00</p>
      </div>

      <div className={styles.profileForm}>
        <h3>Edit Profile</h3>
        <p>Enter profile information</p>
        
        <label>First Name</label>
        <input type="text" name="firstName" value={profile.firstName} onChange={handleInputChange} />

        <label>Last Name</label>
        <input type="text" name="lastName" value={profile.lastName} onChange={handleInputChange} />

        <label>Email</label>
        <input type="email" name="email" value={profile.email} onChange={handleInputChange} />

        <label>Phone</label>
        <input type="text" name="phone" value={profile.phone} onChange={handleInputChange} />

        <label>Gender</label>
        <select name="gender" value={profile.gender} onChange={handleInputChange}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className={styles.verificationSection}>
        <h3>Upload Verification Document</h3>
        <span className={styles.verificationStatus}>Not Verified</span>

        <label>Choose File</label>
        <input type="file" onChange={handleFileChange} />

        <label>Method of Verification</label>
        <select name="verificationMethod" value={profile.verificationMethod} onChange={handleInputChange}>
          <option>Drivers License</option>
          <option>Passport</option>
          <option>National ID</option>
        </select>

        <button className={styles.uploadButton}>Upload</button>
      </div>
    </div>
  );
};

export default Profile;
