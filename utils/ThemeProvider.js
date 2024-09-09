"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children, ...props }) => {
  return (
    <NextThemesProvider
      // attribute="class"
      // defaultTheme="light" // Default theme during SSR
      // enableSystem={true} // Optionally enable system theme
      {...props}
    >
      {children} 
    </NextThemesProvider>
  );
};

export default ThemeProvider;
