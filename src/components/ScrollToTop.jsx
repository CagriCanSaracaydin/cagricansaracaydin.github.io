import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      const experienceSectionOffset = experienceSection ? experienceSection.offsetTop : 0;

      if (window.pageYOffset > experienceSectionOffset) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          type="button"
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          <ArrowUp size={21} strokeWidth={1.9} aria-hidden="true" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
