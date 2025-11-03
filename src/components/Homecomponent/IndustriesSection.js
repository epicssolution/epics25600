"use client";
import Image from "next/image";

export default function IndustriesSection() {
  const industries = [
    { name: "Development", image: "/images/development.jpg" },
    { name: "Equipment", image: "/images/equipment.jpg" },
    { name: "Artificial Intelligence", image: "/images/artificial-intelligence.jpg" },
    { name: "Designing", image: "/images/designing.jpg" },
    { name: "Energy", image: "/images/energy.jpg" },
    { name: "Waste", image: "/images/waste.jpg" },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-orange-600 mb-2 tracking-wide">
        EPIC SOLUTIONS
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10 uppercase tracking-wide">
        Development • Equipment • Artificial Intelligence • Designing • Energy • Waste
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={300}
              className="w-full h-60 object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-lg font-bold bg-black/60 px-4 py-2 rounded-md">
                {item.name.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

