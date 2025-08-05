import { useState } from 'react';
import { Download, FileText, Calendar, User, Brain, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from '../contexts/AuthContext';

const Report = () => {
  const [selectedReport, setSelectedReport] = useState('current');
  const { user, isAuthenticated } = useAuth();

  // Generate patient ID based on user email or use default
  const generatePatientId = (email) => {
    if (!email) return 'NS-2024-001';
    const hash = email.split('@')[0].slice(-3).toUpperCase();
    return `NS-2024-${hash}`;
  };

  // Mock patient data - now using authenticated user's information
  const patientData = {
    name: isAuthenticated && user ? user.name : 'Demo Patient',
    age: 68, // This could be calculated from user profile if available
    id: isAuthenticated && user ? generatePatientId(user.email) : 'NS-2024-001',
    assessmentDate: new Date().toISOString().split('T')[0],
    riskLevel: 'Moderate',
    confidence: 87,
  };

  // Mock cognitive assessment data over time
  const cognitiveData = [
    { month: 'Jan 2023', memory: 85, attention: 90, language: 88, executive: 82 },
    { month: 'Apr 2023', memory: 82, attention: 87, language: 85, executive: 80 },
    { month: 'Jul 2023', memory: 78, attention: 85, language: 83, executive: 77 },
    { month: 'Oct 2023', memory: 75, attention: 82, language: 80, executive: 74 },
    { month: 'Jan 2024', memory: 72, attention: 80, language: 78, executive: 71 },
  ];

  // Mock biomarker data
  const biomarkerData = [
    { name: 'Hippocampal Volume', value: 75, normal: 85 },
    { name: 'Cortical Thickness', value: 82, normal: 90 },
    { name: 'White Matter Integrity', value: 88, normal: 92 },
    { name: 'Amyloid Beta', value: 65, normal: 85 },
  ];

  // Risk distribution data
  const riskData = [
    { name: 'Low Risk', value: 25, color: '#10B981' },
    { name: 'Moderate Risk', value: 45, color: '#F59E0B' },
    { name: 'High Risk', value: 30, color: '#EF4444' },
  ];

  const handleDownloadPDF = () => {
    // Placeholder for PDF generation
    alert('PDF report generation would be implemented here. This would create a comprehensive medical report with all assessment data, charts, and recommendations.');
  };

  const handleDownloadData = () => {
    // Placeholder for data export
    alert('Data export functionality would be implemented here. This would export raw assessment data in CSV or JSON format.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 neuro-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Assessment Report</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive cognitive assessment results and risk analysis
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Patient Info Header */}
        <div className="neuro-card p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5C6BC0] to-[#B2DFDB] rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{patientData.name}</h2>
                <p className="text-gray-600">Patient ID: {patientData.id}</p>
                <p className="text-gray-600">Age: {patientData.age} years</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Assessment Date</p>
              <p className="text-lg font-semibold">{patientData.assessmentDate}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">Last updated today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Report Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedReport === 'current' ? 'default' : 'outline'}
            onClick={() => setSelectedReport('current')}
            className={selectedReport === 'current' ? 'neuro-btn-primary' : ''}
          >
            Current Assessment
          </Button>
          <Button
            variant={selectedReport === 'trends' ? 'default' : 'outline'}
            onClick={() => setSelectedReport('trends')}
            className={selectedReport === 'trends' ? 'neuro-btn-primary' : ''}
          >
            Cognitive Trends
          </Button>
          <Button
            variant={selectedReport === 'biomarkers' ? 'default' : 'outline'}
            onClick={() => setSelectedReport('biomarkers')}
            className={selectedReport === 'biomarkers' ? 'neuro-btn-primary' : ''}
          >
            Biomarkers
          </Button>
        </div>

        {/* Current Assessment View */}
        {selectedReport === 'current' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Risk Assessment */}
            <div className="lg:col-span-2 space-y-6">
              <div className="neuro-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="mr-2 h-5 w-5 neuro-primary" />
                  Risk Assessment Summary
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Dementia Risk Level</span>
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <p className="text-2xl font-bold text-yellow-700">{patientData.riskLevel}</p>
                    <p className="text-sm text-yellow-600 mt-1">Requires monitoring</p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">AI Confidence</span>
                      <Brain className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-blue-700">{patientData.confidence}%</p>
                    <p className="text-sm text-blue-600 mt-1">High confidence</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Cognitive Domain Scores</h4>
                  <div className="space-y-4">
                    {[
                      { domain: 'Memory', score: 72, color: '#EF4444' },
                      { domain: 'Attention', score: 80, color: '#F59E0B' },
                      { domain: 'Language', score: 78, color: '#F59E0B' },
                      { domain: 'Executive Function', score: 71, color: '#EF4444' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{item.domain}</span>
                          <span className="text-sm text-gray-600">{item.score}/100</span>
                        </div>
                        <Progress value={item.score} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Risk Distribution Chart */}
              <div className="neuro-card p-6">
                <h3 className="text-xl font-bold mb-4">Population Risk Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={riskData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {riskData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  {riskData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations Sidebar */}
            <div className="space-y-6">
              <div className="neuro-card p-6">
                <h3 className="text-xl font-bold mb-4">Clinical Recommendations</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm font-medium text-blue-800">Follow-up Assessment</p>
                    <p className="text-xs text-blue-600 mt-1">Schedule in 6 months</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-medium text-green-800">Lifestyle Interventions</p>
                    <p className="text-xs text-green-600 mt-1">Exercise, diet, social engagement</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-sm font-medium text-yellow-800">Specialist Consultation</p>
                    <p className="text-xs text-yellow-600 mt-1">Consider neurologist referral</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <p className="text-sm font-medium text-purple-800">Monitoring</p>
                    <p className="text-xs text-purple-600 mt-1">Track cognitive changes</p>
                  </div>
                </div>
              </div>

              <div className="neuro-card p-6">
                <h3 className="text-xl font-bold mb-4">Download Options</h3>
                <div className="space-y-3">
                  <Button onClick={handleDownloadPDF} className="w-full neuro-btn-primary">
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF Report
                  </Button>
                  <Button onClick={handleDownloadData} variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export Raw Data
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cognitive Trends View */}
        {selectedReport === 'trends' && (
          <div className="neuro-card p-6">
            <h3 className="text-xl font-bold mb-6">Cognitive Performance Trends</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cognitiveData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="memory" stroke="#EF4444" strokeWidth={2} name="Memory" />
                  <Line type="monotone" dataKey="attention" stroke="#3B82F6" strokeWidth={2} name="Attention" />
                  <Line type="monotone" dataKey="language" stroke="#10B981" strokeWidth={2} name="Language" />
                  <Line type="monotone" dataKey="executive" stroke="#8B5CF6" strokeWidth={2} name="Executive Function" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <TrendingDown className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-800">Trend Analysis</p>
                  <p className="text-sm text-yellow-700">
                    Gradual decline observed across all cognitive domains over the past 12 months. 
                    Memory and executive function showing the most significant changes. 
                    Recommend increased monitoring frequency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Biomarkers View */}
        {selectedReport === 'biomarkers' && (
          <div className="neuro-card p-6">
            <h3 className="text-xl font-bold mb-6">Neuroimaging Biomarkers</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={biomarkerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#5C6BC0" name="Patient Value" />
                  <Bar dataKey="normal" fill="#B2DFDB" name="Normal Range" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {biomarkerData.map((marker, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{marker.name}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      marker.value < marker.normal * 0.8 ? 'bg-red-100 text-red-700' :
                      marker.value < marker.normal * 0.9 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {marker.value < marker.normal * 0.8 ? 'Below Normal' :
                       marker.value < marker.normal * 0.9 ? 'Borderline' : 'Normal'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Patient: {marker.value}% | Normal: {marker.normal}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="neuro-card p-6 mt-8 bg-red-50 border border-red-200">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
            <div className="text-sm text-red-800">
              <p className="font-semibold">Medical Disclaimer:</p>
              <p>
                This report is generated by AI analysis and is intended for healthcare professionals. 
                Results should be interpreted in conjunction with clinical judgment and other diagnostic 
                information. This tool does not replace comprehensive neurological evaluation or 
                professional medical diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

