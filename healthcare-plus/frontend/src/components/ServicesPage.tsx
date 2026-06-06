import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FileText, Utensils, Calendar, Brain, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "X-ray & Document Diagnosis",
      description: "Advanced AI-powered screening tool that reviews your chest X-rays and PDF documents to output primary findings, recommendations, and confidence metrics.",
      link: "/xray-diagnosis",
      cta: "Analyze Document"
    },
    {
      icon: <Utensils className="h-10 w-10 text-green-600" />,
      title: "Personalized Health Plans",
      description: "Submit details about your activity level, dietary constraints, and sleep concerns to generate a custom nutrition and rest routine suited to your physical profile.",
      link: "/health-plans",
      cta: "Generate Health Plan"
    },
    {
      icon: <Calendar className="h-10 w-10 text-purple-600" />,
      title: "Appointment Scheduling",
      description: "Easily book consultations with our team of medical practitioners, select specialized cardiologists, dermatologists, pediatricians, and general doctors.",
      link: "/appointments",
      cta: "Book Appointment"
    },
    {
      icon: <Brain className="h-10 w-10 text-pink-600" />,
      title: "Mental Health Support",
      description: "Access our supportive 24/7 empathetic conversational companion for stress management guidance, relaxation videos, and initial consultation advice.",
      link: "/mental-health",
      cta: "Open Chatbot"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Discover our integrated range of health utilities. From instant AI diagnostics to customized diet planning and mental health counseling.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="bg-slate-50 p-4 rounded-xl inline-block mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>
                <div>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold group transition"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Info Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-lg text-center md:text-left md:flex justify-between items-center">
            <div className="mb-6 md:mb-0 max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">Need a Professional Opinion?</h3>
              <p className="text-blue-100 font-light text-sm leading-relaxed">
                While our AI tools offer helpful guidance, we always recommend scheduling a consultation with one of our certified clinicians to review important diagnoses.
              </p>
            </div>
            <div>
              <Link 
                to="/appointments" 
                className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full text-base font-semibold shadow transition"
              >
                Schedule Now
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;