import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const painPointQuestions = [
    "Is your ERP implementation behind schedule with the board asking tough questions?",
    "Are you a CIO/CTO in need of dedicated executive leadership without hiring full-time?", 
    "Are you worried about timeline slippage and looking for crisis recovery expertise?",
    "Do you want dedicated program ownership while you focus on running your business?"
  ];

  const keywords = ['Strategy', 'Systems', 'Execution', 'Results'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % painPointQuestions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-main via-brand-main to-brand-light">
        <AnimatedBackground />
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8 animate-fade-in">
                <p className="text-brand-accent font-semibold text-lg mb-2">Implementation Program Executive</p>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                  Most executives wish they could 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white"> clone themselves</span> during ERP implementations
                </h1>
              </div>

              <div className="mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Implementation Program Executive Services
                </h2>
                <p className="text-xl text-gray-200 mb-6">
                  Dedicated ERP Leadership for Growing Enterprises
                </p>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-lg font-semibold text-brand-accent mb-2">Dedicated ERP Leadership So You Focus On Growth</p>
                </div>
              </div>

              <div className="mb-10 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {keywords.map((keyword, index) => (
                    <span
                      key={keyword}
                      className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 animate-scale-in"
                      style={{animationDelay: `${0.6 + index * 0.1}s`}}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '1s'}}>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-brand-accent text-white font-semibold rounded-full hover:bg-white hover:text-brand-main transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  Schedule Strategic Discussion
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-main transition-all duration-300 hover:scale-105 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22"
                  alt="Executive Leadership"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-main/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4">
                    <p className="text-brand-main font-semibold text-sm">
                      "Taking complete implementation ownership off your plate"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
              Does This Sound Familiar?
            </h2>
            <div className="h-20 flex items-center justify-center">
              <p className="text-xl text-gray-700 max-w-4xl transition-all duration-500 animate-fade-in">
                🛑 {painPointQuestions[currentQuestion]}
              </p>
            </div>
            <p className="text-lg text-gray-600 mt-4">
              If you nodded your head at any of these, let's talk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Timeline Slippage",
                description: "Board pressure from delayed implementations causing executive stress",
                icon: "⏱️"
              },
              {
                title: "Requirements Quality Issues",
                description: "Poor specifications leading to system failures and costly rework",
                icon: "📋"
              },
              {
                title: "User Adoption Challenges",
                description: "ROI threats from team resistance and low system utilization",
                icon: "👥"
              },
              {
                title: "Data Migration Disasters",
                description: "Operational chaos from failed data transfers and corruption",
                icon: "💾"
              },
              {
                title: "Technical Integration Failures",
                description: "Business disruption from systems that won't connect properly",
                icon: "🔗"
              },
              {
                title: "Go-Live Readiness Uncertainty",
                description: "Sleepless nights from unknown implementation status and risks",
                icon: "🚀"
              }
            ].map((pain, index) => (
              <div
                key={pain.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{pain.icon}</div>
                <h3 className="font-semibold text-lg text-brand-main mb-2">{pain.title}</h3>
                <p className="text-gray-600">{pain.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-brand-main to-brand-accent rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-2xl mb-4">The Implementation Reality</h3>
              <p className="text-lg text-gray-200 mb-4">
                55-60% of ERP projects experience budget overruns or timeline delays - not because of technology, but because leadership teams are stretched too thin to own the complexity these transformations demand.
              </p>
              <p className="text-brand-accent-light font-semibold">
                I provide the focused leadership these programs require.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-brand-main text-white font-semibold rounded-full hover:bg-brand-accent transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Dedicated Implementation Leadership
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 bg-gradient-to-br from-brand-main to-brand-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              How I Take Implementation Ownership Off Your Plate
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose the level of implementation program executive support that fits your situation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Crisis Recovery & Stabilization Leadership",
                duration: "3-6 months",
                ideal: "When implementation is in crisis and requires immediate executive intervention",
                description: "Complete program ownership with crisis management authority",
                image: "https://images.unsplash.com/photo-1629093647548-4b86b59a4541"
              },
              {
                title: "Comprehensive Implementation Partnership", 
                duration: "6-18 months",
                ideal: "Large-scale, mission-critical transformations requiring dedicated executive partnership",
                description: "Full program executive accountability from start to finish",
                image: "https://images.unsplash.com/photo-1641248867712-257e0aae767b"
              },
              {
                title: "Implementation Readiness Assessment",
                duration: "2-3 weeks", 
                ideal: "Executive-level diagnostic when you need strategic clarity before major decisions",
                description: "Comprehensive risk assessment with board-ready recommendations",
                image: "https://images.unsplash.com/photo-1654442141400-918e67198e96"
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />
                <h3 className="font-semibold text-xl text-white mb-2">{service.title}</h3>
                <p className="text-brand-accent-light font-medium mb-2">{service.duration}</p>
                <p className="text-gray-200 mb-4 text-sm">{service.ideal}</p>
                <p className="text-gray-300 mb-6 text-sm">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-block text-brand-accent-light hover:text-white font-semibold hover:underline transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-10 py-4 bg-white text-brand-main font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
              Why Growing Enterprises Choose Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Former Deloitte Implementation Program Executive with extensive experience leading complex Oracle transformations for large-scale enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "12+",
                label: "Years Experience",
                description: "Project management and ERP implementation leadership"
              },
              {
                number: "Ex-Deloitte",
                label: "Background",
                description: "Leading Oracle Cloud transformations for enterprise clients"
              },
              {
                number: "80+",
                label: "Max Team Size",
                description: "Cross-functional team coordination experience"
              },
              {
                number: "$5B+",
                label: "Company Scale",
                description: "Large-scale enterprise implementation experience"
              }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl font-bold text-brand-accent mb-2">{stat.number}</div>
                <div className="font-semibold text-brand-main mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-block px-8 py-4 bg-brand-main text-white font-semibold rounded-full hover:bg-brand-accent transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn About My Background
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
