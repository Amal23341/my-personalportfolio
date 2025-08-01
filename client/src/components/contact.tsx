import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amaljandheer123@gmail.com",
      href: "mailto:amaljandheer123@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 62821 02620",
      href: "tel:+916282102620"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/amaljandheer/", color: "bg-blue-600 hover:bg-blue-700" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your digital marketing to the next level? I'd love to discuss how we can achieve your business goals.
          </p>
        </div>
        
        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="max-w-2xl w-full">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">{info.label}</p>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href}
                            className="text-gray-900 font-semibold hover:text-blue-500 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-900 font-semibold mb-4">Connect With Me</p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white transition-colors duration-200`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}