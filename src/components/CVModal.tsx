import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-purple-600">RANIME JEMAL</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-4">
          {/* Profile Photo Section */}
          <div className="flex justify-center mb-6">
            <Avatar className="w-32 h-32">
              <AvatarImage 
                src="/lovable-uploads/82a9e78d-d116-41ed-adcc-2e3ebcb1d9e0.png" 
                alt="Ranime Jemal" 
              />
              <AvatarFallback className="text-2xl font-bold text-purple-600 bg-purple-100">RJ</AvatarFallback>
            </Avatar>
          </div>

          {/* Header */}
          <div className="text-center border-b pb-4">
            <h2 className="text-lg font-semibold">PRE-ENGINEERING STUDENT</h2>
            <div className="flex justify-center items-center gap-4 mt-2 text-sm">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+216 97017061</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>ranimejmal@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>Monastir, Tunisia</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">ABOUT</h3>
            <p className="text-sm text-gray-700">
              Passionate about robotics, computer science, and programming. I have demonstrated knowledge in emerging technologies and the challenges they present. Since my high school years, I have dedicated my time to learning new algorithms, fundamental programming concepts and algorithms, along with various languages.
            </p>
          </div>

          {/* Academic Education */}
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">ACADEMIC EDUCATION</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Preparatory Classes for Grandes Écoles (ESPRIT)</h4>
                <p className="text-sm">Monastir, September 2022 - June 2024</p>
                <p className="text-sm text-gray-600">Specialized in: Mathematics/Physics</p>
                <p className="text-sm text-gray-600">Main Subjects: Mathematics, Physics</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Bachelor of Engineering (ESPRIM)</h4>
                <p className="text-sm">Monastir, September 2024 - Mai 2025</p>
                <p className="text-sm text-gray-600">Field of Study: Computer Science (Year 1)</p>
                <p className="text-sm text-gray-600">Main Subjects: Programming, Algorithms, Systems Architecture, Databases</p>
              </div>

              <div>
                <h4 className="font-semibold">International Private High School of Monastir (2020-2022)</h4>
                <p className="text-sm">June 2022, Baccalaureate in Mathematics with honors.</p>
              </div>

              <div>
                <h4 className="font-semibold">Al Manahil Private High School of Monastir (2019-2020)</h4>
                <p className="text-sm">First year of secondary school</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">SKILLS</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Analytical Skills:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Complex Problem Solving</li>
                  <li>Data Analysis</li>
                  <li>Mathematical Modeling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Language Skills:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Arabic: Native language</li>
                  <li>French: Secondary language</li>
                  <li>English: Advanced (EF SET, AMEDIST)</li>
                  <li>Other languages: German (A2)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Skills:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Creative</li>
                  <li>Passionate</li>
                  <li>Team spirit</li>
                  <li>Stress management</li>
                  <li>Innovative</li>
                  <li>Dynamic</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interests & Passions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-purple-600 mb-2">INTERESTS</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Cybersecurity and ethical hacking</li>
                <li>Development of open-source software</li>
                <li>Artificial intelligence and machine learning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-600 mb-2">PASSIONS</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Design</li>
                <li>Art</li>
                <li>Painting</li>
                <li>Photography</li>
                <li>Music</li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">ASSOCIATIVE EXPERIENCES</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Artist and Co-founder of Kharbecha.art (2020)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>Co-founding and managing an online platform dedicated to promoting contemporary art</li>
                  <li>Creating drawings and illustrations for exhibitions and online sales</li>
                  <li>Developing brand strategy and digital online presence</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">Social Media Manager at Al Architect Magazine (2024)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>Managing the magazine's social media accounts</li>
                  <li>Creating content and developing digital communication strategy</li>
                  <li>Increasing subscriber engagement and website traffic</li>
                  <li>Analyzing performance of digital marketing campaigns</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Social Media Manager & Graphic and web Designer at Studio Beauty by Hanane (2025)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>Managed and grew Instagram and Facebook presence, boosting engagement</li>
                  <li>Created branded visuals (posters, flyers, product content) using Canva and Photoshop</li>
                  <li>Contributed to campaigns, client interaction, and SEO optimization</li>
                  <li>Collaborated with the founder to maintain visual identity and online reputation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">EXTRACURRICULAR ACTIVITIES</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Member of the IEEE club</h4>
                <p className="text-sm">ESPRIT, Monastir, Tunisia - January 2024</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Member of the Leadership club</h4>
                <p className="text-sm">ESPRIT, Monastir, Tunisia - January 2023</p>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>Graphic Designer and Event Organizer</li>
                  <li>Designing visual materials to promote club activities and events</li>
                  <li>Planning and organizing internal and external events</li>
                  <li>Active participation in planning meetings and contributing to the club's communication and marketing strategies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Ambassador</h4>
                <p className="text-sm">Ritchy, Monastir, Tunisia - 2024</p>
                <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                  <li>Promoting the Ritchy brand through events and social networks</li>
                  <li>Interacting with clients and influencers to increase brand visibility</li>
                  <li>Organizing and participating in brand events to boost public engagement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">CERTIFICATIONS</h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Soft skills - 2024</li>
              <li>AI-powered shopping ads certification - 2025</li>
              <li>Google Ads certification - 2025</li>
              <li>Web design - 2025</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CVModal;
