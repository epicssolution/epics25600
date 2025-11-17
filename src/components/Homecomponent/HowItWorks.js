"use client";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      text: "You send us project requirements and floor plan.",
      active: false,
    },
    {
      step: "Step 2",
      text: "Our experts will work on the design as per franchise design standard and local state codes.",
      active: true, // Middle card highlighted
    },
    {
      step: "Step 3",
      text: "We deliver the MEP design permit set to you.",
      active: false,
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      {/* Top Heading */}
      <p className="text-gray-500 uppercase tracking-widest mb-2">
        NY Engineers
      </p>
      <h2 className="text-4xl font-extrabold mb-2">
        How It Works?
      </h2>

      <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {steps.map((item, i) => (
          <div
            key={i}
            className={`
              rounded-2xl p-10 transition shadow-lg 
              ${item.active ? "bg-black text-white scale-105" : "bg-white text-gray-800"}
            `}
          >
            {/* Orange Dot */}
            <div
              className={`
                w-3 h-3 rounded-full mx-auto mb-5 
                ${item.active ? "bg-white" : "bg-orange-500"}
              `}
            ></div>

            <h3 className="text-xl font-semibold mb-3">{item.step}</h3>
            <p className="text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
