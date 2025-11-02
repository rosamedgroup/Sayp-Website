import React from 'react';
import Logo from './Logo';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F1ECE6]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6B5050] mb-6">
              فكرة الشعار
            </h2>
            <p className="text-base md:text-lg text-[#6B5050]/80 mb-12">
              شعارنا الرئيسي عبارة عن مخطوطة باستلهام من خط النسخ الحديث وبرسم حـــــــــــــــر
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#6B5050] mb-6">
              معنى الشعار
            </h2>
            <p className="text-base md:text-lg text-[#6B5050]/80">
              سَيْب .. أي ساب الشيء، وبمعنى آخر وباختصاصنا اي ساب وأفاض في عطائه وجماله ولذاذته
            </p>
          </div>
          <div className="flex justify-center items-center">
             <div className="w-full max-w-sm md:max-w-md p-8">
               <Logo className="h-auto w-full" />
               <p className="text-center mt-4 text-sm tracking-widest text-[#6B5050]/70">الشعار</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
