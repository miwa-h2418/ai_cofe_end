import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="headerContent">
          <div className="logo">三輪珈琲</div>
          <nav className="nav">
            <a href="#about">私たちの取り組み</a>
            <a href="#products">商品について</a>
            <a href="#store">オンラインストア</a>
            <a href="#news">三輪珈琲通信</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="heroImage">
            <Image
              src="/hero_building_1768540515846.png"
              alt="丸山珈琲 本社"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="heroOverlay">
            <h1 className="heroTitle">三輪珈琲</h1>
            <p className="heroSubtitle">MIWA COFFEE</p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro">
          <h2 className="introTitle">私たちの取り組み</h2>
          <p className="introText">
            三輪珈琲は、生産地からカップまで一貫した品質を追求しています。
            <br />
            コーヒーの可能性を最大限に引き出すために、日々研究を重ねています。
          </p>
        </section>

        {/* Philosophy Grid */}
        <section className="philosophy" id="about">
          <div className="philosophyGrid">
            <div className="philosophyCard large">
              <div className="cardImage">
                <Image
                  src="/product_coffee_bags_1768540533720.png"
                  alt="商品"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardContent">
                <h3>ABOUT US</h3>
                <p>三輪珈琲について</p>
              </div>
            </div>
            <div className="philosophyCard large">
              <div className="cardImage">
                <Image
                  src="/coffee_plant_1768540550582.png"
                  alt="コーヒーの木"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardContent">
                <h3>VISION</h3>
                <p>未来へのビジョン</p>
              </div>
            </div>
            <div className="philosophyCard">
              <div className="cardImage">
                <Image
                  src="/coffee_beans_1768540564892.png"
                  alt="コーヒー豆"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardContent">
                <h3>豆へのこだわり</h3>
                <p>生豆選定と焙煎</p>
              </div>
            </div>
            <div className="philosophyCard">
              <div className="cardImage">
                <Image
                  src="/coffee_pouring_1768540580212.png"
                  alt="コーヒー抽出"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardContent">
                <h3>品質管理</h3>
                <p>評価と検証</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="products" id="products">
          <div className="productsContent">
            <div className="productsText">
              <h2>商品について</h2>
              <ul>
                <li>店舗サービス</li>
                <li>通信販売</li>
                <li>業務用卸</li>
              </ul>
            </div>
            <div className="productsGrid">
              <div className="productImage">
                <Image
                  src="/bread_products_1768540602945.png"
                  alt="パン"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="productImage">
                <Image
                  src="/coffee_cup_latte.png"
                  alt="ラテアート"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="productImage">
                <Image
                  src="/cafe_pastries.png"
                  alt="ペストリー"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="productImage">
                <Image
                  src="/coffee_equipment.png"
                  alt="コーヒー器具"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Store Locations */}
        <section className="storeLocations">
          <div className="locationGrid">
            <div className="locationCard">
              <div className="locationImage">
                <Image
                  src="/karuizawa_store.png"
                  alt="軽井沢本店"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3>軽井沢本店</h3>
            </div>
            <div className="locationCard">
              <div className="locationImage">
                <Image
                  src="/tokyo_store_gen.png"
                  alt="東京店"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3>東京店</h3>
            </div>
          </div>
        </section>

        {/* Online Store */}
        <section className="onlineStore" id="store">
          <h2>三輪珈琲オンラインストア</h2>
          <p className="storeDescription">
            厳選されたコーヒー豆や器具を
            <br />
            オンラインでお求めいただけます
          </p>
          <div className="storeProducts">
            <div className="storeProduct">
              <div className="storeProductImage">
                <Image
                  src="/coffee_blend_gen.png"
                  alt="ブレンド"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>ブレンド</p>
            </div>
            <div className="storeProduct">
              <div className="storeProductImage">
                <Image
                  src="/single_origin.png"
                  alt="シングルオリジン"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>シングルオリジン</p>
            </div>
            <div className="storeProduct">
              <div className="storeProductImage">
                <Image
                  src="/coffee_tools.png"
                  alt="器具"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>器具</p>
            </div>
            <div className="storeProduct">
              <div className="storeProductImage">
                <Image
                  src="/coffee_gift.png"
                  alt="ギフト"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>ギフト</p>
            </div>
          </div>
          <button className="btn">オンラインストアを見る</button>
        </section>

        {/* News Section */}
        <section className="news" id="news">
          <h2>三輪珈琲通信</h2>
          <div className="newsGrid">
            <article className="newsCard">
              <div className="newsImage">
                <Image
                  src="/news_product.png"
                  alt="新商品"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="newsDate">2024.01.15</p>
              <h3>新商品のお知らせ</h3>
            </article>
            <article className="newsCard">
              <div className="newsImage">
                <Image
                  src="/news_event.png"
                  alt="イベント"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="newsDate">2024.01.10</p>
              <h3>イベント情報</h3>
            </article>
            <article className="newsCard">
              <div className="newsImage">
                <Image
                  src="/news_store.png"
                  alt="店舗情報"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="newsDate">2024.01.05</p>
              <h3>店舗情報</h3>
            </article>
          </div>
        </section>

        {/* Footer Info */}
        <section className="footerInfo">
          <div className="footerGrid">
            <div className="footerColumn">
              <h4>ABOUT</h4>
              <ul>
                <li>会社概要</li>
                <li>アクセス</li>
                <li>採用情報</li>
              </ul>
            </div>
            <div className="footerColumn">
              <h4>SHOP</h4>
              <ul>
                <li>店舗一覧</li>
                <li>営業時間</li>
                <li>アクセス</li>
              </ul>
            </div>
            <div className="footerColumn">
              <h4>ONLINE</h4>
              <ul>
                <li>オンラインストア</li>
                <li>配送について</li>
                <li>返品・交換</li>
              </ul>
            </div>
            <div className="footerColumn">
              <h4>CONTACT</h4>
              <ul>
                <li>お問い合わせ</li>
                <li>よくある質問</li>
                <li>プライバシーポリシー</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footerLogo">
          <div className="logoMark">三輪</div>
          <p>MIWA COFFEE</p>
        </div>
        <div className="footerLinks">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
        <p className="copyright">© MIWA COFFEE</p>
      </footer>
    </>
  );
}
