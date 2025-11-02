import React from 'react';
import Icon from './Icon';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
  const colorClass = variant === 'light' ? 'text-[#F1ECE6]' : 'text-[#6B5050]';
  
  return (
    <div className={className} role="img" aria-label="شعار مقهى سَيْب">
      <Icon className={`w-full h-full ${colorClass}`} />
    </div>
  );
};

export default Logo;