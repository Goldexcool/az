"use client"
import React, { useState } from 'react'
import web1 from '../../../public/Web Designs (1).svg'
import web2 from '../../../public/Web Designs (2).svg'
import web3 from '../../../public/Web Designs.svg'
// import Services from '@/data/service'
import Image from 'next/image'
// import Button from './button'

const Service = () => {
    const [activeService, setActiveService] = useState<number>(0)

    const Services = [
        {
            id: 1,
            niche: "All"
        },
        {
            id: 2,
            niche: "UI/UX"
        },
        {
            id: 3,
            niche: "Graphics Design"
        },
        {
            id: 4,
            niche: "Web Design",
            image: web1,
            image02: web2,
            image03: web3,
        },
        {
            id: 5,
            niche: "App Design"
        },
    ]
    return (
        <section className="flex flex-col gap-2 mt-[5rem] sm:px-10 px-5">
            <div className='flex flex-col gap-2 justify-start items-start'>
                <p className='md:text-[1.7rem] font-[400] text-[#0D0D0D]'>
                    Past Project
                </p>
                <div className='flex w-full justify-center items-center gap-[5rem] relative overflow-auto hide-scrollbar'>
                    {
                        Services.map((service, i) => (

                            <div key={i} onClick={() => setActiveService(i)} className={`flex px-[1rem] py-[0.4rem] justify-between items-center flex-col gap-2 rounded-lg transform duration-400 cursor-pointer ${activeService === i ? 'text-white bg-orange-400' : 'text-black-300 bg-transparent'}`}>
                                <p className='md:text-[16px] text-[15px] w-[100%]'>{service.niche}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='relative overflow-auto hide-scrollbar'>
                    {Services.filter((_, i) => i === activeService).map((service, i) => (
                        <div key={i} className='flex gap-4 relative overflow-auto hide-scrollbar'>
                            <Image src={service.image} alt='' />
                            <Image src={service.image02} alt='' />
                            <Image src={service.image03} alt='' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service
