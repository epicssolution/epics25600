"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Dahlia Washington",
    company: "IONIC DEZIGN",
    image: "/images/client1.jpg",
    feedback:
      "You guys have been great to work with. It was of course a learning curve at first understanding how things were done and time frames and so forth. There isn’t anything that stands out that I feel is a detriment so I’d give a 10.",
  },
  {
    name: "John Carter",
    company: "Epic Builders",
    image: "/images/client2.jpg",
    feedback:
      "Amazing teamwork and excellent delivery. Everything was handled professionally and timely. Highly recommended!",
  },
  {
    name: "Mia Anderson",
    company: "Creative Zone",
    image: "/images/client3.jpg",
    feedback:
      "The best experience ever! Smooth communication, clear timelines, and very supportive team.",
  },
];

export default function ClientFeedbacks() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section className="w-full bg-black text-white py-20">
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">
        Client Feedbacks
      </h2>

      <div className="max-w-4xl mx-auto text-center px-6 relative">
        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-orange-500"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Client Image */}
        <div className="flex justify-center mb-6">
          <img
            src={current.image}
            className="h-28 w-28 rounded-full object-cover border-4 border-orange-500 shadow-lg"
            alt="Client"
          />
        </div>

        {/* Client Name */}
        <h3 className="text-xl font-semibold">
          {current.name} | <span className="text-orange-500">{current.company}</span>
        </h3>

        {/* Feedback */}
        <p className="text-gray-300 mt-4 leading-relaxed">
          {current.feedback}
        </p>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-orange-500"
        >
          <ChevronRight size={40} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-orange-500" : "border border-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
