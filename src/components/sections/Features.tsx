import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Designed with intention",
      description:
        "Every detail serves a purpose, creating a cleaner and more focused experience.",
    },
    {
      title: "Performance first",
      description:
        "Optimized interactions and smooth animations deliver speed without compromise.",
    },
    {
      title: "Visually refined",
      description:
        "Balanced typography, spacing, and hierarchy crafted for clarity.",
    },
    {
      title: "Built for the future",
      description:
        "A modern foundation ready to adapt to evolving digital experiences.",
    },
  ];

  return (
    <section id="features" className="features">
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Crafted for modern experiences.</h2>

        <p>
          A thoughtful combination of design, performance, and simplicity.
        </p>
      </motion.div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}