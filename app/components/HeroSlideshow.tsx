'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/hero_building_1768540515846.png',
    alt: 'Miwa Coffee Flagship Store',
  },
  {
    src: '/coffee_cup_latte.png',
    alt: 'Masterfully Crafted Latte',
  },
  {
    src: '/coffee_beans_1768540564892.png',
    alt: 'Freshly Roasted Specialty Beans',
  },
  {
    src: '/coffee_pouring_1768540580212.png',
    alt: 'The Art of Pouring',
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7秒ごとに切り替え（ゆったりとしたテンポ）

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="heroImage">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`heroSlide ${index === currentIndex ? 'active' : ''}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}
    </div>
  );
}
