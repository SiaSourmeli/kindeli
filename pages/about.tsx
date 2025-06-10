import Layout from "../components/layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <div className="bio-container">
          <Image
            src="https://ucarecdn.com/a5f2ab1e-5c5f-403b-b843-675b8312fc95/kynthia.png"
            alt="Kynthia Kindeli"
            width={300}
            height={300}
            className="bio-image"
          ></Image>
          <div>
            <div className="bio-text">
              <h1 className="bio-title">About Kynthia</h1>
              <p className="bio-text">
                Kynthia Kindeli was born in Chania Crete. She studied
                photography at MJM design school in Paris, where she took her
                first professional steps. She then completed an advanced course
                in Cinematographic lighting applied in photography at the EFTI
                Institute in Madrid.
              </p>
              <p className="bio-text">
                In 2011, upon her return to Athens, she started working as a
                studio photographer at Liberis Publications where she got the
                chance to shoot for the Conde Nast Group magazines in Greece
                such as Vogue Greece, Casa Vogue, CN Traveller. From 2013 she
                pursued a career in Fashion and street photography, shooting
                campaigns for different Fashion Brands and Jewellery designers.
                In 2017 she was discovered by MAC Cosmetics and started a long
                lasting collaboration as the photographer of the brand, to this
                day, which established her as a sought after beauty
                photographer. In the meantime she undertakes different still
                life and event projects for the Estée Lauder Group such as
                shoots for Estée Lauder, AVEDA,Ck, as well as other brands in
                the field namely Mugler, La Prairie, Tom Ford, Salvatore
                Ferragamo, Acqua di Parma,Diptyque, BVLGARI etc, Lately she also
                collaborates in different food photography projects.
              </p>
              <p className="bio-text">
                She also loves to travel and photograph portraits, landscapes
                and different cultures.
              </p>
            </div>
            <div className="bio-social">
              <a
                href="https://www.instagram.com/kynthiakindeli/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: "25px" }}
                  className="instagram-svg"
                >
                  <path d="M12 2.2h4.8c3.3.2 4.8 1.7 5 5a83.4 83.4 0 0 1 0 9.7c-.2 3.2-1.7 4.7-5 4.9a83 83 0 0 1-9.6 0c-3.3-.2-4.8-1.7-5-5a83 83 0 0 1 0-9.6c.2-3.3 1.7-4.8 5-5H12zM12 0H7C2.8.4.4 2.8 0 7a84.3 84.3 0 0 0 0 10c.3 4.3 2.7 6.7 7 7a85.6 85.6 0 0 0 10 0c4.3-.3 6.7-2.7 7-7a84.3 84.3 0 0 0 0-10c-.3-4.3-2.7-6.7-7-7h-5zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
