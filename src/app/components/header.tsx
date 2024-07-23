"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md';


const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleOpen = () => {
        setNavbarOpen(!navbarOpen);
    };
    return (
        <header className="flex justify-center items-center w-full lg:px-12 px-2">
            <div className="w-full bg-[#fff] left-0 right-0 ease-in-out duration-300 h-[100px] flex items-center">
                <div className="flex justify-between w-full items-center px-4 lg:px-0">
                    <div className="flex gap-[5px] cursor-pointer" >
                        <p className="text-[23px] font-[700]">Techdegoke</p>
                    </div>
                    <div className="hidden lg:flex justify-between items-center lg:gap-[25px] xl:gap-[25px] ">
                        <div>
                            <a href="#" className="text-[16px] font-[400] cursor-pointer hover:underline">
                                Home
                            </a>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <a href="#" className="text-[16px] font-[400] cursor-pointer hover:underline">About</a>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <a href="#" className="text-[16px] font-[400] cursor-pointer hover:underline">Services</a>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <a href="#" className="text-[16px] font-[400] cursor-pointer hover:underline">Project</a>
                        </div>

                        <div className="flex items-center cursor-pointer">
                            <a href="#" className="text-[16px] font-[400] cursor-pointer hover:underline">Contact</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 xl:gap-[25px] lg:gap-[30px]">

                        <div className="hidden lg:flex justify-center items-center gap-4 lg:gap-[85px]">

                            <div className="flex justify-center gap-2">
                                <button className="p-[10px] pr-[32px] pb-[10px] pl-[32px] transition duration-300 transform hover:bg-black-900 bg-orange-400 hover:text-white  text-[16px] border-2 rounded-[20px]">
                                    Download Cv
                                </button>
                            </div>
                        </div>
                        <MdMenu size={35} color="#0D0D0D" className="ml-1 cursor-pointer lg:hidden block" onClick={handleOpen} />
                    </div>
                </div>
            </div>

            <div className={`hamburger-menu fixed top-0 right-0 h-full w-full z-40 bg-white transform transition-transform ease-in-out duration-300 ${navbarOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="close-button p-4 cursor-pointer absolute top-0 right-0">
                    <MdClose size={35} color="white" className="p-2 rounded-full w-10 bg-[#000000] h-10 flex items-center justify-center" onClick={handleOpen} />
                </div>
                <div className="menu flex flex-col gap-[20px] items-center  justify-center p-6 h-[100vh]">
                    <ul className="text-[20px] text-center mt-10">
                        <a href="/">
                            <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Home</li>
                        </a>
                        <a href="/newarrival">
                            <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">About</li>
                        </a>
                        <a href="#">
                            <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Services</li>
                        </a>
                        <a href="#">
                            <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Project</li>
                        </a>
                        <a href="#">
                            <li className="text-main-color-gray cursor-pointer hover:scale-105 mt-10">Contact</li>
                        </a>
                        <div className="flex justify-center gap-2 mt-10">
                            <button className="p-[10px] pr-[32px] pb-[10px] pl-[32px] transition duration-300 transform hover:bg-black-900 bg-orange-400 hover:text-white  text-[16px] border-2 rounded-[20px]">
                                Download Cv
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header