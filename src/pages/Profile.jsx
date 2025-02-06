import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUserFriends, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../Css/ProfilePage.css';
import img from "../assets/Images/7309681.jpg";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const ProfilePage = () => {
  const navigate = useNavigate();
  const user = {
    name: 'John Doe',
    profilePicture: img,
    phone: '+91 98765 43210',
    email: 'john.doe@example.com',
    address: '123 Animal Street, Pune, Maharashtra',
    adsPosted: [
      { id: 1, title: 'Golden Retriever Puppy', status: 'Available', image: 'https://source.unsplash.com/random/800x600/?dog' },
      { id: 2, title: 'Persian Cat', status: 'Sold', image: 'https://source.unsplash.com/random/800x600/?cat' },
      { id: 3, title: 'Parrot', status: 'Available', image: 'https://source.unsplash.com/random/800x600/?parrot' },
    ],
    followers: 1200,
    following: 350,
  };

  const handleEditProfile = () => {
    navigate("/edit-profile")
     // Replace with actual edit functionality
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header animate-slide-down">
        <div className="container flex justify-center align-middle flex-col">
        <div className="profile-picture hover-scale">
          <img src={user.profilePicture} alt="Profile" />
        </div>
        <h1 className="profile-name">{user.name}</h1>
        </div>
       
        {/* <div className="profile-stats">
          <div className="stat-item hover-scale">
            <span className="stat-number">{user.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item hover-scale">
            <span className="stat-number">{user.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div> */}
        {/* Edit Profile Button */}
        <button className="edit-profile-button hover-scale" onClick={handleEditProfile}>
          <FontAwesomeIcon icon={faEdit} /> Edit Profile
        </button>
      </div>

      {/* Contact Information */}
      <div className="contact-info animate-fade-in">
        <div className="info-card hover-scale">
          <FontAwesomeIcon icon={faPhone} className="info-icon" />
          <span>{user.phone}</span>
        </div>
        <div className="info-card hover-scale">
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
          <span>{user.email}</span>
        </div>
        <div className="info-card hover-scale">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <span>{user.address}</span>
        </div>
      </div>

      {/* Ads Posted Section */}
      <div className="ads-section animate-fade-in">
        <h2 className="section-title">Posted Advertisements</h2>
        <div className="ads-grid">
          {user.adsPosted.map((ad) => (
            <div key={ad.id} className="ad-card hover-scale">
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
                <button className="view-button hover-scale">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProfilePage;