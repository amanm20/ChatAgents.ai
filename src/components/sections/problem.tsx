"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const painPoints = [
  {
    stat: "78%",
    headline: "of customers buy from whoever responds first",
    description:
      "A lead that waits 5 minutes is 21× less likely to convert. At midnight? They're already gone.",
    accent: "from-cyan/20 to-transparent",
    statColor: "text-cyan",
    borderColor: "border-cyan/20",
  },
  {
    stat: "60%",
    headline: "of staff time goes to tasks AI handles better",
    description:
      "Same questions. Same follow-ups. Same qualifying. Your team should be closing, not copy-pasting.",
    accent: "from-purple/20 to-transparent",
    statColor: "text-purple",
    borderColor: "border-purple/20",
  },
  {
    stat: "40%",
    headline: "of inquiries arrive after business hours",
    description:
      "After-hours means closed for business. Auto-replies don't book rooms or qualify buyers.",
    accent: "from-pink/20 to-transparent",
    statColor: "text-pink",
    borderColor: "border-pink/20",
  },
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight">
            Every Missed Message Is a{" "}
            <span className="text-white/40">Missed Sale</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl border ${point.borderColor} bg-white/[0.02] p-10 transition-all hover:bg-white/[0.04]`}
            >
              {/* Top accent glow */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${point.accent}`} />

              <p className={`font-heading text-6xl font-bold ${point.statColor} tracking-tight`}>
                {point.stat}
              </p>
              <h3 className="mt-4 text-[15px] font-medium text-white/80 leading-snug">
                {point.headline}
              </h3>
              <p className="mt-3 text-[13px] text-white/30 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-20 max-w-2xl text-center text-xl text-white/40 leading-relaxed"
        >
          What if you had an employee who{" "}
          <span className="text-white font-medium">never sleeps</span>,{" "}
          <span className="text-white font-medium">
            never forgets a customer
          </span>
          , and{" "}
          <span className="text-white font-medium">
            costs less than a single lost customer
          </span>
          ?
        </motion.p>
      </div>
    </section>
  );
}
