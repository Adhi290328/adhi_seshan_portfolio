// src/data/projectsData.ts

export const projects = [
  {
    id: 1,
    name: "CyberSecWatch",
    tagline: "Real-Time Threat Detection & Network Monitoring System",
    emoji: "🧩",
    duration: "Jan 2025 – Apr 2025",
    domain: "Cybersecurity | Network Monitoring",
    techStack: [
      "Python",
      "Flask",
      "SQLite",
      "Power BI",
      "psutil",
      "VirusTotal API",
      "AbuseIPDB",
      "Shodan API",
      "SMTP"
    ],
    overview: "CyberSecWatch is a comprehensive real-time cybersecurity framework that identifies, classifies, and mitigates system and network threats. The platform integrates multiple Threat Intelligence APIs for IP and domain verification, automates email alerts for high-risk threats, and logs all activity in an SQLite database for later visualization in Power BI.",
    features: [
      "Real-time network and process monitoring using psutil",
      "AI-assisted threat classification and severity analysis",
      "Automated mitigation (process termination, isolation)",
      "Visual dashboards and analytics in Power BI",
      "Background execution via Windows Task Scheduler and .bat automation script"
    ],
    impact: "Delivered a scalable and automated system that minimizes manual monitoring, providing enterprises and users with proactive security visibility and data-driven defense insights.",
    github: "https://github.com/yourusername/cybersecwatch",
    demo: "https://demo-link.com",
    color: "from-red-500 to-orange-500",
    demoCode: `# Sample Python code from Threat Detection Module
import psutil, requests, sqlite3

def check_ip(ip):
    response = requests.get(
        f"https://api.abuseipdb.com/api/v2/check?ipAddress={ip}"
    )
    return response.status_code == 200

def monitor_processes():
    suspicious = []
    for proc in psutil.process_iter(['pid', 'name', 'connections']):
        for conn in proc.info.get('connections', []):
            if conn.raddr:
                ip = conn.raddr.ip
                if check_ip(ip):
                    suspicious.append((proc.info['name'], ip))
    return suspicious

if __name__ == "__main__":
    threats = monitor_processes()
    if threats:
        print("⚠️ Threats detected:")
        for name, ip in threats:
            print(f"Process: {name} | IP: {ip}")
    else:
        print("✅ System is secure.")`
  },
  {
    id: 2,
    name: "Krishi Saathi",
    tagline: "Smart Farming Assistant App",
    emoji: "🌱",
    duration: "Aug 2024 – Oct 2024",
    domain: "Agriculture | Smart Farming | Mobile Development",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs"
    ],
    overview: "Krishi Saathi is a farmer-centric mobile app designed to make agriculture smarter and more data-driven. Built using Flutter, it provides comprehensive crop insights, seasonal recommendations, and weather-based suggestions to enhance productivity and sustainability.",
    features: [
      "Detailed crop database with growth conditions and pest management",
      "Real-time weather and soil insights integrated via API",
      "AI-based crop recommendation system based on region and season",
      "Community section for knowledge sharing among farmers"
    ],
    impact: "Enabled farmers to make informed decisions using digital insights, improving yield efficiency and promoting sustainable farming practices.",
    github: "https://github.com/yourusername/krishi-saathi",
    demo: "https://demo-link.com",
    color: "from-green-500 to-emerald-500",
    demoCode: `// Sample Flutter code from Crop Recommendation Module
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class CropRecommendation extends StatefulWidget {
  @override
  _CropRecommendationState createState() => _CropRecommendationState();
}

class _CropRecommendationState extends State<CropRecommendation> {
  String? selectedSeason;
  String? recommendedCrop;

  Future<void> fetchRecommendation(String season) async {
    final response = await http.get(
      Uri.parse('https://api.example.com/recommend?season=$season')
    );
    
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      setState(() {
        recommendedCrop = data['crop'];
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Crop Recommendation')),
      body: Center(
        child: Column(
          children: [
            DropdownButton<String>(
              value: selectedSeason,
              items: ['Kharif', 'Rabi', 'Zaid']
                  .map((s) => DropdownMenuItem(value: s, child: Text(s)))
                  .toList(),
              onChanged: (season) {
                setState(() => selectedSeason = season);
                fetchRecommendation(season!);
              },
            ),
            if (recommendedCrop != null)
              Text('Recommended: $recommendedCrop'),
          ],
        ),
      ),
    );
  }
}`
  }
];

export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer | Cybersecurity Enthusiast",
  email: "your.email@example.com",
  phone: "+91 XXXXX XXXXX",
  location: "Avadi, Tamil Nadu, India",
  bio: "Passionate developer specializing in cybersecurity solutions and mobile app development. I build scalable systems that solve real-world problems and enhance security postures.",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  }
};

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "Dart", "Java", "C++"],
  frameworks: ["React", "Flutter", "Flask", "Node.js", "Express", "Next.js"],
  databases: ["SQLite", "MongoDB", "Firebase", "PostgreSQL", "MySQL"],
  tools: ["Git", "Docker", "VS Code", "Power BI", "Postman", "Figma"],
  cybersecurity: ["VirusTotal API", "Shodan", "AbuseIPDB", "Wireshark", "Metasploit", "Nmap"],
  cloud: ["AWS", "Google Cloud", "Vercel", "Netlify", "Heroku"]
};

export const experience = [
  {
    title: "Software Developer Intern",
    company: "Company Name",
    duration: "Month Year - Month Year",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "Node.js", "MongoDB"]
  }
  // Add more experiences here
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Your University Name",
    duration: "2021 - 2025",
    grade: "8.5 CGPA",
    location: "City, State"
  }
  // Add more education here
];