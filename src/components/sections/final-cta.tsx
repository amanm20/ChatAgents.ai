"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Clock } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background glow */}
      <div className="aurora aurora-cyan top-[50%] left-[30%] w-[800px] h-[800px] opacity-20" />
      <div className="aurora aurora-purple top-[40%] right-[20%] w-[600px] h-[600px] opacity-15" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to Give Your Business a{" "}
            <span className="gradient-text">24/7 AI Employee?</span>
          </h2>

          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Join 150+ businesses that have transformed their customer experience.
            Go live in 48 hours.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#industries"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-purple px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan/25 transition-all hover:shadow-cyan/40 hover:scale-[1.02]"
            >
              <Play className="h-5 w-5" />
              Try a Live Demo
            </a>
            <a
              href="#pricing"
              className="group glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-white/10"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan" />
              Live in 48 hours
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple" />
              Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
