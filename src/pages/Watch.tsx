import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Lock, Info } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { mockMovies } from "@/data/mockData";

export default function Watch() {
  const { slug } = useParams();
  const movie = mockMovies.find((m) => m.slug === slug);

  // 🔥 Get subscription status from localStorage
  const isSubscribed = localStorage.getItem("isSubscribed") === "true";

  if (!movie) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-muted-foreground">Movie not found.</p>
      </main>
    );
  }

  const related = mockMovies.filter((m) => m.id !== movie.id).slice(0, 4);

  // 🎬 Video logic
  const videoUrl = movie.isPremium
    ? "https://aedhhzasonbhsofdczye.supabase.co/storage/v1/object/public/Video/neon%20horizon%20.mp4"
    : "https://aedhhzasonbhsofdczye.supabase.co/storage/v1/object/public/Video/the%20last%20witness.mp4";

  return (
    <main className="min-h-screen pt-20">
      <div className="px-6 py-4">
        <Link
          to={`/movies/${movie.slug}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={1.5} /> Back to details
        </Link>
      </div>

      {/* Player */}
      <div className="relative aspect-video max-w-6xl mx-auto bg-card rim-highlight">
        
        {/* Background */}
        <img
          src={movie.banner}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm z-0"
        />

        {/* 🔒 Premium Lock */}
        {movie.isPremium && !isSubscribed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-background/80 backdrop-blur-md">
            <Lock className="w-12 h-12 text-accent mb-4" />
            <h2 className="font-display text-2xl font-bold mb-2">
              Premium Content
            </h2>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Buy premium to continue watching this movie.
            </p>

            {/* 👉 Redirect to subscription page */}
            <Link
              to="/subscribe"
              className="px-6 py-3 bg-primary text-white rounded"
            >
              See plans
            </Link>
          </div>
        ) : (
          // 🎬 Show video if free OR subscribed
          <video
            controls
            autoPlay
            className="relative z-10 w-full h-full rounded-lg"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Info Panel */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Info size={16} className="text-primary" strokeWidth={1.5} />
            <h2 className="font-display text-2xl font-bold">
              {movie.title}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            {movie.director} · {movie.runtime} · {movie.country} · {movie.year}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {movie.synopsis}
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-xl font-bold mb-6">Up Next</h2>
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