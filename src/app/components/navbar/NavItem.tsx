'use client';

import { AiOutlineClose } from 'react-icons/ai';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { useState } from "react";
import Link from "next/link";
import { HStack, IconButton, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const NavItem = () => {
    const [nav, setNav] = useState(false)
    const navbarItems = [{id: 1, name: 'home', route: "/"}, {id: 2, name: 'about', route: "about"}, {id: 3, name: 'projects', route: "projects"}, {id: 4, name: 'gallery', route: "gallery"}]
    const { colorMode, toggleColorMode } = useColorMode()

    return ( 
        <div>
            {/* web navbar */}
            <HStack>
                <ul className="hidden md:flex">
                    {navbarItems.map(({id, name, route}) => (
                        <li key={id} className="px-4 z-10 capitalize font-medium hover:scale-105 duration-200 cursor-pointer">
                            <Link href={route}>{name}</Link>
                        </li>
                    ))}
                </ul>
                <IconButton
                    className="hidden md:flex"
                    icon={colorMode === "light" ? <MoonIcon height="20px" /> : <SunIcon  height="20px" /> }
                    isRound={true}
                    onClick={toggleColorMode}
                    aria-label="switch theme"
                    variant="solid"
                />
            </HStack>
            

            {/* mobile navbar toggle */}
            <div onClick={() => setNav(!nav)} className="pr-4 cursor-pointer hover:scale-105 duration-200 md:hidden">
                {nav ? <AiOutlineClose /> : <HiMiniBars3BottomRight height='50px'/> }
            </div>

            {/* mobile navbar */}
            {nav ? 
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-slate-100 text-gray-500 duration-200">
                {navbarItems.map(({id, name, route}) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-xl hover:scale-105 duration-200">
                        <Link href={route} onClick={() => setNav(!nav)}>{name}</Link>
                    </li>
                ))}
                <Stack>
                    <IconButton
                        className="cursor-pointer hover:scale-105 duration-200 text-gray-500"
                        icon={colorMode === "light" ? <MoonIcon height="20px" /> : <SunIcon  height="20px" /> }
                        isRound={true}
                        onClick={toggleColorMode}
                        aria-label="switch theme"
                        variant="solid"
                    />
                    <IconButton
                        className="cursor-pointer hover:scale-105 duration-200 text-gray-500"
                        icon={<AiOutlineClose />}
                        isRound={true}
                        onClick={() => setNav(!nav)}
                        aria-label="close"
                        variant="solid"
                    />
                </Stack>
                
            </ul>
            :<></>
            }
        </div>
        
     );
}
 
export default NavItem;