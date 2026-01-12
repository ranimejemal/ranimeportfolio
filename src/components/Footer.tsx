

import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ranimejemal',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ranime-jemal-367b29301/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:ranimejmal@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient mb-2">Ranime Jmal</h3>
            <p className="text-gray-400"> Cyber security , Cloud , UI/UX , Web & Graphic designer , social media manager   </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-white/10 hover:bg-purple-600 transition-all duration-300 hover-glow group" 
                aria-label={link.label}
              >
                <link.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-purple-500" /> by Ranime Jmal
            <span className="mx-2">•</span>
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

