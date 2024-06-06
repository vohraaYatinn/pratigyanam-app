import React, { useEffect } from 'react'
import { RiAccountCircleLine, RiHeartLine, RiHome2Line, RiSearchLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { userData } from '../redux/reducers/functionalities.reducer';

const BottomNav = ({path}) => {
  const loggedInUser = useSelector(userData);
  useEffect(()=>{
    console.log(loggedInUser)
  })

return (
  (loggedInUser?.role == "admin") ? 
  <div id="footer-bar" className="footer-bar-6">
  <Link to="/admin-dashboard" className={`${path == "home" && "active-nav-icon"}`}
><i className="fa fa-home" /><span>Dashboard</span></Link>
<Link to="/admin-categories" className={`${path == "search" && "active-nav-icon"}`}><i className="fa fa-search" /><span>Category</span></Link>

<Link to="/admin-upload" className={`${path == "fav" && "active-nav-icon"}`}><i className="fa fa-heart" /><span>Add Sound</span></Link>

<Link to="/admin-sound-edit" className={`${path == "profile" && "active-nav-icon"}`} data-menu="menu-main"><i className="fa fa-user" /><span>Sounds</span></Link>
<Link to="/admin-subscription" className={`${path == "profile" && "active-nav-icon"}`} data-menu="menu-main"><i className="fa fa-user" /><span>Subscription</span></Link>
</div>
  : 
  <div id="footer-bar" className="footer-bar-6">
      <Link to="/home" className={`${path == "home" && "active-nav-icon"}`}
  ><i className="fa fa-home" /><span>Home</span></Link>
    <Link to="/search" className={`${path == "search" && "active-nav-icon"}`}><i className="fa fa-search" /><span>Search</span></Link>

  <Link to="/fav" className={`${path == "fav" && "active-nav-icon"}`}><i className="fa fa-heart" /><span>Favourites</span></Link>

  <Link to="/profile" className={`${path == "profile" && "active-nav-icon"}`} data-menu="menu-main"><i className="fa fa-user" /><span>Profile</span></Link>
</div> 
)
}

export default BottomNav;