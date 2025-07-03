import React from "react";

const testimonials = [
  {
    quote: "Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg",
    author: "Pelican Steve",
    source: "LittleSnippets.net"
  },
  {
    quote: "Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder... When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg",
    author: "Max Conversion",
    source: "LittleSnippets.net"
  },
  {
    quote: "My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg",
    author: "Eleanor Faint",
    source: "LittleSnippets.net"
  }
];

export default function FunkyQuoteTestimonials() {
  return (
    <section className="bg-black py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-12">
        Hear what our amazing customers have to say about us. Their words inspire us to keep delivering the best.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((item, idx) => (
          <figure
            key={idx}
            className="relative w-full max-w-xs text-left mx-2"
          >
            <blockquote className="relative bg-gray-100 rounded-lg p-6 text-sm italic font-medium leading-relaxed">
              <span className="absolute top-4 left-4 text-4xl text-gray-400">&ldquo;</span>
              {item.quote}
              <span className="absolute bottom-4 right-4 text-4xl text-gray-400">&rdquo;</span>
              <div className="arrow w-0 h-0 border-l-0 border-r-[25px] border-t-[25px] border-t-gray-100 absolute top-full left-6"></div>
            </blockquote>
            <img
              src={item.image}
              alt={item.author}
              className="w-[90px] h-[90px] rounded-full mt-10 ml-3"
            />
            <div className="author absolute bottom-10 left-0 pl-[120px] uppercase text-white transform translate-y-1/2">
              <h5 className="font-extrabold opacity-80">
                {item.author}
                <span className="block normal-case font-normal pl-1">{item.source}</span>
              </h5>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
