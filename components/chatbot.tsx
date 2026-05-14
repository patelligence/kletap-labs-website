"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: number;
  role: "user" | "bot";
  text: string;
  suggestions?: string[];
}

interface ChatbotProps {
  // Brand label shown in the chat header. Defaults to "Kletap Labs Assistant".
  brandLabel?: string;
  // Endpoint the widget POSTs to. Defaults to /api/chat.
  endpoint?: string;
  // First message the bot shows when opened.
  greeting?: string;
  // Quick-reply chips shown alongside the greeting.
  initialSuggestions?: string[];
}

// Floating chatbot widget — bottom-right pill that expands into a glass chat panel.
// Wired to /api/chat by default; pattern-matches answers from lib/chat-knowledge.ts.
export function Chatbot({
  brandLabel = "Kletap Labs Assistant",
  endpoint = "/api/chat",
  greeting = "Hi! Ask me about Kletap Labs, Patelligence AI, pricing, or how we work.",
  initialSuggestions = [
    "What does Patelligence do?",
    "Pricing",
    "Book a strategy call",
  ],
}: ChatbotProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: "bot",
      text: greeting,
      suggestions: initialSuggestions,
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Autoscroll to bottom whenever a new message appears.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, sending]);

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = (await res.json()) as {
        reply?: string;
        suggestions?: string[];
        error?: string;
      };
      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        role: "bot",
        text:
          data.reply ??
          "Sorry — something went wrong. Try the contact form below for a real human.",
        suggestions: data.suggestions,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text: "I couldn't reach the server. Please try the contact form below.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Floating launcher button — bottom right */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full btn-gradient text-white shadow-2xl shadow-primary/40 md:bottom-6 md:right-6"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {!open && (
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-electric ring-2 ring-background animate-pulse-glow" />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="fixed bottom-24 right-4 left-4 z-[60] flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-border bg-background-2/95 backdrop-blur-2xl shadow-2xl shadow-primary/20 md:left-auto md:right-6 md:bottom-24 md:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-gradient-to-br from-primary/15 to-electric/10 px-5 py-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-electric shadow-lg shadow-primary/30">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-display text-sm font-bold text-foreground">
                  {brandLabel}
                </p>
                <p className="flex items-center gap-1.5 text-[11px] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-glow" />
                  Online · typically replies instantly
                </p>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m) => (
                <MessageBubble key={m.id} message={m} onSuggestion={send} />
              ))}

              {sending && (
                <div className="flex items-end gap-2">
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-electric">
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm border border-border bg-white/[0.04] px-4 py-3">
                    <div className="flex gap-1">
                      <Dot delay={0} />
                      <Dot delay={0.15} />
                      <Dot delay={0.3} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-background/60 px-3 py-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                disabled={sending}
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label="Send message"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl btn-gradient text-white transition-opacity disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Single message row with avatar + suggestion chips below the bot reply.
function MessageBubble({
  message,
  onSuggestion,
}: {
  message: ChatMessage;
  onSuggestion: (text: string) => void;
}) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "flex items-end gap-2",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {!isUser && (
        <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-electric">
          <Sparkles className="h-3.5 w-3.5 text-white" />
        </div>
      )}

      <div className={cn("flex max-w-[85%] flex-col gap-2", isUser && "items-end")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isUser
              ? "rounded-br-sm bg-gradient-to-br from-primary to-electric text-white"
              : "rounded-bl-sm border border-border bg-white/[0.04] text-foreground"
          )}
        >
          {message.text}
        </div>

        {!isUser && message.suggestions && message.suggestions.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {message.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => onSuggestion(s)}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium text-electric transition-colors hover:bg-primary/20"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, delay }}
      className="block h-1.5 w-1.5 rounded-full bg-electric"
    />
  );
}
