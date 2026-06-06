import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ShieldAlert, Eye, Lock, FileCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-gray-500 font-light text-sm">Last updated: June 2026</p>
          </div>

          {/* Privacy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <Eye className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 text-base mb-1">Transparency</h3>
              <p className="text-gray-500 text-xs leading-relaxed">We list exactly what data we process and why we need it for AI assistance.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <Lock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 text-base mb-1">Security</h3>
              <p className="text-gray-500 text-xs leading-relaxed">End-to-end encryption for diagnostic files and user chat history.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <FileCheck className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 text-base mb-1">Compliance</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Aligning with HIPAA, GDPR, and standard healthcare protocols.</p>
            </div>
          </div>

          {/* Policy Text */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm space-y-6 text-sm text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">1. Data We Collect</h2>
              <p>
                To provide you with functional diagnoses, meal planning advice, and mental health counseling support, we require specific inputs. These include: uploaded files (images or PDFs of chest X-rays), physical information (age, weight, height, activity details), and text messages entered during chatbot sessions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">2. How We Process Your Data</h2>
              <p>
                All inputs are forwarded directly to secured API endpoints (such as OpenAI or GitHub Models) for processing. Files and chats are processed instantly and are not archived permanently on our databases without your explicit consent. Temporary uploads are purged immediately upon completing the requested diagnostics.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">3. Data Sharing & Third Parties</h2>
              <p>
                MediRAG does not sell, rent, or trade your personal health details to third parties for commercial or marketing operations. Data is only shared with standard LLM inference nodes under corporate privacy guidelines.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg text-blue-800 text-xs">
              <p className="font-semibold flex items-center space-x-1.5 mb-1">
                <ShieldAlert className="h-4 w-4 text-blue-600" />
                <span>Clinical Disclaimer</span>
              </p>
              <p>
                Our AI systems provide preliminary assessments and customized wellness plans for research and general advice. They do not replace clinical advice from a certified healthcare professional.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;