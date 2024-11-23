"use client";

import React from "react";
import Head from "next/head";
import { Inter, Manrope } from "next/font/google";
import { cx } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteMetadata from "@/utils/siteMetaData";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* General SEO Metadata */}
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="author" content="Epic Solutions" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={siteMetadata.siteUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteMetadata.socialBanner} />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={siteMetadata.socialBanner} />

        {/* Preloading Critical Resources */}
        <link rel="preload" href="/css/main.css" as="style" />
        <link rel="preload" href="/fonts/CustomFont.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
      </Head>
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D50XE9PL55"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D50XE9PL55');`}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6106733128223559"
          crossOrigin="anonymous"
        ></Script>

        {/* Dark Mode Fallback */}
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
        </Script>

        {/* Layout */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
