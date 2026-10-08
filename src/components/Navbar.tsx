"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link href="/" className="navbar-logo">
          {/* We assume the user saves the uploaded logo as logo.png */}
          <img src="/images/logo.png" alt="SamiZ fitness" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/programs" className={pathname === "/programs" ? "active" : ""} onClick={() => setIsOpen(false)}>Programs</Link>
          <Link href="/schedule" className={pathname === "/schedule" ? "active" : ""} onClick={() => setIsOpen(false)}>Schedule</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/feedback" className={pathname === "/feedback" ? "active" : ""} onClick={() => setIsOpen(false)}>Feedback</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
        
        <button className="btn btn-primary nav-join-btn" style={{ transform: 'scale(1)', transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }} onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'} onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          Join Now
        </button>
        
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </motion.nav>
  );
}
