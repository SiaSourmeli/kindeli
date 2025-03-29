import Layout from "../components/layout";
import Image from "next/image";

export default function Bio() {
  return (
    <Layout>
      <div className="container">
        <div className="bio-container">
          <Image
            src="https://ucarecdn.com/a5f2ab1e-5c5f-403b-b843-675b8312fc95/kynthia.png"
            alt="Kynthia Kindeli"
            width={400}
            height={400}
            className="bio-image"
          ></Image>
          <div>
          <div className="bio-text">
            <h1 className="bio-title">About Kynthia</h1>
            <p className="bio-text">
              Kynthia Kindeli was born in Chania Crete. She studied photography
              at MGM design school in Paris where she took her first
              professional steps. She then completed an advanced course in
              Cinematographic lighting applied in photography at the EFTI
              Institute in Madrid.
            </p>
            <p className="bio-text">
              Upon her return to Athens in 2010 she pursued a career in Fashion
              Photography while she collaborated with small theatres and studied
              the expression of the body. In 2011 she started working as a
              studio Photographer at Liberis publications where she got the
              chance to shoot for the biggest Fashion Magazines in Greece. In
              2013 she got interested in the street photography and started her
              collaboration with different Fashion Bloggers that remains her
              main focus up to this date while also shooting campaigns for
              different Fashion Brands.
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
