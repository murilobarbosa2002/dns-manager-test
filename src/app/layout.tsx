import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
