import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const experiences = [
    {
      id: 1,
      title: "Marketing Consultant",
      company: "Self-Employed",
      duration: "Jan 2023 - Present",
      description: "Providing comprehensive digital marketing solutions to healthcare and e-commerce clients",
      responsibilities: [
        "Developed conversion-focused landing pages, increasing lead generation by 25%+",
        "Executed Google Ads campaigns achieving 4:1 ROAS",
        "Conducted SEO audits resulting in improved website rankings",
        "Built complete websites from scratch with integrated marketing strategies"
      ]
    },
    {
      id: 2,
      title: "Marketing Specialist Intern",
      company: "LILO, Trivandrum",
      duration: "Feb 2025",
      description: "Innovative e-commerce platform focusing on user trust and engagement",
      responsibilities: [
        "Planned and executed integrated marketing campaigns",
        "Conducted market research and competitor analysis",
        "Managed social media marketing and content production",
        "Gained expertise in App Store Optimization (ASO)"
      ]
    },
    {
      id: 3,
      title: "Marketing Team Member (Intern)",
      company: "SASOFT Technologies Pvt Ltd",
      duration: "Mar 2024",
      description: "Technology company focused on digital solutions and branding",
      responsibilities: [
        "Boosted branding initiatives resulting in 15% increase in brand awareness",
        "Executed digital marketing strategies including social media and push notifications",
        "Conducted market research to identify trends and opportunities",
        "Developed targeted digital content improving engagement metrics"
      ]
    }
  ];

  const certifications = [
    {
      title: "Google Ads Certification",
      issuer: "Google",
      description: "Search, Display, Video & Shopping",
      color: "bg-red-500",
      icon: "📊"
    },
    {
      title: "Facebook Ads & Marketing",
      issuer: "Meta",
      description: "Facebook & Instagram Ads",
      color: "bg-blue-600",
      icon: "📘"
    },
    {
      title: "Ultimate SEO Training 2024",
      issuer: "WordPress SEO",
      description: "GA4 & Universal Analytics",
      color: "bg-orange-500",
      icon: "🔍"
    },
    {
      title: "Digital Marketing Fundamentals",
      issuer: "Google",
      description: "MBA Marketing",
      color: "bg-purple-600",
      icon: "💻"
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth and success in digital marketing across various industries and company sizes.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((experience) => {
              const isExpanded = expandedItems.includes(experience.id);
              
              return (
                <div
                  key={experience.id}
                  className="experience-item relative bg-white rounded-xl p-6 md:p-8 shadow-lg md:ml-16 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-20 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                      <p className="text-blue-500 font-semibold mb-2">{experience.company}</p>
                      <p className="text-gray-600 text-sm">{experience.duration}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleExpanded(experience.id)}
                      className="text-blue-500 hover:text-blue-600 mt-4 md:mt-0"
                    >
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </Button>
                  </div>
                  
                  <div className="experience-details">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    {isExpanded && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {experience.responsibilities.map((resp, index) => (
                            <li key={index}>• {resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Education</h3>
          <div className="experience-item relative bg-white rounded-xl p-6 md:p-8 shadow-lg md:ml-16 transition-all duration-300 hover:shadow-xl">
            <div className="absolute -left-20 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Bachelor of Business Administration</h3>
                <p className="text-blue-500 font-semibold mb-2">GIBS Business School</p>
                <p className="text-gray-600 text-sm">2022 - 2025</p>
              </div>
            </div>
            <div className="text-gray-700">
              <strong>Specialization:</strong> Marketing and Data Analytics
              <br />
              <strong>Relevant Coursework:</strong> Digital Marketing Strategy, Data Analytics for Marketing, Brand Management
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cert-card bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${cert.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl`}>
                  {cert.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}