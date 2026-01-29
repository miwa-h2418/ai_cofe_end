/* =========================
app/layout.tsx
========================= */
import './globals.css';


export const metadata = {
title: '丸山珈琲｜レイアウト再現サンプル',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ja">
<body>{children}</body>
</html>
);
}