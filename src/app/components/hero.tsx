"use client"
import React from 'react'
import hero from '../../../public/heyzed.jpg'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <section className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto md:px-[3rem] sm:px-10 px-5 mt-[2rem] '>
            <div className='flex flex-col justify-center items-start gap-2 md:order-1 order-2'>
                <div>
                    <h1 className='text-black md:text-[1rem] text-[1.5rem] font-bold md:w-fit w-full'><span className='text-black'>Hi I&apos;m</span> </h1>
                    <h2 className='text-[2.2rem] text-orange-500 font-bold'>T&nbsp;e&nbsp;c&nbsp;h&nbsp;d&nbsp;e&nbsp;g&nbsp;o&nbsp;k&nbsp;e</h2>
                </div>
                <div className='flex flex-col font-bold lg:text-[40px] text-[35px] text-main-color-black'>
                    {/* <h3 className='text-[2.2rem]'>SHOPIFY STORE DESIGNER</h3> */}
                    <Typewriter
                  options={{
                    strings: [
                      "SHOPIFY STORE DESIGNER",
                      "Freelancer",
                      "Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                    {/* <h4 className='text-left w-full flex flex-end text-[2.2rem] right-5'>AND A WEB DEVELOPER</h4> */}
                </div>

                <p className='text-black text-[.9rem] poppins-bold md:w-[80%] w-full'> My expertise includes creating custom websites tailored to meet the unique needs of businesses and optimizing e-commerce platforms for maximum performance and user engagement.</p>
                <div className='flex gap-5 items-center'>
                    <a href="/">
                        <button className="text-white p-2 bg-orange-500 mt-[0.2rem] rounded-md md:text-[15px] text-[14px]">Hire Me</button>
                    </a>
                </div>
            </div>
            <Image src={hero} alt='hero' className=' md:order-2 order-1 lg:h-[100vh]  bg-transparent lg:rounded-full' />
        </section>

    )
}

export default Hero
