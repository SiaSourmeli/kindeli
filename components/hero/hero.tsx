import React, { useState, useEffect, CSSProperties } from "react";

export default function Hero() {
  // --- State Management ---
  const [orientation, setOrientation] = useState<
    "landscape" | "portrait" | "square" | null
  >(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(
    "https://ucarecdn.com/54210b83-1849-4299-8346-3c80c4baff9d/KYN_6715websiteK.jpg"
  );

  const portraitImage =
    "https://ucarecdn.com/54210b83-1849-4299-8346-3c80c4baff9d/KYN_6715websiteK.jpg";
  const landscapeImage =
    "https://ucarecdn.com/764b6f85-6f0e-46f9-b3a6-3f6a1a6e1c06/KYN_5828websiteKtest.jpg";

  // --- Style Definitions ---
  const styles: {
    heroContainer: CSSProperties;
    portraitHeroContainer: CSSProperties;
    heroImage: CSSProperties;
  
    orientationStyles: { [key: string]: CSSProperties };
    buttonContainer: CSSProperties;
    button: CSSProperties;
  } = {
    heroContainer: {
          height: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },
    portraitHeroContainer: {
      height: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },
    heroImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transition: "opacity 0.5s ease-in-out",
    },
   
    orientationStyles: {
      // 'contain' shows the whole image, 'cover' fills the screen.
      landscape: { objectFit: "contain" },
      portrait: { objectFit: "contain" },
    },
    buttonContainer: {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: "5px",
    },
  };

  // --- Logic to Determine Image Orientation ---
  useEffect(() => {
    if (!currentImage) return;

    setIsLoaded(false);
    setOrientation(null);

    const img = new window.Image();

    img.onload = () => {
      const { naturalWidth, naturalHeight } = img;
      if (naturalHeight > naturalWidth) setOrientation("portrait");
      else if (naturalWidth > naturalHeight) setOrientation("landscape");
      else setOrientation("square");
      setIsLoaded(true); // Fade the image in
    };

    img.onerror = () =>
      console.error(`Failed to load image with src: ${currentImage}`);
    img.src = currentImage;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [currentImage]); // Re-run this logic when the image source changes

  // --- Dynamic Styles ---
  const imageStyle: CSSProperties = {
    ...styles.heroImage,
    ...(orientation ? styles.orientationStyles[orientation] : {}),
    opacity: isLoaded ? 1 : 0,
  };

  return (
<div
  className={orientation === "landscape" ? "container" : undefined}
>
      <div
        style={
          orientation === "portrait"
            ? styles.portraitHeroContainer
            : styles.heroContainer
        }
      >
        {orientation && (
          <img
            src={currentImage}
            alt="Hero"
            style={imageStyle}
            loading="eager"
          />
        )}
      </div>

      {/* <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => setCurrentImage(portraitImage)}
        >
          Show Portrait Image
        </button>
        <button
          style={styles.button}
          onClick={() => setCurrentImage(landscapeImage)}
        >
          Show Landscape Image
        </button>
      </div> */}
    </div>
  );
}
