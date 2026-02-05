'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroSlideshow from "./components/HeroSlideshow";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <HeroSlideshow />
          <div className="heroOverlay">
            <h1 className="heroTitle">Miwa Coffee</h1>
            <p className="heroSubtitle">〜コーヒーを楽しむひとときを〜</p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro" id="about">
          <h2 className="introTitle">至福の一杯を、あなたに。</h2>
          <p className="introText">
            Miwa Coffeeは、豆の選定から焙煎、抽出に至るまで、
            <br />
            すべての工程において妥協のない最高品質を追求しています。
            <br />
            香り高い一杯が、あなたの日常を少しだけ豊かに彩りますように。
          </p>
        </section>

        {/* Philosophy Grid */}
        <section className="philosophy">
          <div className="philosophyGrid">
            <div className="philosophyCard large">
              <div className="cardImage">
                <Image
                  src="/hero_building_1768540515846.png"
                  alt="Store Exterior"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardContent">
                <h3>Our Story</h3>
                <p>私たちのこだわり</p>
              </div>
            </div>
            <div className="philosophyCard">
              <div className="cardImage">
                <Image
                  src="/coffee_beans_1768540564892.png"
                  alt="Beans"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardContent">
                <h3>The Beans</h3>
                <p>厳選された豆</p>
              </div>
            </div>
            <div className="philosophyCard">
              <div className="cardImage">
                <Image
                  src="/coffee_pouring_1768540580212.png"
                  alt="Craft"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardContent">
                <h3>The Craft</h3>
                <p>熟練の技術</p>
              </div>
            </div>
            <div className="philosophyCard large">
              <div className="cardImage">
                <Image
                  src="/coffee_cup_latte.png"
                  alt="Vision"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardContent">
                <h3>Vision</h3>
                <p>これからの挑戦</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="products" id="menu">
          <div className="productsContent">
            <div className="productsText">
              <h2>メニュー</h2>
              <ul>
                <li>エスプレッソ</li>
                <li>ハンドドリップ</li>
                <li>コーヒー豆</li>
                <li>菓子・スイーツ</li>
              </ul>
            </div>
            <div className="productsGrid">
              <div className="productImage">
                <Image
                  src="/coffee_cup_latte.png"
                  alt="Latte"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="productImage">
                <Image
                  src="/cafe_pastries.png"
                  alt="Pastries"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="productImage">
                <Image
                  src="/coffee_equipment.png"
                  alt="Equipment"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="productImage">
                <Image
                  src="/bread_products_1768540602945.png"
                  alt="Bread"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Online Store Section */}
        <section className="onlineStore" id="online">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif mb-8 text-[var(--primary)]">Online Store</h2>
            <p className="mb-12 text-[var(--text-light)]">
              ご自宅でも Miwa Coffee の味をお楽しみいただけるよう、
              <br />
              新鮮な豆とこだわりの器具をオンラインでお届けします。
            </p>
            <button className="btn">Store を見る</button>
          </div>
        </section>

        {/* Access Section */}
        <section className="storeLocations" id="access">
          <div className="locationGrid">
            <div className="locationCard">
              <div className="locationImage">
                <Image
                  src="/karuizawa_store.png"
                  alt="Flagship Store"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">軽井沢本店</h3>
              <p className="text-sm opacity-70">長野県北佐久郡軽井沢町</p>
            </div>
            <div className="locationCard">
              <div className="locationImage">
                <Image
                  src="/tokyo_store_gen.png"
                  alt="Tokyo Gallery"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">東京支店</h3>
              <p className="text-sm opacity-70">東京都港区六本木</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
