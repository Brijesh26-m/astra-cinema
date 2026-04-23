import { Link } from "react-router-dom";
import { Film } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Film className="w-5 h-5 text-primary drop-shadow-[0_0_8px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
              <span className="font-display text-lg font-bold">ASTROPHOLIC</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A global stage for visionary filmmakers. Experience the future of cinema.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-muted-foreground">Festival</h4>
            <div className="flex flex-col gap-2">
              <Link to="/festival" className="text-sm text-foreground/70 hover:text-primary transition-colors">Overview</Link>
              <Link to="/categories" className="text-sm text-foreground/70 hover:text-primary transition-colors">Categories</Link>
              <Link to="/submit-film" className="text-sm text-foreground/70 hover:text-primary transition-colors">Submit Film</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-muted-foreground">Platform</h4>
            <div className="flex flex-col gap-2">
              <Link to="/movies" className="text-sm text-foreground/70 hover:text-primary transition-colors">Movies</Link>
              <Link to="/subscribe" className="text-sm text-foreground/70 hover:text-primary transition-colors">Subscribe</Link>
              <Link to="/dashboard" className="text-sm text-foreground/70 hover:text-primary transition-colors">Dashboard</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-muted-foreground">Connect</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About</Link>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Twitter / X</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Astropholic International Film Festival. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
