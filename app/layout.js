import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Helix",
  description: "Helix Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />

        {/* Local CSS */}
        <link rel="stylesheet" href="/css/vendors.css" />
        <link rel="stylesheet" href="/css/main.css" />
      </head>

      <body className="preloader-visible" data-barba="wrapper">
        {children}

        {/* Leaflet JS */}
        <Script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
          strategy="beforeInteractive"
        />

        {/* ✅ Vendors (GSAP MUST be here & BEFORE main.js) */}
        <Script
          src="/js/vendors.js"
          strategy="beforeInteractive"
        />

        {/* ✅ Main JS (runs after GSAP exists) */}
        <Script
          src="/js/main.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
