import './globals.css';
import { Inter, Playfair_Display, Noto_Sans_JP } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp' 
});

export const metadata = {
  title: 'Miwa Coffee | プレミアムなひとときを',
  description: '厳選された豆と落ち着いた空間。Miwa Coffee で極上のコーヒー体験を。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfair.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}