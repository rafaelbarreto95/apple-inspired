import { motion, useScroll, useTransform } from "framer-motion";

export default function CTA() {
  const { scrollYProgress } = useScroll();

  const yImage = useTransform(
    scrollYProgress,
    [0.6, 1],
    [0, -120]
  );

  const scaleImage = useTransform(
    scrollYProgress,
    [0.6, 1],
    [1.1, 1]
  );

  const maskOpacity = useTransform(
    scrollYProgress,
    [0.6, 1],
    [0.2, 1]
  );

  const yText = useTransform(
    scrollYProgress,
    [0.6, 1],
    [40, 0]
  );

  const handleLearnMore = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section id="cta" className="cta-vision">
      {/* IMAGEM */}
      <motion.div
        className="cta-bg"
        style={{
          y: yImage,
          scale: scaleImage,
        }}
      />

      {/* MÁSCARA */}
      <motion.div
        className="cta-mask"
        style={{
          opacity: maskOpacity,
        }}
      />

      {/* CONTEÚDO */}
      <motion.div
        className="cta-content"
        style={{
          y: yText,
        }}
      >
        <h2>Experience LUMEN</h2>

        <p>
          Discover a refined approach to design,
          performance, and digital experiences.
        </p>

        <button onClick={handleLearnMore}>
          Learn More
        </button>
      </motion.div>
    </section>
  );
}