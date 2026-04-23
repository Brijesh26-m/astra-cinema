import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Bookmark, Clock, Settings } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { mockMovies } from "@/data/mockData";

export default function Dashboard() {
  const continueWatching = mockMovies.slice(0, 3);
  const watchlist = mockMovies.slice(3, 7);
  const recommended = mockMovies.slice(1, 5);

  return (
    <main className="min-h-screen pt-24">
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Welcome back</h1>
                <p className="text-muted-foreground mt-1">Your personal cinema dashboard.</p>
              </div>
              <Link to="/subscribe" className="rim-highlight rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:bg-secondary/50 transition-colors">
                <Settings size={14} strokeWidth={1.5} />
                <span className="hidden md:inline">Cinephile Plan</span>
              </Link>
            </div>

            {/* Subscription Status */}
            <div className="rim-highlight rounded-lg p-6 mb-12 bg-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Plan</p>
                <p className="font-display font-bold text-lg">Cinephile — <span className="text-primary">$9.99/mo</span></p>
              </div>
              <div className="text-sm text-muted-foreground">Next billing: April 15, 2025</div>
            </div>
          </motion.div>

          {/* Continue Watching */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Play size={18} className="text-primary" strokeWidth={1.5} />
              <h2 className="font-display text-xl font-bold">Continue Watching</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {continueWatching.map((movie) => (
                <div key={movie.id} className="relative">
                  <MovieCard movie={movie} />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-b-lg overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Math.random() * 60 + 20}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Watchlist */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Bookmark size={18} className="text-primary" strokeWidth={1.5} />
              <h2 className="font-display text-xl font-bold">Your Watchlist</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {watchlist.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Clock size={18} className="text-primary" strokeWidth={1.5} />
              <h2 className="font-display text-xl font-bold">Recommended For You</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {recommended.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
