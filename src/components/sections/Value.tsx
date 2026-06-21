import { motion } from "framer-motion";

export default function Value() {
  return (
    <section id="value" className="value">
      <motion.div
        initial={{
          opacity: 0,
          x: -60,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <h2>Design that removes complexity</h2>

        <p>
          LUMEN is built around clarity, performance and intentional
          simplicity — helping users focus on what really matters.
        </p>
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="value"
        initial={{
          opacity: 0,
          x: 60,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        whileHover={{
          scale: 1.03,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      />
    </section>
  );
}