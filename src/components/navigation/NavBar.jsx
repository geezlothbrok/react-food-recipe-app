import React, { useState } from 'react';
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom';
import { FaHome,  FaListAlt, FaCog, FaBars, FaTimes } from "react-icons/fa";

import Sidebar from './Sidebar';



function NavBar() {
  const [openMenu, setOpenMenu ] = useState(false);
  const activeTab = ({ isActive }) => (isActive ? "active-tab" : "");
  const links = [
    {
        name: "Home",
        path: "/",
        icon: <FaHome />

    },
    {
        name: "Recipes",
        path: "/recipes",
        icon: <FaListAlt />

    },
    {
        name: "Settings",
        path: "/settings",
        icon: <FaCog />
    }
];

const showMenu = () => {
  setOpenMenu(true);
};

const hideMenu = () => {
  setOpenMenu(false);
};
  return (
    <>
    <div className='navbar container'>
     <Link to="/" className='logo'>Foodies<span className='logo-style'>Hu</span>b</Link>

     <div className="links">
      { links.map((link, index) => {
        const {name, path } = link;
        return (
          <NavLink to={path} key={index} className={activeTab}> {name} </NavLink>
        )
      }) }
     </div>

     <div className="toogle-mobile">
      {openMenu ?  <FaTimes onClick={hideMenu}/> :  <FaBars onClick={showMenu}/> }
     </div>
    </div>
    { openMenu && <Sidebar links={links} close={hideMenu} />}
    </>
  )
}

export default NavBar











