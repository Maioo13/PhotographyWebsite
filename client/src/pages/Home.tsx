import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import CategoryFilter from "@/components/CategoryFilter";
import PhotoGrid from "@/components/PhotoGrid";
import { PortfolioCategory } from "@/lib/types";

const categories = [
  { id: "all", name: "All Work" },
  { id: "portraits", name: "Portraits" },
  { id: "travel", name: "Travel" },
  { id: "street", name: "Street" },
  { id: "nature", name: "Nature" },
] as const;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("all");

  const { data: photos = [], isLoading } = useQuery({
    queryKey: ['/api/photos'],
    staleTime: 60000, // 1 minute
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      <PhotoGrid
        photos={photos}
        selectedCategory={selectedCategory}
        isLoading={isLoading}
      />
    </motion.div>
  );
};

export default Home;
