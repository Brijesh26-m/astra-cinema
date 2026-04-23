import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    filmCount: number;
  };
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/categories#${category.id}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-lg rim-highlight bg-card p-8 h-full"
        >
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
          
          <div className="text-4xl mb-4">{category.icon}</div>
          <h3 className="font-display text-xl font-bold mb-2">{category.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{category.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{category.filmCount} films</span>
            <ArrowRight size={16} className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" strokeWidth={1.5} />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
