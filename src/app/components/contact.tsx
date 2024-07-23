import React from 'react'

const Contact = () => {
  return (
    <section className='md:px-[3rem] sm:px-10 px-5 mt-[4rem]'>
        <div className='flex flex-col justify-center items-center w-full gap-[2rem]'>
            <div className='flex flex-col text-center gap-2'> 
                <h1 className='md:text-4xl text-[15px]'>Lets Design Together</h1>
                <h2 className='md:text-[14px] text-[12px]'>We&apos;d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.</h2>
            </div>
            <div className='flex gap-4 rounded-2xl md:flex-row flex-col items-center'>
                <input type='email' placeholder='enter your email' className='px-10 py-2 bg-black-50 placeholder:text-black-200 rounded-lg border-[1.2px] border-black-200'/>
                <button className='md:px-6 md:py-2 px-10 py-2 bg-orange-500 text-white rounded-lg hover:bg-black-500 transform translate-x-3 duration-300'>Contact Me</button>
            </div>
        </div>
    </section>
  )
}

export default Contact