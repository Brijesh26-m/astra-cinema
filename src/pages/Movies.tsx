import { useState } from "react";
import { motion } from "framer-motion";
import MovieCard from "@/components/MovieCard";
import { mockMovies } from "@/data/mockData";

const genres = ["All", "Documentary", "Horror / Thriller", "Experimental", "Silent Film", "Sci-Fi"];
const countries = ["All", "South Korea", "Nigeria", "Germany", "Japan", "Sweden", "Brazil", "Canada", "Russia"];

export default function Movies() {
  const [genre, setGenre] = useState("All");
  const [country, setCountry] = useState("All");

  const filtered = mockMovies.filter((m) => {
    if (genre !== "All" && m.category !== genre) return false;
    if (country !== "All" && m.country !== country) return false;
    return true;
  });

  return (
    <main className="min-h-screen pt-24">
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Stream</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4">Movie Catalog</h1>
            <p className="text-muted-foreground mb-10">Browse our curated selection of award-winning short films.</p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 mb-12">
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Genre</p>
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenre(g)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                      genre === g
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Country</p>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCountry(c)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                      country === c
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No films match your filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
