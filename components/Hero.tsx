import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-65px)] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://storage.googleapis.com/aistudio-program-assets/website-assets/sip-cafe/hero-background.jpg')`,
        backgroundPositionY: offsetY * 0.5,
      }}
      aria-label="فن اللاتيه في كوب قهوة مع شعار مقهى سَيْب"
    >
      {/* The hero image is now the main focus, so text overlay is removed for a cleaner look. */}
    </section>
  );
};

export default Hero;
