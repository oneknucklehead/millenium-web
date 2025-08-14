import { motion } from "framer-motion";

export default function InfoCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl border border-black p-6 shadow-sm"
    >
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-black">{title}</h3>

      {/* Orange underline */}
      <div className="w-12 h-1 bg-primary mt-2 mb-4"></div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
