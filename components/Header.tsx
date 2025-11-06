import React, { useState, useEffect, useMemo, useRef } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const visibleSections = useRef(new Map<string, boolean>());
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(65);

  const navItems = useMemo(() => [
    { label: 'نبذة عنا', id: 'about' },
    { label: 'قائمة المشروبات', id: 'menu' },
    { label: 'المعرض', id: 'gallery' },
    { label: 'موقعنا', id: 'contact' },
  ], []);

  // Effect to measure header height dynamically
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight(); // Initial measurement
    window.addEventListener('resize', updateHeaderHeight); // Update on resize
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Custom smooth scroll function with duration and offset
  const smoothScroll = (id: string, duration: number, offset: number) => {
    const element = document.getElementById(id.toLowerCase());
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToSection = (id: string) => {
    smoothScroll(id, 800, headerHeight); // Use dynamic headerHeight as offset
    setIsMenuOpen(false); // Close menu on navigation
  };

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  // Effect to handle active section highlighting using IntersectionObserver
  useEffect(() => {
    if (headerHeight === 0) return; // Don't run observer until height is measured

    const observer = new IntersectionObserver(
      (entries) => {
        // Update the visibility map based on intersection status
        entries.forEach((entry) => {
          visibleSections.current.set(entry.target.id, entry.isIntersecting);
        });

        // Determine the current active section by finding the last visible one
        const navIds = navItems.map((item) => item.id);
        let currentActive = '';
        for (let i = navIds.length - 1; i >= 0; i--) {
          const id = navIds[i];
          if (visibleSections.current.get(id)) {
            currentActive = id;
            break; // Found the last visible section, which is the active one
          }
        }
        setActiveSection(currentActive);
      },
      {
        // Offset the observation area by the height of the sticky header.
        // An element is considered "visible" if it enters the viewport below this top margin.
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    const sections = navItems.map(({ id }) => document.getElementById(id));
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup: disconnect the observer when the component unmounts
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navItems, headerHeight]); // Re-run effect if header height changes

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 bg-[#CAD4D3]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center h-[65px]">
          <div className="w-24">
            <button onClick={() => smoothScroll('root', 800, 0)} aria-label="الصفحة الرئيسية لمقهى سَيْب">
              <Logo className="h-10" />
            </button>
          </div>
          <nav className="hidden md:flex items-center gap-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-sm font-medium text-[#6B5050] transition-colors duration-300 pb-1"
              >
                <span>{item.label}</span>
                <span className={`absolute bottom-0 left-0 h-px bg-[#6B5050] transition-all duration-300 ease-in-out ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 relative w-8 h-8 text-[#6B5050] focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        <div className="h-px bg-[#6B5050]/20 w-full" />
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#CAD4D3] transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="h-full flex flex-col justify-center items-center space-y-6">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className={`transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
              style={{ transitionDelay: `${isMenuOpen ? 75 + index * 50 : 0}ms` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative group text-xl font-medium text-[#6B5050] transition-colors duration-300 pb-2"
              >
                <span>{item.label}</span>
                <span className={`absolute bottom-0 left-0 h-px bg-[#6B5050] transition-all duration-300 ease-in-out ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;