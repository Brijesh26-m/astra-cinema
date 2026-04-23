import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Lock } from "lucide-react";

interface MovieCardProps {
  movie: {
    slug: string;
    title: string;
    category: string;
    poster: string;
    director: string;
    runtime: string;
    isPremium: boolean;
    rating: number;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movies/${movie.slug}`}>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group relative aspect-[2/3] overflow-hidden rounded-lg rim-highlight bg-card"
      >
        <img
          src={movie.poster}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-40"
        />
        
        {movie.isPremium && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-accent/80 text-accent-foreground rounded-sm backdrop-blur-sm">
            <Lock size={10} strokeWidth={2} />
            Premium
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2">{movie.category}</p>
          <h3 className="font-display text-lg font-bold leading-tight">{movie.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{movie.director} · {movie.runtime}</p>
          <div className="flex items-center gap-1 mt-2">
            <Star size={12} className="text-primary fill-primary" />
            <span className="text-xs font-medium">{movie.rating}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
