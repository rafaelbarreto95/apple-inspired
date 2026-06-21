import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section id="Overview" className="depth-section">
      <motion.div
        className="card3d"
        whileHover={{ rotateY: 8, rotateX: 6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div>
          <h2>Designed for focus</h2>
          <p>Designed for focus
            Designed for focus
            Every detail is intentionally crafted to remove distraction and elevate clarity.</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        />
      </motion.div>
    </section>
  );
}