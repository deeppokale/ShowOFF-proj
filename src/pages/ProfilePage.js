// src/pages/ProfilePage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTh, FaFilm, FaCog } from 'react-icons/fa';
import BottomNavBar from '../components/BottomNavBar';
import '../styles/ProfilePage.css';

const ProfilePage = ({ userData, darkMode }) => {
  const [activeTab, setActiveTab] = useState('posts');
  const navigate = useNavigate();

  return (
    <div className="profile-page" data-theme={darkMode ? 'dark' : 'light'}>
      {/* ✅ Removed the toggle button — clean header only */}
      
      <div className="profile-header">
        <div className="header-top">
          <img src={userData.profilePic} alt="Profile" className="profile-pic" />

          {/* ⚙ Gear icon for Settings */}
          <FaCog
            size={24}
            className="settings-icon"
            onClick={() => navigate('/settings')}
          />
        </div>

        <div className="profile-info">
          <h2 className="username">{userData.username}</h2>
          <p className="bio">{userData.bio}</p>

          <div className="profile-stats">
            <span><strong>{userData.posts.length}</strong> posts</span>
            <span><strong>{userData.followers}</strong> followers</span>
            <span><strong>{userData.following}</strong> following</span>
          </div>

          <Link to="/edit-profile" className="edit-profile-link">
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="profile-toggle-tabs">
        <div
          className={`toggle-icon ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          <FaTh size={20} />
        </div>
        <div
          className={`toggle-icon ${activeTab === 'reels' ? 'active' : ''}`}
          onClick={() => setActiveTab('reels')}
        >
          <FaFilm size={20} />
        </div>
      </div>

      <div className="profile-content">
        {activeTab === 'posts' && (
          <div className="posts-grid">
            {userData.posts.map((post, index) => (
              <img
                key={index}
                src={post.image}
                alt={`Post ${index}`}
                className="post-thumbnail"
              />
            ))}
          </div>
        )}
        {activeTab === 'reels' && (
          <div className="reels-placeholder">
            <p>No reels yet.</p>
          </div>
        )}
      </div>

      <BottomNavBar />
    </div>
  );
};

export default ProfilePage;