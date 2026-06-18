import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight, Users, ShieldCheck, MinusSquare, AlignCenter, DollarSign, ShoppingCart, Star } from "lucide-react";
import giftCard from "@/assets/mart-gift-card.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get a $750 Mart Gift Card — Mart Survey" },
      { name: "description", content: "Take a quick survey about your shopping experience and receive a $750 Mart gift card as a thank you." },
      { property: "og:title", content: "Get a $750 Mart Gift Card" },
      { property: "og:description", content: "Take a quick survey and receive a $750 Mart gift card." },
    ],
  }),
  component: Index,
});

const faqs = [
  { q: 'What are "deals"?', a: "Simple tasks like app downloads, short surveys, or trial signups. Each deal is clearly explained before you start, so you know exactly what's required." },
  { q: "How do I receive my reward?", a: "Via email after completing all required deals. Make sure to provide a valid email address during signup so we can send your reward securely." },
  { q: "Is my information safe?", a: "Yes, the site uses encrypted SSL and verified partners. Your data is protected and never shared with unauthorized third parties." },
  { q: "Do I have to pay anything?", a: "Some offers may include optional trials, but all requirements are clearly stated before you proceed. There are no hidden fees to participate in this program." },
  { q: "How long does it take?", a: "Usually around 30 minutes from start to finish. The exact time depends on which deals you choose to complete, but most users finish within this timeframe." },
];

const steps = [
  { icon: DollarSign, title: "Take the Survey", desc: "Answer a few quick questions about your Mart shopping experience." },
  { icon: ShoppingCart, title: "Share Feedback", desc: "Tell us about your shopping preferences and experiences." },
  { icon: Star, title: "Get Rewarded", desc: "Receive your $750 Mart gift card after completing the survey." },
];

const trust = [
  { icon: Users, title: "3,500+ Verified Users", desc: "Real participants" },
  { icon: ShieldCheck, title: "SSL Secure", desc: "Connection" },
  { icon: MinusSquare, title: "No Hidden", desc: "Fees" },
  { icon: AlignCenter, title: "Fast Email", desc: "Delivery" },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
      >
        <span className={`text-sm sm:text-base font-semibold transition-colors ${isOpen ? "text-brand" : "text-foreground"}`}>
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-2xl px-5 py-4">
          <h2 className="text-lg sm:text-xl font-bold">
            Mart <span className="font-normal opacity-90">Survey</span>
          </h2>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5">
        {/* Hero */}
        <section className="pt-6 sm:pt-8 pb-4">
          <img
            src={giftCard}
            alt="$750 Mart Gift Card"
            width={1024}
            height={1024}
            className="mx-auto block w-full max-w-sm sm:max-w-md"
          />
          <h1 className="mt-6 sm:mt-8 text-center text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Get a <span className="text-brand">$750 Mart Gift Card</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-center text-sm sm:text-base leading-relaxed text-muted-foreground">
            Take our quick survey about your shopping experience at Mart and receive a $750 gift card as a thank you for your feedback.
          </p>
          <div className="mt-7 flex justify-center">
            <button className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 sm:px-10 py-4 text-sm sm:text-base font-semibold text-brand-foreground shadow-[var(--shadow-cta)] transition-transform active:scale-95">
              Start Survey Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </section>

        {/* 3-Step */}
        <section className="pt-10 pb-2">
          <h2 className="text-center text-xl sm:text-2xl font-bold">Simple 3-Step Process</h2>
          <div className="mt-6 space-y-3 sm:space-y-4">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-10 pb-2">
          <h2 className="text-center text-xl sm:text-2xl font-bold">Common Questions</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f, i) => (
              <FaqItem
                key={i}
                q={f.q}
                a={f.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </section>

        {/* Trust */}
        <section className="py-10">
          <h2 className="text-center text-xl sm:text-2xl font-bold">Why People Trust This Program</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {trust.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-4 sm:p-5 text-center">
                <Icon className="mx-auto h-7 w-7 text-brand" />
                <div className="mt-3 text-sm sm:text-base font-bold text-foreground">{title}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-4 bg-footer py-8 text-center text-sm text-footer-foreground">
        © 2026 Mart Survey. All rights reserved.
      </footer>
    </div>
  );
}
