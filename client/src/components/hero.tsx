import { Button } from "@/components/ui/button";
import { FolderOpen, Mail, Phone, MapPin, Download } from "lucide-react";

export default function Hero() {
  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Hi, I'm <span className="primary-gradient bg-clip-text text-transparent">Amal Jandheer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light mb-6">
              Digital Marketing Specialist
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Results-driven marketing professional with proven expertise in digital marketing, content creation, and campaign optimization. Specialized in Google Ads, SEO, social media marketing, and conversion optimization with a track record of delivering measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => handleNavClick("#projects")}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FolderOpen className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              <Button
                onClick={() => handleNavClick("#contact")}
                variant="outline"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="secondary"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-blue-500" />
                <span>amaljandheer123@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-blue-500" />
                <span>+91 62821 02620</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 primary-gradient rounded-full flex items-center justify-center text-white text-8xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300">
                AJ
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-bounce-gentle">
                <span className="text-white text-2xl">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}