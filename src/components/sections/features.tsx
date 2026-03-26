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
    accent: "text-cyan",
    bgAccent: "bg-cyan/15",
  },
  {
    icon: Target,
    title: "Trained On Your Business",
    description:
      "Not generic AI. Trained on your prices, policies, inventory, and tone. Speaks like your best employee.",
    accent: "text-purple",
    bgAccent: "bg-purple/15",
  },
  {
    icon: Users,
    title: "Remembers Every Customer",
    description:
      "Sarah called 3 months ago about the corner suite. When she messages back, your AI remembers everything.",
    accent: "text-pink",
    bgAccent: "bg-pink/15",
  },
  {
    icon: BookOpen,
    title: "Internal Knowledge Base",
    description:
      "Turn your SOPs, docs, and policies into an AI your team can query instantly. New hire or senior — everyone gets the right answer in seconds.",
    accent: "text-cyan",
    bgAccent: "bg-cyan/15",
  },
  {
    icon: Globe,
    title: "Omnichannel Deployment",
    description:
      "One AI, every platform. WhatsApp, website, Instagram, Telegram, email \u2014 your customers get the same experience wherever they reach out.",
    accent: "text-purple",
    bgAccent: "bg-purple/15",
  },
  {
    icon: Bell,
    title: "Intelligent Escalation",
    description:
      "When it's beyond AI, you get the full context on your phone: who they are, what they need, urgency level.",
    accent: "text-pink",
    bgAccent: "bg-pink/15",
  },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftCol = features.slice(0, 3);
  const rightCol = features.slice(3, 6);

  const renderFeature = (
    feat: (typeof features)[number],
    i: number,
    isLast: boolean
  ) => (
    <motion.div
      key={feat.title}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`flex gap-5 py-8 ${!isLast ? "border-b border-white/[0.06]" : ""}`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feat.bgAccent}`}
      >
        <feat.icon className={`h-5 w-5 ${feat.accent}`} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-white/90 tracking-tight">
          {feat.title}
        </h3>
        <p className="mt-1.5 text-sm text-white/35 leading-relaxed">
          {feat.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
            Not Another Chatbot.{" "}
            <span className="text-white/40">An AI Employee.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2">
          {/* Left column */}
          <div className="md:border-r md:border-white/[0.06] md:pr-12">
            {leftCol.map((feat, i) =>
              renderFeature(feat, i, i === leftCol.length - 1)
            )}
          </div>

          {/* Right column */}
          <div className="border-t border-white/[0.06] md:border-t-0 md:pl-12">
            {rightCol.map((feat, i) =>
              renderFeature(feat, i + 3, i === rightCol.length - 1)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
