import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Script from "next/script";

export const metadata = {
  title: "AYRA – A New Kind of Learning Experience Is Coming Soon",
  description:
    "AYRA is reimagining higher education with flexible programs, student-led learning, and a campus near Nandi Hills. Unfold your potential—our journey begins soon. Stay tuned for updates and enquiries.",
  metadataBase: new URL("https://ayra.edu.in"),
  openGraph: {
    title: "AYRA – A New Kind of Learning Experience Is Coming Soon",
    description:
      "AYRA is reimagining higher education with flexible programs, student-led learning, and a campus near Nandi Hills.",
    url: "https://ayra.edu.in",
    siteName: "AYRA",
    images: [
      {
        url: "https://ayra.edu.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AYRA - A New Kind of Learning Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AYRA – A New Kind of Learning Experience Is Coming Soon",
    description:
      "AYRA is reimagining higher education with flexible programs, student-led learning, and a campus near Nandi Hills.",
    site: "@ayraedu",
    images: ["https://ayra.edu.in/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ayra.education" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WDZ25QHD');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1D7JW9MJDH"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1D7JW9MJDH');
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <Script type="application/ld+json" id="jsonld-schema" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AYRA",
            url: "https://ayra.education",
            logo: "https://ayra.education/logo.png",
            sameAs: ["", "", ""],
            description:
              "AYRA is reimagining higher education with flexible programs and a campus near Nandi Hills.",
          })}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDZ25QHD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
