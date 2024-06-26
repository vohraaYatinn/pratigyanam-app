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
  <Link to="/admin-dashboard" className={`${path == "admin-dashboard" && "active-nav-icon"}`}
><i className="fa fa-home" /><span>Dashboard</span></Link>
<Link to="/admin-categories" className={`${path == "admin-categories" && "active-nav-icon"}`}><i className='fa-solid fa-list'/><span>Category</span></Link>

<Link to="/admin-upload" className={`${path == "admin-upload" && "active-nav-icon"}`}><i className="fa-solid fa-plus" /><span>Add Sound</span></Link>

<Link to="/admin-sound-edit" className={`${path == "admin-sound-edit" && "active-nav-icon"}`} data-menu="menu-main"><i className="fa-solid fa-music" /><span>Sounds</span></Link>
<Link to="/admin-subscription" className={`${path == "admin-subscription" && "active-nav-icon"}`} data-menu="menu-main"><i className="fa-solid fa-money-bill"></i><span>Subscription</span></Link>
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