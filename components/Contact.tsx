import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Plane from "../public/ion--paper-plane-outline.svg";
import ProjectCard from './ProjectCard';

export default function Contact() {
  const [state, handleSubmit] = useForm("xvgondzk");

  if (state.succeeded) {
    return (
      <div className="px-2 py-16 font-bold text-3xl drop-shadow-lg">
        Thanks for Your Message, Will get back to you Soon!
      </div>
    );
  }

  return (
    <div className="px-1 mt-8 lg:w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

      
      </div>
      <h1 className="text-2xl font-bold mb-8 mr-12 text-zinc-400">Got a question, an opportunity, or just want to say hello? I&apos;d love to hear from you! Fill out the form below , and I&apos;ll get back to you as soon as possible. </h1>
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6 w-full lg:w-[calc(100%-20px)] max-w-full mx-auto"  
      >
        {/* Full Name and Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
             
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              className="mt-1 block w-full border border-zinc-700 rounded-2xl shadow-sm p-3 bg-zinc-800 text-white"
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
              placeholder="Email"
              className="mt-1 block w-full border border-zinc-700 rounded-2xl shadow-sm p-3 bg-zinc-800 text-white"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
           
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="mt-1 block w-full border border-zinc-700 rounded-2xl shadow-sm p-3 bg-zinc-800 text-white lg:h-96"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-zinc-700 text-green-500 px-4 py-3 rounded-xl shadow hover:bg-zinc-600 disabled:opacity-50"
          >
            <div className="flex items-center justify-center">
              <Plane className="text-green-500 w-6 h-6" />
              <span className="ml-2">Send Message</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
