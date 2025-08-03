import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Page({ children }) {
  return (
    <motion.div
      className="p-10 text-center text-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-center gap-5 p-4 bg-white shadow">
        <Link to="/" className="text-blue-600 font-semibold">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 font-semibold">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Page>Welcome Home 🏡</Page>} />
        <Route path="/about" element={<Page>About Us 📘</Page>} />
      </Routes>
    </div>
  );
}
