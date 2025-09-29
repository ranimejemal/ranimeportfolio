import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Eye } from 'lucide-react';

// --- Simulation of External Components (for single-file execution) ---

// Simulating Button (Kept as user did not provide a replacement)
// FIX: Added default value for 'variant' to make it optional and resolve TypeScript error TS2741.
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
const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full text-gray-800"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-4">My CV (Preview)</h3>
        <p>This is a mock modal. Real CV content goes here.</p>
        <Button onClick={onClose} className="mt-6 bg-red-500 hover:bg-red-600 text-white">
          Close
        </Button>
      </div>
    </div>
  );
};

// User's actual LogoAnimation component (Replaced the mock)
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

  // FIX: This useEffect manages the body's scroll behavior to prevent content jump.
  useEffect(() => {
    if (showAnimation) {
      // 1. Disable scrolling to lock the page in place while the splash screen is up
      document.body.style.overflow = 'hidden';
    } else {
      // 2. Re-enable scrolling when the animation is done
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup: always restore overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAnimation]); // Re-run effect when the animation state changes


  const handleLogoAnimationComplete = () => {
    // FIX 2: Aggressively reset scroll position at the precise moment the content is revealed
    window.scrollTo({ top: 0, behavior: "auto" });
    // Then hide the animation. The useEffect then handles the scroll unlock.
    setShowAnimation(false);
  };

  if (showAnimation) {
    // Render only the splash screen when showAnimation is true
    return <LogoAnimation onComplete={handleLogoAnimationComplete} />;
  }

  // --- Scroll Functions ---
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCVClick = () => {
    setIsCVModalOpen(true);
  };

  // --- Main Content Rendered after Animation ---
  return (
    <>
      <section 
        className="relative min-h-screen flex items-center justify-start text-white overflow-hidden"
      >
        {/* Background video and overlay */}
        <video
          src="/112344009786.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Adjusted z-index for overlay to be below content but above video */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div> 

        {/* Left-aligned Content */}
        <div className="max-w-4xl px-6 translate-x-[7rem] lg:px-15 relative z-10 flex flex-col justify-end h-full translate-y-[10rem]">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-gradient glow-text  glitch-text">Ranime</span>
          </h1>
          <br />

          <h2 className="text-xl md:text-xl text-gray-300 mb-8 font-mono leading-relaxed">
            • Cybersecurity & Cloud Engineer <br />
            • Web Developer <br />
            • UI/UX Designer <br />
            • Graphic Designer <br />
            • Social Media Manager
          </h2>

          <br />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
            <Button
              onClick={scrollToWork}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 hover-glow"
            >
              View My Work
            </Button>

            <Button
              onClick={handleCVClick}
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              <Eye size={20} className="mr-2 inline-block" />
              See My CV
            </Button>
          </div>

          <div className="flex space-x-4 mb-8">
            <a href="https://github.com/ranimejemal" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all duration-300 hover-glow group">
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/ranime-jemal-367b29301/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all duration-300 hover-glow group">
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:ranimejmal@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all duration-300 hover-glow group">
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="w-full flex justify-center mb-10 translate-x-[-22rem] translate-y-[2rem]">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </section>

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </>
  );
};

export default Hero;
