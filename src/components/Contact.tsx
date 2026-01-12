'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    try {
      await emailjs.send(
        'service_t9fyz56',     // SAME service
        'template_byt52t8',    // SAME template
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        'Gjc83cBO5IVx9gnwS'     // SAME public key
      );

      setSuccess('Message sent successfully ! ');
      setFormData({ user_name: '', user_email: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setSuccess(
        `Failed: ${error?.text || error?.message || 'EmailJS config error'}`
      );
    } finally {
      setSending(false);
      setTimeout(() => setSuccess(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss your project and explore how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
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

            {/* What I Offer */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4 text-white">What I Offer</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Web development with React, and modern web technologies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>UI/UX design & interactive prototypes using Figma</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Cybersecurity testing, auditing, and vulnerability analysis</span>
                </li>
                
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Professional graphic design for branding & digital content</span>
                </li>
              </ul>
            </div>
          </div>

           {/* FORM */}
          <div className="animate-fade-in-right">
            <form
              onSubmit={handleSubmit}
              className="glass-effect p-8 rounded-2xl space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <Input
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <Input
                  name="user_email"
                  type="email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <Textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg"
              >
                <Send size={20} className="mr-2" />
                {sending ? 'Sending...' : 'Send Message'}
              </Button>

              {success && (
                <p
                  className={`text-center mt-2 ${
                    success.startsWith('Failed')
                      ? 'text-red-500'
                      : 'text-green-500'
                  }`}
                >
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;