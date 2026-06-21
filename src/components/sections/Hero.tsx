import { motion, useScroll, useTransform } from "framer-motion";
import { useMouseParallax } from "../../hooks/useMouseParallax";

export default function Hero() {
  const mouse = useMouseParallax(12);
  const { scrollY } = useScroll();

  const yText = useTransform(scrollY, [0, 300], [0, 60]);
  const opacityText = useTransform(scrollY, [0, 250], [1, 0]);

  const yImage = useTransform(scrollY, [0, 400], [0, 120]);
  const scaleImage = useTransform(scrollY, [0, 400], [1.05, 1.15]);

  return (
    <section id="hero" className="hero3d">
      {/* TEXTO (sempre em cima) */}
      <motion.div
        className="hero-content"
        style={{
          y: yText,
          opacity: opacityText,
        }}
      >
        <h1>Designed for clarity. Built for performance.</h1>
        <p>
          A refined digital experience where performance, simplicity, and design work as one.
        </p>
      </motion.div>

      {/* IMAGEM (FUNDO CONTROLADO) */}
      <motion.img
        src="https://images.unsplash.com/photo-1678059285248-031d5128c38a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero"
        className="hero-img"
        style={{
          y: yImage,
          x: mouse.x,
          scale: scaleImage,
        }}
      />

      {/* OVERLAY PROFUNDO */}
      <div className="hero-overlay" />
    </section>
  );
}