import React from 'react';
import AnimatedItem from './AnimatedItem';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg aspect-square">
    <img src={src} alt={alt} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
  </div>
);

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/800/800?random=10&blur=1', alt: 'لقطة مزاجية تجريدية' },
    { src: 'https://picsum.photos/800/800?random=11&coffee', alt: 'صب حبوب البن الطازجة' },
    { src: 'https://picsum.photos/800/800?random=12&cream', alt: 'ملمس كريمي' },
    { src: 'https://picsum.photos/800/800?random=13&water', alt: 'تموجات الماء في ضوء الشمس' },
    { src: 'https://picsum.photos/800/800?random=14&latte', alt: 'لقطة مقربة لفن اللاتيه' },
    { src: 'https://picsum.photos/800/800?random=15&cafe', alt: 'ديكور داخلي بسيط للمقهى' },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#CAD4D3]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-center mb-12 md:mb-16">لوحة الإلهام</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {images.map((image, index) => (
            <AnimatedItem key={index} delay={index * 100}>
              <GalleryImage src={image.src} alt={image.alt} />
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;