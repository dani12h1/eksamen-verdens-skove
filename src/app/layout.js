import { Sintony } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const sintony = Sintony({
  weight: ["700", "400"],
  subsets: ["latin"],
});

import Favicon from "./favicon.ico";

export const metadata = {
  title: "Verdens Skove",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={sintony.className}>{children}</body>
    </html>
  );
}

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }