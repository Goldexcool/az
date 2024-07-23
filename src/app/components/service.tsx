import React from 'react'
import ux from '../../../public/ux.svg'
import graphics from '../../../public/graphics.svg'
import app from '../../../public/app.svg'
import web from '../../../public/web.svg'
import Image from 'next/image'

interface ServiceType {

    id: string,
    image01: any,
    niche: string,
    desc: string
}
const Services = () => {


    const services = [
        {
            id: 1,
            image01: ux,
            niche: 'Ui/Ux',
            desc: "This encompasses everything from the usability and functionality of a product to the satisfaction and delight a user feels while using it."
        },
        {
            id: 2,
            image01: app,
            niche: "App Design",
            desc: "Mobile development focuses specifically on creating applications for mobile devices such as smartphones and tablets",
        },
        {
            id: 3,
            image01: graphics,
            niche: "Graphics Design",
            desc: "Graphics play a crucial role in enhancing the visual appeal and user engagement of a product."
        },
        {
            id: 4,
            image01: web,
            niche: "Web Design",
            desc: "App development involves creating software applications for specific platforms such as mobile devices, desktops, or web browsers."
        }
    ]
    return (
        <section className='grid md:grid-rows-2 gap-2 md:px-[3rem] sm:px-10 px-5 mt-[4rem]'>
            <div className=' flex flex-col justify-center mb-[1rem]'>
                <h1 className='md:text-4xl text-2xl'>Services</h1>
                <h2 className='md:text-2xl'>What i offfer to my client</h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full gap-4'>
                    {services.map((pro, i) => (
                        <div key={i} className='flex flex-col gap-4 items-start p-4 bg-black-50 rounded-md'>
                            <Image src={pro.image01} alt={pro.niche} className='w-fit' />
                            <h1 className='md:text-2xl text-[1rem]'>{pro.niche}</h1>
                            <h2 className='text-[14px] w-[80%] text-justify'>{pro.desc}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Services
