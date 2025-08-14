import React, { useState } from "react";

const testimonials = [
  { text: "Thank you zerowatts to capture best moments of our wedding & reception. We loved the pre-wedding shoots and the tradition pictures. It was amazing working with you. Team of photographers are very flexible to work with. Great effort on End to end follow up to make sure we received Albums.", name: "THEEBICA + PURUSHOTH" },
  { text: "We had the pleasure of working with Zerowatts Photography for our engagement, reception, and wedding events in May 2024, and we couldn’t be happier with the results! From start to finish, their team demonstrated incredible professionalism and creativity.", name: "JEEVITHA + PAWAN" },
  { text: "We have booked Zerowatts for engagement, pre-wedding shoot, reception and wedding. They did a wonderful job and made us feel really comfortable. Overall experience with them all as top notch! Would really love to work with them again :)", name: "PRATIBHA + ASHWANTH" },
  { text: "Absolutely fantastic photography service! They captured every beautiful moment perfectly and the quality of the pictures is outstanding.", name: "ANITA + RAJESH" },
  { text: "A wonderful experience from start to finish. The team was professional, creative, and very easy to work with.", name: "DIVYA + KARTHIK" },
  { text: "Every shot was beautifully framed and perfectly edited. We will treasure these memories forever.", name: "SNEHA + VIKRAM" },
  { text: "Professional, friendly, and incredibly talented team. The pictures exceeded our expectations.", name: "KAVYA + RAVI" },
  { text: "The entire process was seamless. From booking to delivery, everything was handled with care.", name: "MEERA + SANJAY" },
  { text: "We loved every single photo! They truly captured the emotions and beauty of our special day.", name: "PRIYA + MANOJ" },
  { text: "Superb service! The team went above and beyond to make sure we got the perfect shots.", name: "RITHIKA + ARUN" },
];

export default function TestimonialsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const next = () => setStartIndex((prev) => (prev + visibleCount) % testimonials.length);
  const prev = () => setStartIndex((prev) => (prev - visibleCount + testimonials.length) % testimonials.length);

  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[(startIndex + i) % testimonials.length]);
  }

  return (
    <div className="bg-[#f4f3ef] py-20">
      <div className="container mx-auto px-6 md:px-20 relative">
        
        {/* Header with arrows */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-sm tracking-[0.3em] text-gray-800 uppercase">TESTIMONIALS</h2>
          <div className="flex space-x-6">
            <button onClick={prev} className="text-2xl hover:text-gray-600">←</button>
            <button onClick={next} className="text-2xl hover:text-gray-600">→</button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {visibleTestimonials.map((t, idx) => (
            <div key={idx} className="max-w-sm">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">{t.text}</p>
              <p className="tracking-[0.3em] text-gray-900 font-medium">{t.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
