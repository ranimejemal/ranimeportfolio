import { useRef, useState, useEffect } from "react";

interface LogoAnimationProps {
  onComplete: () => void;
}

let hasAnimationPlayed = false; // persistent flag to prevent replay

const LogoAnimation = ({ onComplete }: LogoAnimationProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  // Ensure video duration is correct
  const handleLoadedMetadata = () => {
    video.play(); // start playback when metadata is loaded
  };

  const handleEnded = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1000);
  };

  video.addEventListener("loadedmetadata", handleLoadedMetadata);
  video.addEventListener("ended", handleEnded);

  return () => {
    video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    video.removeEventListener("ended", handleEnded);
  };
}, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/0927.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LogoAnimation;
