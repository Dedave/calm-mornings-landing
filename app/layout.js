import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Calm Mornings | The 14-Day School Morning Reset",
  description:
    "A printable visual routine system designed to help families build easier-to-follow school mornings with 36 illustrated routine cards, boards, checklists, trackers and a Parent Guide.",
  openGraph: {
    type: "website",
    title: "Calm Mornings | The 14-Day School Morning Reset",
    description:
      "A printable visual routine system designed to help families build easier-to-follow school mornings with 36 illustrated routine cards, boards, checklists, trackers and a Parent Guide.",
    images: ["/assets/hero-collage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/hero-collage.webp"],
    title: "Calm Mornings | The 14-Day School Morning Reset",
    description:
      "A printable visual routine system designed to help families build easier-to-follow school mornings with 36 illustrated routine cards, boards, checklists, trackers and a Parent Guide.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1801314857574173');

            fbq('track', 'PageView');

            fbq('track', 'ViewContent', {
              content_name: 'Calm Mornings - Visual Routine System',
              content_type: 'product',
              value: 7,
              currency: 'USD'
            });
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1801314857574173&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}