"use client";

import { navLinks } from "@/lib/data";
import { BrainCircuit, Globe, MessageCircle, ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-purple">
                <BrainCircuit className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                ChatAgents<span className="gradient-text-cyan">.ai</span>
              </span>
            </a>
            <p className="text-sm text-muted leading-relaxed">
              AI chatbots that qualify leads, recover revenue, and handle
              complex tasks — trained on your business.
            </p>
            <div className="mt-4 flex gap-3">
              {[Globe, MessageCircle, ExternalLink, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-cyan hover:text-cyan"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Industries
            </h4>
            <ul className="space-y-2">
              {[
                "Hotels & Hospitality",
                "Real Estate",
                "Healthcare",
                "E-commerce",
                "Internal AI",
              ].map((name) => (
                <li key={name}>
                  <a
                    href="#industries"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>hello@chatagents.ai</li>
              <li>Book a Free Strategy Call</li>
            </ul>
            <a
              href="#pricing"
              className="mt-4 inline-flex rounded-full bg-gradient-to-r from-cyan to-purple px-5 py-2 text-sm font-medium text-white transition-shadow hover:shadow-[0_0_24px_rgba(0,212,255,0.3)]"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} ChatAgents AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
