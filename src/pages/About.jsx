import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Award, Shield, Heart, Mail, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    symptoms: '',
    preferredDate: '',
  });

  const faqs = [
    {
      question: 'How accurate is NeuroAsha\'s dementia prediction?',
      answer: 'Our AI model achieves 95% accuracy in early-stage dementia detection, validated through extensive clinical trials with over 10,000 patient cases. The system combines MRI analysis, cognitive assessments, and clinical data for comprehensive evaluation.',
    },
    {
      question: 'Is my medical data secure and private?',
      answer: 'Absolutely. NeuroAsha is HIPAA compliant and uses enterprise-grade encryption to protect all patient data. Your information is never shared without explicit consent and is stored on secure, audited servers.',
    },
    {
      question: 'Who can use NeuroAsha\'s platform?',
      answer: 'Our platform is designed for patients, neurologists, geriatricians, and caregivers. Healthcare professionals can integrate our API into their existing systems, while patients can access screening tools directly.',
    },
    {
      question: 'What types of MRI scans are supported?',
      answer: 'NeuroAsha supports T1-weighted, T2-weighted, and FLAIR MRI sequences. Our AI model is trained on multiple scanner types and can process DICOM files from most major MRI manufacturers.',
    },
    {
      question: 'How long does the analysis take?',
      answer: 'MRI analysis typically takes 2-5 minutes, while cognitive assessments can be completed in 15-20 minutes. Results are available immediately upon completion of the analysis.',
    },
    {
      question: 'Can NeuroAsha replace a doctor\'s diagnosis?',
      answer: 'No, NeuroAsha is a diagnostic aid tool that supports healthcare professionals. All results should be interpreted by qualified medical professionals and used as part of comprehensive clinical assessment.',
    },
  ];



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Thank you for your appointment request. We will contact you within 24 hours.');
    setFormData({ name: '', email: '', symptoms: '', preferredDate: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 neuro-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NeuroAsha</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of neurological healthcare through artificial intelligence, 
            early detection, and personalized care solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                NeuroAsha is dedicated to transforming dementia care through cutting-edge AI technology. 
                We believe that early detection is the key to better outcomes, and our platform empowers 
                healthcare professionals and families with the tools they need for proactive care.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach combines advanced MRI analysis, cognitive screening, and 
                clinical data integration to provide accurate, actionable insights that support 
                informed decision-making in neurological healthcare.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold neuro-primary mb-2">2019</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold neuro-primary mb-2">10K+</div>
                  <div className="text-gray-600">Patients Helped</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="brain-network.jpg" 
                alt="Brain Network" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine clinical expertise with advanced AI to deliver comprehensive neurological assessments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neuro-card p-8 text-center">
              <Shield className="h-12 w-12 neuro-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Evidence-Based</h3>
              <p className="text-gray-600">
                Our algorithms are trained on validated clinical datasets and continuously 
                refined through peer-reviewed research and real-world outcomes.
              </p>
            </div>
            <div className="neuro-card p-8 text-center">
              <Users className="h-12 w-12 neuro-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Collaborative Care</h3>
              <p className="text-gray-600">
                We work closely with neurologists, geriatricians, and care teams to 
                integrate AI insights into existing clinical workflows.
              </p>
            </div>
            <div className="neuro-card p-8 text-center">
              <Heart className="h-12 w-12 neuro-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Patient-Centered</h3>
              <p className="text-gray-600">
                Every feature is designed with patient dignity, privacy, and empowerment 
                in mind, supporting informed healthcare decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about NeuroAsha's platform and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="neuro-card">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 neuro-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 neuro-primary" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Consultation</h2>
            <p className="text-xl text-gray-600">
              Connect with our team to learn more about NeuroAsha's capabilities for your practice
            </p>
          </div>

          <div className="neuro-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Consultation Date
                </label>
                <Input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your needs or current symptoms (optional)
                </label>
                <Textarea
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleInputChange}
                  placeholder="Describe any specific concerns, symptoms, or questions you have..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <div className="text-center">
                <Button type="submit" className="neuro-btn-primary px-8 py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

