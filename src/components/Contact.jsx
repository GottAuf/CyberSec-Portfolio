import React from "react";
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  return (
    <section id="contact" className="mt-20 max-w-xl mx-auto">
      <h3 className="text-3xl font-bold text-slate-900 mb-6">Get in touch</h3>
      
      {/* For a more reliable contact form, consider using a backend service like Formspree, Netlify Forms, or a serverless function. 
        Example with Formspree:
        <form action="https://formspree.io/f/your-form-id" method="POST" ... >
      */}
      <form
        action="https://formspree.io/f/xkgzywod"
        method="POST"
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col text-sm font-semibold text-slate-700">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-1 p-2 rounded-md border border-slate-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
            placeholder="Your full name"
          />
        </label>

        <label className="flex flex-col text-sm font-semibold text-slate-700">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 p-2 rounded-md border border-slate-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
            placeholder="you@example.com"
          />
        </label>

        <label className="flex flex-col text-sm font-semibold text-slate-700">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 p-2 rounded-md border border-slate-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
            placeholder="Write your message here..."
          />
        </label>

        <button
          type="submit"
          className="bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Send Message
        </button>
      </form>

      <p className="text-sm text-slate-500 mt-6">
        Or email me directly at{" "}
        <a
          href="mailto:youremail@example.com"
          className="text-yellow-600 hover:text-yellow-700 underline transition"
        >
          gcgmee@duck.com
        </a>
      </p>
    </section>
  );
}