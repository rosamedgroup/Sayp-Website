import React from 'react';
import Logo from './Logo';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#6B5050] text-[#F1ECE6]">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-12 w-auto mb-4" variant="light" />
            <p className="text-sm opacity-80 max-w-xs mx-auto md:mx-0">من مشروبات الصباح إلى إطلالات المساء.</p>
          </div>
          
          <div>
            <h4 className="font-bold tracking-wider mb-4">اتصل بنا</h4>
            <div className="text-sm opacity-80 space-y-2">
              <a href="https://maps.app.goo.gl/3wG2u5f4t8k9tC9k9" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity block">
                <p className="font-english">8519 Al Madinah Al Munawwarah Rd, An Nasim, Al Qurayyat 77454</p>
                <p>8519 طريق المدينة المنورة، النسيم، القريات 77454</p>
              </a>
              <p className="font-english">contact@sipcafe.com</p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
                <a href="https://www.instagram.com/saypcafe.sa" aria-label="انستغرام" className="opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073z"></path><path d="M12 6.873c-2.849 0-5.127 2.278-5.127 5.127s2.278 5.127 5.127 5.127 5.127-2.278 5.127-5.127-2.278-5.127-5.127-5.127zm0 8.254c-1.732 0-3.127-1.395-3.127-3.127s1.395-3.127 3.127-3.127 3.127 1.395 3.127 3.127-1.395 3.127-3.127-3.127z"></path><path d="M16.965 6.368c-.596 0-1.079.483-1.079 1.079s.483 1.079 1.079 1.079 1.079-.483 1.079-1.079-.483-1.079-1.079-1.079z"></path></svg></a>
                <a href="https://www.snapchat.com/@saypecafe.sa" aria-label="سناب شات" className="opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 3.582 10 8 0 1.892-.663 3.626-1.783 5.063C19.123 18.04 15.834 22 12 22s-7.123-3.96-8.217-6.937C2.663 13.626 2 11.892 2 10c0-4.418 4.477-8 10-8zm2.666 9.334a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zm-5.333 0a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667z"/></svg></a>
                <a href="https://www.tiktok.com/@saypcafe.sa" aria-label="تيك توك" className="opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.88-1.59-1.93-2.31-4.48-2.1-7.13.21-2.66 1.66-5.02 3.86-6.36 2.2-1.34 4.82-1.53 7.15-.49v4.29c-1.18-.34-2.35-.44-3.53-.25-1.18.19-2.31.7-3.23 1.47-.91.76-1.63 1.8-2.02 2.95-.39 1.15-.45 2.45-.23 3.65.23 1.2.79 2.33 1.62 3.25.84.92 1.93 1.58 3.14 1.87 1.21.29 2.5.21 3.66-.23 1.16-.43 2.18-1.2 2.92-2.16.74-.96 1.23-2.13 1.4-3.39.02-1.2.02-2.4.01-3.6.01-2.82.02-5.64.01-8.46z"/></svg></a>
            </div>
          </div>
          
          <div className="w-full h-full min-h-[200px] rounded-lg overflow-hidden">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.337751995874!2d37.34860787617651!3d30.20015567484411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156c1f107144e59f%3A0x6b40283c48a73dd7!2s8519%20Al%20Madinah%20Al%20Munawwarah%20Rd%2C%20An%20Nasim%2C%20Al%20Qurayyat%2077454%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1721081559441!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="موقع مقهى سَيْب على خرائط جوجل"
             ></iframe>
          </div>
        </div>
        <div className="mt-12 md:mt-16 pt-8 border-t border-[#F1ECE6]/20 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} مقهى سَيْب. جميع الحقوق محفوظة.</p>
          <div className="mt-2 text-xs opacity-80">
              <p className="font-english">Design By: @Kilta.sa (0506331528)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;