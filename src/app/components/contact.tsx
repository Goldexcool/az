"use client"
import React, { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import conta from '../../../public/customer-care-webpage-interface-word_53876-176750.jpg'
import ThankYouPage, { runFireworks } from '../components/Confetti';
import Image from 'next/image';

const Contact = () => {
  const [count, setCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, handleSubmit] = useForm('xnqkeawd');

  useEffect(() => {
    if (count < 35) {
      setTimeout(() => {
        setCount(count + 1)
      }, 100)
    }
  }, [count]);


  if (state.succeeded) {
    return <ThankYouPage />;
  }

  const handleFormSubmit = async (submission: any) => {
    setIsSubmitting(true);

    try {
      await handleSubmit(submission);

      // Once the submission is successful, set the form to "succeeded"
      setIsSubmitting(false);
      setCount(count + 1);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    // <section className='md:px-[3rem] sm:px-10 px-5 mt-[4rem]'>
    //     <div className='flex flex-col justify-center items-center w-full gap-[2rem]'>
    //         <div className='flex flex-col text-center gap-2'> 
    //             <h1 className='md:text-4xl text-[15px]'>Lets Design Together</h1>
    //             <h2 className='md:text-[14px] text-[12px]'>We&apos;d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.</h2>
    //         </div>
    //         <div className='flex gap-4 rounded-2xl md:flex-row flex-col items-center'>
    //             <input type='email' placeholder='enter your email' className='px-10 py-2 bg-black-50 placeholder:text-black-200 rounded-lg border-[1.2px] border-black-200'/>
    //             <button className='md:px-6 md:py-2 px-10 py-2 bg-orange-500 text-white rounded-lg hover:bg-black-500 transform translate-x-3 duration-300' onClick={() => rounter.push}>Contact Me</button>
    //         </div>
    //     </div>
    // </section>
    <section className="max-w-full mt-16 sm:px-10 px-5" id='contact'>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <Image src={conta} alt="Contact" className="w-full h-[450px] object-cover rounded-lg" />
        </div>
        <div className="text-main-color-black flex flex-col justify-center h-[450px]">
          <h1 className="text-2xl text-center md:text-left mb-6 font-bold text-[25px]">
            Get in <span className="text-main-color">Touch</span>
          </h1>
          {state.succeeded ? (
            <ThankYouPage />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm mb-2">Name:</label>
                  <input type="text" name="name" id="name" className="py-2 px-3 border rounded text-black" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm mb-2">Email:</label>
                  <input type="email" name="email" id="email" className="py-2 px-3 border rounded text-black" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="text-sm mb-2">Message:</label>
                <textarea name="message" id="message" rows={6} className="py-2 px-3 border rounded resize-none text-black"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting || isSubmitting}
                className="mt-6 w-full md:w-fit bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-1 justify-center"
              >
                {isSubmitting || state.submitting ? (
                  <>
                    Sending...
                    <i className="bx bx-loader bx-spin"></i>
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="bx bxl-telegram"></i>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>



  )
}

export default Contact