"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiWhatsapp,
  SiTelegram,
  SiShopify,
  SiSlack,
  SiStripe,
  SiInstagram,
  SiHubspot,
  SiWordpress,
} from "react-icons/si";

const platforms = [
  { name: "WhatsApp", icon: SiWhatsapp, color: "text-green-400", bg: "bg-green-400/10", row: 0, col: 1 },
  { name: "Telegram", icon: SiTelegram, color: "text-sky-400", bg: "bg-sky-400/10", row: 0, col: 3 },
  { name: "Shopify", icon: SiShopify, color: "text-green-500", bg: "bg-green-500/10", row: 1, col: 0 },
  { name: "HubSpot", icon: SiHubspot, color: "text-orange-400", bg: "bg-orange-400/10", row: 1, col: 2 },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-400", bg: "bg-blue-400/10", row: 1, col: 4 },
  { name: "Stripe", icon: SiStripe, color: "text-purple-400", bg: "bg-purple-400/10", row: 2, col: 1 },
  { name: "Slack", icon: SiSlack, color: "text-pink-400", bg: "bg-pink-400/10", row: 2, col: 3 },
  { name: "Instagram", icon: SiInstagram, color: "text-pink-500", bg: "bg-pink-500/10", row: 3, col: 2 },
];

export default function Integrations() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
              Connects with the tools{" "}
              <span className="text-white/40">you already use</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/35 leading-relaxed">
              Your AI agent plugs into your existing stack — CRMs, calendars,
              e-commerce, messaging platforms. No migration, no disruption.
            </p>
          </motion.div>

          {/* Right — icon grid */}
          <div className="relative grid grid-cols-5 gap-3">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                style={{
                  gridRow: p.row + 1,
                  gridColumn: p.col + 1,
                }}
                className={`flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.06] transition-colors hover:border-white/15 ${p.bg}`}
                title={p.name}
              >
                <p.icon className={`h-6 w-6 ${p.color}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
