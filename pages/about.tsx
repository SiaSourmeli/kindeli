import { useCallback, useEffect, useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";

export default function About() {
  const [videoReady, setVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleIframeLoad = useCallback(() => {
    setTimeout(() => setVideoReady(true), 1500);
  }, []);

  useEffect(() => {
    if (videoReady) {
      setShowVideo(true);
    }
  }, [videoReady]);

  return (
    <Layout>
      <div className="container about-container">
        <div className="bio-container">
          <div className="bio-video-wrapper">
            <div
              className={`bio-video-poster ${showVideo ? "is-hidden" : ""}`}
              aria-hidden
            >
              <Image
                src="https://5nqof8zag4.ucarecd.net/f1c147ec-8fc7-49f4-943b-dd3c10f1e5e5/-/preview/1000x562/"
                alt="Kynthia Kindeli — teaser frame"
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
                placeholder="empty"
                style={{ objectFit: "cover" }}
              />
            </div>

            <iframe
              src="https://player.vimeo.com/video/1133200255?background=1&autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0&portrait=0"
              className="bio-video-large"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Kynthia Kindeli video"
              onLoad={handleIframeLoad}
            />
          </div>

          <div >
            <h1 className="bio-title">About Kynthia</h1>
            <p className="bio-text">
              Kynthia Kindeli was born in Chania Crete. She studied photography
              at MJM design school in Paris, where she took her first
              professional steps. She then completed an advanced course in
              Cinematographic lighting applied in photography at the EFTI
              Institute in Madrid.
            </p>
            <p className="bio-text">
              In 2011, upon her return to Athens, she started working as a
              studio photographer at Liberis Publications where she got the
              chance to shoot for the Conde Nast Group magazines in Greece such
              as Vogue Greece, Casa Vogue, CN Traveller. Since 2013 she has
              pursued a career in Fashion and Street Photography, shooting
              Campaigns for different Fashion Brands and Jewellery designers, as
              well as covering fashion shows in Athens and Paris Fashion Week
              for houses such as Balmain, Mary Katrantzou and others. In 2017
              she was discovered by MAC Cosmetics and started a long lasting
              collaboration as the photographer of the brand, to this day, which
              established her as a sought after beauty photographer. In the
              meantime she undertakes different still life and event projects
              for the Estée Lauder Group such as shoots for Estée Lauder,
              AVEDA,Ck, as well as other brands in the field namely Mugler, La
              Prairie, Tom Ford, Salvatore Ferragamo, Acqua di Parma,Diptyque,
              BVLGARI etc, Lately she also collaborates in different food
              photography projects.
            </p>
            <p className="bio-text">
              She also loves to travel and photograph portraits, landscapes and
              different cultures.
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
    </Layout>
  );
}
