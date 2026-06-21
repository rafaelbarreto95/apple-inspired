import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1695822822491-d92cee704368?q=80&w=580&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1471&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1526406915894-7bcd65f60845",
    "https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1765376140165-6a7a97d222d8?q=80&w=833&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=580&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1764746250417-2cc103a45a56?q=80&w=870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=872&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604212666403-8af98b2081e4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>

      {/* GRID ANIMADO */}
      <div className="gallery-grid">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="img-wrapper"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Gallery ${i}`} className="gallery-img" />
          </motion.div>
        ))}
      </div>

      {/* MODAL ANIMADO */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              className="modal-img"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}