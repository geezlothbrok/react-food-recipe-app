import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";


function Sidebar({ links, close }) {
    const activeTab = ({ isActive }) => (isActive ? "active" : "");

  return (
    <div className="side-bar" onClick={close}>
      { links.map((link, index) => {
        return (
            <NavLink to={link.path} key={index} className={activeTab} id="sidebar-links" > {link.icon} 
                {link.name}
            </NavLink>
        )
      }) }
    </div>
  )
}

export default Sidebar
