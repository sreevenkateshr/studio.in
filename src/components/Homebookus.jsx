import React from "react";
import bridalImg from "../assets/wedding1.jpg"; // Replace with your actual image path

export default function BookUs() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 py-10 md:py-20">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={bridalImg}
          alt="Bride"
          className="w-[90%] max-w-[400px] object-cover rounded-md"
        />
      </div>

      {/* Right: Form */}
      <div className="w-full md:w-1/2 px-4">
        <div className="relative mb-4">
          {/* Decorative Floral Top Element */}
          <img
            src="https://i.ibb.co/x3pmG31/floral.png" // Use your floral PNG
            alt="Decoration"
            className="absolute -top-14 right-0 w-24 md:w-32 opacity-80"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-2">
          BOOK US
        </h2>
        <p className="text-sm mb-6 text-gray-700">
          We’d love to hear from you! <br />
          We look forward to creating something beautiful just for you!
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-xs tracking-widest mb-1">Your name</label>
            <input
              type="text"
              className="w-full border-b border-black bg-transparent outline-none py-1"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest mb-1">Your Email</label>
            <input
              type="email"
              className="w-full border-b border-black bg-transparent outline-none py-1"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest mb-1">Contact Number</label>
            <input
              type="tel"
              className="w-full border-b border-black bg-transparent outline-none py-1"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest mb-1">
              Tell us about your date
            </label>
            <textarea
              rows="2"
              className="w-full border-b border-black bg-transparent outline-none py-1 resize-none"
            ></textarea>
          </div>

          <div className="mt-4">
            <label className="block text-xs mb-2">
              Which of the following are you interested in?
            </label>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <label>
                <input type="checkbox" className="mr-2" /> Wedding
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Engagement/PreWedding
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Studio Sessions
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Film
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Events
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Other Inquiry
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-black text-white px-6 py-2 text-sm tracking-widest hover:bg-gray-800 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
