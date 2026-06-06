import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Have questions about our AI platform, booking, or clinic policies? Reach out to us, and we'll reply as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact details */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Support Information</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Location</h4>
                    <p className="text-gray-500 text-sm mt-1">100 Health Way, New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Support</h4>
                    <p className="text-gray-500 text-sm mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Address</h4>
                    <p className="text-gray-500 text-sm mt-1">support@medirag.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-blue-950 p-8 rounded-2xl text-white shadow-md">
                <h3 className="text-lg font-bold mb-3">Operating Hours</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between border-b border-gray-800 pb-2">
                    <span>Clinical Visits</span>
                    <span className="font-semibold text-white">Mon-Fri, 9am - 5pm</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2">
                    <span>Admin Support</span>
                    <span className="font-semibold text-white">Mon-Fri, 8am - 6pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>AI Assistant</span>
                    <span className="font-semibold text-green-400">Available 24/7</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Submission Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm lg:col-span-2">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-800">Message Sent Successfully!</h3>
                  <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for contacting us. One of our support representatives will respond to your inquiry via email within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-3 px-4"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-3 px-4"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-3 px-4"
                      placeholder="Feedback, billing issue, booking error..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-3 px-4"
                      placeholder="Describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;