import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { plans } from "@/data/mockData";

export default function Subscribe() {
  const [yearly, setYearly] = useState(false);

  return (
    <main className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4 drop-shadow-[0_0_8px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4">Choose Your Plan</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Unlock the full Astropholic experience with premium access to films, festivals, and filmmaker tools.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 rim-highlight rounded-full p-1">
              <button
                onClick={() => setYearly(false)}
                className={`text-sm px-5 py-2 rounded-full transition-all ${!yearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`text-sm px-5 py-2 rounded-full transition-all ${yearly ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
              >
                Yearly <span className="text-[10px] ml-1 opacity-80">Save 17%</span>
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <SectionReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative rim-highlight rounded-lg p-8 h-full flex flex-col ${
                  plan.popular ? 'border-primary/50 glow-primary' : 'bg-card'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-bold px-4 py-1 bg-primary text-primary-foreground rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="font-display text-4xl font-bold">
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-sm text-muted-foreground">/{yearly ? 'year' : 'month'}</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={14} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
                        <span className="text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 text-sm font-bold tracking-wider transition-all ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground glow-btn hover:brightness-110'
                      : 'border border-border hover:bg-secondary/50'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
