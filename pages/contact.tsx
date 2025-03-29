import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div className="contact-container">
        <div className="info-wrap">
          <div>
            <h2 className="h2-contact ">Email</h2>
            <a href="kynthia.kindeli@gmail.com" className="contact-info">
              kynthia.kindeli@gmail.com
            </a>
          </div>
          <div>
            <h2 className="h2-contact ">Telephone</h2>
            <a href="tel:+306983912716" className="contact-info ">
              +30 698 391 2716
            </a>
          </div>
        </div>
        <div>
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

        {/* <div>
          <Image
            src="https://ucarecdn.com/0466120a-e80a-490f-ad71-8c80fba9809c/WhatsAppImage20250320at151403_c6a3aa4e.jpg"
            width={1000}
            height={500}
            alt=""
            className="contact-image"
          />
        </div> */}
      </div>
    </Layout>
  );
}
