import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../Css/ProfilePage.css'; // Create this CSS file

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150', // Replace with actual image URL
    phone: '+91 98765 43210',
    email: 'john.doe@example.com',
    address: '123 Animal Street, Pune, Maharashtra',
    adsPosted: [
      { id: 1, title: 'Golden Retriever Puppy', status: 'Available', image: 'https://via.placeholder.com/100' },
      { id: 2, title: 'Persian Cat', status: 'Sold', image: 'https://via.placeholder.com/100' },
      { id: 3, title: 'Parrot', status: 'Available', image: 'https://via.placeholder.com/100' },
    ],
    followers: 1200,
    following: 350,
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-picture">
          <img src={user.profilePicture} alt="Profile" />
        </div>
        <h1 className="profile-name">{user.name}</h1>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">{user.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{user.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} className="info-icon" />
          <span>{user.phone}</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
          <span>{user.email}</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <span>{user.address}</span>
        </div>
      </div>

      {/* Ads Posted Section */}
      <div className="ads-section">
        <h2 className="section-title">Ads Posted</h2>
        <div className="ads-grid">
          {user.adsPosted.map((ad) => (
            <div key={ad.id} className="ad-card">
              <img src={ad.image} alt={ad.title} className="ad-image" />
              <div className="ad-details">
                <h3 className="ad-title">{ad.title}</h3>
                <span className={`ad-status ${ad.status.toLowerCase()}`}>{ad.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;