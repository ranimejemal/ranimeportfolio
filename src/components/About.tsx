import { useState, useEffect } from "react";
import { Code, Palette, Search, TrendingUp } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Python, React, Node.js, HTML/CSS",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, User Research, Prototyping, Design Systems",
      color: "from-pink-500 to-pink-700",
    },
    {
      icon: Search,
      title: "Cyber / Cloud",
      description:
        "Linux systems, network administration, ethical hacking fundamentals, and cloud management",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Google Ads, Social Media Management, Campaign Strategy",
      color: "from-green-500 to-green-700",
    },
  ];

  const techStack = [
    "Kali Linux",
    "Python",
    "React",
    "Node.js",
    "Ubuntu",
    "HTML/CSS",
    "Figma",
    "Google Ads",
    "UI / UX",
    "Community manager",
  ];

  const languages = [
    { name: "Arabic", level: 100 },
    { name: "French", level: 85 },
    { name: "English", level: 90 },
    { name: "German", level: 60 },
  ];

  const [progress, setProgress] = useState(languages.map(() => 0));

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
      }, 15);
    });
  }, []);

  return (
    <section id="about" className="relative py-20 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cybersecurity & cloud enthusiast with Linux, networking, and ethical hacking experience, also skilled in full web development and UI/UX design.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6 text-white">My Expertise</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I combine cybersecurity, cloud administration, and technical web development skills with creative design thinking and UI/UX expertise. My experience spans network administration, Linux systems, web development, and digital design.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              From securing networks and managing cloud systems to building responsive web applications and designing intuitive user interfaces, I focus on creating efficient, reliable, and visually engaging digital solutions that deliver real impact.
            </p>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30 hover:bg-purple-600/30 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="animate-fade-in-right">
            <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl glass-effect flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-purple">
                  <Code size={40} className="text-white" />
                </div>
                <p className="text-gray-300 text-lg">Building digital experiences</p>
                <p className="text-gray-400 text-sm mt-2">that drive real growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-effect p-6 rounded-2xl hover-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <skill.icon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">{skill.title}</h4>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Language Skills inside the section */}
        <div className="mt-16">
          <h3 className="text-white font-bold mb-6 text-2xl text-center">Language Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, i) => (
              <div
                key={lang.name}
                className="relative bg-gray-800/30 rounded-full p-1 hover:scale-105 transform transition-all duration-300 cursor-pointer"
              >
                <div
                  className="rounded-full h-12 flex items-center justify-center text-white font-semibold bg-gradient-to-r from-purple-900 to-red-700"
                  style={{ width: `${progress[i]}%` }}
                >
                  {lang.name} — {progress[i]}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
