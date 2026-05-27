"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              AB
            </div>
            <span className="text-foreground font-medium italic">Aneri Bhavsar</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90" asChild>
              <a href="/resume.pdf" download="Aneri_Bhavsar_Resume.pdf">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="gap-2 w-full bg-primary hover:bg-primary/90" asChild>
              <a href="/resume.pdf" download="Aneri_Bhavsar_Resume.pdf">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
