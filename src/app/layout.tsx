"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>

        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <PrimeReactProvider>

            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </PrimeReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
