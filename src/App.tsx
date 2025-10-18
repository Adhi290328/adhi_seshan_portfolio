// Ultra-Modern Cyberpunk Holographic Portfolio

import { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaTerminal, FaShieldAlt, FaMobile } from 'react-icons/fa';
import './index.css';
import * as THREE from 'three';

// Project Data
const projects = [
  {
    id: 1,
    name: "CyberSecWatch",
    tagline: "Real-Time Threat Detection & Network Monitoring",
    icon: <FaShieldAlt />,
    duration: "Jan 2025 – Apr 2025",
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
    demo: "#",
    color: "#ff0844",
    gradient: "from-red-500 via-pink-500 to-purple-500"
  },
  {
    id: 2,
    name: "Krishi Saathi",
    tagline: "Smart Farming Assistant App",
    icon: <FaMobile />,
    duration: "Aug 2024 – Oct 2024",
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
    demo: "#",
    color: "#00ff88",
    gradient: "from-green-400 via-emerald-500 to-teal-500"
  }
];

const personalInfo = {
  name: "ADHI SESHAN S",
  title: "Full Stack Developer",
  subtitle: "Cybersecurity Specialist",
  email: "adhiseshanadhiseshan001@gmail.com",
  phone: "+91 6374366480",
  location: "Chennai, Tamil Nadu",
  social: {
    github: "https://github.com/Adhi290328",
    linkedin: "https://www.linkedin.com/in/adhi-seshan-software-developer",
    twitter: "https://twitter.com/yourusername"
  }
};

// Particle Field Background
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 1.5 + Math.random() * 2;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Glitch Text Effect
function GlitchText({ children, className = "" }: { children: string; className?: string }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <span className={glitch ? "glitch-active" : ""}>{children}</span>
      {glitch && (
        <>
          <span className="absolute top-0 left-0 text-cyan-400 opacity-70" style={{ transform: 'translate(-2px, -2px)' }}>{children}</span>
          <span className="absolute top-0 left-0 text-pink-400 opacity-70" style={{ transform: 'translate(2px, 2px)' }}>{children}</span>
        </>
      )}
    </div>
  );
}

// Terminal-Style Navbar
function Navbar() {
  const [active, setActive] = useState('home');
  const navItems = ['home', 'projects', 'skills', 'contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-cyan-500/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaTerminal className="text-cyan-400" />
            <span className="font-mono text-cyan-400">root@{personalInfo.name.toLowerCase().replace(/\s/g, '_')}</span>
          </div>
          
          <div className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-mono transition-all ${
                  active === item 
                    ? 'text-cyan-400 border-b-2 border-cyan-400' 
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                ~/{item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

// Futuristic Hero Section
function Hero() {
  const [text, setText] = useState('');
  const fullText = personalInfo.title;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <span className="text-cyan-400 font-mono text-sm"></span>
          </div>
          
          <GlitchText className="text-7xl md:text-9xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            {personalInfo.name}
          </GlitchText>
          
          <div className="h-12 mb-8">
            <span className="text-2xl md:text-3xl font-mono text-cyan-300">
              {text}<span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-mono font-bold border border-cyan-400 hover:border-cyan-300 transition-all"
            >
              View_Projects();
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236,72,153,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-mono font-bold border border-pink-400 hover:border-pink-300 transition-all"
            >
              Contact_Me();
            </motion.button>
          </div>

          <div className="flex gap-6 justify-center mt-8">
            {[
              { icon: FaGithub, url: personalInfo.social.github, color: "text-gray-400 hover:text-white" },
              { icon: FaLinkedin, url: personalInfo.social.linkedin, color: "text-blue-400 hover:text-blue-300" },
              { icon: FaTwitter, url: personalInfo.social.twitter, color: "text-cyan-400 hover:text-cyan-300" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className={social.color}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Holographic Project Card
function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
        isHovered ? 'border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.3)]' : 'border-gray-700'
      }`}>
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
        
        {/* Scanline Effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </motion.div>
        )}

        <div className="relative p-6 backdrop-blur-sm bg-black/50">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-4xl" style={{ color: project.color }}>
                {project.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <p className="text-sm text-gray-400 font-mono">{project.tagline}</p>
              </div>
            </div>
            <span className="text-xs text-cyan-400 font-mono">{project.duration}</span>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-gray-800 rounded-full mb-4 overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
            />
          </div>

          <p className="text-gray-300 mb-4 text-sm">{project.overview}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs font-mono text-cyan-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="p-4 bg-gray-900/50 rounded-lg border border-cyan-500/30">
                  <h4 className="text-cyan-400 font-bold mb-2 font-mono">Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <h4 className="text-pink-400 font-bold mt-4 mb-2 font-mono">Impact:</h4>
                  <p className="text-sm text-gray-300">{project.impact}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all font-mono text-sm"
            >
              {showDetails ? '[ Hide ]' : '[ Details ]'}
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={project.demo}
              className="p-2 border border-gray-700 rounded-lg hover:border-pink-400 hover:text-pink-400 transition-all"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-sm mb-2 block">What I've Created</span>
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 font-mono">Innovative solutions for real-world problems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Matrix
function Skills() {
  const skillCategories = [
    { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'Java'], color: 'cyan' },
    { name: 'Frameworks', items: ['React', 'Flutter', 'Flask', 'Node.js'], color: 'purple' },
    { name: 'Security', items: ['VirusTotal API', 'Shodan', 'AbuseIPDB'], color: 'red' },
    { name: 'Tools', items: ['Git', 'VS Code', 'Power BI'], color: 'green' }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-sm mb-2 block">How I Build</span>
            <h2 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Tech Arsenal
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all"
              >
                <h3 className={`text-xl font-bold mb-4 font-mono text-${category.color}-400`}>
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.items.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-400 w-32">{skill}</span>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-300`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${70 + Math.random() * 30}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Terminal Contact Form
// Contact Section with Web3Forms
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setOutput(['⏳ Sending message...']);

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
        '✓ Message sent successfully!',
        `Thank you, ${formData.name}!`,
        'I will get back to you soon.'
      ]);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setOutput([
        '✗ Failed to send.',
        'Error: ' + (result.message || 'Unknown error')
      ]);
    }
  } catch (error: any) {
    console.error('Error:', error);
    setOutput([
      '✗ Could not send message.',
      'Please email me directly.'
    ]);
  }

  setIsLoading(false);
  setTimeout(() => setOutput([]), 5000);
};

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-sm mb-2 block">Let's Connect</span>
            <h2 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { icon: FaEnvelope, label: 'Email', value: personalInfo.email, color: 'text-cyan-400' },
                { icon: FaPhone, label: 'Phone', value: personalInfo.phone, color: 'text-green-400' },
                { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, color: 'text-pink-400' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all"
                >
                  <item.icon className={`${item.color} text-2xl`} />
                  <div>
                    <p className="text-xs text-gray-500 font-mono">{item.label}</p>
                    <p className="text-white font-mono text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Form */}
            <div className="bg-black border-2 border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-400 font-mono ml-2">contact.terminal</span>
              </div>
              
              <form onSubmit={handleSubmit} className="p-4 space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 text-cyan-400 font-mono text-sm focus:border-cyan-500 outline-none"
                  required
                  disabled={isLoading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 text-cyan-400 font-mono text-sm focus:border-cyan-500 outline-none"
                  required
                  disabled={isLoading}
                />
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 text-cyan-400 font-mono text-sm focus:border-cyan-500 outline-none resize-none"
                  required
                  disabled={isLoading}
                />
                
                {/* Output Messages */}
                {output.length > 0 && (
                  <div className="space-y-1 p-3 bg-gray-900/50 rounded border border-gray-800">
                    {output.map((line, i) => (
                      <p 
                        key={i} 
                        className={`font-mono text-xs ${
                          line.includes('✓') ? 'text-green-400' : 
                          line.includes('✗') ? 'text-red-400' : 
                          'text-yellow-400'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                  className={`w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded font-mono font-bold transition-all ${
                    isLoading 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]'
                  }`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-500 font-mono text-sm">
          © 2025 {personalInfo.name} | Built with React + Three.js
        </p>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}