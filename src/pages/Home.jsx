import { ArrowRight, Users, Brain, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: '10,000+', label: 'Patients Screened' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '500+', label: 'Healthcare Partners' },
    { number: '24/7', label: 'AI Support' },
  ];

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze MRI scans and clinical data for accurate dementia prediction.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Private',
      description: 'Your medical data is protected with enterprise-grade security and HIPAA compliance.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Validated',
      description: 'Our platform is trusted by neurologists and validated through extensive clinical studies.',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. D T Satyanarayana',
      role: 'Neurologist, NIMHANS',
      content: 'NeuroAsha would revolutionize the early detection capabilities of dementia.',
      rating: 5,
    },
    {
      name: 'Dr. Shubha Rani',
      role: 'Geriatrician, NIMHANS',
      content: 'This platform would help identify at-risk patients earlier, leading to better outcomes and care planning.',
      rating: 5,
    },
    {
      name: 'Srinivas',
      role: 'Caregiver',
      content: 'The cognitive screening could help us prepare for my mothers care needs.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#5C6BC0] to-[#B2DFDB] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                AI-Powered
                <br />
                <span className="text-[#B2DFDB]">Dementia</span>
                <br />
                Prediction
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Early detection and cognitive screening using advanced MRI analysis 
                and machine learning. Empowering patients, doctors, and caregivers 
                with actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/predict">
                  <Button className="bg-white text-[#5C6BC0] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
                    Start Screening
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#5C6BC0] px-8 py-3 text-lg font-semibold rounded-xl">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <img 
                  src="/src/assets/brain-mri.webp" 
                  alt="Brain MRI Scan" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold neuro-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How NeuroAsha Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform combines MRI analysis, clinical data, and cognitive testing 
              to provide comprehensive dementia risk assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="neuro-card p-8 text-center">
                <div className="neuro-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-gray-600">
              See what doctors and caregivers are saying about NeuroAsha
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="neuro-card p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 neuro-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Cognitive Assessment?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards early detection and better brain health management.
          </p>
          <Link to="/predict">
            <Button className="bg-white text-[#5C6BC0] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
              Begin Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

