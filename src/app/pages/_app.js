// _app.js
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Additional logic or context providers can be added here

  return <Component {...pageProps} />;
}

export default MyApp;
