
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col text-white mt-[4rem] ">
            <div className="container mx-auto flex flex-col items-center bg-black-200 p-4">
                {/* Logo */}
                <div className="mb-4">
                    <h1 className='text-2xl'>Techdegoke</h1>
                    {/* <img src="/path/to/logo.png" alt="Techdegoke Logo" className="w-24 h-auto" /> */}
                </div>

                {/* Navigation Links */}
                <nav className="mb-4">
                    <ul className="flex space-x-6 flex-wrap items-center justify-center">
                        <li><a href="/" className="hover:text-gray-400">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-400">About</a></li>
                        <li><a href="/services" className="hover:text-gray-400">Service</a></li>
                        <li><a href="/projects" className="hover:text-gray-400">Project</a></li>
                        <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </nav>

                {/* Social Media Icons */}
                <div className="mb-4 flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaLinkedinIn className="w-6 h-6" />
                    </a>
                </div>


            </div>
            <div className="bg-black-500 text-center py-4 w-full">
                <p className="text-sm">© 2024 Techdegoke. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
