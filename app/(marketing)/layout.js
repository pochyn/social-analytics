import "@/app/globals.css";
import { Inter } from "next/font/google";
import RootStyleRegistry from "@/components/RootStyleRegistry";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viral Hub",
  description: "Maximize Your TikTok Potential With Viral Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <RootStyleRegistry>{children}</RootStyleRegistry>
        <Footer />
      </body>
    </html>
  );
}
