import { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Trophy, Calendar, Star, ChevronRight } from "lucide-react";
import HeroScene from "@/components/canvas/HeroScene";
import MovieCard from "@/components/MovieCard";
import CategoryCard from "@/components/CategoryCard";
import SectionReveal from "@/components/SectionReveal";
import { mockMovies, categories, deadlines, awards, testimonials } from "@/data/mockData";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <main className="relative min-h-screen">
      {/* 3D Hero */}
      <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase border border-primary/30 bg-primary/10 text-primary rounded-full">
            International Film Festival 2025
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6">
            ASTRO<span className="text-gradient-primary">PHOLIC</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 font-body">
            A global stage for visionary filmmakers. Experience the future of cinema through our curated digital theater.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit-film"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold text-sm tracking-wider glow-btn transition-all duration-300 hover:brightness-110 flex items-center justify-center gap-2"
            >
              SUBMIT FILM <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <Link
              to="/festival"
              className="px-8 py-4 border border-border hover:bg-secondary/50 transition-all duration-300 text-sm font-medium tracking-wider flex items-center justify-center gap-2"
            >
              EXPLORE FESTIVAL <ChevronRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-muted-foreground"
        >
          <div className="w-5 h-8 border border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* Official Selection */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <SectionReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Now Screening</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Official Selection</h2>
              <p className="text-muted-foreground mt-2">The most anticipated films of the season.</p>
            </div>
            <Link to="/movies" className="text-primary text-sm font-bold tracking-widest uppercase flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mockMovies.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3 text-center">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">Festival Categories</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">Four distinct categories celebrating the full spectrum of short filmmaking.</p>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-4 drop-shadow-[0_0_8px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Awards & Prizes</h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Recognizing excellence in short filmmaking across all categories.</p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <SectionReveal key={award.title} delay={i * 0.08}>
                <div className="rim-highlight bg-card rounded-lg p-6 h-full group hover:border-primary/30 transition-colors duration-300">
                  <h3 className="font-display text-lg font-bold mb-1">{award.title}</h3>
                  <p className="text-primary text-sm font-semibold mb-3">{award.prize}</p>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-4 drop-shadow-[0_0_8px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Submission Deadlines</h2>
            </div>
          </SectionReveal>
          <div className="space-y-4">
            {deadlines.map((d, i) => (
              <SectionReveal key={d.name} delay={i * 0.1}>
                <div className={`rim-highlight rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${d.status === 'open' ? 'border-primary/40 glow-primary' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display font-bold text-lg">{d.name}</h3>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                        d.status === 'open' ? 'bg-primary/20 text-primary' :
                        d.status === 'closed' ? 'bg-secondary text-muted-foreground' :
                        'bg-accent/20 text-accent'
                      }`}>{d.status}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{d.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-display font-bold">{d.fee}</p>
                    <p className="text-xs text-muted-foreground">per submission</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">What Filmmakers Say</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.1}>
                <div className="rim-highlight bg-card rounded-lg p-6 h-full">
                  <Star size={16} className="text-primary fill-primary mb-4" />
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-primary">{t.avatar}</div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <SectionReveal>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to Share Your Vision?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join thousands of filmmakers from around the world on the most immersive digital film festival platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/submit-film" className="px-8 py-4 bg-primary text-primary-foreground font-bold text-sm tracking-wider glow-btn flex items-center justify-center gap-2">
                <Play size={16} strokeWidth={1.5} /> SUBMIT YOUR FILM
              </Link>
              <Link to="/movies" className="px-8 py-4 border border-border hover:bg-secondary/50 transition-all text-sm font-medium tracking-wider flex items-center justify-center gap-2">
                WATCH FILMS <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link to="/subscribe" className="px-8 py-4 bg-accent text-accent-foreground font-bold text-sm tracking-wider glow-btn-accent flex items-center justify-center gap-2">
                SUBSCRIBE
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
