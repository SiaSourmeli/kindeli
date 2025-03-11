import "../styles/globals.css";
import { AppProps } from "next/app";

function Application({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default Application;
