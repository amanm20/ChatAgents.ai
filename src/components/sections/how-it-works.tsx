"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { howItWorks } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const stepColors = [
  "text-cyan",
  "text-purple",
  "text-pink",
];

export default function HowItWorks() {
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
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Live in <span className="text-white/40">72 Hours</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-12 md:grid-cols-3">
          {howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Large decorative number */}
              <span
                className={`font-heading text-[80px] leading-none font-bold tracking-tighter ${stepColors[i]}`}
              >
                {step.step}
              </span>

              <h3 className="mt-4 font-heading text-lg font-semibold text-white/90 tracking-tight">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[280px] text-sm text-white/40 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow between steps */}
              {i < howItWorks.length - 1 && (
                <div className="absolute -right-6 top-8 hidden md:block">
                  <ArrowRight
                    className="h-5 w-5 text-white/[0.08]"
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
