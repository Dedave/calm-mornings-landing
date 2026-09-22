import "./globals.css";

export const metadata = {
  title: "Calm Mornings | Visual Routine System for Kids",
  description:
    "A colorful printable visual routine system designed to help families make busy mornings easier to follow. Includes 36 illustrated routine cards, boards, trackers, checklists and Parent Guide.",
  openGraph: {
    type: "website",
    title: "Calm Mornings | Visual Routine System for Kids",
    description:
      "A colorful printable visual routine system designed to help families make busy mornings easier to follow. Includes 36 illustrated routine cards, boards, trackers, checklists and Parent Guide.",
    images: ["/assets/hero-collage.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calm Mornings | Visual Routine System for Kids",
    description:
      "A colorful printable visual routine system designed to help families make busy mornings easier to follow.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
