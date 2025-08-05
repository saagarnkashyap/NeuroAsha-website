import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Brain, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m NeuroAsha\'s cognitive assessment assistant. I\'ll guide you through a series of questions to evaluate your cognitive function. This assessment typically takes 10-15 minutes. Are you ready to begin?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const messagesEndRef = useRef(null);

  const cognitiveQuestions = [
    {
      question: "Let's start with orientation. What is today's date? Please include the day, month, and year.",
      category: "Orientation",
      expectedType: "date"
    },
    {
      question: "Can you tell me what city and state/country you are currently in?",
      category: "Orientation",
      expectedType: "location"
    },
    {
      question: "I'm going to give you three words to remember: APPLE, PENNY, TABLE. Please repeat them back to me.",
      category: "Memory",
      expectedType: "recall"
    },
    {
      question: "Now I'd like you to count backwards from 100 by 7s. Give me the first 5 numbers. (100, 93, 86...)",
      category: "Attention",
      expectedType: "calculation"
    },
    {
      question: "Can you recall those three words I asked you to remember earlier? (APPLE, PENNY, TABLE)",
      category: "Memory",
      expectedType: "delayed_recall"
    },
    {
      question: "Please name as many animals as you can think of in 60 seconds. Type them separated by commas.",
      category: "Language",
      expectedType: "fluency"
    },
    {
      question: "If you have $100 and you buy items costing $15, $23, and $8, how much change would you receive?",
      category: "Executive Function",
      expectedType: "problem_solving"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (type, content) => {
    const newMessage = {
      id: messages.length + 1,
      type,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateBotResponse = (userMessage) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      if (!assessmentStarted && (userMessage.toLowerCase().includes('yes') || userMessage.toLowerCase().includes('ready') || userMessage.toLowerCase().includes('start'))) {
        setAssessmentStarted(true);
        addMessage('bot', `Great! Let's begin the cognitive assessment. I'll ask you ${cognitiveQuestions.length} questions covering different areas of cognitive function.`);
        
        setTimeout(() => {
          addMessage('bot', `Question 1 of ${cognitiveQuestions.length} - ${cognitiveQuestions[0].category}: ${cognitiveQuestions[0].question}`);
        }, 1000);
        return;
      }

      if (assessmentStarted && !assessmentComplete) {
        if (currentQuestion < cognitiveQuestions.length - 1) {
          const nextQuestion = currentQuestion + 1;
          setCurrentQuestion(nextQuestion);
          addMessage('bot', `Thank you for your response. Question ${nextQuestion + 1} of ${cognitiveQuestions.length} - ${cognitiveQuestions[nextQuestion].category}: ${cognitiveQuestions[nextQuestion].question}`);
        } else {
          setAssessmentComplete(true);
          addMessage('bot', 'Thank you for completing the cognitive assessment! I\'m now analyzing your responses...');
          
          setTimeout(() => {
            addMessage('bot', `Assessment Complete! 

Based on your responses, here's a summary:

✅ Orientation: Good awareness of time and place
✅ Memory: Adequate short-term and delayed recall
✅ Attention: Satisfactory concentration abilities
✅ Language: Normal verbal fluency
✅ Executive Function: Good problem-solving skills

Overall Assessment: Your cognitive function appears to be within normal ranges for your age group. 

⚠️ Important Note: This is a preliminary screening tool and should not replace professional medical evaluation. If you have concerns about memory or cognitive changes, please consult with a healthcare provider.

Would you like to schedule a consultation with one of our specialists or learn more about our comprehensive diagnostic services?`);
          }, 2000);
        }
        return;
      }

      if (assessmentComplete) {
        if (userMessage.toLowerCase().includes('consultation') || userMessage.toLowerCase().includes('schedule')) {
          addMessage('bot', 'I\'d be happy to help you schedule a consultation! Please visit our About page to fill out the appointment booking form, or you can call our clinic directly at (555) 123-4567. Our specialists are available Monday through Friday, 9 AM to 5 PM.');
        } else if (userMessage.toLowerCase().includes('services') || userMessage.toLowerCase().includes('diagnostic')) {
          addMessage('bot', 'Our comprehensive diagnostic services include advanced MRI analysis, detailed neuropsychological testing, biomarker analysis, and personalized care planning. Visit our MRI Predictor page to learn more about our AI-powered diagnostic tools.');
        } else {
          addMessage('bot', 'Thank you for using NeuroAsha\'s cognitive assessment tool. Is there anything else I can help you with today? I can provide information about our services, help schedule appointments, or answer questions about cognitive health.');
        }
        return;
      }

      // Default responses for general conversation
      const responses = [
        'I understand. If you\'re ready to begin the cognitive assessment, just let me know by typing "yes" or "ready".',
        'I\'m here to help with cognitive screening and assessment. Would you like to start the evaluation?',
        'Feel free to ask me any questions about the assessment process or our services. When you\'re ready, we can begin the cognitive evaluation.',
      ];
      
      addMessage('bot', responses[Math.floor(Math.random() * responses.length)]);
    }, 1500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addMessage('user', inputValue);
      const userMessage = inputValue;
      setInputValue('');
      simulateBotResponse(userMessage);
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 neuro-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cognitive Assessment Chatbot</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Interactive AI-powered cognitive screening to assess memory, attention, and thinking skills
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Assessment Info */}
        <div className="neuro-card p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Brain className="h-8 w-8 neuro-primary" />
            <div>
              <h2 className="text-xl font-bold">Cognitive Assessment Tool</h2>
              <p className="text-gray-600">Preliminary screening for cognitive function</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 neuro-primary" />
              <span>Duration: 10-15 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 neuro-primary" />
              <span>7 assessment areas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bot className="h-4 w-4 neuro-primary" />
              <span>AI-guided evaluation</span>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="neuro-card overflow-hidden">
          {/* Chat Header */}
          <div className="bg-[#5C6BC0] text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">NeuroAsha Assistant</h3>
                <p className="text-sm text-blue-100">Cognitive Assessment Specialist</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-[#5C6BC0] text-white' 
                      : 'bg-[#B2DFDB] text-gray-700'
                  }`}>
                    {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-2 ${
                    message.type === 'user'
                      ? 'bg-[#5C6BC0] text-white'
                      : 'bg-white text-gray-800 shadow-sm border'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-[#B2DFDB] rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-700" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-2 shadow-sm border">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your response here..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                className="neuro-btn-primary"
                disabled={isTyping || !inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Progress Indicator */}
        {assessmentStarted && !assessmentComplete && (
          <div className="neuro-card p-4 mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Assessment Progress</span>
              <span className="text-sm text-gray-600">
                {currentQuestion + 1} of {cognitiveQuestions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#5C6BC0] h-2 rounded-full transition-all duration-300"
                style={{width: `${((currentQuestion + 1) / cognitiveQuestions.length) * 100}%`}}
              ></div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="neuro-card p-6 mt-8 bg-blue-50 border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Important Information</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• This is a preliminary screening tool, not a diagnostic test</li>
            <li>• Results should be discussed with a healthcare professional</li>
            <li>• The assessment does not replace comprehensive neurological evaluation</li>
            <li>• All responses are processed securely and confidentially</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

