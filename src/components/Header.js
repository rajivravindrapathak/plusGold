import React from "react";
import sharkbanner from '../assets/Images/sharkbanner.png'

const Header = () => {
    return ( 
        <>
            <p>header</p>
            <div>
                <img src={sharkbanner} />
            </div>
        </>
    );
}

export default Header;