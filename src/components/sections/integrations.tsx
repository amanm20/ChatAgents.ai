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
  SiGooglesheets,
  SiGmail,
} from "react-icons/si";

const platforms = [
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366", row: 0, col: 1 },
  { name: "Telegram", icon: SiTelegram, color: "#26A5E4", row: 0, col: 3 },
  { name: "Shopify", icon: SiShopify, color: "#96BF48", row: 1, col: 0 },
  { name: "Google Sheets", icon: SiGooglesheets, color: "#34A853", row: 1, col: 2 },
  { name: "Gmail", icon: SiGmail, color: "#EA4335", row: 1, col: 4 },
  { name: "Stripe", icon: SiStripe, color: "#635BFF", row: 2, col: 1 },
  { name: "Slack", icon: SiSlack, color: "#E01E5A", row: 2, col: 3 },
  { name: "Instagram", icon: SiInstagram, color: "#E4405F", row: 3, col: 2 },
];

export default function Integrations() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="integrations" className="relative py-20">
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
          <div className="relative grid grid-cols-5 gap-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                style={{
                  gridRow: p.row + 1,
                  gridColumn: p.col + 1,
                  backgroundColor: `${p.color}0A`,
                  boxShadow: `0 0 20px ${p.color}08`,
                }}
                className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.06] transition-[border-color] duration-300 hover:border-white/15"
                title={p.name}
              >
                <p.icon
                  className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: p.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
