import React from 'react';

interface IconProps {
  className?: string;
}

const Icon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="أيقونة مقهى سَيْب"
    >
      <path d="M50 42.5C44.4 36.9 36.9 33.1 28.1 33.1C18.1 33.1 10 41.2 10 51.2C10 56.8 13.8 64.3 13.8 73.1C13.8 83.1 21.9 91.2 31.9 91.2C37.5 91.2 45 87.4 45 78.6C45 71.4 46.8 67.5 50 67.5V42.5Z" fill="currentColor"/>
      <path d="M50 42.5C55.6 36.9 63.1 33.1 71.9 33.1C81.9 33.1 90 41.2 90 51.2C90 56.8 86.2 64.3 86.2 73.1C86.2 83.1 78.1 91.2 68.1 91.2C62.5 91.2 55 87.4 55 78.6C55 71.4 53.2 67.5 50 67.5V42.5Z" fill="currentColor" transform="rotate(180 50 50)"/>
      <path d="M57.5 50C63.1 44.4 66.9 36.9 66.9 28.1C66.9 18.1 58.8 10 48.8 10C43.2 10 35.7 13.8 35.7 23.8C35.7 31 39.5 35 39.5 39.5C47.8 39.5 52.5 45.4 52.5 50H57.5Z" fill="currentColor" transform="rotate(90 50 50)"/>
      <path d="M42.5 50C36.9 55.6 33.1 63.1 33.1 71.9C33.1 81.9 41.2 90 51.2 90C56.8 90 64.3 86.2 73.1 86.2C83.1 86.2 91.2 78.1 91.2 68.1C91.2 62.5 87.4 55 78.6 55C71.4 55 67.5 53.2 67.5 50H42.5Z" fill="currentColor" transform="rotate(-90 50 50)"/>
    </svg>
  );
};

export default Icon;