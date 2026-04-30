import { useState, useEffect } from "react";

const LanguageSkills = () => {
  const languages = [
    { name: "Arabic", level: 100 },
    { name: "French", level: 85 },
    { name: "English", level: 90 },
    { name: "German", level: 60 },
  ];

  const [progress, setProgress] = useState(
    languages.map(() => 0)
  );

  useEffect(() => {
    languages.forEach((lang, i) => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setProgress((prev) => {
          const newProgress = [...prev];
          newProgress[i] = current;
          return newProgress;
        });
        if (current >= lang.level) clearInterval(interval);
      }, 15); // speed of animation
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {languages.map((lang, i) => (
        <div
          key={lang.name}
          className="relative bg-gray-800/30 rounded-full p-1 hover:scale-105 transform transition-all duration-300 cursor-pointer"
        >
          <div
            className="rounded-full h-12 flex items-center justify-center text-white font-semibold bg-gradient-to-r from-yellow-400 to-red-500"
            style={{ width: `${progress[i]}%` }}
          >
            {lang.name} — {progress[i]}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageSkills;
