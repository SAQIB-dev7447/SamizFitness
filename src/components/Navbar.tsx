"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="18" height="38" stroke="#F5B041" strokeWidth="2"/>
          <path d="M14 12C14 10.9 13.1 10 12 10H8C6.9 10 6 10.9 6 12V16C6 17.1 6.9 18 8 18H12V22H6V24H12C13.1 24 14 23.1 14 22V18C14 16.9 13.1 16 12 16H8V12H14Z" fill="#F5B041"/>
          <circle cx="26" cy="14" r="4" fill="#FFFFFF"/>
          <path d="M22 20C22 17.8 23.8 16 26 16C28.2 16 30 17.8 30 20V28H22V20Z" fill="#FFFFFF"/>
        </svg>
        <div className="logo-text">
          <span className="logo-samiz">SamiZ</span>
          <span className="logo-fitness">fitness</span>
        </div>
      </Link>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/programs" className={pathname === "/programs" ? "active" : ""} onClick={() => setIsOpen(false)}>Programs</Link>
        <Link href="/schedule" className={pathname === "/schedule" ? "active" : ""} onClick={() => setIsOpen(false)}>Schedule</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>
      <button className="btn btn-primary nav-join-btn">Join Now</button>
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
    </nav>
  );
}
