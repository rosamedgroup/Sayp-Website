import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
  const logoUrl = 'https://storage.googleapis.com/aistudio-program-assets/website-assets/sip-cafe/logo-dark.png';
  
  const style: React.CSSProperties = {};
  if (variant === 'light') {
    // This CSS filter makes the dark brown logo appear as a light, off-white color.
    // brightness(0) makes it black, invert(1) makes it white. opacity(0.9) softens the result.
    style.filter = 'brightness(0) invert(1) opacity(0.9)'; 
  }
  
  return (
    <div className={className}>
       <img 
        src={logoUrl} 
        alt="شعار مقهى سَيْب" 
        className="w-full h-full object-contain"
        style={style}
      />
    </div>
  );
};

export default Logo;
