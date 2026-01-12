import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Eye } from 'lucide-react';


const Button = ({ children, onClick, variant = 'default', className, ...props }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-semibold rounded-full transition-all duration-300 ${className} 
      ${variant === 'outline' ? 'border border-current bg-transparent' : 'bg-purple-600 text-white'}`}
    {...props}
  >
    {children}
  </button>
);

// Simulating CVModal (Kept as user did not provide a replacement)
// CVModal.tsx
const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 md:p-8 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
       

        {/* Embed your PDF */}
        <iframe
  src="/RANIME_JEMAL_CV (2).pdf"
  className="w-full h-[80vh] rounded-lg border border-gray-300"
>
  Your browser does not support PDFs.  
  <a href="/Ranime_CV.pdf" target="_blank" rel="noopener noreferrer">
    Download CV
  </a>
</iframe>


        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};



let hasAnimationPlayed = false; // persistent flag to prevent replay

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

    // Start playback when metadata is loaded
    const handleLoadedMetadata = () => {
      video.play().catch(error => {
        // Autoplay might be blocked, logging a warning instead of failing silently
        console.warn("Video autoplay blocked:", error);
      }); 
    };

    // Handle end of video
    const handleEnded = () => {
      setFadeOut(true);
      // Wait for the CSS fade-out transition (1000ms = 1s) before unmounting
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000); 
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    // If metadata is already loaded before the listener attached (fast connections)
    if (video.readyState >= 1) { 
        handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/0927.mp4"
        // autoPlay will be handled by handleLoadedMetadata after listeners are attached
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


// --- Main Hero Component ---

const Hero = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    let animationFrameId;

    if (showAnimation) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
      animationFrameId = requestAnimationFrame(() => {
        document.body.style.overflow = 'auto';
      });
    }

    return () => {
      document.body.style.overflow = 'auto';
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [showAnimation]);

  const handleLogoAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <>
      {/* Hero always rendered */}
      <section className="relative min-h-screen flex items-center justify-start text-white overflow-hidden">
        <video
          src="/112344009786.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>

        {/* Content */}
        <div className="max-w-4xl px-6 translate-x-[7rem] lg:px-15 relative z-10 flex flex-col justify-end h-full translate-y-[10rem]">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-gradient glow-text glitch-text">Ranime</span>
          </h1>
          <br />
          <h2 className="text-xl md:text-xl text-gray-300 mb-8 font-mono leading-relaxed">
            • Cybersecurity & Cloud Engineering Student <br />
            • Web Developer <br />
            • UI/UX Designer <br />
            • Graphic Designer <br />
            • Social Media Manager
          </h2>
          <br />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
            <Button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 hover-glow"
            >
              View My Work
            </Button>
            <Button
              onClick={() => setIsCVModalOpen(true)}
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              <Eye size={20} className="mr-2 inline-block" />
              See My CV
            </Button>
          </div>

          <div className="flex space-x-4 mb-8">
            <a href="https://github.com/ranimejemal" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all duration-300 hover-glow group">
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/ranime-jemal-367b29301/" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all duration-300 hover-glow group">
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:ranimejmal@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all duration-300 hover-glow group">
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="w-full flex justify-center mb-10 translate-x-[-22rem] translate-y-[2rem]">
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />

      {/* Logo Animation overlay */}
      {showAnimation && <LogoAnimation onComplete={handleLogoAnimationComplete} />}
    </>
  );
};


export default Hero;
