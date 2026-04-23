import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Film, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Film className="w-6 h-6 text-primary drop-shadow-[0_0_8px_hsl(190,100%,50%,0.6)]" strokeWidth={1.5} />
            <span className="font-display text-xl font-bold">ASTROPHOLIC</span>
          </Link>
          <h1 className="font-display text-3xl font-bold tracking-tight">Create Account</h1>
          <p className="text-sm text-muted-foreground mt-2">Join the Astropholic community</p>
        </div>

        <div className="rim-highlight rounded-lg p-8 bg-card">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
                <input type="text" placeholder="Your name" className="w-full bg-secondary border border-border rounded-md pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
                <input type="email" placeholder="you@email.com" className="w-full bg-secondary border border-border rounded-md pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full bg-secondary border border-border rounded-md pl-10 pr-10 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-bold text-sm glow-btn hover:brightness-110 transition-all">
              Create Account
            </button>
          </form>

          <div className="mt-6">
            <div className="relative text-center mb-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <span className="relative bg-card px-4 text-xs text-muted-foreground">or continue with</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-2.5 border border-border rounded-md text-sm font-medium hover:bg-secondary/50 transition-colors">Google</button>
              <button className="py-2.5 border border-border rounded-md text-sm font-medium hover:bg-secondary/50 transition-colors">Apple</button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </main>
  );
}
