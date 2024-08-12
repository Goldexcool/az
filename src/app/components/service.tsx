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


    const descriptions = {
        'Shopify Development': "This encompasses everything from the usability and functionality of a product to the satisfaction and delight a user feels while using it.",
        'Email Marketing': "Email marketing involves creating targeted and effective email campaigns to engage users and drive conversions.",
        'Graphics': "Graphics play a crucial role in enhancing the visual appeal and user engagement of a product.",
        'Website Design': "Website development involves creating software website applications for specific platforms such as mobile devices, desktops, or web browsers."
    };
    
    const services = [
        {
            id: 1,
            image01: ux,
            niche: 'Shopify Development',
            desc: "This encompasses everything from the usability and functionality of a product to the satisfaction and delight a user feels while using it."
        },
        {
            id: 2,
            image01: app,
            niche: "Email Marketing",
            desc: "Email marketing involves creating targeted and effective email campaigns to engage users and drive conversions.",
        },
        {
            id: 3,
            image01: graphics,
            niche: "SEO Optimization",
            desc: "Comprehensive SEO optimization services to improve your website's visibility, increase organic traffic, and achieve higher search engine rankings.",
        },
        {
            id: 4,
            image01: web,
            niche: "Website Design",
            desc: "Website development involves creating software website applications for specific platforms such as mobile devices, desktops, or web browsers."
        }
    ];
    
  
    
    console.log(services);
    
    return (
        <section className='grid md:grid-rows-2 gap-2 md:px-[3rem] sm:px-10 px-5 mt-[4rem]' id='service'>
            <div className=' flex flex-col justify-center mb-[0.1rem]'>
                <h1 className='md:text-4xl text-2xl'>Services</h1>
                <h4 className='md:text-2xl'>What i offfer to my client</h4>
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
