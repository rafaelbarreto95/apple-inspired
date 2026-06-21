import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <span className="logo">LUMEN</span>

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#Overview">Overview</a>
          <a href="#value">Value</a>
          <a href="#features">Features</a>
          <a href="#showcase">Showcase</a>
          <a href="#gallery">Gallery</a>
          <a href="#specs">Specs</a>
          <a href="#cta">Experience</a>
        </nav>
      </div>
    </header>
  );
}