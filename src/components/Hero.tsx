import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Eye } from 'lucide-react';
import { Document, Page } from "react-pdf";

/* ---------------- BUTTON ---------------- */
const Button = ({ children, onClick, variant = 'default', className, ...props }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-semibold rounded-full transition-all duration-300 ${className} 
      ${variant === 'outline'
        ? 'border border-current bg-transparent'
        : 'bg-purple-600 text-white'}`}
    {...props}
  >
    {children}
  </button>
);

/* ---------------- CV MODAL ---------------- */

const CVModal = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState(null);

  if (!isOpen) return null;

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
      <div
        className="bg-white rounded-xl shadow-2xl overflow-auto w-full max-w-lg md:max-w-4xl max-h-[90vh] p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Document
          file="/RANIME_JEMAL_CV (2).pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="w-full"
          

        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={Math.min(window.innerWidth * 0.9, 800)}
            />
          ))}
        </Document>

        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};



/* ---------------- LOGO ANIMATION ---------------- */
let hasAnimationPlayed = false;

const LogoAnimation = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (hasAnimationPlayed) {
      onComplete();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    hasAnimationPlayed = true;

    const handleLoaded = () => {
      video.play().catch(() => {});
    };

    const handleEnded = () => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000);
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 1) handleLoaded();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src="/0927.mp4"
        muted
        playsInline
        className="w-full h-full object-contain md:object-cover"
      />
    </div>
  );
};

const Hero = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <>
      <section className="relative min-h-screen flex items-center text-white overflow-hidden pt-20 md:pt-0">

        
        {/* DESKTOP BACKGROUND VIDEO */}
        <video
          src="/112344009786.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* MOBILE BACKGROUND (GRADIENT + GLOW) */}
        <div className="md:hidden absolute inset-0 z-0 bg-gradient-to-br from-[#1a0f2e] via-[#000000] to-[#240e44]" />
        <div className="md:hidden absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.25),_transparent_60%)]" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 z-[2]" />

        {/* CONTENT */}
        {/* CONTENT */}
{/* CONTENT */}
{/* CONTENT */}
<div className="max-w-4xl px-6 relative z-10 flex flex-col justify-end h-full translate-y-0 md:translate-y-[5rem] md:translate-x-[7rem] lg:px-15">




          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center">
            
  Hi, I'm <span className="text-gradient glow-text glitch-text">Ranime</span>
</h1>


          <h2
  className="
    text-base md:text-xl text-gray-300 mb-10 font-mono leading-relaxed
    text-left
    w-full max-w-md
  "
>
  <br></br>
  • Cybersecurity & Cloud Engineering Student <br />
  • Web Developer <br />
  • UI/UX Designer <br />
  • Graphic Designer <br />
  • Social Media Manager
</h2>


          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 mb-14">
            <Button
              onClick={() =>
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 text-lg hover-glow"
            >
              View My Work
            </Button>

            <Button
              onClick={() => setIsCVModalOpen(true)}
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg"
            >
              <Eye size={20} className="mr-2 inline-block" />
              See My CV
            </Button>
          </div>

          {/* SOCIALS */}
          <div className="flex space-x-4 mb-10">
            <a
              href="https://github.com/ranimejemal"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ranime-jemal-367b29301/"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ranimejmal@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* SCROLL ARROW */}
          <button
            onClick={() =>
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="animate-bounce text-purple-400 hover:text-purple-300 transition"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      {showAnimation && <LogoAnimation onComplete={() => setShowAnimation(false)} />}
    </>
  );
};

export default Hero;
