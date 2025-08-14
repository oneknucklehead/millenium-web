import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services/Services";
import Telecom from "./pages/Services/Service/Telecom";
import About from "./pages/About";
import Employee from "./pages/Services/Service/Employee";
import Logistics from "./pages/Services/Service/Logistics";
import Workspace from "./pages/Services/Service/Workspace";
import Events from "./pages/Services/Service/Events";
import ScrollToTop from "./components/ScrollToTop";

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
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/telecom" element={<Telecom />} />
        <Route path="/services/employee" element={<Employee />} />
        <Route path="/services/logistics" element={<Logistics />} />
        <Route path="/services/workspace" element={<Workspace />} />
        <Route path="/services/events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
}
