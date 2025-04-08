import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "@shared/schema";
import { X } from "lucide-react";

type PhotoModalContextType = {
  isOpen: boolean;
  selectedPhoto: Photo | null;
  openModal: (photo: Photo) => void;
  closeModal: () => void;
};

const PhotoModalContext = createContext<PhotoModalContextType | undefined>(undefined);

export const usePhotoModal = () => {
  const context = useContext(PhotoModalContext);
  if (context === undefined) {
    throw new Error("usePhotoModal must be used within a PhotoModalProvider");
  }
  return context;
};

export const PhotoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <PhotoModalContext.Provider value={{ isOpen, selectedPhoto, openModal, closeModal }}>
      {children}
      <PhotoModal />
    </PhotoModalContext.Provider>
  );
};

const PhotoModal = () => {
  const { isOpen, selectedPhoto, closeModal } = usePhotoModal();

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && selectedPhoto && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <motion.button
            className="absolute top-5 right-5 text-white hover:text-gray-300 focus:outline-none"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <X size={32} />
          </motion.button>

          <div className="relative h-full flex items-center justify-center">
            <motion.img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="max-w-[90%] max-h-[80vh] object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="absolute bottom-5 left-5 md:left-10 bg-black/70 p-4 md:p-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <h3 className="text-xl font-condensed font-bold mb-1">{selectedPhoto.title}</h3>
              <p className="text-sm opacity-80 mb-3">{selectedPhoto.location}</p>
              <p className="text-base opacity-90 mb-4">{selectedPhoto.description}</p>
              <div className="text-xs opacity-70 flex flex-wrap gap-x-6 gap-y-2">
                <span><strong>Camera:</strong> {selectedPhoto.camera}</span>
                <span><strong>Lens:</strong> {selectedPhoto.lens}</span>
                <span><strong>Year:</strong> {selectedPhoto.year}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoModal;
