import "./globals.css";
import { cx } from "@/utils";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import siteMetadata from "@/utils/siteMetaData";
import Script from "next/script";
import Footer from "@/components/Footer";

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

// Define metadata with Open Graph and Twitter settings
export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="sitemap"
          type="application/xml"
          href="https://www.epicssolution.com/sitemap.xml"
        />
        <link rel="icon" href="https://www.epicssolution.com/favicon.ico" />
        <link rel="preload" href="/css/main.css" as="style" />
        <link
          rel="preload"
          href="/fonts/CustomFont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* SEO Meta Tags */}
        <meta name="author" content="Epic Solutions" />

        {/* Google Verification and Viewport */}
       <meta
          name="google-site-verification"
          content="69LCpKE_Jr39yMWMRpX-mJW1E7RjEi9rrvimR4Qh2KY"
        />
        <meta name="p:domain_verify" content="be8a436f4e7ce83fbeafd23c184e415b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-4108246218082712" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4108246218082712"
     crossorigin="anonymous"></script>
      </head>

      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        {/* Theme Switcher */}
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>

        {/* Google Analytics */}
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CHNLXSTLH7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CHNLXSTLH7');
</script>

        {/* Layout Components */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
