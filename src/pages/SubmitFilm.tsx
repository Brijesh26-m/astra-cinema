import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";
import { Film, Upload, Calendar, BookOpen, ArrowRight } from "lucide-react";
import { categories, deadlines, festivalRules } from "@/data/mockData";

export default function SubmitFilm() {
  const [formData, setFormData] = useState({ title: "", category: "", filmUrl: "", name: "", email: "", synopsis: "" });

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Upload className="w-10 h-10 text-primary mx-auto mb-4 drop-shadow-[0_0_10px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4">Submit Your Film</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Share your vision with the world. Submit to the Astropholic International Film Festival.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories & Deadlines Quick View */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <SectionReveal>
            <div>
              <Film className="w-6 h-6 text-primary mb-3 drop-shadow-[0_0_6px_hsl(190,100%,50%,0.5)]" strokeWidth={1.5} />
              <h2 className="font-display text-2xl font-bold mb-4">Categories</h2>
              <div className="space-y-3">
                {categories.map((c) => (
                  <div key={c.id} className="flex items-center justify-between rim-highlight rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{c.icon}</span>
                      <span className="text-sm font-medium">{c.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{c.entryFee}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div>
              <Calendar className="w-6 h-6 text-primary mb-3 drop-shadow-[0_0_6px_hsl(190,100%,50%,0.5)]" strokeWidth={1.5} />
              <h2 className="font-display text-2xl font-bold mb-4">Deadlines</h2>
              <div className="space-y-3">
                {deadlines.map((d) => (
                  <div key={d.name} className={`flex items-center justify-between rim-highlight rounded-lg p-4 ${d.status === 'open' ? 'border-primary/30' : ''}`}>
                    <div>
                      <p className="text-sm font-medium">{d.name}</p>
                      <p className="text-xs text-muted-foreground">{d.date}</p>
                    </div>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      d.status === 'open' ? 'bg-primary/20 text-primary' :
                      d.status === 'closed' ? 'bg-secondary text-muted-foreground' :
                      'bg-accent/20 text-accent'
                    }`}>{d.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Rules Summary */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <BookOpen className="w-6 h-6 text-primary mb-3 drop-shadow-[0_0_6px_hsl(190,100%,50%,0.5)]" strokeWidth={1.5} />
            <h2 className="font-display text-2xl font-bold mb-6">Rules Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {festivalRules.map((r, i) => (
                <div key={i} className="flex gap-3 text-sm rim-highlight rounded-lg p-3">
                  <span className="text-primary font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-foreground/80">{r}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-center mb-2">Submission Form</h2>
            <p className="text-center text-sm text-muted-foreground mb-10">Fill out the details below to submit your film.</p>

            <form onSubmit={(e) => e.preventDefault()} className="rim-highlight rounded-lg p-8 bg-card space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Your Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full name" className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="you@email.com" className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Film Title</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="Your film's title" className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Category</label>
                <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select a category</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Film URL</label>
                <input type="url" value={formData.filmUrl} onChange={(e) => setFormData({...formData, filmUrl: e.target.value})} placeholder="Vimeo, Google Drive, or WeTransfer link" className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Synopsis</label>
                <textarea value={formData.synopsis} onChange={(e) => setFormData({...formData, synopsis: e.target.value})} rows={4} placeholder="Brief synopsis of your film..." className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-bold text-sm tracking-wider glow-btn hover:brightness-110 transition-all flex items-center justify-center gap-2">
                SUBMIT FILM <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
