"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { industries } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";
import DemoChat from "@/components/ui/demo-chat";

export default function IndustryShowcase() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const current = industries[active];

  return (
    <section ref={ref} id="industries" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="mt-4 text-sm text-white/40 max-w-xl mx-auto">
            Every AI agent is custom-trained for your specific industry. Try a
            live demo below.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {industries.map((ind, i) => (
            <button
              key={ind.slug}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all border ${
                active === i
                  ? "border-white/20 bg-white/[0.06] text-white"
                  : "border-white/[0.06] bg-white/[0.02] text-white/40 hover:text-white/70 hover:border-white/10"
              }`}
            >
              <ind.icon className="h-4 w-4" />
              {ind.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
          <div
            className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16 min-h-[600px]"
          >
            {/* Left: Details */}
            <div className="flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold sm:text-3xl lg:text-4xl tracking-tight">
                {current.headline}
              </h3>

              <p className="mt-4 text-sm text-white/40 leading-relaxed">
                {current.description}
              </p>

              {/* Features */}
              <div className="mt-8 space-y-5">
                {current.features.slice(0, 4).map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/10 mt-0.5">
                      <Check className="h-3 w-3 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/85">
                        {f.title}
                      </p>
                      <p className="text-[13px] text-white/30 mt-0.5 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Metrics */}
              <div className="mt-8 flex gap-8 border-t border-white/[0.06] pt-6">
                {current.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-heading text-2xl font-bold text-cyan">
                      {m.value}
                    </p>
                    <p className="text-[11px] text-white/30 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#pricing"
                className="mt-6 group inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyan/80 transition-colors"
              >
                Get This For Your Business
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right: Demo */}
            <div>
              <DemoChat
                industry={current.slug}
                starters={current.demoStarters}
                businessName={current.demoBusiness}
              />
            </div>
          </div>
      </div>
    </section>
  );
}
