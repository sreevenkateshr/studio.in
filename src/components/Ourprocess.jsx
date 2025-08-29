import React from "react";
import "@fontsource/titillium-web"; // npm install @fontsource/titillium-web

export default function Timeline() {
  const steps = [
    {
      author: "Paperboat Photography",
      date: "Step 1",
      status: "Pre-Planning",
      complete: true,
    },
    {
      author: "Paperboat Photography",
      date: "Step 2",
      status: "Shoot Day",
      complete: true,
    },
    {
      author: "Paperboat Photography",
      date: "Step 3",
      status: "Editing & Retouching",
      complete: true,
    },
    {
      author: "Paperboat Photography",
      date: "Step 4",
      status: "Final Delivery",
      complete: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-['Titillium_Web'] text-gray-600 px-6 relative">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
        Our Process
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mb-12">
        At Paperboat Photography, we follow a clear process to ensure your
        memories are captured beautifully—from planning and shooting to editing
        and final delivery.
      </p>

      {/* Timeline */}
      <ul className="timeline flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-0">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`relative flex flex-col items-center md:w-48 transition-all duration-300 text-black`}
          >
            {/* Timestamp */}
            <div className="timestamp flex flex-col items-center mb-4 md:mb-6">
              <span className="author font-light text-gray-500">
                {step.author}
              </span>
              <span className="date text-sm">{step.date}</span>
            </div>

            {/* Status */}
            <div
              className={`status relative w-full flex justify-center border-t-2 border-black transition-all duration-300`}
            >
              {/* Circle Marker */}
              <span
                className={`absolute -top-3 w-6 h-6 rounded-full border bg-black border-black`}
              ></span>

              <h4 className="pt-6 font-semibold text-black">{step.status}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
