import React from "react";
import './Navbar.css'
import SilverLogo from "../Logo/SilverLogo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Navlinks from "../Navlinks/Navlinks";

function Navbar(){
    return(
        <div className='navbar'>
            <SilverLogo />
            <Navlinks />
            <HamburgerMenu />
        </div>
    )
}
export default Navbar;