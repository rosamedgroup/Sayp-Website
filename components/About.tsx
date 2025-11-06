import React, { useState } from 'react';
import Logo from './Logo';

const About: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F1ECE6]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right">
            {/* Text container using CSS Grid to stack and cross-fade content */}
            <div className="grid min-h-[160px] overflow-hidden">
              {/* Idea Text Block */}
              <div
                className="transition-all duration-500 ease-in-out [grid-area:1/1]"
                style={{
                  opacity: isRevealed ? 0 : 1,
                  transform: isRevealed ? 'translateY(-10px)' : 'translateY(0)',
                }}
                aria-hidden={isRevealed}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#6B5050] mb-6">
                  فكرة الشعار
                </h2>
                <p className="text-base md:text-lg text-[#6B5050]/80">
                  شعارنا الرئيسي عبارة عن مخطوطة باستلهام من خط النسخ الحديث وبرسم حـــــــــــــــر
                </p>
              </div>

              {/* Meaning Text Block */}
              <div
                className="transition-all duration-500 ease-in-out [grid-area:1/1]"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateY(0)' : 'translateY(10px)',
                }}
                aria-hidden={!isRevealed}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#6B5050] mb-6">
                  معنى الشعار
                </h2>
                <p className="text-base md:text-lg text-[#6B5050]/80">
                  سَيْب .. أي ساب الشيء، وبمعنى آخر وباختصاصنا اي ساب وأفاض في عطائه وجماله ولذاذته
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center cursor-pointer group"
            onMouseEnter={() => setIsRevealed(true)}
            onMouseLeave={() => setIsRevealed(false)}
            onClick={() => setIsRevealed(!isRevealed)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsRevealed(!isRevealed); }}
            role="button"
            tabIndex={0}
            aria-pressed={isRevealed}
            aria-label={isRevealed ? "إخفاء معنى الشعار" : "إظهار معنى الشعار"}
          >
             <div className="w-full max-w-sm md:max-w-md p-8 transition-transform duration-300 transform group-hover:scale-105">
               <Logo className="h-auto w-full" />
               <p className="text-center mt-4 text-sm tracking-widest text-[#6B5050]/70 transition-opacity duration-300">
                 {isRevealed ? 'الشعار' : 'اكشف عن المعنى'}
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
