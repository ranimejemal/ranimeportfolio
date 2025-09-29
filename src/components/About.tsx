import { Code, Palette, Zap, Users, Search, TrendingUp } from 'lucide-react';
const About = () => {
  const skills = [{
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Symfony, Python, React, Node.js, HTML/CSS, JavaScript',
    color: 'from-purple-500 to-purple-700'
  }, {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, User Research, Prototyping, Design Systems',
    color: 'from-pink-500 to-pink-700'
  }, {
    icon: Search,
    title: 'SEO Specialist',
    description: 'Technical SEO, Content Optimization, Analytics',
    color: 'from-blue-500 to-blue-700'
  }, {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Google Ads, Social Media Management, Campaign Strategy',
    color: 'from-green-500 to-green-700'
  }];
  const techStack = ['Symfony', 'Python', 'React', 'Node.js', 'JavaScript', 'HTML/CSS', 'Figma', 'Google Ads', 'SEO', 'Social Media'];
  return <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 translate-y-[12rem]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Passionate web designer and digital marketing specialist with strong experience in UI/UX design, visual branding, SEO optimization, Google Ads management, and social media strategy. I help brands build impactful digital identities through creative design and smart marketing.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6 text-white">My Expertise</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              As a versatile digital professional, I combine technical development skills with 
              creative design thinking and strategic marketing expertise. My background spans 
              full-stack development, user experience design, and digital marketing optimization.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I specialize in creating comprehensive digital solutions - from developing responsive 
              web applications with modern frameworks to designing intuitive user interfaces and 
              implementing effective SEO and Google Ads strategies that drive results.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {techStack.map(tech => <span key={tech} className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30 hover:bg-purple-600/30 transition-colors duration-300">
                  {tech}
                </span>)}
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl glass-effect flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-purple">
                    <Code size={40} className="text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">Building digital experiences</p>
                  <p className="text-gray-400 text-sm mt-2">that drive business growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => <div key={skill.title} className="glass-effect p-6 rounded-2xl hover-glow transition-all duration-300 animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4`}>
                <skill.icon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">{skill.title}</h4>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;