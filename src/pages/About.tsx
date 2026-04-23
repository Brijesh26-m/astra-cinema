import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { Heart, Globe, Film, Users, Target, Sparkles } from "lucide-react";

const milestones = [
  { year: "2022", event: "Astropholic founded with a vision to democratize film festivals" },
  { year: "2023", event: "First edition received 500+ submissions from 40 countries" },
  { year: "2024", event: "Launched online streaming platform for subscribers" },
  { year: "2025", event: "Expanded to 4 categories with $1,500+ in prizes" },
];

export default function About() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Where Cinema Meets the <span className="text-gradient-primary">Cosmos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Astropholic is more than a film festival — it's a movement to empower independent filmmakers worldwide through an immersive digital theater experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          <SectionReveal>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe every filmmaker deserves a stage. Astropholic was born from the frustration of talented creators being unable to reach global audiences. Traditional film festivals are geographically limited, expensive, and often inaccessible to independent voices from underrepresented regions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our platform breaks these barriers by providing a fully online, beautifully curated festival experience that puts the art first. We combine the prestige of a curated festival with the accessibility of a streaming platform.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From documentary filmmakers capturing truth in war zones to experimental artists pushing the boundaries of visual storytelling, Astropholic celebrates the full spectrum of cinematic expression.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              {[
                { icon: Globe, label: "40+ Countries", desc: "Global filmmaker community" },
                { icon: Film, label: "500+ Films", desc: "Submitted each edition" },
                { icon: Users, label: "10K+", desc: "Active subscribers" },
                { icon: Heart, label: "100%", desc: "Independent & creator-owned" },
              ].map((stat) => (
                <div key={stat.label} className="rim-highlight rounded-lg p-5 flex items-center gap-4">
                  <stat.icon className="w-6 h-6 text-primary shrink-0 drop-shadow-[0_0_6px_hsl(190,100%,50%,0.5)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-display font-bold text-lg">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">What Drives Us</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Accessibility", desc: "Breaking geographic and financial barriers so every filmmaker has a chance to be seen." },
              { icon: Sparkles, title: "Excellence", desc: "Curating the finest short films with rigorous yet fair selection processes." },
              { icon: Heart, title: "Community", desc: "Building meaningful connections between filmmakers, audiences, and industry." },
            ].map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <v.icon className="w-8 h-8 text-primary mx-auto mb-4 drop-shadow-[0_0_8px_hsl(190,100%,50%,0.5)]" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">Our Journey</h2>
          </SectionReveal>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <SectionReveal key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary glow-primary shrink-0" />
                    {i < milestones.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-4">
                    <p className="text-primary font-display font-bold text-lg">{m.year}</p>
                    <p className="text-muted-foreground text-sm mt-1">{m.event}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
