import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "MyCodeBusness",
  description:
    "un site d'apprentissage des bases de la programmations multiplateformes et de maitrise de la souris, du clavier et.",
};
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-slate-900">
      <body className={`${roboto.className} bg-slate-900`}>{children}</body>
    </html>
  );
}
