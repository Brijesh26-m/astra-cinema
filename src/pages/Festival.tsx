import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { Trophy, Calendar, BookOpen, Info } from "lucide-react";
import { awards, deadlines, festivalRules } from "@/data/mockData";

export default function Festival() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Season 2025</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Astropholic Film <span className="text-gradient-primary">Festival</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An international online short film festival celebrating visionary storytelling across Documentary, Horror/Thriller, Experimental, and Silent Film categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          <SectionReveal>
            <div>
              <Info className="w-6 h-6 text-primary mb-4 drop-shadow-[0_0_6px_hsl(190,100%,50%,0.5)]" strokeWidth={1.5} />
              <h2 className="font-display text-3xl font-bold mb-6">Festival Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Astropholic Short Film Festival is a fully online international competition open to filmmakers worldwide. We accept short films up to 30 minutes in length across four curated categories.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Selected films are screened on our premium streaming platform, reaching a global audience of cinema enthusiasts and industry professionals. Winners receive cash prizes, trophies, and certificates of excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our jury consists of experienced filmmakers, critics, and industry veterans who evaluate submissions based on storytelling, technical craft, originality, and emotional impact.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="rim-highlight rounded-lg p-6 bg-card">
              <h3 className="font-display font-bold mb-4 text-sm uppercase tracking-widest text-muted-foreground">Quick Facts</h3>
              <div className="space-y-4 text-sm">
                <div><span className="text-muted-foreground">Format:</span> <span className="font-medium">Online</span></div>
                <div><span className="text-muted-foreground">Max Duration:</span> <span className="font-medium">30 minutes</span></div>
                <div><span className="text-muted-foreground">Categories:</span> <span className="font-medium">4</span></div>
                <div><span className="text-muted-foreground">Total Prizes:</span> <span className="font-medium">$1,650+</span></div>
                <div><span className="text-muted-foreground">Countries:</span> <span className="font-medium">40+</span></div>
                <div><span className="text-muted-foreground">Submissions:</span> <span className="font-medium">Via FilmFreeway</span></div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <Trophy className="w-8 h-8 text-primary mx-auto mb-4 drop-shadow-[0_0_8px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Awards & Prizes</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((a, i) => (
              <SectionReveal key={a.title} delay={i * 0.08}>
                <div className="rim-highlight rounded-lg p-6 bg-card h-full hover:border-primary/30 transition-colors">
                  <h3 className="font-display font-bold text-lg mb-1">{a.title}</h3>
                  <p className="text-primary text-sm font-semibold mb-3">{a.prize}</p>
                  <p className="text-sm text-muted-foreground">{a.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <Calendar className="w-8 h-8 text-primary mx-auto mb-4 drop-shadow-[0_0_8px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Submission Deadlines</h2>
          </SectionReveal>
          <div className="space-y-4">
            {deadlines.map((d, i) => (
              <SectionReveal key={d.name} delay={i * 0.1}>
                <div className={`rim-highlight rounded-lg p-6 flex items-center justify-between ${d.status === 'open' ? 'border-primary/40 glow-primary' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display font-bold">{d.name}</h3>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                        d.status === 'open' ? 'bg-primary/20 text-primary' :
                        d.status === 'closed' ? 'bg-secondary text-muted-foreground' :
                        'bg-accent/20 text-accent'
                      }`}>{d.status}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{d.date}</p>
                  </div>
                  <p className="text-2xl font-display font-bold">{d.fee}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-4 drop-shadow-[0_0_8px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Rules & Terms</h2>
          </SectionReveal>
          <div className="space-y-3">
            {festivalRules.map((rule, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="flex gap-4 rim-highlight rounded-lg p-4">
                  <span className="text-primary font-display font-bold text-sm shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-foreground/80">{rule}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
