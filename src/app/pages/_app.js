import "../styles/globals.css"; // Import global styles
import { Sintony } from "@next/font/google";

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
