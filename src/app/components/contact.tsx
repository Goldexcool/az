"use client"
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import conta from '../../../public/customer-care-webpage-interface-word_53876-176750.jpg';
import { runFireworks } from '../components/Confetti';
import Image from 'next/image';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, handleSubmit] = useForm('xwpebawa');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (submission: any) => {
    setIsSubmitting(true);

    try {
      await handleSubmit(submission);

      // Trigger confetti
      runFireworks();

      // Clear form fields after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Update submission state
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-full mt-16 sm:px-10 px-5" id='contact'>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <Image src={conta} alt="Contact" className="w-full h-[450px] object-cover rounded-lg" />
        </div>
        <div className="text-main-color-black flex flex-col justify-center h-[450px]">
          <h1 className="text-2xl text-center md:text-left mb-6 font-bold text-[25px]">
            Get in <span className="text-main-color">Touch</span>
          </h1>
          <form onSubmit={handleFormSubmit} className="flex flex-col justify-between h-full">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="py-2 px-3 border rounded text-black"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="py-2 px-3 border rounded text-black"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="message" className="text-sm mb-2">Message:</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleFormChange}
                className="py-2 px-3 border rounded resize-none text-black"
              ></textarea>
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
                state.succeeded ? 'Message Sent Successfully!' : 
                <>
                  Send Message
                  <i className="bx bxl-telegram"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
