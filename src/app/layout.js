import { Sintony } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const sintony = Sintony({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Verdens Skove",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <body className={sintony.className}>{children}</body>
    </html>
  );
}
