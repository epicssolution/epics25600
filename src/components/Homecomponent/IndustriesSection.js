"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, Fan, Flame, Zap, Building2, Cog } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      name: "BIM",
      full: "Building Information Modeling",
      desc: "3D modeling, coordination, clash detection, and detailed construction drawings.",
      image: "/images/bim.jpg",
      icon: Building2,
    },
    {
      name: "HVAC",
      full: "Heating, Ventilation & Air Conditioning",
      desc: "Complete HVAC design including cooling, heating, ventilation, and duct sizing.",
      image: "/images/hvac.jpg",
      icon: Fan,
    },
    {
      name: "Plumbing",
      full: "Plumbing Systems",
      desc: "Water supply, drainage, piping design, and pressure calculations.",
      image: "/images/plumbing.jpg",
      icon: Wrench,
    },
    {
      name: "Fire",
      full: "Fire Fighting Systems",
      desc: "Fire alarms, sprinklers, hydrants, and safety system design.",
      image: "/images/fire.jpg",
      icon: Flame,
    },
    {
      name: "ELV",
      full: "Extra Low Voltage Systems",
      desc: "CCTV, access control, data networks, intercoms, and security systems.",
      image: "/images/elv.jpg",
      icon: Zap,
    },
    {
      name: "BMS",
      full: "Building Management System",
      desc: "Automation for HVAC, lighting, energy monitoring, and smart controls.",
      image: "/images/bms.jpg",
      icon: Cog,
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-orange-600 mb-2 tracking-wide"
      >
      SERVICES WE PROVIDE✍(◔◡◔)
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 dark:text-gray-300 mb-12 uppercase tracking-wide"
      >
        BIM • HVAC • Plumbing • Fire • ELV • BMS
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl bg-white dark:bg-gray-800 transition"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover grayscale group-hover:grayscale-0 
                             transform group-hover:scale-110 transition duration-700"
                />

                {/* Hover Overlay with Full Form */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center 
                                opacity-0 group-hover:opacity-100 transition duration-500 px-4">
                  <span className="text-white text-xl font-bold mb-1">{item.name}</span>
                  <span className="text-gray-200 text-sm">{item.full}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 text-left">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-700/20">
                    <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
