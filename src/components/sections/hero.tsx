"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const platforms = [
  "Works on Your Website",
  "Works on Email",
  "Works on Instagram",
  "Works on WhatsApp",
  "Works on Telegram",
];

const chatMessages = [
  { from: "user", text: "I'd like to book a room for this weekend." },
  { from: "bot", text: "Let me check availability for this weekend." },
  {
    from: "bot",
    text: "We have 3 rooms available:\n\nDeluxe Suite — $220/night\nGarden Room — $160/night\nStandard King — $120/night",
  },
  { from: "user", text: "Deluxe Suite — it's our anniversary." },
  {
    from: "bot",
    text: "Congrats! I'll add a complimentary bottle of champagne. Booking confirmed — confirmation sent to your email.",
  },
];


function ChatWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[400px]"
    >
      {/* Window chrome */}
      <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0c] overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.7)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
          </div>
          <span className="flex-1 text-center text-[11px] text-white/20">ChatAgents.ai</span>
          <div className="w-[44px]" />
        </div>

        <div className="flex h-[420px] flex-col">
          {/* Chat area */}
          <div className="flex flex-1 flex-col min-w-0">
            {/* Chat header */}
            <div className="flex items-center gap-2.5 border-b border-white/[0.06] px-4 py-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06]">
                <span className="text-[9px] font-semibold text-white/40">GM</span>
              </div>
              <div>
                <p className="text-[12px] font-medium text-white/85 tracking-tight">Grand Meridian Hotel</p>
                <div className="flex items-center gap-1">
                  <div className="h-1 w-1 rounded-full bg-emerald-400" />
                  <span className="text-[9px] text-white/30">WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-hidden px-4 py-3">
              <div className="flex flex-col gap-2">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`max-w-[85%] ${msg.from === "user" ? "ml-auto" : ""}`}>
                    <div
                      className={`rounded-xl px-3 py-2 text-[11px] leading-[1.6] ${
                        msg.from === "user"
                          ? "bg-white text-black rounded-br-sm"
                          : "bg-white/[0.04] text-white/65 border border-white/[0.05] rounded-bl-sm"
                      }`}
                    >
                      <span className="whitespace-pre-line">{msg.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.06] px-4 py-2.5">
              <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.05] px-3 py-2">
                <span className="text-[11px] text-white/15 flex-1">Type a message...</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white">
                  <svg className="h-2.5 w-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -bottom-10 left-[10%] right-[10%] h-24 rounded-full bg-white/[0.01] blur-3xl -z-10" />
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] overflow-hidden pt-32 pb-16 flex flex-col justify-center"
    >
      {/* Aurora background */}
      <div className="aurora aurora-cyan top-[-200px] left-[10%] animate-float" />
      <div className="aurora aurora-purple top-[-100px] right-[10%] animate-float [animation-delay:2s]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h1 className="font-heading text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[68px]">
              Smart Chatbots.{" "}
              <span className="gradient-text">Real Results.</span>{" "}
              <br className="hidden sm:block" />
              Zero Effort.
            </h1>

            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
              Custom AI agents trained on your business that book appointments,
              close sales, and handle support 24/7 — on WhatsApp, your website,
              and every channel that matters.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#industries"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                See It In Action
              </a>
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] px-6 py-2.5 text-sm font-medium text-white/70 transition-all hover:text-white hover:border-white/[0.2]"
              >
                Book a Free Call
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Chat window */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <ChatWindow />
          </div>
        </div>

        {/* Platform ticker */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...platforms, ...platforms].map((p, i) => (
              <span
                key={i}
                className="mx-6 text-[13px] tracking-wide text-white/25 shrink-0"
              >
                {p} <span className="ml-6 text-white/15">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
