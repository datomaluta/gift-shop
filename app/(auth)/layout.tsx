import type { Metadata } from "next";
import "./../globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";

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
          <ThemeSwitcher />
          <div className="bg-white dark:bg-gray-900 min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
