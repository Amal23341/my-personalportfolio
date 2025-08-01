import { TrendingUp, Lightbulb, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: TrendingUp,
      title: "Data-Driven",
      description: "Every decision backed by comprehensive analytics and performance metrics to ensure optimal ROI.",
      color: "bg-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Innovative campaigns that cut through the noise and create meaningful connections with audiences.",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Committed to delivering measurable results that directly impact your business bottom line.",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about driving business growth through strategic digital marketing and data-driven insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}