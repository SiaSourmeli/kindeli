import Layout from "../components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="heroContainer">
        <Image
          src="https://ucarecdn.com/3902fca1-46e3-4385-a4f1-c3cae0f83d46/kyn_1809b.jpg"
          width={2400}
          height={0} 
          alt="hero"
          className="heroImage"
        ></Image>
      </div>
    </Layout>
  );
}
