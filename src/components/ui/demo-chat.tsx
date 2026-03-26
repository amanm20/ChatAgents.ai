"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  from: "user" | "bot";
  text: string;
}

interface DemoChatProps {
  industry: string;
  starters: string[];
  businessName: string;
}

export default function DemoChat({ industry, starters, businessName }: DemoChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      from: "bot",
      text: `Hi! I'm the AI assistant for ${businessName}. How can I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const maxMessages = 15;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(scrollToBottom, [messages, isTyping, scrollToBottom]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || msgCount >= maxMessages) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      from: "user",
      text: text.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setMsgCount((c) => c + 1);
    setIsTyping(true);

    // Simulate bot response (in production, this calls /api/demo/chat)
    await new Promise((r) => setTimeout(r, 1200 + Math.random() * 800));

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      from: "bot",
      text: getDemoResponse(industry, text.trim(), msgCount),
    };
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
    setMsgCount((c) => c + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface overflow-hidden h-[500px]">
      {/* Chat header */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-3 bg-surface-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">{businessName}</p>
          <p className="text-[11px] text-green flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green inline-block" />
            AI Assistant • Online
          </p>
        </div>
        <div className="glass rounded-full px-2 py-0.5 text-[10px] text-muted">
          Live Demo
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2 ${msg.from === "user" ? "justify-end" : ""}`}
            >
              {msg.from === "bot" && (
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 mt-1">
                  <Bot className="h-3 w-3 text-cyan" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "bg-gradient-to-r from-cyan to-purple text-white"
                    : "bg-surface-2 text-foreground"
                }`}
              >
                <span className="whitespace-pre-line">{msg.text}</span>
              </div>
              {msg.from === "user" && (
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple/20 mt-1">
                  <User className="h-3 w-3 text-purple" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 mt-1">
              <Bot className="h-3 w-3 text-cyan" />
            </div>
            <div className="bg-surface-2 rounded-2xl px-4 py-3 flex gap-1">
              <span className="h-2 w-2 rounded-full bg-muted animate-bounce [animation-delay:0ms]" />
              <span className="h-2 w-2 rounded-full bg-muted animate-bounce [animation-delay:150ms]" />
              <span className="h-2 w-2 rounded-full bg-muted animate-bounce [animation-delay:300ms]" />
            </div>
          </motion.div>
        )}

        {/* Max messages CTA */}
        {msgCount >= maxMessages && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-4 text-center"
          >
            <Sparkles className="h-5 w-5 text-cyan mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">
              Impressed? This could be YOUR customers&apos; experience.
            </p>
            <a
              href="#pricing"
              className="mt-3 inline-flex rounded-full bg-gradient-to-r from-cyan to-purple px-6 py-2 text-sm font-medium text-white"
            >
              Book a Call →
            </a>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Starters */}
      {messages.length <= 1 && (
        <div className="flex flex-wrap gap-2 px-4 pb-3">
          {starters.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="glass rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground hover:border-border-bright"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-border p-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            msgCount >= maxMessages
              ? "Demo limit reached"
              : "Type a message..."
          }
          disabled={msgCount >= maxMessages}
          className="flex-1 rounded-full bg-surface-2 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan/50 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!input.trim() || msgCount >= maxMessages}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan to-purple text-white disabled:opacity-30 transition-opacity"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

/* Simple demo response generator — replaced by n8n webhook in production */
function getDemoResponse(industry: string, _userMsg: string, count: number): string {
  const responses: Record<string, string[]> = {
    hotels: [
      "I'd be happy to help! Let me check our availability for you right now... 🏨\n\nWe have 3 room types available:\n• Deluxe Suite – $220/night (city view)\n• Garden Room – $160/night (garden view)\n• Standard King – $120/night\n\nWhich catches your eye?",
      "Great choice! The Deluxe Suite is our most popular. I can see availability for this weekend — shall I go ahead and reserve it?\n\nAlso, since many guests enjoy our spa, I can add a couples' massage for a 20% discount if you book now.",
      "I've prepared your reservation:\n\n✅ Deluxe Suite, 2 nights\n✅ Complimentary late checkout\n✅ Welcome champagne (anniversary special)\n\nTotal: $440 + tax\n\nShould I confirm this booking and send details to your email?",
      "Your booking is confirmed! 🎉\n\nConfirmation #GM-2847 has been sent to your email. I've also noted your anniversary — our team will prepare something special.\n\nAnything else I can help with? Restaurant recommendations, airport transfers?",
      "Absolutely! Here are my top picks near the hotel:\n\n🍽️ Chez Laurent — Fine dining, 5 min walk\n🍣 Sakura — Best sushi in town, 10 min\n🍷 Vine & Dine — Great wine list, rooftop views\n\nWant me to make a reservation at any of these?",
    ],
    "real-estate": [
      "I'd love to help you find the perfect home! Let me ask a few quick questions to narrow things down.\n\nWhat's your budget range? And are you pre-approved for a mortgage?",
      "Perfect. Based on what you've described, I've found 3 strong matches:\n\n🏠 123 Oak Street – 3 bed/2 bath, $435K, great school district\n🏠 456 Maple Ave – 3 bed/2.5 bath, $445K, home office, large backyard\n🏠 789 Cedar Lane – 4 bed/2 bath, $420K, newly renovated\n\nWould you like more details on any of these?",
      "Great pick! 456 Maple Ave has a dedicated home office on the main floor, top-rated schools within walking distance, and a 2-car garage.\n\nWould you like to schedule a viewing? I can check our agent's availability right now.",
      "I can see openings this Saturday at 10am or 2pm, and Sunday at 11am. Which works best for you?\n\nI'll send you the full listing details, driving directions, and parking info once confirmed.",
      "You're all set! 📋\n\n✅ Viewing: Saturday 2pm at 456 Maple Ave\n✅ Calendar invite sent\n✅ Our agent Sarah will meet you there\n\nI'll send a reminder tomorrow morning. Anything else you'd like to know about the property?",
    ],
    healthcare: [
      "I'm sorry to hear that. Let me help you figure out the best course of action.\n\nCan you tell me:\n1. How old is your child?\n2. What's their current temperature?\n3. Any other symptoms besides fever?",
      "Thank you for those details. Based on what you've described, I'd recommend a same-day appointment rather than the ER.\n\nDr. Chen has availability today at 3:30 PM and tomorrow at 9:00 AM. Would either work?\n\nIf symptoms worsen (temperature above 103°F, stiff neck, or difficulty breathing), please go to the ER immediately.",
      "I've booked the appointment:\n\n✅ Dr. Chen, Today at 3:30 PM\n✅ Maple Health Clinic, Suite 200\n✅ Bring insurance card and any medications\n\nI'll send a reminder 2 hours before. Before your visit, are there any recent medication changes I should note for Dr. Chen?",
      "Perfect, I've noted that for Dr. Chen's records. \n\nOne more thing — do you have your insurance member ID handy? I can pre-verify coverage to save time at check-in.",
      "You're all set! Here's your visit summary:\n\n📋 Patient: [Your child's name]\n👨‍⚕️ Provider: Dr. Chen\n🕒 Time: Today, 3:30 PM\n📍 Maple Health Clinic, Suite 200\n✅ Insurance pre-verified\n\nI hope your little one feels better soon! 💙",
    ],
    ecommerce: [
      "Love it! A beach wedding sounds amazing 🌴\n\nLet me find the perfect outfit. A few quick questions:\n1. What's the dress code? (Casual, smart casual, semi-formal?)\n2. Are you looking for a full suit or separates?\n3. Any color preferences?",
      "Perfect! For a smart casual beach wedding in Hawaii, I'd recommend:\n\n👔 Linen Blazer in Sand — $89 (breathable, unstructured)\n👖 Tailored Chino Shorts in Navy — $65 (or full-length, $75)\n👕 White Linen Shirt — $55 (relaxed collar)\n\nTotal: $209 (just over budget but worth it!)\n\nWant to see these pieces?",
      "Great taste! Here are some details:\n\n• The blazer runs true to size — if you're between sizes, go up for a relaxed beach vibe\n• The shorts have a 7\" inseam, perfect for semi-formal\n• Free shipping on orders over $150 ✓\n\nShall I add these to your cart?",
      "Done! Your cart:\n\n🛒 Linen Blazer (Sand, M) – $89\n🛒 Tailored Chino Shorts (Navy, M) – $65\n🛒 White Linen Shirt (M) – $55\n\nSubtotal: $209\n🚚 FREE shipping\n\nUse code BEACH10 for 10% off → $188.10\n\nReady to checkout?",
      "Great choice! You're going to look fantastic at that wedding 🌺\n\nYour order will arrive in 3-5 business days. I'll send tracking info to your email.\n\nPro tip: Our Resort Collection just launched — perfect for the rest of your Hawaii trip! Want a peek?",
    ],
    "internal-assistant": [
      "I'll compile that for you right away! Give me a moment to research the top options...\n\n📊 Researching: pricing, features, pros/cons across the top 5 tools.",
      "Here's your comparison:\n\n**Top 5 Project Management Tools**\n\n1. **Asana** — $10.99/user/mo\n   ✅ Best for workflow automation\n   ❌ Steep learning curve\n\n2. **Monday.com** — $9/user/mo\n   ✅ Visual & intuitive\n   ❌ Gets expensive at scale\n\n3. **ClickUp** — $7/user/mo\n   ✅ Most features for the price\n   ❌ Can be overwhelming\n\n4. **Notion** — $8/user/mo\n   ✅ All-in-one workspace\n   ❌ Weak native PM features\n\n5. **Linear** — $8/user/mo\n   ✅ Fast, dev-focused\n   ❌ Limited non-dev features\n\nWant me to go deeper on any of these?",
      "Based on your team's needs (20-person agency, existing Google Workspace), I'd recommend:\n\n🏆 **ClickUp** as primary — best value, integrates with everything\n🥈 **Asana** as runner-up — better for client-facing projects\n\nI can prepare a detailed implementation plan or set up a trial comparison. What would be most helpful?",
      "Done! I've created the implementation plan:\n\n📋 **ClickUp Setup Plan**\n1. Workspace structure (by client)\n2. Team onboarding sequence (3 days)\n3. Google Workspace integration\n4. Client portal templates\n5. Automation rules for status updates\n\nI've shared this to the #operations channel. Shall I also create action items and assign owners?",
      "All set! I've created 8 action items and assigned them based on team roles:\n\n✅ Jake — Workspace setup (Due: Monday)\n✅ Sarah — Template creation (Due: Tuesday)\n✅ Mike — Integration config (Due: Wednesday)\n✅ Team — Onboarding session (Due: Thursday)\n\nI'll send reminders as deadlines approach. Anything else?",
    ],
  };

  const pool = responses[industry] || responses["hotels"];
  const idx = Math.min(Math.floor(count / 2), pool.length - 1);
  return pool[idx];
}
