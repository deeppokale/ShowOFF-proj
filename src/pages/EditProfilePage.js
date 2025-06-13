// src/pages/EditProfilePage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavBar from '../components/BottomNavBar';
import '../styles/EditProfilePage.css';

const EditProfilePage = ({ userData, updateUserData, darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(userData.profilePic);
  const [username, setUsername] = useState(userData.username);
  const [bio, setBio] = useState(userData.bio);
  const [links, setLinks] = useState(userData.links || '');
  const [gender, setGender] = useState(userData.gender || '');

  const handleSave = () => {
    updateUserData(prev => ({
      ...prev,
      profilePic,
      username,
      bio,
      links,
      gender,
    }));
    navigate('/profile');
  };

  return (
    <div className="edit-profile-page" data-theme={darkMode ? 'dark' : 'light'}>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>

      <h2>Edit Profile</h2>

      <div className="edit-profile-section">
        <label>Profile Picture URL</label>
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </div>

      <div className="edit-profile-section">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="edit-profile-section">
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      <div className="edit-profile-section">
        <label>Links</label>
        <input
          type="text"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
        />
      </div>

      <div className="edit-profile-section">
        <label>Gender</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>

      <button className="save-button" onClick={handleSave}>
        Save
      </button>

      <BottomNavBar />
    </div>
  );
};

export default EditProfilePage;