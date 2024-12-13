import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Plane from "../public/ion--paper-plane-outline.svg"

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgondzk");

  if (state.succeeded) {
    return <div className='px-2 py-16 font-bold text-3xl drop-shadow-lg'>Thanks for Your Message, Will get back to you Soon!</div>;
  }

  return (
    <div className=" px-2 mt-8">
      <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex items-center w-full mr-8'>
            <div className='mr-20 py-4'>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">

                </label>
                <input
                    id="name"
                    type="name"
                    name="name"
                    placeholder='Full Name'
                    className="mt-1 block w-full border border-zinc-700 rounded-2xl shadow-sm p-2 bg-zinc-800 px-4 w-96 py-4"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder='Email'
                        className="mt-1 block w-full border border-zinc-700 rounded-2xl shadow-sm p-2 bg-zinc-800 px-4  w-96 py-4"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            
          </label>
          <textarea
            id="message"
            name="message"
             placeholder='Your Message'
            className="mt-1 block w-full border border-zinc-700 rounded-2xl shadow-sm p-2 bg-zinc-800 h-96 px-4 py-4"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className='py-4 '>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-zinc-700 text-green-500 px-4 py-2 rounded-xl shadow hover:bg-zinc-600 disabled:opacity-50 "
          >
            <div className='flex justify-center py-2'>
                <Plane className="text-green-500 w-6 h-6" />
                <div className='mx-2'>

                    Send Message
                </div>
            </div>
            
          </button>
        </div>
      </form>
    </div>
  );
}
