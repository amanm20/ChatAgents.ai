"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Target,
  Users,
  BookOpen,
  Globe,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Actually Completes Tasks",
    description:
      "Doesn't just answer questions — books, qualifies, calculates, follows up. One conversation, full resolution.",
    gradient: "from-cyan/20 to-cyan/0",
    accent: "text-cyan",
    bgAccent: "bg-cyan/10",
    borderAccent: "group-hover:border-cyan/20",
    glowColor: "bg-cyan/30",
  },
  {
    icon: Target,
    title: "Trained On Your Business",
    description:
      "Not generic AI. Trained on your prices, policies, inventory, and tone. Speaks like your best employee.",
    gradient: "from-purple/20 to-purple/0",
    accent: "text-purple",
    bgAccent: "bg-purple/10",
    borderAccent: "group-hover:border-purple/20",
    glowColor: "bg-purple/30",
  },
  {
    icon: Users,
    title: "Remembers Every Customer",
    description:
      "Sarah called 3 months ago about the corner suite. When she messages back, your AI remembers everything.",
    gradient: "from-pink/20 to-pink/0",
    accent: "text-pink",
    bgAccent: "bg-pink/10",
    borderAccent: "group-hover:border-pink/20",
    glowColor: "bg-pink/30",
  },
  {
    icon: BookOpen,
    title: "Internal Knowledge Base",
    description:
      "Turn your SOPs, docs, and policies into an AI your team can query instantly. New hire or senior — everyone gets the right answer in seconds.",
    gradient: "from-cyan/20 to-cyan/0",
    accent: "text-cyan",
    bgAccent: "bg-cyan/10",
    borderAccent: "group-hover:border-cyan/20",
    glowColor: "bg-cyan/30",
  },
  {
    icon: Globe,
    title: "Omnichannel Deployment",
    description:
      "One AI, every platform. WhatsApp, website, Instagram, Telegram, email — your customers get the same experience wherever they reach out.",
    gradient: "from-purple/20 to-purple/0",
    accent: "text-purple",
    bgAccent: "bg-purple/10",
    borderAccent: "group-hover:border-purple/20",
    glowColor: "bg-purple/30",
  },
  {
    icon: Bell,
    title: "Intelligent Escalation",
    description:
      "When it's beyond AI, you get the full context on your phone: who they are, what they need, urgency level.",
    gradient: "from-pink/20 to-pink/0",
    accent: "text-pink",
    bgAccent: "bg-pink/10",
    borderAccent: "group-hover:border-pink/20",
    glowColor: "bg-pink/30",
  },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-widest text-cyan/70 uppercase mb-4">
            Capabilities
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
            Not Another Chatbot.{" "}
            <span className="text-white/40">An AI Employee.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-[background-color,border-color] duration-300 hover:bg-white/[0.04] ${feat.borderAccent}`}
            >
              {/* Subtle top gradient glow on hover */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${feat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${feat.bgAccent} ring-1 ring-white/[0.06]`}
                >
                  <feat.icon
                    className={`h-5 w-5 ${feat.accent}`}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-[16px] font-semibold text-white tracking-tight">
                  {feat.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/40">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
