import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaShieldAlt, FaMobile, FaChevronRight, FaCode, FaServer, FaLock, FaTools } from 'react-icons/fa';

// Project Data
const projects = [
  {
    id: 1,
    name: "CyberSecWatch",
    tagline: "Real-Time Threat Detection & Network Monitoring",
    icon: <FaShieldAlt />,
    duration: "mar 2025 – may 2025",
    techStack: ["Python", "Flask", "SQLite", "Power BI", "VirusTotal API"],
    overview: "Comprehensive real-time cybersecurity framework for threat detection and mitigation.",
    features: [
      "Real-time network monitoring",
      "AI threat classification",
      "Automated mitigation",
      "Power BI dashboards"
    ],
    impact: "Scalable automated system providing proactive security visibility.",
    github: "https://github.com/Adhi290328/CyberSecWatch",
    demo: "#"
  },
  {
    id: 2,
    name: "Krishi Saathi",
    tagline: "Smart Farming Assistant App",
    icon: <FaMobile />,
    duration: "Aug 2025 – Oct 2025",
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs"],
    overview: "Farmer-centric mobile app for data-driven agriculture decisions.",
    features: [
      "Crop database & pest management",
      "Real-time weather insights",
      "AI crop recommendations",
      "Farmer community"
    ],
    impact: "Improved yield efficiency through digital insights.",
    github: "https://github.com/Adhi290328/krishi-saathi",
    demo: "#"
  }
];

const personalInfo = {
  name: "ADHI SESHAN S",
  title: "Full Stack Developer",
  subtitle: "Cyber Curious",
  email: "adhiseshanadhiseshan001@gmail.com",
  phone: "+91 6374366480",
  location: "Chennai, Tamil Nadu",
  social: {
    github: "https://github.com/Adhi290328",
    linkedin: "https://www.linkedin.com/in/adhi-seshan-software-developer",
    twitter: "https://twitter.com/yourusername"
  }
};

// Navbar
function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            {personalInfo.name.split(' ')[0]}
          </div>
          
          <div className="flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-medium transition-colors relative ${
                  active === item.id 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
            {personalInfo.title}
          </h2>
          
          <p className="text-xl text-gray-600 mb-6">
            {personalInfo.subtitle}
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Passionate about building secure, scalable applications with expertise in full-stack development and cybersecurity. Committed to delivering innovative solutions that drive business value.
          </p>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              View Projects <FaChevronRight size={14} />
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-4">
            {[
              { icon: FaGithub, url: personalInfo.social.github },
              { icon: FaLinkedin, url: personalInfo.social.linkedin },
              { icon: FaTwitter, url: personalInfo.social.twitter }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="text-white text-center p-8">
              <FaCode size={80} className="mx-auto mb-4 opacity-90" />
              <p className="text-2xl font-semibold">Building the Future</p>
              <p className="text-blue-100 mt-2">with Code & Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Project Card
function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl">
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.tagline}</p>
            </div>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{project.duration}</span>
        </div>

        <p className="text-gray-700 mb-4">{project.overview}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {showDetails && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
            <ul className="space-y-1 mb-3">
              {project.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <FaChevronRight className="text-blue-600 mt-1 mr-2 flex-shrink-0" size={12} />
                  {feature}
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
            <p className="text-sm text-gray-700">{project.impact}</p>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-gray-300 rounded-md hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.demo}
            className="p-2 border border-gray-300 rounded-md hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions combining technical excellence with practical business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const skillCategories = [
    { name: 'Programming Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'Java'], icon: <FaCode /> },
    { name: 'Frameworks & Libraries', items: ['React', 'Flutter', 'Flask', 'Node.js'], icon: <FaServer /> },
    { name: 'Cybersecurity', items: ['VirusTotal API', 'Shodan', 'AbuseIPDB'], icon: <FaLock /> },
    { name: 'Tools & Platforms', items: ['Git', 'VS Code', 'Power BI'], icon: <FaTools /> }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across modern development technologies and security practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setOutput(['Sending message...']);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: 'Portfolio Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setOutput([
          'Message sent successfully!',
          `Thank you, ${formData.name}! I will get back to you soon.`
        ]);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setOutput(['Failed to send message. Please try again.']);
      }
    } catch (error) {
      setOutput(['Could not send message. Please email me directly.']);
    }

    setIsLoading(false);
    setTimeout(() => setOutput([]), 5000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { icon: FaEnvelope, label: 'Email', value: personalInfo.email },
              { icon: FaPhone, label: 'Phone', value: personalInfo.phone },
              { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="text-gray-900 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  required
                  disabled={isLoading}
                />
              </div>
              
              {output.length > 0 && (
                <div className="p-3 bg-blue-50 rounded-md border border-blue-200">
                  {output.map((line, i) => (
                    <p key={i} className="text-sm text-blue-800">{line}</p>
                  ))}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-600">
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}