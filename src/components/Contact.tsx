import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss your project and 
            explore how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">ranimejmal@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Available for</p>
                  <p className="text-white">+216 97017061</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Working</p>
                  <p className="text-white">Remotely Worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4 text-white">What I Offer</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Full-stack web development (Symfony, Python, React, Node.js)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>UI/UX design and prototyping with Figma</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>SEO optimization and technical audits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Google Ads management and social media strategy</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500" placeholder="John Doe" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500" placeholder="john@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 resize-none" placeholder="Tell me about your project, goals, and how I can help..." required />
                </div>
                
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg transition-all duration-300 hover-glow">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;