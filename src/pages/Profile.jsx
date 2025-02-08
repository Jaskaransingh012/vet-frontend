import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../assets/Images/7309681.jpg";
import "../Css/ProfilePage.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Default user details
  const defaultUser = {
    name: "John Doe",
    profilePicture: img,
    phoneNumber: "+91 98765 43210",
    email: "john.doe@example.com",
    pincode: "123 Animal Street, Pune, Maharashtra",
    adsPosted: [
      { id: 1, title: "Golden Retriever Puppy", status: "Available", image: "https://source.unsplash.com/random/800x600/?dog" },
      { id: 2, title: "Persian Cat", status: "Sold", image: "https://source.unsplash.com/random/800x600/?cat" },
      { id: 3, title: "Parrot", status: "Available", image: "https://source.unsplash.com/random/800x600/?parrot" },
    ],
  };

  // Fetch user details from API
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.email) {
      axios
        .get(`http://localhost:5000/api/users/user/${storedUser.email}`)
        .then((response) => {
          setUser(response.data);
          console.log(response.data);
        })
        .catch(() => {
          setUser(null); // Set to null so defaultUser is used
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const displayedUser = user || defaultUser;

  const handleEditProfile = () => {
    navigate("/edit-profile/info");
  };

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-picture">
          <img src={displayedUser.profilePicture || img} alt="Profile" />
        </div>
        <h1 className="profile-name">{displayedUser.name}</h1>

        {/* Edit Profile Button - Only for logged-in users */}
        {user && (
          <button className="edit-profile-button" onClick={handleEditProfile}>
            <FontAwesomeIcon icon={faEdit} /> Edit Profile
          </button>
        )}
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-card">
          <FontAwesomeIcon icon={faPhone} className="info-icon" />
          <span>{displayedUser.phoneNumber}</span>
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
          <span>{displayedUser.email}</span>
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <span>{displayedUser.pincode}</span> 
        </div>
      </div>

      {/* Ads Posted Section */}
      <div className="ads-section">
        <h2 className="section-title">Posted Advertisements</h2>
        <div className="ads-grid">
          {(displayedUser.adsPosted || []).map((ad) => (
            <div key={ad.id} className="ad-card">
              <div className="image-container">
                <img src={ad.image} alt={ad.title} className="ad-image" />
                <div className="image-overlay">
                  <span className={`ad-status ${ad.status.toLowerCase()}`}>
                    {ad.status}
                  </span>
                </div>
              </div>
              <div className="ad-details">
                <h3 className="ad-title">{ad.title}</h3>
                <button className="view-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
