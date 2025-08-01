import { useEffect, useRef } from "react";
import { Search, Share2, BarChart3, Edit, Mail, DollarSign } from "lucide-react";

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      icon: Search,
      title: "SEO & SEM",
      proficiency: 95,
      description: "Advanced keyword research, on-page optimization, and Google Ads management.",
      color: "bg-blue-500"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      proficiency: 90,
      description: "Multi-platform strategy, content creation, and community management.",
      color: "bg-purple-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      proficiency: 92,
      description: "Google Analytics, Data Studio, and custom reporting dashboards.",
      color: "bg-green-500"
    },
    {
      icon: Edit,
      title: "Content Marketing",
      proficiency: 88,
      description: "Blog writing, video content, and storytelling for brand engagement.",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      proficiency: 85,
      description: "Automated campaigns, segmentation, and A/B testing for optimal performance.",
      color: "bg-purple-500"
    },
    {
      icon: DollarSign,
      title: "PPC Advertising",
      proficiency: 90,
      description: "Google Ads, Facebook Ads, and conversion optimization strategies.",
      color: "bg-green-500"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.skill-progress') as HTMLElement;
          if (progressBar) {
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = '0%';
            setTimeout(() => {
              progressBar.style.width = width + '%';
            }, 200);
          }
        }
      });
    }, observerOptions);

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      skillObserver.observe(card);
    });

    return () => {
      skillObserver.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing skills developed through years of hands-on experience and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="skill-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{skill.title}</h3>
                    <p className="text-sm text-gray-600">{skill.proficiency}% Proficiency</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`skill-progress ${skill.color} h-2 rounded-full transition-all duration-1000 ease-in-out`}
                    data-width={skill.proficiency}
                    style={{ width: '0%' }}
                  />
                </div>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}