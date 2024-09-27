import type { Metadata } from "next";
import "./../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";

import { Providers } from "@/lib/providers";
import Background from "@/components/shared/Background";
import Cart from "@/components/ui/Cart";
import MobileNavbar from "@/components/ui/MobileNavbar";

export const metadata: Metadata = {
  title: "Gift Shop",
  description: "Shop for your favorite gift",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen text-navy-blue h-[4000px]`}
      >
        <Providers>
          <Background />

          <Header />
          <main className="max-w-[1200px] mx-auto mt-[90px] px-4 xl:px-0">
            <Cart />
            <MobileNavbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

{
  /* <Background />; */
}
