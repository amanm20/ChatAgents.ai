"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { comparisonRows } from "@/lib/data";

export default function Comparison() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Why This Isn&apos;t Like{" "}
            <span className="gradient-text">Anything You&apos;ve Tried</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="py-4 pr-4 text-left text-white/40 font-normal">
                  Feature
                </th>
                <th className="py-4 px-4 text-center text-white/40 font-normal">
                  Hiring Staff
                </th>
                <th className="py-4 px-4 text-center text-white/40 font-normal">
                  Chatbot Tools
                </th>
                <th className="py-4 pl-4 text-center font-semibold text-cyan rounded-t-xl bg-cyan/[0.04]">
                  ChatAgents AI
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/[0.06] transition-colors hover:bg-white/[0.02]"
                >
                  <td className="py-4 pr-4 font-medium text-white/80">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center text-white/35">
                    {row.staff}
                  </td>
                  <td className="py-4 px-4 text-center text-white/35">
                    {row.chatbots}
                  </td>
                  <td className="py-4 pl-4 text-center font-medium text-cyan bg-cyan/[0.04]">
                    {row.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
