import React from "react";
const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="avatar" />
      <div className="profile-info">
        <h2>Ayoub Rahmoun</h2>
        <p>Senior Software Engineer</p>
        <p>Marrakesh, Morocco • Example@email.com</p>
      </div>
      <button className="edit-btn">Edit Profile</button>
    </div>
  );
};

export default ProfileHeader;
