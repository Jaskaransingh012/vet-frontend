import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faTags,
  faAngleLeft,
  faAngleRight,
  faHorse,
  faUser,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import '../Css/Sidebar.css';

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`fixedSidebar fixedSidebarLeft ${isSidebarVisible ? '' : 'active'}`}>
      {/* Sidebar Items */}
      <Link to="/" className="sidebarItem" data-tooltip="Home">
      <FontAwesomeIcon icon={faHome} className="sidebarIcon" />
      </Link>
      <Link to="/marketplace" className="sidebarItem" data-tooltip="Market Place">
        <FontAwesomeIcon icon={faHorse} className="sidebarIcon" />
      </Link>
      <Link to="/veterinary-support" className="sidebarItem" data-tooltip="Veterinary Support">
        <FontAwesomeIcon icon={faStethoscope} className="sidebarIcon" />
      </Link>
      <Link to="/products" className="sidebarItem" data-tooltip="Products">
        <FontAwesomeIcon icon={faTags} className="sidebarIcon" />
      </Link>
      <Link to="/profile" className="sidebarItem" data-tooltip="Profile">
        <FontAwesomeIcon icon={faUser} className="sidebarIcon" />
      </Link>

      {/* Toggle Button */}
      <button className="buttonTrigger" onClick={toggleSidebar} data-tooltip={isSidebarVisible ? 'Hide' : 'Show'}>
        <FontAwesomeIcon icon={isSidebarVisible ? faAngleLeft : faAngleRight} className="toggleIcon" />
      </button>
    </div>
  );
};

export default Sidebar;
