import "@/app/globals.css";
import { Inter } from "next/font/google";
import RootStyleRegistry from "@/components/RootStyleRegistry";
import HeaderSiderLayout from "@/components/dashboard-layout/HeaderSiderLayout";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viral Hub",
  description: "Maximize Your TikTok Potential With Viral Hub",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootStyleRegistry>
          <Provider>
            <HeaderSiderLayout>{children}</HeaderSiderLayout>
          </Provider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
