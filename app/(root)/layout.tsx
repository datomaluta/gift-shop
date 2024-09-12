import type { Metadata } from "next";
import "./../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Cart from "@/components/shared/Cart";
import { Providers } from "@/lib/providers";

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
      <body className={inter.className}>
        <Providers>
          <div className="overflow-x-hidden  min-h-screen text-neutral-600">
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <div className="">
              <Header />
              <Cart />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
{
  /* <div className="bg-white dark:bg-gray-900 min-h-screen relative">
            <div className="fixed top-0 -z-10 h-full w-full">
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <Header />
            {children}
          </div> */
}
