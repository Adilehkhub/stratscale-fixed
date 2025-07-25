import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    {
      number: "12+",
      label: "Years Experience",
      description: "Project management and ERP implementation leadership"
    },
    {
      number: "4+",
      label: "Years at Deloitte",
      description: "Leading Oracle Cloud transformations"
    },
    {
      number: "$5B+",
      label: "Company Scale",
      description: "Enterprise implementations managed"
    },
    {
      number: "80+",
      label: "Team Size",
      description: "Maximum team coordination experience"
    }
  ];

  const expertise = [
    {
      category: "Industries",
      items: ["Construction", "Engineering", "Manufacturing", "Defense Technology", "Multi-Entity Operations"]
    },
    {
      category: "Core Expertise",
      items: ["Oracle Cloud ERP", "Crisis Recovery", "Multi-Entity Implementations", "Complex Business Processes"]
    },
    {
      category: "Leadership Skills",
      items: ["C-Suite Presentations", "Crisis Management", "Vendor Accountability", "Cross-Functional Coordination"]
    }
  ];

  const credibilityPoints = [
    "Led end-to-end implementation projects from initiation to closure",
    "Directly managed project budgets and timelines",
    "Made critical project decisions during implementation phases",
    "Personally handled crisis management and issue resolution",
    "Ran client-facing meetings (steering committees, status reviews)",
    "Presented project updates to C-suite executives",
    "Negotiated scope changes and handled contract variations",
    "Managed stakeholder expectations through difficult phases"
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-brand-main via-brand-main to-brand-accent py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 animate-fade-in">
                Implementation Program Executive
              </h1>
              <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Ex-Deloitte • 12+ Years PM Experience • Large-Scale Enterprise Expertise
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-brand-accent text-white font-semibold rounded-full hover:bg-white hover:text-brand-main transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in"
                style={{animationDelay: '0.4s'}}
              >
                Schedule Discussion
              </Link>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649399046939-7b8112221151"
                  alt="Professional Consultant"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-main/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
              Most executives wish they could clone themselves during ERP implementations
            </h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8 mb-12 border-l-4 border-brand-accent">
              <p className="text-lg mb-6 font-medium text-brand-main">
                Former Deloitte Implementation Program Executive with extensive experience leading complex Oracle transformations for large-scale enterprises—including construction, engineering, manufacturing and defense technology.
              </p>
              
              <p className="mb-6">
                I've successfully recovered troubled implementations and navigated ERP transformations requiring unified solutions across multiple business entities while maintaining operational excellence.
              </p>
              
              <p className="mb-0 font-medium text-brand-main">
                I specialize in high-stakes environments where "good enough" isn't an option and every requirement has to be bulletproof.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl font-bold text-brand-accent mb-2">{achievement.number}</div>
                <div className="font-semibold text-brand-main mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-brand-main to-brand-accent rounded-2xl p-8 text-white mb-12 animate-fade-in">
            <h3 className="font-display font-bold text-2xl mb-6 text-center">Executive-Level Implementation Experience</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {credibilityPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-brand-accent-light mr-3 mt-1">✓</span>
                  <span className="text-gray-200">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {expertise.map((area, index) => (
              <div
                key={area.category}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <h3 className="font-semibold text-xl text-brand-main mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="text-gray-700 flex items-start">
                      <span className="text-brand-accent mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mb-12 animate-fade-in">
            <h3 className="font-display font-bold text-2xl text-brand-main mb-8">What I Bring to Your Implementation</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {['Strategy', 'Systems', 'Execution', 'Results'].map((keyword, index) => (
                <div key={keyword} className="bg-brand-accent text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
                  {keyword}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-gray-50 rounded-2xl p-12 animate-fade-in">
            <h3 className="font-display font-bold text-2xl text-brand-main mb-4">
              Ready for Dedicated Implementation Leadership?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can take complete implementation ownership off your plate so you can focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-main text-white font-semibold rounded-full hover:bg-brand-accent transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Schedule Strategic Discussion
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-brand-main text-brand-main font-semibold rounded-full hover:bg-brand-main hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
