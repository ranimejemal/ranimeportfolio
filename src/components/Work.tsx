import { useState } from "react";

const Work = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const projects = [
     {
      image: "/Capture d'écran 2025-12-28 122835.png",
      title: "Wifi sniffing",
      description:
        "Detects nearby devices asking for Wi-Fi networks using Python & Scapy. Shows unique SSIDs in real-time.",
      link: "https://github.com/ranimejemal/wifi-sniffing",
    },
    
    {
      image: "/Capture d'écran 2025-12-25 101610.png",
      title: "SJA website",
      description: "Premium architecture design and construction",
      link: "https://sja-website.vercel.app/",
    },
    {
      image: "/Capture d'écran 2026-01-11 233205.png",
      title: "ecommerce magazin website",
      description: "modern e-commerce web app built with performance, usability, and scalability in mind.",
      link: "https://magazin-rust.vercel.app/",
    },
    {
      image: "/Capture d'écran 2025-12-25 101709.png",
      title: "AEROSPRIM website",
      description: "Aerospace website with 3D rocket",
      link: "https://aerosprim.vercel.app/",
    },
    {
      image: "/image.png",
      title: "La Rive D'Or website",
      description: "Cozy and elegant coffee shop online",
      link: "https://larivedor.vercel.app/",
    },
    {
      image: "/Capture d'écran 2025-12-25 102451.png",
      title: "Beauty center website",
      description: "Elegant booking website using EmailJS",
      link: "https://www.studiobeautebyhanene.com/",
    },
    {
      image: "/Capture d'écran 2025-12-25 102930.png",
      title: "Premium beauty center website",
      description:
        "Luxury beauty center booking online with Google Calendar integration",
      link: "https://bslbeauty.vercel.app/",
    },
    
    
    {
      image: "/6fa86a4f-f735-4fd1-b190-fe7278159a71.png",
      title: "Gaming Login Interface",
      description: "Modern gaming platform login design with futuristic UI elements",
      previewOnly: true,
    },
   
  ];

  const certifications = [
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA DLI",
      image: "/Capture d'écran 2026-01-11 155148.png",
      previewOnly: true,
    },
    {
      title: "Foundational C# with Microsoft",
      issuer: "Free code camp & Microsoft",
      image: "/Capture d'écran 2026-01-26 065109.png",
      previewOnly: true,
    },
    {
      title: "CERTIFICATE OF ENGLISH LANGUAGE",
      issuer: "Emperial English UK",
      image: "/ranime_jemal_CA63JN2_8426709_page-0001.jpg",
      previewOnly: true,
    },
    {
      title: " AI-powered shopping ads certification",
      issuer: "Google Digital Academy",
      image: "/Capture d'écran 2025-12-25 123435.png",
      previewOnly: true,
    },
    {
      title: "Google Ads Certifications",
      issuer: "Google",
      image: "/1751294488616.jpg",
      previewOnly: true,
    },
    {
      title: "Web design",
      issuer: "Free code camp",
      image: "/Capture d'écran 2025-12-25 123117.png",
      previewOnly: true,
    },
     {
      title: "Cybersecurity hackathon",
      issuer: "IEEE",
      image: "/WhatsApp Image 2025-12-22 at 2.22.28 PM (1).jpeg",
      previewOnly: true,
    },
  ];

  const handleProjectClick = (project: any) => {
    if (project.previewOnly) {
      setPreviewImage(project.image);
    } else if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <section id="work" className="py-20 relative mb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            My Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of web development projects and UI/UX designs.
            Click to view live projects or previews.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="glass-effect overflow-hidden hover-glow transition-all duration-300 relative rounded-2xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 opacity-70 group-hover:opacity-100 transition-opacity">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>

  <div className="p-6">
    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
    <p className="text-gray-400 text-sm">{project.description}</p>
  </div>
            </div>
          ))}
        </div>

       {/* Certifications */}
<div className="text-center mb-8">
  <h3 className="text-3xl font-bold text-gradient mb-6">Certifications</h3>
  <p className="text-gray-400 max-w-2xl mx-auto">
    Some of the professional certifications I hold to strengthen my skills in cybersecurity, cloud, and UX design.
  </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  {certifications.map((cert, index) => (
    <div
      key={index}
      onClick={() => setPreviewImage(cert.image)}
      className="glass-effect rounded-2xl hover-glow transition-all duration-300 cursor-pointer flex flex-col items-center text-center overflow-hidden group"
    >
      <div className="w-full h-64 relative">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover rounded-t-2xl"
        />

        {/* Clickable indicator */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 opacity-70 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-xl font-semibold text-white">{cert.title}</h4>
        <p className="text-gray-400 text-sm">{cert.issuer}</p>
      </div>
    </div>
  ))}
</div>


        {/* Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setPreviewImage(null)}
          >
            <div className="max-w-xl max-h-xl p-4">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
