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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
