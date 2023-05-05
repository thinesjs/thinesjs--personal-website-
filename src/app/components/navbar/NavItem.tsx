'use client';

import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavItem = () => {
    const [nav, setNav] = useState(false)
    const navbarItems = [{id: 1, route: 'home'}, {id: 2, route: 'about'}, {id: 3, route: 'projects'}]

    return ( 
        <div>
            {/* web navbar */}
            <ul className="hidden md:flex">
                {navbarItems.map(i => (
                    <li key={i.id} className="px-4 z-10 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer">
                        {i.route}
                    </li>
                ))}
            </ul>

            {/* mobile navbar toggle */}
            <div onClick={() => setNav(!nav)} className="pr-4 cursor-pointer text-gray-800 hover:scale-105 duration-200 md:hidden">
                {nav ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faBars} /> }
            </div>

            {/* mobile navbar */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-slate-100 text-gray-500 duration-200">
                {navbarItems.map(i => (
                    <li key={i.id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">
                        {i.route}
                    </li>
                ))}
                <li onClick={() => setNav(!nav)} className="cursor-pointer hover:scale-105 duration-200"><FontAwesomeIcon icon={faCircleXmark}/></li>
                </ul>
                
            )}

            
            
        </div>
        
     );
}
 
export default NavItem;