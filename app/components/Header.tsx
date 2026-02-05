'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="headerContent">
        <div className="logo">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MIWA COFFEE
            </Link>
        </div>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <Link href="/#about" onClick={() => setMenuOpen(false)}>私たちについて</Link>
          <Link href="/menu" onClick={() => setMenuOpen(false)}>商品・メニュー</Link>
          <Link href="/#access" onClick={() => setMenuOpen(false)}>アクセス</Link>
          <Link href="/#online" onClick={() => setMenuOpen(false)}>オンラインストア</Link>
        </nav>
        <button 
          className={`mobileMenuBtn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
