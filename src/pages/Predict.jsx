import { useState } from 'react';
import { Upload, FileImage, Brain, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Predict = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    symptoms: '',
    medicalHistory: '',
    cognitiveScore: '',
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setAnalysisComplete(false);
    }
  };

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

  const handlePredict = async () => {
    if (!uploadedFile) {
      alert('Please upload an MRI scan first.');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const mockResults = {
    riskLevel: 'Moderate',
    confidence: 87,
    recommendations: [
      'Schedule follow-up cognitive assessment in 6 months',
      'Consider lifestyle interventions (exercise, diet, social engagement)',
      'Monitor for changes in memory or cognitive function',
      'Discuss results with neurologist or geriatrician',
    ],
    biomarkers: {
      hippocampalVolume: 'Reduced (15% below age-matched controls)',
      corticalThickness: 'Mild thinning in temporal regions',
      whiteMatterIntegrity: 'Preserved',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 neuro-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">MRI & Clinical Data Predictor</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Upload your MRI scan and provide clinical information for AI-powered dementia risk assessment
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload and Form Section */}
          <div className="space-y-8">
            {/* MRI Upload */}
            <div className="neuro-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileImage className="mr-3 h-6 w-6 neuro-primary" />
                MRI Scan Upload
              </h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#5C6BC0] transition-colors">
                {uploadedFile ? (
                  <div className="space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <div>
                      <p className="text-lg font-semibold text-green-600">File Uploaded Successfully</p>
                      <p className="text-gray-600">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-500">
                        Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-16 w-16 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-semibold text-gray-700">Upload MRI Scan</p>
                      <p className="text-gray-500">
                        Supported formats: DICOM, NIfTI, JPEG, PNG
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        Maximum file size: 100MB
                      </p>
                    </div>
                  </div>
                )}
                
                <input
                  type="file"
                  accept=".dcm,.nii,.nii.gz,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="mri-upload"
                />
                <label
                  htmlFor="mri-upload"
                  className="inline-block mt-4 neuro-btn-primary cursor-pointer"
                >
                  {uploadedFile ? 'Change File' : 'Select File'}
                </label>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold">Privacy Notice:</p>
                    <p>All uploaded files are encrypted and processed securely. Data is not stored permanently and is deleted after analysis.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Data Form */}
            <div className="neuro-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Brain className="mr-3 h-6 w-6 neuro-primary" />
                Clinical Information
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <Input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Enter age"
                      min="18"
                      max="120"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('gender', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Symptoms
                  </label>
                  <Textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    placeholder="Describe any memory issues, confusion, behavioral changes, or other symptoms..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical History
                  </label>
                  <Textarea
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleInputChange}
                    placeholder="Include relevant medical conditions, medications, family history..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recent Cognitive Assessment Score (if available)
                  </label>
                  <Input
                    type="text"
                    name="cognitiveScore"
                    value={formData.cognitiveScore}
                    onChange={handleInputChange}
                    placeholder="e.g., MMSE: 24/30, MoCA: 22/30"
                  />
                </div>
              </div>
            </div>

            {/* Predict Button */}
            <div className="text-center">
              <Button
                onClick={handlePredict}
                disabled={!uploadedFile || isAnalyzing}
                className="neuro-btn-primary px-12 py-4 text-lg"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze & Predict'
                )}
              </Button>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-8">
            {isAnalyzing && (
              <div className="neuro-card p-8 text-center">
                <Loader2 className="h-16 w-16 neuro-primary mx-auto mb-4 animate-spin" />
                <h3 className="text-xl font-semibold mb-2">AI Analysis in Progress</h3>
                <p className="text-gray-600">
                  Processing MRI scan and clinical data... This may take a few minutes.
                </p>
                <div className="mt-6 bg-gray-200 rounded-full h-2">
                  <div className="bg-[#5C6BC0] h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
              </div>
            )}

            {analysisComplete && (
              <div className="space-y-6">
                {/* Risk Assessment */}
                <div className="neuro-card p-8">
                  <h3 className="text-2xl font-bold mb-6">Risk Assessment Results</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div>
                        <p className="text-sm text-gray-600">Dementia Risk Level</p>
                        <p className="text-2xl font-bold text-yellow-700">{mockResults.riskLevel}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Confidence</p>
                        <p className="text-2xl font-bold text-yellow-700">{mockResults.confidence}%</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Biomarkers</h4>
                      <div className="space-y-2">
                        {Object.entries(mockResults.biomarkers).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="neuro-card p-8">
                  <h3 className="text-2xl font-bold mb-6">Clinical Recommendations</h3>
                  <div className="space-y-3">
                    {mockResults.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-blue-800">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="neuro-card p-6 bg-red-50 border border-red-200">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="text-sm text-red-800">
                      <p className="font-semibold">Important Disclaimer:</p>
                      <p>
                        This analysis is for informational purposes only and should not replace 
                        professional medical diagnosis. Please consult with a qualified healthcare 
                        provider for proper evaluation and treatment recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!isAnalyzing && !analysisComplete && (
              <div className="neuro-card p-8 text-center text-gray-500">
                <Brain className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">Ready for Analysis</h3>
                <p>Upload an MRI scan and fill in the clinical information to begin AI analysis.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;

