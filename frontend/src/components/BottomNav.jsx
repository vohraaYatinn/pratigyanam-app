import React from 'react'
import { RiAccountCircleLine, RiHeartLine, RiHome2Line, RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'

const BottomNav = ({path}) => {
//   return (
// <>
// <div className="footer mt-auto p-3 fix-osahan-footer" style={{
//     height:"5rem",
//     margin:"1.4rem",
//     background: "#fffffd",
//     border:"2px solid transparent",
//     borderRadius:"30px",
//     display:"flex",
//     alignItems:"center",
//     justifyContent:"space-around",
//     position:"fixed",
//     bottom:"1.4rem",
//     width:"90%",
//     boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.1)"

// }}>
//             <Link to="/home" className={`col footer-bottom-nav ${path=="home" && "active"}`}>
//             <RiHome2Line className="footer-icon" />
//               <span className={path=="home" && "border-radius-bottom"}>Home</span>
//             </Link>
//             <Link to="/search" className={`col footer-bottom-nav ${path=="search" && "active"}`}>
//             <RiSearchLine className="footer-icon" />
//             <span className={path=="search" && "border-radius-bottom"}>Search</span>
//             </Link>
//             <Link to="/fav" className={`col footer-bottom-nav ${path=="fav" && "active"}`}>
//             <RiHeartLine className="footer-icon" />
//               <span className={path=="fav" && "border-radius-bottom"}>Favrouite</span>
//             </Link>
//             <Link to="/profile" className={`col footer-bottom-nav ${path=="profile" && "active"}`}>
//             <RiAccountCircleLine className="footer-icon" />
//               <span className={path=="edit" && "border-radius-bottom"}>Profile</span>
//             </Link>
//         </div>
// </>  )


return (
  <div id="footer-bar" className="footer-bar-6">
      <Link to="/home" className="active-nav"
  ><i className="fa fa-home" /><span>Home</span></Link>
    <Link to="/search"><i className="fa fa-search" /><span>Search</span></Link>

  <Link to="/fav"><i className="fa fa-heart" /><span>Favourites</span></Link>

  <Link to="/profile" data-menu="menu-main"><i className="fa fa-user" /><span>Profile</span></Link>
</div>
)
}

export default BottomNav;