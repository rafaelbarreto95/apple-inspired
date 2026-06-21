import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section id="showcase" className="showcase">
      <motion.div
        className="showcase-content"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span className="showcase-label">
          Crafted with precision
        </span>

        <h2>
          Designed to feel effortless.
        </h2>

        <p>
          Every curve, transition and interaction has been
          refined to create a seamless digital experience.
        </p>
      </motion.div>

      <motion.div
        className="showcase-image-wrapper"
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          alt="Showcase"
          className="showcase-image"
        />
      </motion.div>
    </section>
  );
}