import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "./Components/commons/Layout";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br">
      <body className={inter.className}>
        <Layout />
        {children}</body>
    </html>
  );
}
