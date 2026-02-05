import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="menu-page pb-20">
        {/* Page Hero */}
        <div className="relative h-[40vh] w-full bg-[var(--primary)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <Image
                src="/coffee_beans_1768540564892.png" 
                alt="Coffee Beans"
                fill
                style={{ objectFit: 'cover' }}
            />
          </div>
          <h1 className="relative z-10 text-5xl md:text-7xl font-serif text-white tracking-widest text-center">
            MENU <br/>
            <span className="text-xl md:text-2xl mt-4 block font-sans font-light tracking-[0.5em]">商品・メニュー</span>
          </h1>
        </div>

        {/* Cafe Menu Section */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-serif text-[var(--primary)] mb-12 text-center tracking-widest">CAFE MENU</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Drinks */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif border-b border-[var(--primary)] pb-2 mb-6">DRINKS</h3>
              
              <div className="flex justify-between items-baseline group">
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg">ハンドドリップコーヒー</h4>
                  <p className="text-sm text-[var(--text-light)]">Todays Drip Coffee</p>
                </div>
                <span className="font-serif text-lg">¥650</span>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg">カフェラテ</h4>
                  <p className="text-sm text-[var(--text-light)]">Cafe Latte (Hot/Ice)</p>
                </div>
                <span className="font-serif text-lg">¥700</span>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg">カプチーノ</h4>
                  <p className="text-sm text-[var(--text-light)]">Cappuccino</p>
                </div>
                <span className="font-serif text-lg">¥700</span>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg">エスプレッソ</h4>
                  <p className="text-sm text-[var(--text-light)]">Espresso (Single)</p>
                </div>
                <span className="font-serif text-lg">¥450</span>
              </div>
            </div>

            {/* Foods / Sweets */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif border-b border-[var(--primary)] pb-2 mb-6">FOODS & SWEETS</h3>
              
              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg">自家製チーズケーキ</h4>
                  <p className="text-sm text-[var(--text-light)]">Homemade Cheese Cake</p>
                </div>
                <span className="font-serif text-lg">¥600</span>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg">ガトーショコラ</h4>
                  <p className="text-sm text-[var(--text-light)]">Gateau Chocolat</p>
                </div>
                <span className="font-serif text-lg">¥650</span>
              </div>
              
               <div className="flex justify-between items-baseline">
                <div>
                  <h4 className="font-bold text-[var(--primary)] text-lg">クロワッサンサンド</h4>
                  <p className="text-sm text-[var(--text-light)]">Croissant Sandwich</p>
                </div>
                <span className="font-serif text-lg">¥800</span>
              </div>
            </div>
          </div>
        </section>

        {/* Coffee Beans & Product Section */}
        <section className="bg-[#f9f9f7] py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-serif text-[var(--primary)] mb-12 text-center tracking-widest">COFFEE BEANS & PRODUCTS</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative aspect-square">
                            <Image
                                src="/ethiopia_beans.png" 
                                alt="Ethiopia Yirgacheffe"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="p-6">
                            <div className="text-xs font-bold text-[var(--accent)] tracking-widest mb-2">SINGLE ORIGIN</div>
                            <h3 className="text-xl font-serif font-bold mb-2">エチオピア イルガチェフェ</h3>
                            <p className="text-sm text-[var(--text-light)] mb-4 line-clamp-2">
                                フローラルな香りと、柑橘系の爽やかな酸味が特徴。紅茶のような上品な味わいです。
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">¥1,800 / 200g</span>
                                <button className="px-4 py-2 border border-[var(--primary)] text-[var(--primary)] text-xs tracking-widest hover:bg-[var(--primary)] hover:text-white transition-colors">
                                    VIEW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative aspect-square">
                            <Image
                                src="/coffee_beans_1768540564892.png" 
                                alt="Miwa House Blend"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="p-6">
                             <div className="text-xs font-bold text-[var(--accent)] tracking-widest mb-2">BLEND</div>
                            <h3 className="text-xl font-serif font-bold mb-2">Miwa ハウスブレンド</h3>
                            <p className="text-sm text-[var(--text-light)] mb-4 line-clamp-2">
                                深みのあるコクと、甘い余韻のバランスが取れたMiwa Coffeeの看板ブレンド。
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">¥1,600 / 200g</span>
                                <button className="px-4 py-2 border border-[var(--primary)] text-[var(--primary)] text-xs tracking-widest hover:bg-[var(--primary)] hover:text-white transition-colors">
                                    VIEW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative aspect-square">
                            <Image
                                src="/coffee_beans_1768540564892.png" 
                                alt="Drip Bag"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="p-6">
                             <div className="text-xs font-bold text-[var(--accent)] tracking-widest mb-2">GIFT</div>
                            <h3 className="text-xl font-serif font-bold mb-2">オリジナルドリップバッグ</h3>
                            <p className="text-sm text-[var(--text-light)] mb-4 line-clamp-2">
                                手軽に本格的なコーヒーを楽しめるドリップバッグのセット。ギフトにも最適です。
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">¥1,200 / 5pcs</span>
                                <button className="px-4 py-2 border border-[var(--primary)] text-[var(--primary)] text-xs tracking-widest hover:bg-[var(--primary)] hover:text-white transition-colors">
                                    VIEW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
