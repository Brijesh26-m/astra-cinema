import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Clock, Star, Lock, Globe } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { mockMovies } from "@/data/mockData";

export default function MovieDetail() {
  const { slug } = useParams();
  const movie = mockMovies.find((m) => m.slug === slug);

  if (!movie) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-muted-foreground">Movie not found.</p>
      </main>
    );
  }

  const related = mockMovies.filter((m) => m.id !== movie.id).slice(0, 4);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Banner */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={movie.banner} alt={movie.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <div className="max-w-4xl">
            <Link to="/movies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft size={14} strokeWidth={1.5} /> Back to catalog
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-[0.2em] text-primary">{movie.category}</span>
                {movie.isPremium && (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-accent/80 text-accent-foreground rounded-sm">
                    <Lock size={10} /> Premium
                  </span>
                )}
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">{movie.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Star size={14} className="text-primary fill-primary" /> {movie.rating}</span>
                <span className="flex items-center gap-1"><Clock size={14} strokeWidth={1.5} /> {movie.runtime}</span>
                <span className="flex items-center gap-1"><Globe size={14} strokeWidth={1.5} /> {movie.country}</span>
                <span>{movie.year}</span>
              </div>
              <div className="flex gap-3">
                <Link to={`/watch/${movie.slug}`}>
  <button className="px-6 py-3 bg-primary text-primary-foreground font-bold text-sm glow-btn flex items-center gap-2">
    <Play size={16} strokeWidth={1.5} /> Watch Now
  </button>
</Link>
                <button className="px-6 py-3 border border-border hover:bg-secondary/50 text-sm font-medium transition-all">
                  + Watchlist
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Details */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Synopsis</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{movie.synopsis}</p>

            {movie.stills.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-bold mb-4">Stills</h2>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {movie.stills.map((s, i) => (
                    <img key={i} src={s} alt={`Still ${i + 1}`} className="rounded-lg rim-highlight aspect-video object-cover" />
                  ))}
                </div>
              </>
            )}

            {/* Trailer placeholder */}
            <h2 className="font-display text-2xl font-bold mb-4">Trailer</h2>
            <div className="aspect-video bg-card rim-highlight rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-12 h-12 text-primary mx-auto mb-2 drop-shadow-[0_0_12px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground">Trailer coming soon</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rim-highlight rounded-lg p-6 bg-card">
              <h3 className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Director</span><span className="font-medium">{movie.director}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Runtime</span><span className="font-medium">{movie.runtime}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Country</span><span className="font-medium">{movie.country}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Year</span><span className="font-medium">{movie.year}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Category</span><span className="font-medium">{movie.category}</span></div>
              </div>
            </div>

            {movie.cast.length > 0 && (
              <div className="rim-highlight rounded-lg p-6 bg-card">
                <h3 className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Cast</h3>
                <div className="space-y-2">
                  {movie.cast.map((c) => (
                    <p key={c} className="text-sm">{c}</p>
                  ))}
                </div>
              </div>
            )}

            {movie.isPremium && (
              <div className="rim-highlight rounded-lg p-6 bg-accent/10 border-accent/30">
                <Lock className="w-5 h-5 text-accent mb-2" strokeWidth={1.5} />
                <p className="text-sm font-semibold mb-1">Premium Content</p>
                <p className="text-xs text-muted-foreground mb-3">Subscribe to watch this film and unlock all premium content.</p>
                <Link to="/subscribe" className="text-xs font-bold text-accent hover:underline">View Plans →</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8">Related Films</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
