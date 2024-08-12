"use client"
import React, { useState } from 'react'
import web1 from '../../../public/Web Designs (1).svg'
import web2 from '../../../public/Web Designs (2).svg'
import web3 from '../../../public/Web Designs.svg'
import shopifysales1 from '../../../public/ssimage01.jpg'
import shopifysales2 from '../../../public/ss02.jpg'
import shopifysales3 from '../../../public/ss03.jpg'
import shopifysales4 from '../../../public/ss04.jpg'
import shopifysales5 from '../../../public/ss05.jpg'
import shopifysales6 from '../../../public/ss06.jpg'
import shopifysales7 from '../../../public/ss07.jpg'
import shopifysales8 from '../../../public/ss08.jpg'
import shopifysales9 from '../../../public/ss09.jpg'
import shopifystore from '../../../public/image01.jpg'
import shopifystore2 from '../../../public/image02.jpg'
import shopifystore3 from '../../../public/image03.jpg'
import shopifystore4 from '../../../public/image04.jpg'
// import Services from '@/data/service'
import Image from 'next/image'
// import Button from './button'

const Service = () => {
    const [activeService, setActiveService] = useState<number>(0)

    const Services = [
        {
            id: 1,
            niche: "All",
            image01: shopifystore,
            image02: shopifystore2,
            image03: shopifystore3,
            image04: shopifystore4,
            image05: shopifysales1,
            image06: shopifysales2,
            image07: shopifysales3,
            image8: shopifysales4,
            image9: web1,
            image10: web2,
            image11: web3,
            image12: shopifysales5,
            image13: shopifysales6,
            image14: shopifysales7,
            image15: shopifysales8,
            image16: shopifysales9,
        },
        {
            id: 2,
            niche: "Shopify store design",
            image: shopifystore,
            image02: shopifystore2,
            image03: shopifystore3,
            image04: shopifystore4,
        },
        {
            id: 3,
            niche: "Shopify sales",
            image: shopifysales1,
            image02: shopifysales2,
            image03: shopifysales3,
            image04: shopifysales4,
            image05: shopifysales5,
            image06: shopifysales6,
            image07: shopifysales7,
            image08: shopifysales8,
            image09: shopifysales9,
        },
        {
            id: 4,
            niche: "Web Design",
            image: web1,
            image02: web2,
            image03: web3,
        }
    ]
    return (
        <section className="flex flex-col gap-2 mt-[5rem] sm:px-10 px-5">
            <div className='flex flex-col gap-2 justify-start items-start'>
                <p className='md:text-[1.7rem] font-[400] text-[#0D0D0D]'>
                    Past Project
                </p>
                <div className='flex md:gap-[6rem] gap-[4rem] w-full relative overflow-auto md:justify-center hide-scrollbar items-center'>
                    {
                        Services.map((service, i) => (

                            <div key={i} onClick={() => setActiveService(i)} className={`flex px-[1rem] py-[0.4rem] justify-between items-center flex-col gap-[4rem] rounded-lg transform duration-400 cursor-pointer ${activeService === i ? 'text-white bg-orange-400' : 'text-black-300 bg-transparent'}`}>
                                <p className='md:text-[16px] text-[15px] w-[100%]'>{service.niche}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='relative overflow-auto hide-scrollbar mt-[1rem]'>
                    {Services.filter((_, i) => i === activeService).map((service, i) => (
                        <div key={i} className='flex gap-4 relative overflow-auto hide-scrollbar items-start'>
                            <Image src={service.image} alt='' />
                            <Image src={service.image02} alt='' />
                            <Image src={service.image03} alt='' />
                            <Image src={service.image04 || ''} alt='' />
                            <Image src={service.image05 || ''} alt='' />
                            <Image src={service.image06 || ''} alt='' />
                            <Image src={service.image07 || ''} alt='' />
                            <Image src={service.image08 || ''} alt='' />
                            <Image src={service.image09 || ''} alt='' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service
