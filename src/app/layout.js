
import "./globals.css";
import Footer from "@/components/footer/Footer";
import CombinedHeader from "@/components/header/CombineHeader";
import Script from "next/script";

export const metadata = {
  title: "Evolzer - Custom Mobile App, Web & Software Development Solutions",
  description:
    "Looking for top-notch mobile app, web, and software development services? Evolzer delivers custom solutions to meet your business needs. Contact us for a free consultation!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased relative">
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W9RTBZSV');
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9RTBZSV"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <CombinedHeader />
        <div className="absolute inset-0 z-0 md:relative md:inset-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
