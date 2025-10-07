'use client';

import MetallicPaint, { parseLogoImage } from "./MetallicPaint/MetallicPaint";
import { useState, useEffect } from 'react';

const MetalicLogo = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch('/x.svg');
        const blob = await response.blob();
        const file = new File([blob], "x.svg", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);

      } catch (err) {
        console.error("Error loading x.svg image:", err);
      }
    }

    loadDefaultImage();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      {imageData ? (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <MetallicPaint 
            imageData={imageData} 
          />
        </div>
      ) : (
        <div style={{ color: 'white', fontSize: '24px' }}>
          Loading metallic logo...
        </div>
      )}
    </div>
  );
}

export default MetalicLogo;