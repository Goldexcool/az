import React from 'react'
import Image from 'next/image'
import about from '../../../public/heyzed.jpg'


const Hero = () => {
    return (
        <section className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto md:px-[3rem] sm:px-10 px-5 mt-[4rem] '>
            <div className='flex flex-col justify-center gap-2 md:order-2 order-2'>
                <div>
                    <h1 className='text-black md:text-[2.5rem] text-[1.5rem] font-bold md:w-fit w-full'><span className='text-black'>ABOUT ME!!!</span> </h1>
                    <h2 className='text-[1rem] '> I am a seasoned freelancer specializing in website development and e-commerce solutions, with 5 years of experience. My expertise includes creating custom websites tailored to meet the unique needs of businesses and optimizing e-commerce platforms for maximum performance and user engagement.</h2>
                </div>
                <div className='flex items-center flex-col w-full gap-5'>
                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>HTML</h1>
                      <h2>95%</h2>
                    </div>
                    <div className='w-full bg-orange-50 rounded-[10px]'>
                      <p className='w-[95%] bg-orange-500 rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>CSS</h1>
                      <h2>90%</h2>
                    </div>
                    <div className='w-full bg-orange-50 rounded-[10px]'>
                      <p className='w-[90%] transition-all bg-orange-500 rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>Javascript</h1>
                      <h2>85%</h2>
                    </div>
                    <div className='w-full bg-orange-50 rounded-[10px]'>
                      <p className='w-[85%] bg-orange-500 rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>Next Js</h1>
                      <h2>80%</h2>
                    </div>
                    <div className='w-full bg-orang-50 rounded-[10px]'>
                      <p className='w-[80%] bg-orange-500 rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center w-full'>
                  <div className='flex items-center w-full flex-col'>
                    <div className='flex items-center w-full justify-between mb-2 text-main-color-black'>
                      <h1>Tailwind </h1>
                      <h2>80%</h2>
                    </div>
                    <div className='w-full bg-orange-50 rounded-[10px]'>
                      <p className='w-[80%] bg-orange-500 rounded-ful p-2 rounded-[10px]'></p>
                    </div>
                  </div>
                </div>
              </div>
                <div className='flex gap-5 items-center'>
                    <a href="/">
                        <button className="text-white p-2 bg-orange-500 mt-[0.2rem] rounded-md md:text-[15px] text-[14px]">Hire Me</button>
                    </a>
                </div>
            </div>
            <Image src={about} alt='hero' className=' md:order-1 order-1 h-[100vh] rounded-md' />
        </section>

    )
}

export default Hero
