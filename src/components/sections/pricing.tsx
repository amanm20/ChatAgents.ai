"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { pricingTiers } from "@/lib/data";
import { Check } from "lucide-react";

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [annual, setAnnual] = useState(false);

  return (
    <section ref={ref} id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-sm text-white/40">
            No hidden fees. No setup costs. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                !annual
                  ? "bg-white/[0.08] text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                annual
                  ? "bg-white/[0.08] text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Annual <span className="text-emerald-400">·</span> Save 20%
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-cyan/30 bg-white/[0.03]"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >

              <h3 className="font-heading text-xl font-bold text-white/90">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-white/35">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold text-white">
                  ${annual ? tier.annualPrice : tier.price}
                </span>
                <span className="text-sm text-white/40">/month</span>
              </div>
              {annual && (
                <p className="mt-1 text-xs text-emerald-400">
                  ${(tier.price - tier.annualPrice) * 12} saved per year
                </p>
              )}

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-cyan mt-0.5" />
                    <span className="text-white/40">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-6 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/[0.08] bg-white/[0.03] text-white/70 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
