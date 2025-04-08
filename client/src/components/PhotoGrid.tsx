import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { usePhotoModal } from "./PhotoModal";
import { Photo } from "@shared/schema";
import { PortfolioCategory } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

type PhotoGridProps = {
  photos: Photo[];
  selectedCategory: PortfolioCategory;
  isLoading: boolean;
};

const PhotoGrid = ({ photos, selectedCategory, isLoading }: PhotoGridProps) => {
  const { openModal } = usePhotoModal();
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);

  // Update filtered photos when selection changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter(photo => photo.category === selectedCategory));
    }
  }, [selectedCategory, photos]);

  // Responsive breakpoints for masonry grid
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="relative aspect-[3/4]">
              <Skeleton className="h-full w-full bg-gray-800" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4">
      <AnimatePresence>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              className="relative mb-4 overflow-hidden group cursor-pointer"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(photo)}
            >
              <div className="aspect-auto relative overflow-hidden">
                <img 
                  src={photo.imageUrl} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-condensed font-bold text-white">{photo.title}</h3>
                  <p className="text-sm text-white/80">{photo.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </AnimatePresence>
    </section>
  );
};

export default PhotoGrid;
