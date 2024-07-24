/* Header component */
import './Header.scss';
import React from "react";
import logoImg from '../../assets/logo/InStock-Logo_1x.png';

function Header() {
   return (
     <div className="header">
        <div className="header__logo">{<img src={logoImg} alt='InStock logo'/>}</div>
     </div>
   );
}
export default Header;
