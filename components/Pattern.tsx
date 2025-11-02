
import React from 'react';
import Icon from './Icon';

const Pattern: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-8 -translate-x-8 -translate-y-8">
        {Array.from({ length: 200 }).map((_, i) => (
          <Icon key={i} className="w-24 h-24 text-white/50" />
        ))}
      </div>
    </div>
  );
};

export default Pattern;
