import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    challenge: '',
    contactMethod: 'email',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@stratscale.co",
      description: "Get a response within 24 hours"
    },
    {
      icon: "📅",
      title: "Schedule Call",
      value: "Book Strategic Discussion",
      description: "30-minute implementation consultation"
    },
    {
      icon: "🌐",
      title: "Website",
      value: "stratscale.co",
      description: "Learn more about our services"
    }
  ];

  const implementationChallenges = [
    "Timeline slippage with board asking tough questions",
    "Crisis recovery needed urgently - implementation is failing", 
    "Need dedicated executive leadership without hiring full-time",
    "Poor requirements quality causing system failures",
    "Low user adoption concerns threatening ROI",
    "Data migration disasters creating operational chaos",
    "Integration failures disrupting business operations",
    "Go-live readiness uncertainty causing sleepless nights",
    "Stakeholder dissatisfaction damaging leadership credibility",
    "Vendor coordination and accountability problems",
    "Multi-entity implementation complexity",
    "Pre-implementation planning and risk assessment",
    "Other (please specify in message)"
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
                Ready for Dedicated Implementation Leadership?
              </h1>
              <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Schedule a confidential discussion to learn how I can take complete ERP implementation ownership off your plate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.4s'}}>
                <a
                  href="mailto:hello@stratscale.co"
                  className="px-8 py-4 bg-brand-accent text-white font-semibold rounded-full hover:bg-white hover:text-brand-main transition-all duration-300 hover:scale-105 shadow-lg text-center"
                >
                  Email Directly
                </a>
                <a
                  href="#contact-form"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-main transition-all duration-300 hover:scale-105 text-center"
                >
                  Fill Contact Form
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <img
                src="https://images.unsplash.com/photo-1585846328761-acbf5a12beea"
                alt="Professional Contact"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-main/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
              Does This Sound Familiar?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Is your ERP implementation behind schedule with the board asking tough questions?",
              "Are you a CIO/CTO in need of dedicated executive leadership without hiring full-time?",
              "Are you worried about timeline slippage and looking for crisis recovery expertise?",
              "Do you want dedicated program ownership while you focus on running your business?"
            ].map((question, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start">
                  <span className="text-2xl text-brand-accent mr-4">🛑</span>
                  <p className="text-gray-700 font-medium">{question}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              If you nodded your head at any of these, let's talk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
              Multiple Ways to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you to begin the conversation about your implementation leadership needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-semibold text-xl text-brand-main mb-2">{method.title}</h3>
                <p className="text-brand-accent font-medium mb-2">{method.value}</p>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-main mb-6">
              Strategic Implementation Discussion
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tell me about your implementation situation so I can provide the most relevant guidance for your specific needs.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-main mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-brand-main mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="role" className="block text-sm font-semibold text-brand-main mb-2">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select your role</option>
                  <option value="CEO">CEO</option>
                  <option value="CIO">CIO</option>
                  <option value="CTO">CTO</option>
                  <option value="COO">COO</option>
                  <option value="CFO">CFO</option>
                  <option value="IT Director">IT Director</option>
                  <option value="Operations Director">Operations Director</option>
                  <option value="Program Manager">Program Manager</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Other Executive">Other Executive</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="challenge" className="block text-sm font-semibold text-brand-main mb-2">
                  Primary Implementation Challenge *
                </label>
                <select
                  id="challenge"
                  name="challenge"
                  required
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select your primary challenge</option>
                  {implementationChallenges.map((challenge) => (
                    <option key={challenge} value={challenge}>
                      {challenge}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-brand-main mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide additional details about your implementation situation, timeline, and any specific concerns..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-brand-main mb-2">
                  Preferred Contact Method *
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                      className="mr-2 text-brand-accent focus:ring-brand-accent"
                    />
                    <span className="text-gray-700">Email Response</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleChange}
                      className="mr-2 text-brand-accent focus:ring-brand-accent"
                    />
                    <span className="text-gray-700">Phone Call</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="calendar"
                      checked={formData.contactMethod === 'calendar'}
                      onChange={handleChange}
                      className="mr-2 text-brand-accent focus:ring-brand-accent"
                    />
                    <span className="text-gray-700">Scheduled Meeting</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-brand-main text-white font-semibold rounded-full hover:bg-brand-accent transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Schedule Strategic Discussion'
                )}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                I'll respond within 24 hours to discuss your implementation needs and how I can help.
              </p>
            </form>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-scale-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-main mb-4">
                Thank You for Reaching Out!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                I've received your information and will respond within 24 hours with next steps for your strategic implementation discussion.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-brand-main mb-2">What Happens Next?</h4>
                <ul className="text-left text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">1.</span>
                    I'll review your implementation challenge and current situation
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">2.</span>
                    Schedule a 30-minute strategic discussion at your convenience
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">3.</span>
                    Provide initial recommendations for your specific needs
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Need immediate assistance? Email me directly at{' '}
                <a href="mailto:hello@stratscale.co" className="text-brand-accent hover:underline">
                  hello@stratscale.co
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl text-brand-main mb-6">
                Ready to Focus on Growth Instead of Implementation?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let experienced implementation program executive leadership handle your ERP transformation while you focus on what you do best - running and growing your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-main">Complete Executive Ownership</h3>
                    <p className="text-gray-600">Full accountability for program success</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-main">Crisis Recovery Expertise</h3>
                    <p className="text-gray-600">Specialized in troubled implementation recovery</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-main">Large-Scale Experience</h3>
                    <p className="text-gray-600">Former Deloitte with complex transformation expertise</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6"
                alt="Strategic Business"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-main/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
