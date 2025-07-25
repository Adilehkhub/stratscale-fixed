import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Crisis Recovery & Stabilization Leadership",
      duration: "3-6 months",
      role: "I become your dedicated Implementation Program Executive with crisis management authority",
      deliverables: [
        "Complete program ownership with daily oversight and emergency decision-making authority",
        "Crisis assessment and immediate stabilization plan with timeline recovery strategies",
        "Weekly executive steering committee leadership and board reporting on recovery progress",
        "Requirements refinement and quality assurance ensuring business-critical accuracy",
        "Strategic management and guidance of your change management teams",
        "Vendor relationship management with performance accountability and contract enforcement",
        "Rapid issue resolution protocols with minimal business disruption",
        "Go-live readiness certification and cutover planning"
      ],
      ideal: "Your implementation is in crisis and requires immediate executive intervention and recovery. You're experiencing significant timeline slippage or budget overruns that threaten program success. Your leadership team is overwhelmed by implementation complexity and competing priorities.",
      outcome: "Your implementation will recover from crisis with expert program leadership and return to successful trajectory. Your stakeholder confidence will be restored, timeline recovery will be achieved, and program quality will meet your enterprise standards while you focus on business continuity.",
      image: "https://images.unsplash.com/photo-1629093647548-4b86b59a4541",
      color: "from-red-500 to-orange-500",
      icon: "🚨"
    },
    {
      title: "Comprehensive Implementation Partnership",
      duration: "6-18 months",
      role: "I serve as your Fractional Implementation Program Executive with complete end-to-end accountability",
      deliverables: [
        "Full program executive accountability from initiation through post-go-live stabilization",
        "Strategic program design and architecture decisions with long-term impact consideration",
        "Complete stakeholder management including board presentations and investor communications",
        "Strategic oversight and management and guidance of your change management teams",
        "Enterprise-wide implementation coordination and execution",
        "Post-implementation optimization and continuous improvement program establishment",
        "Knowledge transfer and internal capability development for your team's ongoing success"
      ],
      ideal: "You have a large-scale, mission-critical implementation requiring dedicated executive partnership from start to finish. Your organizational transformation requires comprehensive strategic guidance beyond standard implementation. You're managing high-stakes programs where success is critical to your business strategy and growth.",
      outcome: "Your transformation will succeed with enterprise-level program leadership and strategic guidance throughout the entire journey. You'll achieve sustainable operational improvements, organizational readiness for your future growth, and complete confidence in your implementation's long-term success while maintaining full focus on your business strategy and growth initiatives.",
      image: "https://images.unsplash.com/photo-1641248867712-257e0aae767b",
      color: "from-brand-accent to-brand-main",
      icon: "🤝"
    },
    {
      title: "Implementation Readiness Assessment",
      duration: "2-3 weeks",
      role: "I serve as your strategic implementation advisor, conducting an executive-level diagnostic",
      deliverables: [
        "Comprehensive implementation risk assessment with board-ready executive summary",
        "Critical path analysis identifying potential timeline and budget impacts",
        "Requirements quality evaluation with gap identification and remediation plan",
        "Stakeholder readiness assessment and change management strategy recommendations",
        "Vendor performance evaluation and contract optimization opportunities",
        "90-day tactical action plan with prioritized interventions tailored to your situation"
      ],
      ideal: "You're in pre-implementation planning and need executive-level validation before proceeding. Your existing implementation is showing early warning signs and you need objective assessment. You're facing board or investor pressure and need independent evaluation of program viability.",
      outcome: "You'll gain complete clarity on your implementation risks and receive a definitive roadmap for success. Your board confidence will increase, potential crises will be identified before they impact your operations, and you'll have executive-level recommendations to ensure your program succeeds.",
      image: "https://images.unsplash.com/photo-1654442141400-918e67198e96",
      color: "from-green-500 to-teal-500",
      icon: "🔍"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategic Assessment",
      description: "Comprehensive evaluation of your current implementation status, risks, and organizational readiness with immediate action planning."
    },
    {
      step: "02",
      title: "Executive Ownership",
      description: "Complete program ownership with immediate stabilization, clear authority boundaries, and stakeholder communication."
    },
    {
      step: "03",
      title: "Systematic Recovery",
      description: "Proven recovery methodology with timeline optimization, requirements refinement, and team re-engagement."
    },
    {
      step: "04",
      title: "Successful Delivery",
      description: "Certified readiness validation, smooth go-live execution, and post-implementation optimization for long-term success."
    }
  ];

  const credibilityPoints = [
    {
      title: "Complete Executive Ownership",
      description: "I take full accountability for program success so you can focus on running your business while I handle the ERP transformation",
      icon: "👨‍💼"
    },
    {
      title: "Crisis Recovery Expertise",
      description: "Specialized experience in recovering troubled implementations that were months behind schedule and over budget",
      icon: "🔧"
    },
    {
      title: "Large-Scale Enterprise Experience",
      description: "Former Deloitte Implementation Program Executive with proven success in complex, multi-entity transformations",
      icon: "🏢"
    },
    {
      title: "Bulletproof Requirements",
      description: "Every specification validated and tested to prevent costly changes and delays that derail implementations",
      icon: "🎯"
    },
    {
      title: "Board-Level Communication",
      description: "Professional C-suite reporting and stakeholder management that builds confidence throughout the transformation",
      icon: "📊"
    },
    {
      title: "Multi-Entity Complexity",
      description: "Experience with complex organizations requiring unified solutions across diverse business units and operations",
      icon: "🔗"
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-brand-main via-brand-main to-brand-accent py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 animate-fade-in">
            My Implementation Program Executive Services
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Choose the level of dedicated implementation leadership that fits your situation and timeline
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-brand-accent text-white font-semibold rounded-full hover:bg-white hover:text-brand-main transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in"
            style={{animationDelay: '0.4s'}}
          >
            Schedule Strategic Discussion
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
              How I Take Implementation Ownership Off Your Plate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From crisis recovery to comprehensive partnership, I provide the dedicated implementation program executive leadership your transformation needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden cursor-pointer animate-scale-in ${
                  selectedService === index ? 'ring-2 ring-brand-accent' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
                onClick={() => setSelectedService(index)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg text-brand-main mb-1">{service.title}</h3>
                      <p className="text-brand-accent font-medium">{service.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.ideal.split('.')[0]}.</p>
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${service.color} text-center`}>
                    Click for Details
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold text-2xl text-brand-main mb-4">
                  {services[selectedService].title}
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-brand-main mb-2">My Role:</h4>
                    <p className="text-gray-700">{services[selectedService].role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-main mb-2">When This Is Right for You:</h4>
                    <p className="text-gray-700">{services[selectedService].ideal}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-main mb-2">Expected Outcome:</h4>
                    <p className="text-gray-700">{services[selectedService].outcome}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-brand-main mb-4">What I Deliver:</h4>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {services[selectedService].deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-brand-accent mr-3 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-6 px-6 py-3 bg-brand-main text-white font-semibold rounded-full hover:bg-brand-accent transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-main to-brand-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              How I Take Complete Implementation Ownership
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A proven methodology that transforms troubled implementations into successful transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-scale-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="font-semibold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
              Why Growing Enterprises Choose Me
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Former Deloitte Implementation Program Executive with extensive experience leading complex Oracle transformations for large-scale enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {credibilityPoints.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-semibold text-lg text-brand-main mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-brand-main to-brand-accent rounded-2xl p-8 text-white">
            <h3 className="font-display font-bold text-2xl mb-6 text-center">How to Choose</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-lg mb-2">Crisis Recovery</h4>
                <p className="text-gray-200">When your implementation needs immediate intervention</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Comprehensive Partnership</h4>
                <p className="text-gray-200">For full transformation leadership from inception to completion</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Readiness Assessment</h4>
                <p className="text-gray-200">For strategic clarity before major implementation decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
            Ready for Dedicated Implementation Leadership?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a confidential discussion to learn how I can take complete implementation ownership off your plate so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-brand-main text-white font-semibold rounded-full hover:bg-brand-accent transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Schedule Strategic Discussion
            </Link>
            <a
              href="mailto:hello@stratscale.co"
              className="px-10 py-4 bg-transparent border-2 border-brand-main text-brand-main font-semibold rounded-full hover:bg-brand-main hover:text-white transition-all duration-300 hover:scale-105"
            >
              Email Me Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
