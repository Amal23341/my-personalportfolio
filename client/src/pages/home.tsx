import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const backToTopBtn = document.getElementById('backToTop');
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      // Back to top button
      if (backToTopBtn) {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.remove('opacity-0', 'invisible');
          backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          backToTopBtn.classList.add('opacity-0', 'invisible');
          backToTopBtn.classList.remove('opacity-100', 'visible');
        }
      }

      // Navbar shadow effect
      if (navbar) {
        if (window.pageYOffset > 50) {
          navbar.classList.add('shadow-lg');
        } else {
          navbar.classList.remove('shadow-lg');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-card, .project-card, .experience-item').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      
      <Button
        id="backToTop"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 opacity-0 invisible z-50"
        size="icon"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
