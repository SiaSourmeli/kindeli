import Head from "next/head";
import Header from "./header";
import Footer from "./footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <Head>
        <title>Kynthia Kindeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
