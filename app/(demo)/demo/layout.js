import "@/app/globals.css";
import { Inter } from "next/font/google";
import RootStyleRegistry from "@/components/RootStyleRegistry";
import HeaderSiderLayout from "@/components/dashboard-layout/HeaderSiderLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viral Hub",
  description: "Maximize Your TikTok Potential With Viral Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootStyleRegistry>
          <HeaderSiderLayout>{children}</HeaderSiderLayout>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
