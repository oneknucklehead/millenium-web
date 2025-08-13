import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Container from "./Container";
import logo from "../assets/Images/logo.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Clients", to: "/clients" },
  { name: "About Us", to: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <Container className="p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="">
            <img src={logo} alt="Millenium" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-base">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-primary text-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link to="/contact" className="hidden md:inline-block">
            <button className="flex items-center gap-2 bg-primary cursor-pointer text-white px-5 py-3 rounded-full text-base hover:bg-primary transition">
              <p>Contact Us</p>
              <span>
                <ArrowRight className="text-primary h-5 w-5 bg-white rounded-full" />
              </span>
            </button>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={sidebarRef}
                className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg px-6 py-8 flex flex-col gap-6"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                {/* Close Icon */}
                <div className="flex justify-end">
                  <button
                    className="text-gray-600 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 text-sm md:text-lg hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="flex gap-2 justify-center items-center bg-primary w-full text-white px-4 py-3 rounded-full text-sm hover:bg-primary transition">
                    <p>Contact Us</p>
                    <span>
                      <ArrowRight className="text-primary h-4 w-4 bg-white rounded-full" />
                    </span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
