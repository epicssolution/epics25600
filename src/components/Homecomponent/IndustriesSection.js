"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  Wrench,
  Fan,
  Flame,
  Zap,
  Building2,
  Cog,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const router = useRouter();

  // All services
  const services = [
    {
      name: "BIM",
      full: "Building Information Modeling",
      desc: "3D modeling, coordination, clash detection, and detailed construction drawings.",
      icon: Building2,
      color: "rose",
      slug: "bim",
    },

    {
      name: "HVAC",
      full: "Heating, Ventilation & Air Conditioning",
      desc: "Complete HVAC design including cooling, heating, ventilation, and duct sizing.",
      icon: Fan,
      color: "rose",
      slug: "hvac",
    },

    {
      name: "Plumbing",
      full: "Plumbing Systems",
      desc: "Water supply, drainage, piping design, and pressure calculations.",
      icon: Wrench,
      color: "rose",
      slug: "plumbing",
    },

    {
      name: "Fire",
      full: "Fire Fighting Systems",
      desc: "Fire alarms, sprinklers, hydrants, and safety system design.",
      icon: Flame,
      color: "rose",
      slug: "fire",
    },

    {
      name: "ELV",
      full: "Extra Low Voltage Systems",
      desc: "CCTV, access control, data networks, intercoms, and security systems.",
      icon: Zap,
      color: "rose",
      slug: "elv",
    },

    {
      name: "BMS",
      full: "Building Management System",
      desc: "Automation for HVAC, lighting, energy monitoring, and smart controls.",
      icon: Cog,
      color: "rose",
      slug: "bms",
    },
  ];

  // Tailwind color classes
  const colorClasses = {
    rose: {
      iconBg: "bg-rose-100 dark:bg-rose-700/20",
      iconText: "text-rose-600 dark:text-rose-400",
      chipBg: "bg-rose-50 dark:bg-rose-700/30",
      chipText: "text-rose-700 dark:text-rose-300",
      chipHover: "hover:bg-rose-100 dark:hover:bg-rose-700/50",
    },
  };

  // Scroll services
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // Open service page
  const handleLearnMore = (slug) => {
    router.push(`/services/${slug}`);
  };

  return (
    <section className="relative bg-orange-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex items-center justify-between mb-8">

          <div className="flex items-start gap-4">

            {/* Header Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center">
              <Building2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>

            {/* Header Text */}
            <div>

              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white"
              >
                Services We Provide

                <ArrowRight className="w-6 h-6 text-gray-900 dark:text-white" />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 mt-1"
              >
                Browse all our MEP & BIM engineering services
              </motion.p>

            </div>
          </div>

          {/* Navigation arrows */}
          <div className="hidden sm:flex items-center gap-2">

            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Scrollable services */}
        <div className="relative">

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >

            {services.map((item, index) => {

              const Icon = item.icon;
              const c = colorClasses[item.color];

              return (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group snap-start flex-shrink-0 flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg pl-3 pr-2 py-2 transition"
                  title={item.desc}
                >

                  {/* Service Icon */}
                  <div
                    className={`w-9 h-9 rounded-full ${c.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${c.iconText}`} />
                  </div>

                  {/* Service Name */}
                  <span className="text-gray-900 dark:text-white font-semibold whitespace-nowrap">
                    {item.name}
                  </span>

                  {/* Learn More Button */}
                  <button
                    onClick={() => handleLearnMore(item.slug)}
                    className={`ml-1 flex-shrink-0 rounded-full ${c.chipBg} ${c.chipText} text-sm font-semibold px-4 py-1.5 ${c.chipHover} transition whitespace-nowrap`}
                  >
                    + Learn more
                  </button>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
