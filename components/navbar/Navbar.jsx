/*import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
      <Link to="/" style={{textDecoration:"none"}}>
      <span> Facebook</span>
      </Link>
       <HomeOutlinedIcon/>
       <DarkModeOutlinedIcon/>
       <GridViewOutlinedIcon/>
       <div className="search">
        <SearchOutlinedIcon/>
        <input type="text" placeholder="Search..."/>
       </div>
       </div>
      <div className="right">
      <PersonOutlineOutlinedIcon/>
      <EmailOutlinedIcon/>
      <NotificationsNoneOutlinedIcon/>
      <div className="user">
        <img src="https://th.bing.com/th/id/OIP.xH7cqGca3a5GnNxhjb0ciAHaEs?w=278&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
        <span> John Doe</span>
      </div>
      </div>
    </div>
  )
}

export default Navbar
*/
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;