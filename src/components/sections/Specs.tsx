import { motion } from "framer-motion";

export default function Specs() {
  const specs = [
  {
    value: "Clarity",
    label: "Focused user experience",
  },
  {
    value: "Speed",
    label: "Optimized performance",
  },
  {
    value: "Precision",
    label: "Pixel-perfect design",
  },
  {
    value: "Minimal",
    label: "Intentional simplicity",
  },
];

  return (
    <section id="specs" className="specs">
      <motion.div
        className="specs-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Engineered for excellence.</h2>

        <p>
          Every aspect of LUMEN is designed to deliver a seamless,
          refined, and high-performance experience.
        </p>
      </motion.div>

      <div className="specs-grid">
        {specs.map((item, index) => (
          <motion.div
            key={index}
            className="spec-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <h3>{item.value}</h3>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}