import React from "react";
import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar() {
    let [open, setOpen] = useState(false);

    let Links =[
        {name:"HOME",link:"#intro"},
        {name:"ABOUT",link:"#About"},
        {name:"PROJECTS",link:"#project"},
        {name:"CONTACT",link:"#contact"},
    ];
    return (

        <div id = "Home">

            {/* bg-[#EDF1D6] #0AA1DD rounded-full */}
            <nav className="bg-[#64C9FE] md-flex mg-6 w-full top-0 left-0">
                
                <div className="md:flex items-center justify-between bg-white py-4">
                    {/* Logo */}
                    <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                        <span className="lg:text-5xl logo log:ml-14 lg:pt-2 lg:mr-96 text-bold ml-8">MAYANK</span>
                    </div>
                    
                    <div onClick={()=>{setOpen(!open);}} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ?'close':'menu-outline'}></ion-icon>
                    </div>
                    {/* className="md:ml-8 text-lg md:my-0 my-4 font-bold" */}
                    <ul className={`mr-12 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                        {
                        Links.map((link)=>(
                            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-4 font-bold'>
                            <AnchorLink offset={() => 100} href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</AnchorLink>
                            </li>
                        ))
                        }
                    </ul>

                </div>
            </nav>
        </div>
    );

}