import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'
import SilverLogo from "../Logo/SilverLogo";
// import Navlinks from "./Navlinks";
import { ReactComponent as BurgerIcon } from '../../icons/hamburgermenu.svg'
import { AuthContext } from "../../context/auth.context";

function Navbar(){
    return(
        <nav className='navbar'>
            <NavItem icon={<SilverLogo />} />
            <NavItem icon={<BurgerIcon />}>
                <DropdownMenu />
            </NavItem>
        </nav>
    )
}

function NavItem(props){

    const [open, setOpen] = useState(false);

    return(
        <li className="nav-item">
            <a href='#' className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

function DropdownMenu(){
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    function DropdownItem(props){
        return(
            <Link to="" className="menu-item">
                {props.children}
            </Link>
        )
    }
    return(
        
        <div className="dropdown">
            
            <DropdownItem><Link to="/">Home</Link></DropdownItem>
            {isLoggedIn && (
            <>
            <DropdownItem><span>{user && user.username}</span></DropdownItem>
            <DropdownItem><Link to="/profile">Profile</Link></DropdownItem>
            <DropdownItem><Link to="/edit">Edit Profile</Link></DropdownItem>
            <DropdownItem><Link to="/" onClick={logOutUser}>Logout</Link></DropdownItem>
            </>
            )}
            {!isLoggedIn && (
            <>
            <DropdownItem><Link to="/signup">Sign up</Link></DropdownItem>
            <DropdownItem><Link to="/login">Log in</Link></DropdownItem>
            </>
            )}
        </div>
    )
}

export default Navbar;