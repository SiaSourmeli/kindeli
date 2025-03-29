import Head from "next/head";
import Header from "./header";

export default function Layout({
  children,
  headerTop = false,
}: {
  children: React.ReactNode;
  headerTop?: boolean;
}) {
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
      <Header headerTop={headerTop} />
      <main>{children}</main>
    </div>
  );
}
