import React, { useState } from 'react';
import Nave from '../Nave/Nave';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    const navLink =[
        {name:'Home', id:1, link:'https://www.youtube.com/'},
        {name:'Inseart', id:2, link:'https://www.youtube.com/'},
        {name:'Youtube', id:3, link:'https://www.youtube.com/'},
        {name:'Desing', id:4, link:'https://www.youtube.com/'}
    ];
    return (
        <nav>
            <div onClick={()=> setOpen(!open)} className="h-10 w-12 text-blue-500 md:hidden">
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
    <ul className={`font-bold text-xl text-amber-600 flex pr-14 pl-10 md:justify-end absolute md:static ${open ? 'top-6' : 'top-[-120px]'}`}>
    {
        navLink.map(rout=><Nave  
            key={rout.id}
             rout={rout}>
             </Nave>)
    }
    </ul>
        </nav>
    );
};

export default Header;