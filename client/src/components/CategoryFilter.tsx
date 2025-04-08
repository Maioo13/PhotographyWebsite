import { motion } from "framer-motion";
import { PortfolioCategory } from "@/lib/types";

type CategoryFilterProps = {
  selectedCategory: PortfolioCategory;
  setSelectedCategory: (category: PortfolioCategory) => void;
  categories: { id: PortfolioCategory; name: string }[];
};

const CategoryFilter = ({ selectedCategory, setSelectedCategory, categories }: CategoryFilterProps) => {
  return (
    <section className="container mx-auto px-4 pt-4 pb-8">
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl font-condensed uppercase tracking-wider text-light mr-4">Categories:</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 bg-[#1A1A1A] border rounded text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category.id 
                  ? "text-[#E0E0E0] border-[#333333]" 
                  : "text-light border-transparent hover:bg-[#333333]"
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
