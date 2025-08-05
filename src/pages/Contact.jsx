import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+91 9945372427', 'Mon-Fri 9AM-5PM IST'],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['saagarcourse@gmail.com'],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: ['Bangalore, Karnataka, India'],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      details: ['Monday - Friday: 9AM - 5PM', 'Emergency support: 24/7'],
    },
  ];

  const officeLocations = [
    {
      name: 'Bangalore, Karnataka, India',
      address: 'Bangalore, Karnataka, India',
      phone: '+91 9945372427',
      type: 'Main Office',
    },
    {
      name: 'Bangalore, Karnataka, India',
      address: 'Bangalore, Karnataka, India',
      phone: '+91 9945372427',
      type: 'Clinical Research',
    },
    {
      name: 'Bangalore, Karnataka, India',
      address: 'Bangalore, Karnataka, India',
      phone: '+91 9945372427',
      type: 'AI Development',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 neuro-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact NeuroAsha</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team for support, partnerships, or to learn more about our AI-powered platform
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="neuro-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('inquiryType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="clinical">Clinical Partnership</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief subject of your inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="neuro-btn-primary w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="neuro-card p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="neuro-primary mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="neuro-card p-8">
              <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
              <div className="space-y-6">
                {officeLocations.map((location, index) => (
                  <div key={index} className="border-l-4 border-[#5C6BC0] pl-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{location.name}</h3>
                      <span className="text-xs bg-[#B2DFDB] text-gray-700 px-2 py-1 rounded">
                        {location.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{location.address}</p>
                    <p className="text-gray-600 text-sm">{location.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="neuro-card p-6 bg-red-50 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Emergency Support</h3>
              <p className="text-sm text-red-700 mb-3">
                For urgent clinical emergencies, please contact the dementia 24/7 support line:
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="font-semibold text-red-800">+91 8585990990</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 neuro-card p-8">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4025741620453!2d77.5982593!3d12.940726099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144b3ba64c37%3A0x90bd42af83a790f!2sNational%20Institute%20Of%20Mental%20Health%20%26%20Neuro%20Sciences%20(NIMHANS)!5e1!3m2!1sen!2sin!4v1754409338486!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NeuroAsha Location - NIMHANS, Bangalore"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 neuro-card p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">How quickly will you respond?</h3>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 24 hours during business days. 
                Emergency support is available 24/7.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I schedule a demo?</h3>
              <p className="text-gray-600 text-sm">
                Yes! We offer personalized demos for healthcare professionals. 
                Select "Clinical Partnership" as your inquiry type.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer training?</h3>
              <p className="text-gray-600 text-sm">
                We provide comprehensive training programs for healthcare teams 
                implementing our platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What about data privacy?</h3>
              <p className="text-gray-600 text-sm">
                All communications are encrypted and HIPAA compliant. 
                We take data privacy and security very seriously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

