import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import MovieCard from "@/components/MovieCard";
import { categories, mockMovies } from "@/data/mockData";

export default function Categories() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Browse</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">Categories</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Four distinct categories celebrating every dimension of short filmmaking.
            </p>
          </motion.div>
        </div>
      </section>

      {categories.map((cat, ci) => {
        const catMovies = mockMovies.filter((m) => m.categoryId === cat.id);
        return (
          <section key={cat.id} id={cat.id} className="py-20 px-6 border-t border-border">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <div className="flex flex-col lg:flex-row gap-12 mb-12">
                  <div className="lg:w-1/3">
                    <div className={`h-1 w-16 bg-gradient-to-r ${cat.color} mb-6 rounded-full`} />
                    <div className="text-5xl mb-4">{cat.icon}</div>
                    <h2 className="font-display text-3xl font-bold mb-3">{cat.name}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <p className="font-display font-bold text-lg">{cat.filmCount}</p>
                        <p className="text-muted-foreground text-xs">Films</p>
                      </div>
                      <div>
                        <p className="font-display font-bold text-lg">{cat.entryFee}</p>
                        <p className="text-muted-foreground text-xs">Entry Fee</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {(catMovies.length > 0 ? catMovies : mockMovies.slice(ci, ci + 3)).slice(0, 3).map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>
        );
      })}
    </main>
  );
}
