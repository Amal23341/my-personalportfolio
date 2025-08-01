import { useState } from "react";
import { ArrowRight, TrendingUp, Share2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "seo", label: "SEO" },
    { id: "ppc", label: "PPC" },
    { id: "social", label: "Social Media" },
    { id: "content", label: "Content Marketing" }
  ];

  const projects = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Decision Homeopathy Cancer Care",
      category: "Full-Stack Digital Marketing",
      categories: ["seo", "ppc", "content"],
      description: "Built complete website from scratch and executed comprehensive digital marketing strategy including Google Ads campaigns, SEO optimization, email marketing, and content creation to acquire first clients.",
      results: [
        "Website built from scratch with SEO optimization",
        "Successfully acquired first clients through Google Ads",
        "Implemented automated email marketing for appointments",
        "Created all blog content and written materials"
      ],
      tags: ["Web Development", "Google Ads", "SEO", "Email Marketing", "Content Creation"],
      color: "from-blue-500 to-purple-500",
      link: "https://decisionhomeopathy-cancercare.com/"
    },
    {
      id: 2,
      icon: Share2,
      title: "Coconut Republic Launch Campaign",
      category: "Social Media Launch",
      categories: ["social", "content"],
      description: "Created and executed viral Instagram launch campaign that reached over 100,000 views, significantly boosting initial brand awareness and driving substantial sales growth for the product launch.",
      results: [
        "100,000+ views on launch campaign reel",
        "Massive impact on initial brand awareness",
        "Significant increase in sales during launch",
        "Ongoing growth since campaign launch"
      ],
      tags: ["Instagram Marketing", "Content Creation", "Launch Strategy", "Viral Marketing"],
      color: "from-purple-500 to-green-500",
      link: "http://coconutrepublic.ae/"
    },
    {
      id: 3,
      icon: DollarSign,
      title: "LILO Brand Growth & Trust Building",
      category: "Multi-Channel Marketing",
      categories: ["social", "content"],
      description: "Developed comprehensive marketing strategy including newsletters, WhatsApp campaigns, Instagram growth, and app store optimization to build brand trust and educate users about product reliability.",
      results: [
        "Significant Instagram account growth",
        "Improved app store rankings",
        "Enhanced brand trust through educational content",
        "Multi-channel user engagement strategy"
      ],
      tags: ["Newsletter Marketing", "WhatsApp Marketing", "Push Notifications", "Instagram Growth", "App Store Optimization"],
      color: "from-green-500 to-blue-500",
      link: "https://www.instagram.com/lilo_india/"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Successful digital marketing campaigns that delivered exceptional results for clients across various industries.
          </p>
        </div>
        
        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="project-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <IconComponent className="text-white h-16 w-16" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="text-sm font-medium text-blue-500 bg-blue-50 hover:bg-blue-50">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      {project.categories.map((cat) => (
                        <Badge key={cat} variant="secondary" className="text-xs">
                          {cat.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 className="text-sm font-semibold text-green-600 mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index}>✓ {result}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} className="bg-blue-500 text-white hover:bg-blue-600 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors duration-200"
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="inline-flex items-center px-8 py-3 bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200">
            <span className="mr-2">+</span>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}