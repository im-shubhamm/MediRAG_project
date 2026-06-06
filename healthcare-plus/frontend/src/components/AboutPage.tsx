import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, Brain, Heart, Award, Users, Smile } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About MediRAG</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Empowering healthcare accessibility through modern artificial intelligence and client-focused digital tools.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Our Mission & Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                At MediRAG, our mission is to break down barriers in healthcare accessibility. By leveraging state-of-the-art Large Language Models (LLMs) and intelligent diagnostics assistance, we provide people around the globe with automated, reliable support at any hour of the day.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where high-quality personalized wellness plans, preliminary image analyses, and mental health counseling support are instantly accessible to anyone, anywhere—supporting both patients and busy clinical practitioners.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl flex flex-col justify-between h-64">
              <div className="bg-white/15 p-3 rounded-lg w-12 text-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <blockquote className="text-lg italic font-light">
                  "Making quality preliminary healthcare support and personalized wellness plans available to everyone is the core catalyst of our research."
                </blockquote>
                <p className="mt-4 font-semibold text-blue-200 text-sm">— MediRAG AI Development Lab</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="bg-white py-16 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2">99.8%</div>
                <div className="text-gray-500 font-medium text-sm">System Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-500 font-medium text-sm">Empathetic Chatbot Support</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2">10k+</div>
                <div className="text-gray-500 font-medium text-sm">Health Plans Generated</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2">100%</div>
                <div className="text-gray-500 font-medium text-sm">Secure Data Encryption</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 tracking-tight">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Privacy & Security"
              description="Your personal health details are never stored without consent and are encrypted end-to-end to maintain complete HIPAA compliance standards."
            />
            <ValueCard 
              icon={<Heart className="h-8 w-8 text-blue-600" />}
              title="Empathy First"
              description="Our specialized mental health assistant model utilizes empathetic response guidelines, ensuring users feel heard and comforted in difficult moments."
            />
            <ValueCard 
              icon={<Award className="h-8 w-8 text-blue-600" />}
              title="AI Accuracy"
              description="We continuously evaluate and fine-tune our prompts and model endpoints against validated clinical datasets to deliver reliable assistance."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 space-y-4">
      <div className="bg-blue-50 p-3 rounded-lg inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default AboutPage;