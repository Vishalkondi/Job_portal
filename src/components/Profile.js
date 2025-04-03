import React, { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    skills: "",
    picture: "",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) setProfile(savedProfile);
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="text-center fw-bold">Your Profile</h2>
        
        {/* Profile Image */}
        <div className="profile-image-container">
          <img
            src={profile.picture || "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg"}
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Form Inputs */}
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fas fa-user"></i></span>
          <input type="text" className="form-control" name="name" placeholder="Name" value={profile.name} onChange={handleChange} />
        </div>
        
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fas fa-envelope"></i></span>
          <input type="email" className="form-control" name="email" placeholder="Email" value={profile.email} onChange={handleChange} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fas fa-pen"></i></span>
          <textarea className="form-control" name="bio" placeholder="Short Bio" value={profile.bio} onChange={handleChange} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fas fa-code"></i></span>
          <input type="text" className="form-control" name="skills" placeholder="Skills (e.g. React, Node.js)" value={profile.skills} onChange={handleChange} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fas fa-image"></i></span>
          <input type="text" className="form-control" name="picture" placeholder="Profile Picture URL" value={profile.picture} onChange={handleChange} />
        </div>

        {/* Save Button */}
        <button className="btn btn-primary btn-lg w-100" onClick={handleSave}>
          <i className="fas fa-save"></i> Save Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
