import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
const Work = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const projects = [{
    image: "/lovable-uploads/6fa86a4f-f735-4fd1-b190-fe7278159a71.png",
    title: "Gaming Login Interface",
    description: "Modern gaming platform login design with futuristic UI elements"
  }, {
    image: "/lovable-uploads/ed7411d6-1633-475c-9144-70430dfe24a4.png",
    title: "Vesta Luxury Real Estate",
    description: "Premium real estate branding and marketing materials"
  }, {
    image: "/lovable-uploads/2f8dcc67-9ffa-4702-9dce-d21dce6213ee.png",
    title: "Property Search Platform",
    description: "Modern real estate search interface with advanced filtering"
  }, {
    image: "/lovable-uploads/c87e133b-294b-425c-97cc-81fc569c70f0.png",
    title: "Studio Beauté by Hanane",
    description: "Elegant beauty studio website with booking system"
  }, {
    image: "/lovable-uploads/77d848cd-c8b7-4ff8-8a67-022f168ed3b1.png",
    title: "Real Estate Platform",
    description: "Comprehensive property marketplace with advanced search features"
  }, {
    image: "/lovable-uploads/41d5a79f-fc4a-4ff9-acdd-3fed985be7a8.png",
    title: "Premium Sushi Restaurant",
    description: "Luxury dining experience website with online reservations"
  }];
  return <section id="work" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">My Work</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of web development projects, UI/UX designs, and digital marketing campaigns. 
            Each project showcases my expertise in creating impactful digital solutions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => <div key={index} onMouseEnter={() => setHoveredImage(project.image)} onMouseLeave={() => setHoveredImage(null)} className="glass-effect overflow-hidden hover-glow transition-all duration-300 relative rounded-2xl">
              <img src={project.image} alt={project.title} className="w-full h-48 transition-transform duration-300 hover:scale-105 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>)}
        </div>

        {/* Full Image Overlay */}
        {hoveredImage && <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 pointer-events-none">
            <div className="max-w-4xl max-h-4xl p-4">
              <img src={hoveredImage} alt="Full size preview" className="w-full h-full object-contain rounded-lg shadow-2xl" />
            </div>
          </div>}

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-effect p-6 rounded-2xl hover-glow transition-all duration-300">
            <h4 className="text-lg font-semibold text-white mb-4">Web Development</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Wordpress</li>
              <li>• Python </li>
              <li>• React Frontend Projects</li>
              <li>• Node.js </li>
            </ul>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover-glow transition-all duration-300">
            <h4 className="text-lg font-semibold text-white mb-4">UI/UX Design</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Figma Design Systems</li>
              <li>• User Interface Mockups</li>
              <li>• Prototype Development</li>
              <li>• User Experience Research</li>
            </ul>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover-glow transition-all duration-300">
            <h4 className="text-lg font-semibold text-white mb-4">SEO & Analytics</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Technical SEO Audits</li>
              <li>• Content Optimization</li>
              <li>• Performance Analysis</li>
              <li>• Search Strategy</li>
            </ul>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover-glow transition-all duration-300">
            <h4 className="text-lg font-semibold text-white mb-4">Digital Marketing</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Google Ads Campaigns</li>
              <li>• Social Media Management</li>
              <li>• Content Strategy</li>
              <li>• Performance Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default Work;