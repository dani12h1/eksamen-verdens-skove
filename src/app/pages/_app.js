import "../styles/globals.css"; // Import global styles
import { Sintony } from "@next/font/google";
import Head from "next/head";

<Head>
  <link rel='icon' href='favicon.ico' />
  <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.svg' />
  <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.ico' />
</Head>;

const sintony = Sintony({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={sintony.className}>
      <Component {...pageProps} />
    </main>
  );
}
