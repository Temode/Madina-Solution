import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madina Solution - Plateforme de mise en relation de professionnels en Guinée",
  description: "Trouvez des professionnels qualifiés près de chez vous en Guinée. Plomberie, électricité, BTP, informatique et plus encore. Découvrez aussi nos produits digitaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
