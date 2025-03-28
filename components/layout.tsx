import Head from "next/head";
import Header from "./header";
import Footer from "./footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Kynthia Kindeli</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="container">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
